import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { ShieldCheckIcon, EyeIcon, KeyIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export const Privacy: React.FC = () => {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: DocumentTextIcon,
      content: [
        'Personal information such as name, email, phone number when you create an account',
        'Delivery addresses and package details when you book a delivery',
        'Payment information processed securely through our payment partners',
        'Location data when using our mobile app for tracking and delivery purposes',
        'Usage data and analytics to improve our service quality'
      ]
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      icon: EyeIcon,
      content: [
        'To provide and improve our delivery services',
        'To process payments and prevent fraud',
        'To send you important updates about your deliveries',
        'To provide customer support when needed',
        'To analyze usage patterns and improve our platform',
        'To comply with legal requirements and regulations'
      ]
    },
    {
      id: 'data-protection',
      title: 'Data Protection & Security',
      icon: ShieldCheckIcon,
      content: [
        'We use industry-standard encryption to protect your data',
        'Payment information is processed securely and never stored on our servers',
        'Access to personal information is restricted to authorized personnel only',
        'Regular security audits and updates to maintain data protection',
        'Secure data centers with 24/7 monitoring and backup systems'
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      icon: KeyIcon,
      content: [
        'Right to access your personal information',
        'Right to correct or update your data',
        'Right to delete your account and associated data',
        'Right to opt-out of marketing communications',
        'Right to data portability and transfer',
        'Right to lodge a complaint with supervisory authorities'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary-500 via-blue-600 to-purple-700">
        <div className="container-custom text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-white/80 mt-4">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Commitment to Your Privacy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At ParcelDrop, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
              delivery service platform.
            </p>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-primary-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Third-Party Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may use third-party services to help us operate our platform and serve you better. These services include:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Payment processors for secure transaction handling</li>
              <li>• Analytics services to understand usage patterns</li>
              <li>• Cloud hosting providers for data storage and processing</li>
              <li>• Communication services for notifications and support</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              All third-party services are required to maintain the same level of data protection and privacy standards that we uphold.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-white border-2 border-gray-200 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Questions About Privacy?
            </h3>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p>Email: privacy@parceldrop.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Delivery Street, Tech City, TC 12345</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};