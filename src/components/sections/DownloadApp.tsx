import React from 'react';
import { motion } from 'framer-motion';
import { QrCodeIcon } from '@heroicons/react/24/outline';

export const DownloadApp: React.FC = () => {
  return (
    <section id="download" className="section-padding bg-gradient-to-br from-primary-500 via-blue-600 to-purple-700">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Download the ParcelDrop App
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get the mobile app and start sending packages with just a few taps. 
              Available for both iOS and Android devices.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-black rounded-xl px-6 py-4 hover:bg-gray-800 transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-black rounded-xl px-6 py-4 hover:bg-gray-800 transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </motion.a>
            </div>

            {/* QR Code Info */}
            <div className="flex items-center space-x-3 text-white/80">
              <QrCodeIcon className="w-6 h-6" />
              <span>Scan QR code to download instantly</span>
            </div>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex justify-center space-x-4">
              {/* iPhone Mockup */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="relative w-48 h-96 bg-black rounded-3xl p-2 shadow-2xl"
              >
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <div className="bg-primary-500 h-20 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ParcelDrop</span>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg"></div>
                    <div className="h-16 bg-gray-100 rounded-lg"></div>
                    <div className="h-16 bg-gray-100 rounded-lg"></div>
                    <div className="h-16 bg-gray-100 rounded-lg"></div>
                    <div className="h-12 bg-primary-500 rounded-lg"></div>
                  </div>
                </div>
              </motion.div>

              {/* Android Mockup */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -10 }}
                className="relative w-48 h-96 bg-gray-800 rounded-3xl p-2 shadow-2xl mt-8"
              >
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 h-20 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">📦 Track</span>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="h-24 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🚚</span>
                    </div>
                    <div className="h-12 bg-gray-100 rounded-lg"></div>
                    <div className="h-12 bg-gray-100 rounded-lg"></div>
                    <div className="h-12 bg-gray-100 rounded-lg"></div>
                    <div className="h-12 bg-green-500 rounded-lg"></div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* QR Code */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center"
            >
              <QrCodeIcon className="w-16 h-16 text-gray-700" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};