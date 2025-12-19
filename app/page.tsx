"use client";

import HeroSection from "./components/HeroSection";
import LoveStory from "./components/LoveStory";
import WeddingInfo from "./components/WeddingInfo";
import EventDetails from "./components/EventDetails";
import PhotoGallery from "./components/PhotoGallery";
import RSVPForm from "./components/RSVPForm";
import GiftSection from "./components/GiftSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white w-screen">
      <HeroSection />
      <WeddingInfo />
      <EventDetails />
      <LoveStory />
      <PhotoGallery />
      <RSVPForm />
      <GiftSection />
      <Footer />
    </main>
  );
}
