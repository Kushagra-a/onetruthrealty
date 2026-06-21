"use client";

import { useState } from "react";
import { brand, navItems } from "@/data/site";
import { WhatsAppCta } from "./whatsapp-cta";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" data-open={open}>
      <a className="brand-mark" href="#" aria-label={`${brand.name} home`}>
        <span>P</span>
        <strong>{brand.name}</strong>
        <em>Private Office</em>
      </a>
      <nav className="nav-desktop" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <WhatsAppCta label="Private Briefing" variant="primary" />
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {open && (
        <nav className="nav-mobile" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <WhatsAppCta label="Request a Private Briefing" />
        </nav>
      )}
    </header>
  );
}
