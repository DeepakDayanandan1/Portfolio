"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Portfolio',
      category: 'Frontend',
      description: 'Developed to showcase my expertise in UI/UX design and front-end development, this portfolio highlights my skills in Next.js, TypeScript, and Tailwind CSS through a modern, user-focused interface.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      techs: [
        { name: 'Next.js', icon: '/images/skills/next.png' },
        { name: 'Tailwind CSS', icon: '/images/skills/tailwind.png' },
        { name: 'TypeScript', icon: '/images/skills/typeScript.png' },
        { name: 'Figma', icon: '/images/skills/figma.png' }
      ],
      borderColor: 'border-purple-500',
      demoLink: '#',
      githubLink: 'https://github.com/DeepakDayanandan1/Portfolio'
    },
    {
      id: 2,
      title: 'Houseboat Booking',
      category: 'UI/UX Design',
      description: 'The Houseboat Booking UI Design Template is built for speed and flexibility. Tweak colors, components, and layouts in seconds to match your brand, then launch a seamless reservation flow-from date picking. Ship faster, iterate easier, and give your guests a delightful booking experience.',
      image: 'projectimages/HSBooking.jpg',
      techs: [
        { name: 'Figma', icon: '/images/skills/figma.png' },
        { name: 'Photoshop', icon: '/images/skills/photoshop.png' }
      ],
      borderColor: 'border-green-500',
      dribbbleLink: 'https://dribbble.com/shots/26477293-HouseBoat-Booking-Web-Application'
    },
    {
      id: 3,
      title: 'Nexus-E Learning',
      category: 'UI/UX Design',
      description: 'A comprehensive e-learning platform designed to provide an intuitive and engaging educational experience. Features modern UI/UX design with focus on user accessibility and learning efficiency.',
      image: 'projectimages/Nexus-ELearning.png',
      techs: [
        { name: 'Figma', icon: '/images/skills/figma.png' },
        { name: 'Photoshop', icon: '/images/skills/photoshop.png' }
      ],
      borderColor: 'border-blue-500',
      dribbbleLink: 'https://dribbble.com/shots/26471587-Nexus-The-Learning-Platform'
    },
    {
      id: 4,
      title: 'Sales Forecasting System',
      category: 'Full Stack',
      description: 'Developed a sales forecasting system using machine learning algorithms to predict future sales trends based on historical data.',
      image: 'projectimages/SF.jpg',
      techs: [
        { name: 'Next.js', icon: '/images/skills/next.png' },
        { name: 'Python', icon: '/images/skills/python.png' },
        { name: 'Figma', icon: '/images/skills/figma.png' }
      ],
      borderColor: 'border-purple-500',
      demoLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7379503792054194176/',
      githubLink: 'https://github.com/DeepakDayanandan1/Sales-Forecasting'
    }
  ];

  const categories = ['All', 'Frontend', 'Full Stack'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-16 sm:pt-20 pb-4 sm:pb-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1a1d2e] rounded-2xl sm:rounded-2xl py-8 sm:py-12">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-center">PROJECTS</h1>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 pb-0 sm:pb-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => {
              const ProjectWrapper = project.dribbbleLink ? 'a' : Link;
              const wrapperProps = project.dribbbleLink 
                ? { href: project.dribbbleLink, target: '_blank', rel: 'noopener noreferrer' }
                : { href: `/projects/${project.id}` };
              
              return (
                <ProjectWrapper key={project.id} {...wrapperProps} className="group block">
                  <div className={`bg-[#1a1d2e] rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 ${project.borderColor} hover:scale-105 transition-transform`}>
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                      <img src={project.image} alt={project.title} 
                           className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-400 mb-3">{project.category}</p>
                      <p className="text-gray-300 text-xs sm:text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {project.techs.map((tech: any, index: number) => (
                          <div key={index} className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center p-1">
                            {typeof tech === 'object' && tech.icon ? (
                              <img 
                                src={tech.icon} 
                                alt={tech.name} 
                                className="w-full h-full object-contain" 
                              />
                            ) : (
                              <span className="text-xs">{typeof tech === 'string' ? tech[0] : tech}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ProjectWrapper>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}