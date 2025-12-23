"use client";

import HeroSection from "./HeroSection";
import LoveStory from "./LoveStory";
import WeddingInfo from "./WeddingInfo";
import EventDetails from "./EventDetails";
import PhotoGallery from "./PhotoGallery";
import RSVPForm from "./RSVPForm";
import GiftSection from "./GiftSection";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

export default function Home() {
  return (
    <main className="bg-white w-screen">
      <MusicPlayer />
      <HeroSection />
      <EventDetails />
      <WeddingInfo />
      <LoveStory />
      <PhotoGallery />
      <RSVPForm />
      <GiftSection />
      <Footer />
    </main>
  );
}
