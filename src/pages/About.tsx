import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { 
  UserGroupIcon, 
  TruckIcon, 
  ClockIcon,
  ShieldCheckIcon,
  HeartIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

export const About: React.FC = () => {
  const stats = [
    { number: '100K+', label: 'Deliveries Completed' },
    { number: '50+', label: 'Cities Served' },
    { number: '5K+', label: 'Active Drivers' },
    { number: '4.9★', label: 'Customer Rating' },
  ];

  const values = [
    {
      icon: ClockIcon,
      title: 'Speed',
      description: 'We believe time is precious. Our commitment to fast delivery ensures you get your packages when you need them.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security',
      description: 'Every package is handled with care and tracked every step of the way. Your trust is our priority.',
    },
    {
      icon: HeartIcon,
      title: 'Care',
      description: 'We treat every package as if it were our own, ensuring safe and careful handling throughout the journey.',
    },
    {
      icon: GlobeAltIcon,
      title: 'Innovation',
      description: 'We continuously innovate to provide better delivery solutions and improve the customer experience.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      avatar: '👩‍💼',
      bio: 'Former logistics executive with 15+ years of experience in last-mile delivery.',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      avatar: '👨‍💻',
      bio: 'Tech entrepreneur focused on building scalable delivery infrastructure.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      avatar: '👩‍🔧',
      bio: 'Operations expert ensuring smooth delivery processes across all cities.',
    },
    {
      name: 'David Kim',
      role: 'Head of Customer Success',
      avatar: '👨‍💼',
      bio: 'Customer experience specialist dedicated to delivering exceptional service.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-500 via-blue-600 to-purple-700">
        <div className="container-custom text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">ParcelDrop</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing package delivery with technology, speed, and care. 
              Your packages, delivered faster than ever before.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At ParcelDrop, we believe that fast, reliable delivery should be accessible to everyone. 
                We're building the future of logistics, one package at a time.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to connect people and businesses through innovative delivery solutions 
                that are fast, secure, and affordable. We're not just delivering packages – we're 
                delivering possibilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <TruckIcon className="w-32 h-32 text-primary-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do at ParcelDrop
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind ParcelDrop's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-500 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};