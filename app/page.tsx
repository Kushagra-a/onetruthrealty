import {
  ClosingSection,
  CouncilSection,
  FloatingWhatsapp,
  MarketSection,
  ProcessSection,
  ServicesSection
} from "@/components/content-sections";
import { CursorOrb } from "@/components/cursor-orb";
import { Hero } from "@/components/hero";
import { MarketChart } from "@/components/market-chart";
import { SiteHeader } from "@/components/site-header";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <CursorOrb />
      <main>
        <Hero />
        <ServicesSection />
        <CouncilSection />
        <ProcessSection />
        <MarketSection />
        <MarketChart />
        <ClosingSection />
      </main>
      <FloatingWhatsapp />
    </>
  );
}
