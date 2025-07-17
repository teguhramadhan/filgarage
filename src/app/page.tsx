import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./components/homepage/AboutUs";
import Hero from "./components/homepage/Hero";
import Tagline from "./components/homepage/Tagline";

export default function Home() {
  return (
    <main className="font-inter">
      <Navbar />
      <Hero />
      <AboutUs />
      <Tagline />
      <Footer />
    </main>
  );
}
