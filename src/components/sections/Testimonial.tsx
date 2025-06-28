import React from "react";
import { motion, type Variants } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Small Business Owner",
      avatar: "👩‍💼",
      rating: 5,
      comment:
        "ParcelDrop has revolutionized how I handle deliveries for my online store. Fast, reliable, and excellent customer service!",
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Restaurant Manager",
      avatar: "👨‍🍳",
      rating: 5,
      comment:
        "We use ParcelDrop for all our catering deliveries. The real-time tracking gives our customers peace of mind.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "E-commerce Entrepreneur",
      avatar: "👩‍💻",
      rating: 5,
      comment:
        "The API integration was seamless. Our customers love the fast delivery options and tracking features.",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Corporate Executive",
      avatar: "👨‍💼",
      rating: 5,
      comment:
        "Perfect for urgent business documents. Never had a late delivery. Highly recommend for professional use.",
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Event Planner",
      avatar: "👩‍🎨",
      rating: 5,
      comment:
        "Last-minute event supplies? No problem! ParcelDrop always comes through when we need them most.",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Tech Startup Founder",
      avatar: "👨‍🚀",
      rating: 5,
      comment:
        "As a startup, we needed reliable logistics. ParcelDrop scales with us and keeps costs predictable.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            What Our <span className="gradient-text">Customers</span> Say
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their ParcelDrop experience.
          </motion.p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { number: "4.9/5", label: "Average Rating" },
            { number: "10K+", label: "Happy Customers" },
            { number: "99.8%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Customer Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-pagination pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 rounded-2xl p-8 h-full"
                >
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    "{testimonial.comment}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* <style jsx>{`
        .swiper-pagination-bullet {
          background: #e5e7eb;
          opacity: 1;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background: #1E88E5;
        }
      `}</style> */}
    </section>
  );
};
