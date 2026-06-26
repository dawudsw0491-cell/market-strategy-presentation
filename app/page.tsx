import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Hero from "@/components/sections/hero";
import ExecutiveSummary from "@/components/sections/executive-summary";
import WhyThisStrategy from "@/components/sections/why-this-strategy";
import StrategyApproach from "@/components/sections/strategy-approach";
import StrategyPillars from "@/components/sections/strategy-pillars";

import AreaPriority from "@/components/sections/area-priority";
import MarketPriorityMatrix from "@/components/sections/market-priority-matrix";
import DistributionFlow from "@/components/sections/distribution-flow";
import ChannelSegmentation from "@/components/sections/channel-segmentation";
import ProductPotential from "@/components/sections/product-potential";
import InstitutionPriority from "@/components/sections/institution-priority";
import SuccessIndicators from "@/components/sections/success-indicators";

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

        <AreaPriority />

        <MarketPriorityMatrix />

        <DistributionFlow />

        <ChannelSegmentation />

        <ProductPotential />

        <InstitutionPriority />

        <SuccessIndicators />
      </main>

      <Footer />
    </>
  );
}