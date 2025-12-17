"use client";

import HeroSection from "./components/HeroSection";
import LoveStory from "./components/LoveStory";
import WeddingInfo from "./components/WeddingInfo";
import EventDetails from "./components/EventDetails";
import PhotoGallery from "./components/PhotoGallery";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <HeroSection />
      <WeddingInfo />
      <EventDetails />
      <LoveStory />
      <PhotoGallery />
      <RSVPForm />

      <Footer />
    </main>
  );
}
