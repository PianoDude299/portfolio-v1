import React from 'react';
import { ArrowRight, Github, Linkedin, FileText } from 'lucide-react';
import Button from '../ui/Button';
import { personalInfo } from '../../utils/data';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-24 flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
            Hi, I'm
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            K S Suryanarayan
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Computer Science Student & Full-Stack Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            I'm a passionate Computer Science student, full-stack developer, and design enthusiast focused on building purposeful digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={scrollToContact}
              rightIcon={<ArrowRight size={16} />}
            >
              Get in Touch
            </Button>
            
            <a href={personalInfo.socialLinks.resume} target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline"
                leftIcon={<FileText size={16} />}
              >
                View Resume
              </Button>
            </a>
            
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline"
                leftIcon={<Github size={16} />}
              >
                GitHub
              </Button>
            </a>
            
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline"
                leftIcon={<Linkedin size={16} />}
              >
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;