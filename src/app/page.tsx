import AboutUs from "./components/homepage/AboutUs";
import Hero from "./components/homepage/Hero";
import Tagline from "./components/homepage/Tagline";
import PromoKemerdekaan from "./components/PromoModal/PromoKemerdekaan";

export default function Home() {
  return (
    <main className="font-inter">
      <PromoKemerdekaan />
      <Hero />
      <AboutUs />
      <Tagline />
    </main>
  );
}
