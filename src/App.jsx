import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import SolutionSection from './components/SolutionSection';
import ServicesSection from './components/ServicesSection';
import StakesSection from './components/StakesSection';
import ApproachSection from './components/ApproachSection';
import MarketingSection from './components/MarketingSection';
import AboutSnapshot from './components/AboutSnapshot';
import AudienceSection from './components/AudienceSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  useEffect(() => {
    // IntersectionObserver for scroll-triggered fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <PainSection />
        <div className="section-divider" />
        <SolutionSection />
        <div className="section-divider" />
        <ServicesSection />
        <div className="section-divider" />
        <StakesSection />
        <div className="section-divider" />
        <ApproachSection />
        <div className="section-divider" />
        <MarketingSection />
        <div className="section-divider" />
        <AboutSnapshot />
        <div className="section-divider" />
        <AudienceSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
