import React from 'react';
import { Code, PenTool, Database, Server, Wrench } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import { skills } from '../../utils/data';

const SkillCategory: React.FC<{
  title: string;
  skills: string[];
  icon: React.ReactNode;
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}> = ({ title, skills, icon, variant }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className={`
          w-10 h-10 rounded-full flex items-center justify-center mr-3
          ${variant === 'primary' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' : ''}
          ${variant === 'secondary' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400' : ''}
          ${variant === 'success' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' : ''}
          ${variant === 'warning' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400' : ''}
          ${variant === 'error' ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400' : ''}
        `}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant={variant}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Skills"
          subtitle="Technical abilities & expertise"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory 
            title="Languages" 
            skills={skills.languages}
            icon={<Code size={20} />}
            variant="primary"
          />
          
          <SkillCategory 
            title="Frameworks" 
            skills={skills.frameworks}
            icon={<Server size={20} />}
            variant="secondary"
          />
          
          <SkillCategory 
            title="Tools" 
            skills={skills.tools}
            icon={<Wrench size={20} />}
            variant="success"
          />
          
          <SkillCategory 
            title="Databases" 
            skills={skills.databases}
            icon={<Database size={20} />}
            variant="warning"
          />
          
          <SkillCategory 
            title="Other Skills" 
            skills={skills.other}
            icon={<PenTool size={20} />}
            variant="error"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;