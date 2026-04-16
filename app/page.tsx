import About from "./components/About";
import BookingWidget from "./components/bookingWidget/BookingWidget";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Feadbacks from "./components/feedbacks/Feedbacks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Indications from "./components/Indications";
import Location from "./components/Location";
import PageLoader from "./components/PageLoader";
import Parking from "./components/Parking";
import HotelRules from "./components/regulations/Regulations";
import Rooms from "./components/Rooms";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <SEO />

      <PageLoader />
      <div className="min-h-screen">
        <Header />
        <main id="main-content">
          <Hero />
          <BookingWidget />
          <About />
          <Features />
          <Rooms />
          <HotelRules />
          {/* <Breakfast /> */}
          <Location />
          <Feadbacks />
          <Parking />
          <Indications />
          {/* <FinalCTA /> */}
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </>
  );
}
