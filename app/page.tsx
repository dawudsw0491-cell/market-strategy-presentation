import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Hero from "@/components/sections/hero";
import WhyThisStrategy from "@/components/sections/why-this-strategy";
import StrategyApproach from "@/components/sections/strategy-approach";
import StrategyPillars from "@/components/sections/strategy-pillars";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <WhyThisStrategy />

        <StrategyApproach />

        <StrategyPillars />
      </main>

      <Footer />
    </>
  );
}