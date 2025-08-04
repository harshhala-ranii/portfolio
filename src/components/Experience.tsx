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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey in technology and social impact through various internships and roles
          </p>
        </motion.div>

        <div className="relative px-4 sm:px-0">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          <div className="space-y-8 sm:space-y-12">
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
                  } flex-col md:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-dark-800 z-10"></div>

                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'md:pr-8' : 'md:pl-8'} mt-8 md:mt-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-effect rounded-2xl p-6 sm:p-8 card-hover"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${experience.color} rounded-full flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                            <p className="text-primary-400 font-semibold">{experience.company}</p>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-400 hover:text-primary-400 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.button>
                      </div>

                      {/* Duration and Location */}
                      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6">
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
                            className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium border border-primary-500/30"
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
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              What I've Learned
            </h3>
            <p className="text-gray-300 leading-relaxed">
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