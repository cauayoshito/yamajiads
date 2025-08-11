import Header from "../../components/header";
import Hero from "../../components/sections/hero";
import Testimonials from "../../components/sections/testimonials";
import Benefits from "../../components/sections/benefits";
import Highlight from "../../components/sections/highlight";
import FeatureApp from "../../components/sections/feature-app";
import Gallery from "../../components/sections/gallery";
import Team from "../../components/sections/team";
import Offers from "../../components/sections/offers";
import CtaFinal from "../../components/sections/cta-final";
import FAQ from "../../components/sections/faq";
import Footer from "../../components/sections/footer";

/**
 * Main page for the Yamaji Studio portfolio. Sections are composed in order
 * according to the provided design. The header is sticky and appears at
 * the very top of the page.
 */
export default function Page() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Benefits />
        <Highlight />
        <FeatureApp />
        <Gallery />
        <Team />
        <Testimonials />
        <Offers />
        <CtaFinal />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
