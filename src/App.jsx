import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import BusinessModelSection from './components/BusinessModelSection';
import SocialImpactSection from './components/SocialImpactSection';
import OrganigramSection from './components/OrganigramSection';
import TeamSection from './components/TeamSection';
import LocationSection from './components/LocationSection';
import FutureVisionSection from './components/FutureVisionSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <BusinessModelSection />
        <SocialImpactSection />
        <OrganigramSection />
        <TeamSection />
        <LocationSection />
        <FutureVisionSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
