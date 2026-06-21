"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, type PointerEvent } from "react";
import { processSteps } from "@/data/site";

export function ProcessSlider() {
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const split = useMotionValue(50);
  const leftWidth = useTransform(split, (value) => `${value}%`);
  const rightWidth = useTransform(split, (value) => `${100 - value}%`);
  const handleLeft = useTransform(split, (value) => `${value}%`);

  function updateSplit(event: PointerEvent<HTMLDivElement>) {
    if (!dragging || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const next = ((event.clientX - rect.left) / rect.width) * 100;
    split.set(Math.max(30, Math.min(70, next)));
  }

  return (
    <div
      className="process-slider"
      onPointerMove={updateSplit}
      onPointerUp={() => setDragging(false)}
      onPointerLeave={() => setDragging(false)}
      ref={ref}
    >
      <motion.div className="process-pane process-pane-left" style={{ width: leftWidth }}>
        <div className="pane-inner">
          <span>Advisory rhythm</span>
          {processSteps.slice(0, 2).map((step, index) => (
            <ProcessItem step={step} index={index} key={step.title} />
          ))}
        </div>
      </motion.div>
      <motion.div className="process-pane process-pane-right" style={{ width: rightWidth }}>
        <div className="pane-inner">
          <span>Closure discipline</span>
          {processSteps.slice(2).map((step, index) => (
            <ProcessItem step={step} index={index + 2} key={step.title} />
          ))}
        </div>
      </motion.div>
      <motion.button
        type="button"
        className="slider-handle"
        aria-label="Drag to compare advisory stages"
        style={{ left: handleLeft }}
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          setDragging(true);
        }}
      >
        <span className="handle-grip">⟷</span>
      </motion.button>
    </div>
  );
}

type ProcessItemProps = {
  step: (typeof processSteps)[number];
  index: number;
};

function ProcessItem({ step, index }: ProcessItemProps) {
  return (
    <div className="slider-step">
      <strong>0{index + 1}</strong>
      <div>
        <h4>{step.title}</h4>
        <p className="slider-rhythm">{step.rhythm}</p>
        <p>{step.copy}</p>
      </div>
    </div>
  );
}
