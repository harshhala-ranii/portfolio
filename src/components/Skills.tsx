import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Cpu, Palette, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: Code },
    { id: 'languages', name: 'Languages', icon: Code },
    { id: 'frontend', name: 'Frontend', icon: Palette },
    { id: 'frameworks', name: 'Frameworks', icon: Globe },
    { id: 'technologies', name: 'Technologies', icon: Cloud },
    { id: 'libraries', name: 'Libraries', icon: Cpu },
    { id: 'databases', name: 'Databases', icon: Database },
  ];

  const skills = {
    languages: [
      { name: 'Python', level: 95, color: 'from-blue-500 to-cyan-500' },
      { name: 'C++', level: 85, color: 'from-blue-600 to-blue-800' },
      { name: 'TypeScript', level: 90, color: 'from-blue-500 to-blue-700' },
      { name: 'Java', level: 80, color: 'from-orange-500 to-red-500' },
      { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-orange-500' },
    ],
    frontend: [
      { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500' },
      { name: 'CSS', level: 90, color: 'from-blue-500 to-purple-600' },
      { name: 'Figma', level: 85, color: 'from-purple-500 to-pink-500' },
    ],
    frameworks: [
      { name: 'React JS', level: 92, color: 'from-cyan-400 to-blue-500' },
      { name: 'FastAPI', level: 88, color: 'from-green-500 to-emerald-600' },
      { name: 'Streamlit', level: 85, color: 'from-red-500 to-pink-500' },
      { name: 'Next JS', level: 90, color: 'from-gray-800 to-black' },
      { name: 'Express JS', level: 85, color: 'from-green-600 to-green-800' },
      { name: 'Node JS', level: 88, color: 'from-green-500 to-green-700' },
      { name: 'TensorFlow', level: 90, color: 'from-orange-500 to-red-600' },
      { name: 'PyTorch', level: 85, color: 'from-red-500 to-orange-500' },
      { name: 'Django', level: 80, color: 'from-green-600 to-green-800' },
    ],
    technologies: [
      { name: 'SQL', level: 90, color: 'from-blue-500 to-blue-700' },
      { name: 'NoSQL', level: 85, color: 'from-green-500 to-green-700' },
      { name: 'Cloud Computing', level: 88, color: 'from-blue-400 to-blue-600' },
      { name: 'AWS Services', level: 85, color: 'from-orange-500 to-yellow-500' },
      { name: 'Docker', level: 82, color: 'from-blue-500 to-cyan-500' },
      { name: 'CI/CD Pipeline', level: 80, color: 'from-purple-500 to-pink-500' },
      { name: 'RESTful API', level: 92, color: 'from-green-500 to-emerald-600' },
      { name: 'SQL Alchemy', level: 85, color: 'from-red-500 to-pink-500' },
    ],
    libraries: [
      { name: 'Pandas', level: 95, color: 'from-blue-500 to-purple-600' },
      { name: 'NumPy', level: 90, color: 'from-blue-600 to-blue-800' },
      { name: 'SciPy', level: 85, color: 'from-blue-500 to-cyan-500' },
      { name: 'Matplotlib', level: 88, color: 'from-orange-500 to-red-500' },
      { name: 'Langchain', level: 80, color: 'from-purple-500 to-pink-500' },
      { name: 'LLM', level: 85, color: 'from-green-500 to-emerald-600' },
    ],
    databases: [
      { name: 'MongoDB', level: 85, color: 'from-green-500 to-green-700' },
    ],
  };

  const getAllSkills = () => {
    return Object.values(skills).flat();
  };

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return getAllSkills();
    }
    return skills[activeCategory as keyof typeof skills] || [];
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build amazing solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'glass-effect text-gray-300 hover:text-primary-400'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {getFilteredSkills().map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                ></motion.div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                <span className="text-sm text-gray-400">
                  {skill.level >= 90 ? 'Expert' : 
                   skill.level >= 80 ? 'Advanced' : 
                   skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why These Skills Matter
            </h3>
            <p className="text-gray-300 leading-relaxed">
              My diverse skill set allows me to build end-to-end solutions from concept to deployment. 
              From machine learning models to responsive web applications, I can handle every aspect of 
              modern software development. This versatility enables me to create innovative solutions 
              that solve real-world problems effectively.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 