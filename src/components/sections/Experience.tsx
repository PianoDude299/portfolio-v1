import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { experiences } from '../../utils/data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Work Experience"
          subtitle="My professional journey"
        />
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900"></div>
                
                {/* Content */}
                <div className="md:w-1/2 ml-8 md:ml-0">
                  <Card hoverable>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {experience.position}
                        </h3>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {experience.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <Briefcase size={16} className="text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {experience.company}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400">
                        {experience.description}
                      </p>
                    </div>
                  </Card>
                </div>
                
                {/* Empty space for timeline alignment */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;