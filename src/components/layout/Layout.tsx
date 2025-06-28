import React, { useState } from 'react';
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import { LoginModal } from '../../auth/LoginModal';
import { SignupModal } from '../../auth/SignUpModal';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleSignupClick = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />

      {/* Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSignupClick={handleSignupClick}
      />
      
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
};