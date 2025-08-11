import React from 'react';
import { motion } from 'framer-motion';
import { Code, Mail, Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/harshhala-ranii',
      color: 'hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/harshala-rani-a26880244/',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:harshalarani3@gmail.com',
      color: 'hover:text-red-400',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900/50 border-t border-gray-800">
      <div className="container-custom py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center sm:text-left order-1"
          >
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4">
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" />
              <span className="text-lg sm:text-xl font-bold gradient-text">Harshala Rani</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Full Stack Developer & ML Engineer passionate about creating innovative solutions 
              that make a difference in people's lives.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center order-3 sm:order-2 md:order-2"
          >
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <div className="space-y-1 sm:space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Leadership', 'Contact'].map((link) => (
                <motion.button
                  key={link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-primary-400 transition-colors text-xs sm:text-sm touch-target py-1"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center sm:text-right order-2 sm:order-3 md:order-3"
          >
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
            <div className="flex justify-center sm:justify-end space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-8 h-8 sm:w-10 sm:h-10 glass-effect rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} touch-target`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 my-6 sm:my-8"
        ></motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-4 sm:space-y-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 text-xs sm:text-sm text-center sm:text-left"
          >
            © {currentYear} Harshala Rani. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-gray-400 text-xs sm:text-sm"
          >
            <span>Made with</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
            <span>using React & TypeScript</span>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50 touch-target"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer; 