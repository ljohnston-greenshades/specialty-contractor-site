import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Pain } from "@/components/Pain";
import { Capabilities } from "@/components/Capabilities";
import { Trades } from "@/components/Trades";
import { WhyFlux } from "@/components/WhyFlux";
import { Testimonial } from "@/components/Testimonial";
import { Dynamics } from "@/components/Dynamics";
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
      <WhyFlux />
      <Testimonial />
      <Dynamics />
      <CTA />
      <Footer />
    </>
  );
}
