import React from 'react';
import { motion } from 'framer-motion';
import { 
  TruckIcon, 
  MapPinIcon, 
  ShieldCheckIcon, 
  ClockIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon 
} from '@heroicons/react/24/outline';

export const Features: React.FC = () => {
  const features = [
    {
      icon: TruckIcon,
      title: 'Lightning Fast Delivery',
      description: 'Get your packages delivered in under 30 minutes with our express service.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPinIcon,
      title: 'Real-time Tracking',
      description: 'Track your package every step of the way with live GPS updates.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Insured',
      description: 'All packages are fully insured and handled by verified drivers.',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: ClockIcon,
      title: '24/7 Available',
      description: 'Round-the-clock delivery service, even on weekends and holidays.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Transparent Pricing',
      description: 'No hidden fees. See exactly what you pay before confirming.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Easy to Use App',
      description: 'Intuitive mobile app that makes booking deliveries effortless.',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="gradient-text">ParcelDrop</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of package delivery with our cutting-edge features 
            designed to make your life easier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};