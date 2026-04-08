import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import BusinessImpact from "./components/BusinessImpact";
import GrowthFeatures from "./components/GrowthFeatures";
import EcosystemFeatures from "./components/EcosystemFeatures";
import CoreFeatures from "./components/CoreFeatures";
import ForWho from "./components/ForWho";
import HowItWorks from "./components/HowItWorks";
import MembershipTiers from "./components/MembershipTiers";
import FAQ from "./components/FAQ";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function ProMetalPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <BusinessImpact />
      <GrowthFeatures />
      <EcosystemFeatures />
      <CoreFeatures />
      <ForWho />
      <HowItWorks />
      <MembershipTiers />
      <FAQ />
      <DownloadCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
