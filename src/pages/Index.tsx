import Header from '@/components/jeep/Header';
import Hero from '@/components/jeep/Hero';
import Timing from '@/components/jeep/Timing';
import Locations from '@/components/jeep/Locations';
import Conditions from '@/components/jeep/Conditions';
import Cars from '@/components/jeep/Cars';
import OtherTours from '@/components/jeep/OtherTours';
import WhyUs from '@/components/jeep/WhyUs';
import BookingForm from '@/components/jeep/BookingForm';
import Footer from '@/components/jeep/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0B1A33]">
      <Header />
      <Hero />
      <Timing />
      <Locations />
      <Conditions />
      <Cars />
      <OtherTours />
      <WhyUs />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
