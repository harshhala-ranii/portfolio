import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Mic, Award, Calendar, MapPin } from 'lucide-react';

const Leadership: React.FC = () => {
  const leadershipRoles = [
    {
      title: 'Founder & Author',
      organization: 'No Offense, But',
      duration: 'June 2023 - Present',
      location: 'Online',
      description: 'Oversee operations, write engaging articles, and drive business and marketing strategies for a youth-centric blog platform.',
      achievements: [
        'Built a growing community of young readers',
        'Established brand identity and content strategy',
        'Managed business operations and growth'
      ],
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Chapter Leader & Learning Centre Leader',
      organization: 'U&I',
      duration: 'June 2023 - Present',
      location: 'Bangalore',
      description: 'Leading a team of 150+ volunteers, applying leadership, public speaking, and problem-solving skills to drive educational initiatives.',
      achievements: [
        'Led 150+ volunteers across multiple centers',
        'Improved learning outcomes for 350+ students',
        'Developed and implemented teaching strategies'
      ],
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Online Math & Science Tutor',
      organization: 'Teachers By Choice',
      duration: 'April 2023 - Present',
      location: 'Online',
      description: 'Providing personalized online tutoring for school students in Mathematics and Science subjects.',
      achievements: [
        'Personalized learning approach for each student',
        'Improved academic performance and confidence',
        'Flexible online teaching methodology'
      ],
      icon: Award,
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Senior Coordinator',
      organization: 'IEEE Computer Society & BMSCE Phase-Shift',
      duration: 'June 2022 - Dec 2023',
      location: 'BMSCE, Bangalore',
      description: 'Managed marketing, content writing, event planning, and networking for technical communities and events.',
      achievements: [
        'Organized successful technical events and workshops',
        'Managed marketing campaigns and content creation',
        'Built strong professional networks'
      ],
      icon: Mic,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="leadership" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="mobile-heading font-bold mb-4">
            Leadership & <span className="gradient-text">Volunteering</span>
          </h2>
          <p className="mobile-text text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
            Making a difference through community leadership, education, and social impact initiatives
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {leadershipRoles.map((role, index) => {
            const Icon = role.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-2xl mobile-card h-full card-hover"
                >
                  {/* Role Header */}
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${role.color} rounded-full flex items-center justify-center`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{role.title}</h3>
                        <p className="text-primary-400 font-semibold text-sm sm:text-base">{role.organization}</p>
                      </div>
                    </div>
                  </div>

                  {/* Duration and Location */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{role.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{role.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {role.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <h4 className="text-primary-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Key Achievements:</h4>
                    {role.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-2 sm:space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-xs sm:text-sm">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Impact Badge */}
                  <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg p-3 sm:p-4 border border-primary-500/20">
                    <div className="flex items-center space-x-2">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400" />
                      <span className="text-primary-400 font-semibold text-xs sm:text-sm">Leadership Impact</span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm mt-1">
                      {role.organization === 'U&I' ? '150+ volunteers led' :
                       role.organization === 'No Offense, But' ? 'Growing community built' :
                       role.organization === 'Teachers By Choice' ? 'Students empowered' :
                       'Events & networks managed'}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Community Involvement Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl overflow-hidden card-hover">
                <div className="relative">
                  <img
                    src="/community-involvement.jpeg"
                    alt="Community involvement and teaching at U&I - Leading educational initiatives with children"
                    className="w-full h-48 sm:h-64 md:h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Community Involvement</h3>
                    <p className="text-gray-200 text-xs sm:text-sm">
                      Leading educational initiatives and mentoring children at U&I learning centers
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Public Speaking Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl overflow-hidden card-hover">
                <div className="relative">
                  <img
                    src="/public-speaking.jpeg"
                    alt="Public speaking and presentation skills - Speaking at conferences and events"
                    className="w-full h-48 sm:h-64 md:h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Public Speaking</h3>
                    <p className="text-gray-200 text-xs sm:text-sm">
                      Confident presentation skills and leadership communication at professional events
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Leadership Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect rounded-2xl mobile-card max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Why Leadership Matters
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Leadership isn't just about managing teams—it's about inspiring change, fostering growth, and creating 
              opportunities for others to succeed. Through my various roles, I've learned that true leadership combines 
              technical expertise with empathy, communication, and a commitment to making a positive impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">150+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Volunteers Led</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">350+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Students Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">4</div>
                <div className="text-gray-400 text-xs sm:text-sm">Leadership Roles</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership; 