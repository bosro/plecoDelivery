import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/common/Hero'
import { Features } from '../components/sections/Features';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Pricing } from '../components/sections/Pricing';
import { Testimonials } from '../components/sections/Testimonial';
import { DownloadApp } from '../components/sections/DownloadApp';
import { CTA } from '../components/sections/CTA';
import { SignupModal } from '../auth/SignUpModal';
import { LoginModal } from '../auth/LoginModal';

export const Home: React.FC = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsSignupModalOpen(true);
  };

  const handleLoginClick = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleSignupClick = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  return (
    <Layout>
      <Hero onGetStarted={handleGetStarted} />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <DownloadApp />
      <CTA onGetStarted={handleGetStarted} />
      
      {/* Modals */}
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        onLoginClick={handleLoginClick}
      />
      
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSignupClick={handleSignupClick}
      />
    </Layout>
  );
};