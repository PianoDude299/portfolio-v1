import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { personalInfo } from '../../utils/data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="About Me"
          subtitle="Get to know me better"
        />
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm driven by curiosity and a desire to solve real-world problems through technology. 
              Whether working independently or as part of a team, I approach each project with 
              enthusiasm and a commitment to excellence.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Education & Background
            </h3>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {personalInfo.degree}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {personalInfo.university}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Graduating: {personalInfo.graduation}
                </p>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Core Focus Areas
                </h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Full-Stack Web Development</li>
                  <li>Machine Learning & Data Science</li>
                  <li>UI/UX Design</li>
                  <li>Software Architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;