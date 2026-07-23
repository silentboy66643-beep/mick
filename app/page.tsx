import IntroAnimation from '@/components/IntroAnimation';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Team from '@/components/Team';
import Reviews from '@/components/Reviews';
import BeforeAfter from '@/components/BeforeAfter';
import Gallery from '@/components/Gallery';
import Booking from '@/components/Booking';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans">
      <IntroAnimation />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Team />
      <Reviews />
      <BeforeAfter />
      <Gallery />
      <Booking />
      <Location />
      <Footer />
    </main>
  );
}
