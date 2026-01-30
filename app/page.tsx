import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AppScreen from "@/components/sections/AppScreen";
import Features from "@/components/sections/Features";
import GetStarted from "@/components/sections/GetStarted";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="min-h-[calc(100vh-64px-52px)] w-full lg:max-w-5xl mx-auto px-4">
        <div className="container" id="top">
          <Hero />
          <AppScreen />
        </div>
        <div className="container" id="features">
          <Features />
        </div>
        <div className="container" id="pricing">
          <Pricing />
        </div>
        <div className="container" id="get-started">
          <GetStarted />
        </div>
      </main>

      <Footer />
    </div>
  );
}
