"use client";

import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { heroDossier, heroItalic, heroTicker } from "@/data/site";
import { CursorMaskReveal } from "./cursor-mask-reveal";
import { WhatsAppCta } from "./whatsapp-cta";

const tickerItems = [...heroTicker];

export function HeroExperience() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, 60]);
  const imageScale = useTransform(scrollY, [0, 600], [1.03, 1.12]);
  const panelY = useTransform(scrollY, [0, 600], [0, -22]);

  return (
    <section className="hero" id="office">
      <motion.div
        className="hero-visual"
        data-cursor="Explore"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div className="hero-image-wrap" style={{ y: imageY, scale: imageScale }}>
          <CursorMaskReveal
            src="/bengaluru-luxury-residence.png"
            alt="Luxury Bengaluru residence terrace at dusk"
          />
        </motion.div>
        <motion.div
          className="dossier-panel"
          style={{ y: panelY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <div className="dossier-head">
            <span>Confidential Dossier</span>
            <strong>BLR / PRIME / 01</strong>
          </div>
          <div className="dossier-list">
            {heroDossier.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="hero-badge">By appointment only</div>
      </motion.div>

      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Private Bengaluru Property Office
          </motion.p>
          <motion.h1 variants={fadeUp}>
            Your Bengaluru property office &mdash; where wisdom meets every
            decision, and your legacy finds its rightful address.
          </motion.h1>
          <motion.p className="hero-lede hero-italic" variants={fadeUp}>
            {heroItalic}
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <span data-cursor="WhatsApp">
              <WhatsAppCta label="Request a Private Briefing" />
            </span>
            <a className="text-link" href="#process" data-cursor="Process">
              See the advisory process
            </a>
          </motion.div>
          <motion.div className="hero-ticker" variants={fadeUp}>
            <motion.div
              className="ticker-track"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
            >
              {[...tickerItems, ...tickerItems].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};
