import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, Download } from 'lucide-react';

const About: React.FC = () => {
  const education = {
    degree: 'Computer Science Engineering',
    institution: 'BMS College of Engineering, Bangalore',
    cgpa: '8.75',
    duration: '2021-25',
  };

  const highlights = [
    'Passionate about building intelligent systems and creating impactful solutions',
    'Currently scaling ML models at Hinge-Health using FastAPI, AWS, and serverless architecture',
    'Leading tech communities and mentoring 150+ volunteers',
    'Specialized in Computer Vision, Machine Learning, and Full Stack Development',
    'Committed to making technology accessible and inclusive',
  ];

  const handleDownloadResume = () => {
    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This should point to your resume file in the public folder
    link.download = 'resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="mobile-heading font-bold mb-4">
            <span className="gradient-text">About</span> Me
          </h2>
          <p className="mobile-text text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
            A passionate Computer Science Engineer with a love for innovation and problem-solving
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Education & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            {/* Education Card */}
            <div className="glass-effect rounded-2xl mobile-card card-hover">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Education</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-white font-semibold text-sm sm:text-base">{education.degree}</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">{education.institution}</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">{education.duration}</span>
                </div>
                <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg p-3">
                  <span className="text-primary-400 font-semibold text-sm sm:text-base">CGPA: {education.cgpa}</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">What I Do</h3>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-2 sm:space-x-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{highlight}</p>
                </motion.div>
              ))}
              
              {/* Download Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="pt-4 sm:pt-6"
              >
                <button
                  onClick={handleDownloadResume}
                  className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-h-[48px] text-sm sm:text-base touch-target"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce flex-shrink-0" />
                  <span>Download Resume</span>
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 mb-8 lg:mb-0"
          >
            {/* Decorative Elements */}
            <div className="relative">
              <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <p className="text-white font-semibold text-sm sm:text-base">Computer Science</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Engineering Graduate</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary-500/30 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-secondary-500/30 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 