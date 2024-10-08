import React from "react";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <NavBar />
      <Services />

      <Blogs />

      <Footer />
      <Analytics/>
    </main>
  );
};

export default App;
