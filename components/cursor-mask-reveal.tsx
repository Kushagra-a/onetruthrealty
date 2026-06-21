"use client";

import Image from "next/image";
import type { PointerEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

type CursorMaskRevealProps = {
  src: string;
  alt: string;
};

export function CursorMaskReveal({ src, alt }: CursorMaskRevealProps) {
  const rawX = useMotionValue(320);
  const rawY = useMotionValue(260);
  const rawSize = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 180, damping: 28 });
  const y = useSpring(rawY, { stiffness: 180, damping: 28 });
  const size = useSpring(rawSize, { stiffness: 150, damping: 24 });
  const mask = useMotionTemplate`circle(${size}px at ${x}px ${y}px)`;

  function moveMask(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set(event.clientX - rect.left);
    rawY.set(event.clientY - rect.top);
    rawSize.set(Math.min(rect.width, rect.height) * 0.17);
  }

  return (
    <motion.div
      className="cursor-mask-reveal"
      data-cursor="Reveal"
      onPointerMove={moveMask}
      onPointerLeave={() => rawSize.set(0)}
    >
      <Image className="mask-image mask-image-muted" src={src} alt={alt} fill priority sizes="(max-width: 900px) 100vw, 58vw" />
      <motion.div className="mask-image-reveal" style={{ clipPath: mask }}>
        <Image className="mask-image" src={src} alt="" fill priority sizes="(max-width: 900px) 100vw, 58vw" />
      </motion.div>
      <motion.div className="mask-ring" style={{ x, y, scale: size }} />
    </motion.div>
  );
}
