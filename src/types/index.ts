export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    userType: 'sender' | 'driver';
    isVerified: boolean;
  }
  
  export interface Package {
    id: string;
    from: Address;
    to: Address;
    status: 'pending' | 'picked_up' | 'in_transit' | 'delivered';
    price: number;
    estimatedDelivery: string;
    trackingId: string;
  }
  
  export interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    role: string;
    avatar: string;
    rating: number;
    comment: string;
  }
  
  export interface PricingPlan {
    id: string;
    name: string;
    price: number;
    features: string[];
    popular?: boolean;
  }