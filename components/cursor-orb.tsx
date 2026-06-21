"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type CursorState = {
  active: boolean;
  label: string;
};

export function CursorOrb() {
  const rawX = useMotionValue(-120);
  const rawY = useMotionValue(-120);
  const x = useSpring(rawX, { stiffness: 420, damping: 34 });
  const y = useSpring(rawY, { stiffness: 420, damping: 34 });
  const [visible, setVisible] = useState(false);
  const [cursor, setCursor] = useState<CursorState>({ active: false, label: "Explore" });

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    if (!hero) return;

    const move = (event: MouseEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
    };
    const show = () => setVisible(true);
    const hide = () => {
      setVisible(false);
      setCursor((current) => ({ ...current, active: false }));
    };
    const enter = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      setCursor({ active: true, label: target.dataset.cursor || "View" });
    };
    const leave = () => setCursor((current) => ({ ...current, active: false }));
    const targets = Array.from(hero.querySelectorAll<HTMLElement>("[data-cursor]"));

    hero.addEventListener("mousemove", move);
    hero.addEventListener("mouseenter", show);
    hero.addEventListener("mouseleave", hide);
    targets.forEach((element) => {
      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);
    });

    return () => {
      hero.removeEventListener("mousemove", move);
      hero.removeEventListener("mouseenter", show);
      hero.removeEventListener("mouseleave", hide);
      targets.forEach((element) => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      });
    };
  }, [rawX, rawY]);

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-orb"
      style={{ x, y }}
      animate={{
        scale: cursor.active ? 1.25 : 0.6,
        opacity: visible ? (cursor.active ? 1 : 0.62) : 0
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.span animate={{ opacity: cursor.active ? 1 : 0 }}>{cursor.label}</motion.span>
    </motion.div>
  );
}
