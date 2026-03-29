import { useEffect, useRef } from 'react';
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

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = ref.current?.querySelectorAll('.section-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
};

const SeasonalEffect = () => {
  const month = new Date().getMonth();
  const isWinter = month === 11 || month === 0 || month === 1 || month === 2;

  if (!isWinter) return null;

  return (
    <>
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 12}s`,
            animationDelay: `${Math.random() * 10}s`,
            fontSize: `${8 + Math.random() * 8}px`,
            opacity: 0.3 + Math.random() * 0.4,
          }}
        >
          ❄
        </div>
      ))}
    </>
  );
};

const Index = () => {
  const containerRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-[#0B1A33]" ref={containerRef}>
      <SeasonalEffect />
      <Header />
      <Hero />
      <div className="section-reveal">
        <Timing />
      </div>
      <div className="section-reveal">
        <Locations />
      </div>
      <div className="section-reveal">
        <Conditions />
      </div>
      <div className="section-reveal">
        <Cars />
      </div>
      <div className="section-reveal">
        <OtherTours />
      </div>
      <div className="section-reveal">
        <WhyUs />
      </div>
      <div className="section-reveal">
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
