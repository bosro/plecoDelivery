import React from 'react';
import { motion } from 'framer-motion';
import { TruckIcon, UserIcon } from '@heroicons/react/24/outline';

interface UserTypeSelectionProps {
  onUserTypeSelect: (type: 'sender' | 'driver') => void;
}

export const UserTypeSelection: React.FC<UserTypeSelectionProps> = ({ 
  onUserTypeSelect 
}) => {
  const userTypes = [
    {
      type: 'sender' as const,
      title: 'I want to send packages',
      description: 'Send packages quickly and track them in real-time',
      icon: UserIcon,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      type: 'driver' as const,
      title: 'I want to deliver packages',
      description: 'Earn money by delivering packages in your spare time',
      icon: TruckIcon,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          How do you want to use PlecoDelivery?
        </h3>
        <p className="text-gray-600">
          Choose your account type to get started
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {userTypes.map((type) => (
          <motion.button
            key={type.type}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onUserTypeSelect(type.type)}
            className="p-6 border-2 border-gray-200 rounded-2xl hover:border-primary-500 transition-colors text-left group"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <type.icon className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {type.title}
            </h4>
            <p className="text-gray-600 text-sm">
              {type.description}
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};