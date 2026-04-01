import About from "./components/About";
import Breakfast from "./components/breakfast";
import Contact from "./components/Contact";
import Features from "./components/Features";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Location from "./components/Location";
import PageLoader from "./components/PageLoader";
import Rooms from "./components/Rooms";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";
import SkipToContent from "./components/SkipToContent";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <SEO />
      <SkipToContent />
      <PageLoader />
      <div className="min-h-screen">
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Features />
          <Rooms />
          <Breakfast />
          <Location />
          <Testimonials />
          <FinalCTA />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </>
  );
}
