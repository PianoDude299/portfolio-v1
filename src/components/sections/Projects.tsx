import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardBody, CardFooter } from '../ui/Card';
import Badge from '../ui/Badge';
import { projects } from '../../utils/data';

const Projects: React.FC = () => {
  // Function to get placeholder image based on project
  const getProjectImage = (image: string) => {
    const imageMap: Record<string, string> = {
      ethereum: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      erp: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      portfolio: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    };
    
    return imageMap[image] || "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Projects"
          subtitle="Some of my recent work"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} hoverable className="flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={getProjectImage(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardBody className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant={
                        techIndex % 5 === 0 ? 'primary' : 
                        techIndex % 5 === 1 ? 'secondary' : 
                        techIndex % 5 === 2 ? 'success' : 
                        techIndex % 5 === 3 ? 'warning' : 
                        'error'
                      }
                      size="sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardBody>
              
              <CardFooter className="border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    View Code
                  </a>
                  
                  {project.github && (
                    <a 
                      href={`${project.github}/demo`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;