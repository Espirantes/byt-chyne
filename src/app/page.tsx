import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ImageCarousel from "@/components/ImageCarousel";
import Parameters from "@/components/Parameters";
import Description from "@/components/Description";
import FloorPlan from "@/components/FloorPlan";
import MonthlyCosts from "@/components/MonthlyCosts";
import LocationMap from "@/components/LocationMap";
import Contact from "@/components/Contact";
import ContactSidebar from "@/components/ContactSidebar";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImageCarousel />

      <div className="mx-auto max-w-7xl px-6 py-8 lg:flex lg:gap-8">
        {/* Main content */}
        <div className="min-w-0 flex-1">
          <Parameters />
          <Description />
          <FloorPlan />
          <MonthlyCosts />
        </div>

        {/* Sticky sidebar - desktop only */}
        <div className="hidden w-80 shrink-0 lg:block">
          <ContactSidebar />
        </div>
      </div>

      <LocationMap />
      <Contact />
      <Footer />
      <FloatingCTA />
    </>
  );
}
