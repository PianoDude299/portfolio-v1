import React from 'react';
import { Users, Award, CheckCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardBody } from '../ui/Card';
import { leadership } from '../../utils/data';

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Leadership"
          subtitle="My leadership experience"
        />
        
        <div className="grid grid-cols-1 gap-8">
          {leadership.map((role, index) => (
            <Card key={index} className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
              <CardBody>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <Users className="text-blue-600 dark:text-blue-400" size={28} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {role.title}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <Award size={16} className="text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {role.organization}
                      </span>
                    </div>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {role.period}
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {role.description}
                    </p>
                    
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements
                    </h4>
                    
                    <ul className="space-y-2">
                      {role.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle size={18} className="text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;