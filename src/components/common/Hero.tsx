import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowDownIcon, PlayIcon } from '@heroicons/react/24/outline';
import { Button } from '../common/Button';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      }
    }
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-blue-600 to-purple-700" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-white/5 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            {/* <span className="text-sm font-medium">Now Available in 50+ Cities</span> */}
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Fast & Reliable
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Package Delivery
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Send packages across the city with lightning speed. Track in real-time, 
            get instant notifications, and enjoy hassle-free deliveries.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={onGetStarted}
              className="min-w-[200px] shadow-2xl"
            >
              Get Started Free
            </Button>
            <Button
              variant="ghost"
              size="lg"
              leftIcon={<PlayIcon className="w-5 h-5" />}
              className="min-w-[200px] bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-white/30"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { number: '100K+', label: 'Deliveries Made' },
              { number: '15 min', label: 'Average Delivery' },
              { number: '99.9%', label: 'Success Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Phone Mockup */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative mx-auto w-64 h-96 max-w-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl">
              <div className="p-4 h-full flex flex-col">
                {/* Phone Status Bar */}
                <div className="flex justify-between items-center text-white text-xs mb-4">
                  <span>9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>
                
                {/* App Preview */}
                <div className="flex-1 bg-white rounded-2xl p-4 shadow-inner">
                  <div className="h-8 bg-primary-500 rounded-lg mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-16 bg-gray-100 rounded-lg"></div>
                    <div className="h-16 bg-gray-100 rounded-lg"></div>
                    <div className="h-16 bg-gray-100 rounded-lg"></div>
                  </div>
                  <div className="mt-4 h-12 bg-primary-500 rounded-lg"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDownIcon className="w-6 h-6 text-white/60" />
      </motion.div>
    </section>
  );
};