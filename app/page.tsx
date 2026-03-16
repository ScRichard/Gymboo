import Hero from "@/components/pages/Hero";
import HowItWorks from "@/components/pages/HowItWorks";
import Equipment from '@/components/pages/Equipment';
import Photos from '@/components/pages/Photos';
import Pricing from '@/components/pages/Pricing';
import FAQ from '@/components/pages/FAQ';
import Contact from '@/components/pages/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Equipment />
      <Photos />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
