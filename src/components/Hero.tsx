import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    'Full Stack Developer',
    'ML Engineer',
    'Computer Vision Specialist',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-4 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-80 sm:h-80 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary-400 font-mono text-base sm:text-lg"
            >
              👋 Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="gradient-text">Harshala</span>
              <br />
              <span className="text-white">Rani</span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="h-8 sm:h-10 md:h-12"
            >
              <motion.p
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300"
              >
                {texts[currentText]}
              </motion.p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0"
            >
              Passionate about building intelligent systems and creating impactful solutions. 
              Currently seeking opportunities.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mobile-button bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 touch-target"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download Resume</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="mobile-button border-2 border-primary-500 text-primary-400 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 touch-target"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center lg:justify-start space-x-6 pt-6 sm:pt-8"
            >
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:harshalarani3@gmail.com"
                className="text-gray-400 hover:text-primary-400 transition-colors touch-target"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/harshhala-ranii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors touch-target"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/harshala-rani-a26880244/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors touch-target"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative">
              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative"
              >
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-2xl">
                  <img
                    src="/profile-image.jpg"
                    alt="Harshala Rani - Full Stack Developer & ML Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-60"
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full opacity-60"
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-primary-400 transition-colors touch-target"
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero; 