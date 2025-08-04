import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Users, TrendingUp } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'FoodIQ - Intelligent Diet Recommendation System',
      description: 'Built an end-to-end system using TensorFlow, PyTorch, and FastAPI that identifies Indian food from images, estimates portion size via MiDaS, and generates personalized diet advice using OpenAI LLM.',
      features: [
        'Developed a responsive React.js frontend and Dockerized backend for scalable deployment',
        'Recognized 25+ Indian dishes and helped users gain personalized dietary insights to improve health awareness'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'FastAPI', 'React.js', 'OpenAI LLM', 'MiDaS', 'Docker'],
      impact: '25+ Indian dishes recognized, personalized dietary insights',
      icon: Code,
      color: 'from-green-500 to-emerald-600',
      github: 'https://github.com/harshhala-ranii/food_iq',
      live: null,
    },
    {
      title: 'Class Planning Application',
      description: 'Built an end-to-end academic planner using FastAPI, PostgreSQL, and React.js to help NGO volunteers structure lessons over a 9-month period (July-March).',
      features: [
        'Supports topic auto-suggestions via syllabus JSON and downloadable Gantt chart generation',
        'Adopted by 100+ volunteers across 40 centres, streamlining lesson planning and improving content consistency'
      ],
      technologies: ['FastAPI', 'PostgreSQL', 'React.js', 'JSON', 'Gantt Charts'],
      impact: '100+ volunteers, 40 centres, streamlined lesson planning',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/harshhala-ranii/Planning-CLASS',
      live: 'https://classplan.rayansheikh.space/',
    },
    {
      title: 'No Offense, But - Youth-Centric Blog Platform',
      description: 'Developed a personal blog using React.js to share stories and insights on challenges faced by young adults today.',
      features: [
        'Reached a growing audience by voicing underrepresented experiences and sparking honest conversations'
      ],
      technologies: ['React.js', 'Content Management', 'Blog Platform'],
      impact: 'Growing audience, honest conversations, youth representation',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      github: null,
      live: 'https://nooffensebut.vercel.app',
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions that showcase my technical skills and passion for creating impactful applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projects.map((project, index) => {
            const Icon = project.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-2xl p-6 sm:p-8 h-full card-hover"
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="text-gray-400 text-sm">Full Stack Project</p>
                      </div>
                    </div>
                                         <div className="flex space-x-2">
                       {project.github && (
                         <motion.a
                           whileHover={{ scale: 1.1 }}
                           whileTap={{ scale: 0.9 }}
                           href={project.github}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-gray-400 hover:text-primary-400 transition-colors"
                         >
                           <Github className="w-5 h-5" />
                         </motion.a>
                       )}
                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-400 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">{feature}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
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

                  {/* Impact */}
                  <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg p-4 border border-primary-500/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-primary-400" />
                      <span className="text-primary-400 font-semibold text-sm">Impact</span>
                    </div>
                    <p className="text-gray-300 text-sm">{project.impact}</p>
                  </div>
                </motion.div>

                {/* Hover Effect Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeProject === index ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl pointer-events-none"
                ></motion.div>
              </motion.div>
            );
          })}
        </div>

                 {/* Academic Collaboration Showcase */}
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           viewport={{ once: true }}
           className="mb-16"
         >
           <div className="glass-effect rounded-2xl overflow-hidden card-hover max-w-4xl mx-auto">
             <div className="relative">
               <img
                 src="/academic-collaboration.jpeg"
                 alt="Academic collaboration and teamwork at BMS College of Engineering - Computer Science Department"
                 className="w-full h-[500px] object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
               <div className="absolute bottom-8 left-8 right-8">
                 <h3 className="text-2xl font-bold text-white mb-3">Academic Excellence & Collaboration</h3>
                 <p className="text-gray-200 text-lg mb-4">
                   Working with peers and faculty at BMS College of Engineering's Computer Science Department
                 </p>
                 <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                   <div className="flex items-center space-x-2">
                     <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                     <span>Team Collaboration</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                     <span>Academic Projects</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                     <span>Professional Development</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </motion.div>

        {/* Projects Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              My Development Philosophy
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I believe in building solutions that not only solve technical challenges but also create meaningful impact. 
              Each project represents a unique blend of innovation, user-centric design, and scalable architecture.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              View All Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 