import React from 'react'
import HeroSection from '../components/landingPage/HeroSection'
import FeaturesSection from '../components/landingPage/FeaturesSection'
import HowItWorksSection from '../components/landingPage/HowItWorksSection'
import CTASection from '../components/landingPage/CTASection'

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
    </div>
  )
}

export default Landing
