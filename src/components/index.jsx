import { useEffect, useState } from 'react'
import '../index.css'
import HeroSection from './HeroSection'
import ProblemsSection from './ProblemsSection'
import SolutionSection from './SolutionSection'
import FeaturesSection from './FeaturesSection'
import DifferentialsSection from './DifferentialsSection'
import FinalCTASection from './FinalCTASection'
import Footer from './Footer'

function LocalizarLanding() {
  const [isVisible, setIsVisible] = useState({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToVote = () => {
    window.open('https://seu-link-de-votacao.com', '_blank');
  };

  return (
    <div className="landing-container">
      <HeroSection onVoteClick={scrollToVote} />
      <ProblemsSection />
      <SolutionSection onVoteClick={scrollToVote} />
      <FeaturesSection />
      <DifferentialsSection />
      <FinalCTASection onVoteClick={scrollToVote} />
      <Footer />
    </div>
  )
}

export default LocalizarLanding;