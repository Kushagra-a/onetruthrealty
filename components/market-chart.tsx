"use client";

import { useState } from "react";
import { marketTrend } from "@/data/site";
import { MotionReveal } from "./motion-reveal";

const W = 1000;
const H = 460;
const PAD = { left: 56, right: 30, top: 30, bottom: 64 };
const Y_MAX = 18;
const Y_TICKS = [0, 4, 8, 12, 16];
const PALETTE = ["#a45334", "#9a7b5f", "#b89270", "#7c5c46", "#c06b3f"];

function colorFor(index: number, active: boolean) {
  return active ? "#74341f" : PALETTE[index % PALETTE.length];
}

function xAt(index: number, count: number) {
  const span = W - PAD.left - PAD.right;
  return PAD.left + (count === 1 ? 0 : (index / (count - 1)) * span);
}

function yAt(value: number) {
  const span = H - PAD.top - PAD.bottom;
  return PAD.top + span - (value / Y_MAX) * span;
}

export function MarketChart() {
  const { points, series } = marketTrend;
  const count = points.length;
  const initial = series.find((line) => line.highlight)?.name ?? series[0].name;
  const [activeCity, setActiveCity] = useState(initial);

  return (
    <section id="trend" className="section-shell chart-section">
      <MotionReveal className="section-heading">
        <p className="eyebrow">The Data</p>
        <h2>Two decades of appreciation, read corridor by corridor.</h2>
        <p className="section-note">
          Annual residential price appreciation across India&rsquo;s prime metros.
          Select a city to trace its path into 2030.
        </p>
      </MotionReveal>

      <MotionReveal className="chart-card">
        <ul className="chart-legend">
          {series.map((line, index) => {
            const active = line.name === activeCity;
            return (
              <li key={line.name}>
                <button
                  type="button"
                  className={`legend-btn${active ? " is-active" : ""}`}
                  aria-pressed={active}
                  onClick={() => setActiveCity(line.name)}
                >
                  <span className="legend-swatch" style={{ background: colorFor(index, active) }} />
                  <span>{line.name}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <svg
          className="chart-svg"
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={`Line chart of annual property appreciation by Indian metro, highlighting ${activeCity}`}
        >
          {Y_TICKS.map((tick) => (
            <g key={tick}>
              <line className="chart-grid" x1={PAD.left} x2={W - PAD.right} y1={yAt(tick)} y2={yAt(tick)} />
              <text className="chart-axis" x={PAD.left - 14} y={yAt(tick) + 7} textAnchor="end">
                {tick}%
              </text>
            </g>
          ))}

          {points.map((point, index) => (
            <text
              key={point.year}
              className="chart-axis"
              x={xAt(index, count)}
              y={H - PAD.bottom + 32}
              textAnchor="middle"
            >
              {point.year}
            </text>
          ))}

          {series.map((line, lineIndex) => {
            const active = line.name === activeCity;
            const path = line.values
              .map((value, index) => `${index === 0 ? "M" : "L"} ${xAt(index, count).toFixed(1)} ${yAt(value).toFixed(1)}`)
              .join(" ");
            return (
              <path
                key={line.name}
                d={path}
                fill="none"
                stroke={colorFor(lineIndex, active)}
                strokeWidth={active ? 3.6 : 1.6}
                strokeOpacity={active ? 1 : 0.32}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            );
          })}

          {series
            .filter((line) => line.name === activeCity)
            .flatMap((line) =>
              line.values.map((value, index) => (
                <g key={`marker-${index}`}>
                  <circle cx={xAt(index, count)} cy={yAt(value)} r={5.5} fill="#74341f" stroke="#fbf4e8" strokeWidth={2} />
                  <text className="chart-value" x={xAt(index, count)} y={yAt(value) - 16} textAnchor="middle">
                    {value}%
                  </text>
                </g>
              ))
            )}
        </svg>
      </MotionReveal>
    </section>
  );
}
