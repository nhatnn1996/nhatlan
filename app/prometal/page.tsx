import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import BusinessImpact from "./components/BusinessImpact";
import DataIntelligence from "./components/DataIntelligence";
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
      <HowItWorks />
      <CoreFeatures />
      <MembershipTiers />
      <EcosystemFeatures />
      <DataIntelligence />
      <BusinessImpact />
      <ForWho />
      <FAQ />
      <DownloadCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
