import React from 'react';
import { motion } from 'framer-motion';
import { 
  DevicePhoneMobileIcon,
  MapPinIcon,
  TruckIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: DevicePhoneMobileIcon,
      title: 'Book Your Delivery',
      description: 'Open the app, enter pickup and delivery addresses, choose your package size.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: MapPinIcon,
      title: 'Track in Real-Time',
      description: 'Watch your package journey with live GPS tracking and get instant updates.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      icon: TruckIcon,
      title: 'Fast Pickup & Delivery',
      description: 'Our verified drivers pick up and deliver your package within 30 minutes.',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      icon: CheckCircleIcon,
      title: 'Delivery Confirmed',
      description: 'Get confirmation with photo proof and digital signature upon delivery.',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How <span className="gradient-text">PlecoDelivery</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting your packages delivered is simple and straightforward. 
            Follow these easy steps to send your package anywhere in the city.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  {/* Step Number */}
                  <div className="relative z-10 mx-auto w-20 h-20 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-2xl font-bold text-primary-500">{step.id}</span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Start Your First Delivery
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};