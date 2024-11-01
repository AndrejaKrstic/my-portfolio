"use client";

import Container from "@/components/Container";
import ProcessStepSection from "@/components/ProcessStepSection";
import WhatWeOffer from "@/components/WhatWeOffer";
import HomePageHero from "./HomePageHero";
import CheckOutPricing from "@/components/CheckOutPricing";

export default function HomePage() {
  return (
    <Container>
      <HomePageHero />
      <WhatWeOffer />
      <ProcessStepSection />
      <CheckOutPricing />
    </Container>
  );
}
