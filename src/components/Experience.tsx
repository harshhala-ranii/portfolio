import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Brain, Database, Heart } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'ML Intern',
      company: 'Hinge-Health',
      duration: 'August 2024 - June 2025',
      location: 'Remote',
      description: 'Scaled and optimized ML models for computer vision using FastAPI, AWS, and serverless architecture. Streamlined workflows with containerization, CI/CD, and automated pipelines, enhancing physiotherapy exercise recommendations.',
      technologies: ['FastAPI', 'AWS', 'Serverless Architecture', 'Computer Vision', 'CI/CD', 'Docker'],
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Data Analytics Intern',
      company: 'U&I',
      duration: 'January - March 2024',
      location: 'Bangalore',
      description: 'Analyzed student scores using Python and Pandas, managed datasets, and integrated mixed data for insights. Identified learning gaps, improving outcomes for 350 students and optimizing teaching strategies for 300+ volunteers.',
      technologies: ['Python', 'Pandas', 'Data Analysis', 'Student Analytics'],
      icon: Database,
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Intern',
      company: 'Sitara (NGO)',
      duration: '27th February to 12th April 2023',
      location: 'Bangalore',
      description: 'Designed 5 inclusive Teacher Instruction Kits using braille, audio, and multisensory tools for visually impaired kids, enhancing accessibility and educational empowerment through collaborative research and resource development.',
      technologies: ['Accessibility Design', 'Braille', 'Multisensory Tools', 'Educational Technology'],
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="mobile-heading font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mobile-text text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
            My journey in technology and social impact through various internships and roles
          </p>
        </motion.div>

        <div className="relative px-4 sm:px-0">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-6 lg:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-dark-800 z-10"></div>

                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'md:pr-6 lg:pr-8' : 'md:pl-6 lg:pl-8'} mt-6 md:mt-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-effect rounded-2xl mobile-card card-hover"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4 sm:mb-6">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${experience.color} rounded-full flex items-center justify-center`}>
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white">{experience.title}</h3>
                            <p className="text-primary-400 font-semibold text-sm sm:text-base">{experience.company}</p>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-400 hover:text-primary-400 transition-colors touch-target"
                        >
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.button>
                      </div>

                      {/* Duration and Location */}
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="px-2 sm:px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs sm:text-sm font-medium border border-primary-500/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl mobile-card max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              What I've Learned
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Through my diverse experiences, I've developed a unique blend of technical expertise and social impact awareness. 
              From scaling ML models in healthcare to creating inclusive educational tools, I've learned that technology 
              has the power to transform lives when applied with purpose and empathy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 