import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Hero from "@/components/sections/hero";
import ExecutiveSummary from "@/components/sections/executive-summary";
import WhyThisStrategy from "@/components/sections/why-this-strategy";
import StrategyApproach from "@/components/sections/strategy-approach";
import StrategyPillars from "@/components/sections/strategy-pillars";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <ExecutiveSummary />

        <WhyThisStrategy />

        <StrategyApproach />

        <StrategyPillars />
      </main>

      <Footer />
    </>
  );
}