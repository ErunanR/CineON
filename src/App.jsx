import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import BusinessModelSection from './components/BusinessModelSection';
import PhysicalPlantSection from './components/PhysicalPlantSection';
import MarketAnalysisSection from './components/MarketAnalysisSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import CompetitionSection from './components/CompetitionSection';
import SocialImpactSection from './components/SocialImpactSection';
import OrganigramSection from './components/OrganigramSection';
import TeamSection from './components/TeamSection';
import LocationSection from './components/LocationSection';
import ProjectionsSection from './components/ProjectionsSection';
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
        <PhysicalPlantSection />
        <MarketAnalysisSection />
        <TargetAudienceSection />
        <CompetitionSection />
        <SocialImpactSection />
        <ProjectionsSection />
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
