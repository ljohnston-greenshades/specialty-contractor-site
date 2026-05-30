import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Pain } from "@/components/Pain";
import { Capabilities } from "@/components/Capabilities";
import { Trades } from "@/components/Trades";
import { CrewsInAction } from "@/components/CrewsInAction";
import { WhyTradePay } from "@/components/WhyTradePay";
import { Testimonial } from "@/components/Testimonial";
import { Integrations } from "@/components/Integrations";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <Pain />
      <Capabilities />
      <Trades />
      <CrewsInAction />
      <WhyTradePay />
      <Testimonial />
      <Integrations />
      <CTA />
      <Footer />
    </>
  );
}
