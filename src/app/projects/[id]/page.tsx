"use client";


import { useParams, useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Monitor, Github } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();

  const projects: { [key: string]: any } = {
    '1': {
      title: 'Portfolio',
      category: 'Frontend',
      description: 'This project is a fully responsive portfolio website developed using Next.js, Tailwind CSS, and TypeScript. It serves as a personal showcase of my skills, projects, and creative work, featuring a modern UI, smooth animations, and intuitive navigation. The website is designed with a focus on performance, accessibility, and user experience, allowing visitors to seamlessly explore projects, view details, and download my resume.',
      image: '/projectimages/Portfol.png',
      techs: [
        { name: 'Next.js', icon: '/images/skills/next.png' },
        { name: 'Tailwind CSS', icon: '/images/skills/tailwind.png' },
        { name: 'TypeScript', icon: '/images/skills/typescript.png' },
        { name: 'Figma', icon: '/images/skills/figma.png' }
      ],
      features: [
        {
          title: 'Responsive Design:',
          description: 'The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.'
        },
        {
          title: 'Modern UI/UX:',
          description: 'The website features a modern and clean user interface, providing a pleasant user experience. It uses a consistent color scheme and typography throughout the site.'
        }
      ],
      borderColor: 'border-[#c4ff00]',  
      demoLink: '#',
      githubLink: 'https://github.com/DeepakDayanandan1/Portfolio'
    },
    '2': {
      title: 'Houseboat Booking',
      category: 'UI/UX Design',
      description: 'The Houseboat Booking UI Design Template is built for speed and flexibility. Tweak colors, components, and layouts in seconds to match your brand, then launch a seamless reservation flow-from date picking. Ship faster, iterate easier, and give your guests a delightful booking experience.',
      image: '/projectimages/HSBooking.jpg',
      techs: [
        { name: 'Figma', icon: '/images/skills/figma.png' },
        { name: 'Photoshop', icon: '/images/skills/photoshop.png' }
      ],
      features: [
        {
          title: 'Responsive Design:',
          description: 'The template is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.'
        },
        {
          title: 'Booking Flow:',
          description: 'Intuitive booking flow with date picking, guest selection, and payment integration for a smooth user experience.'
        }
      ],
      borderColor: 'border-green-500',
      dribbbleLink: 'https://dribbble.com/shots/26477293-HouseBoat-Booking-Web-Application'
    },
    '3': {
      title: 'Nexus-The Learning Platform',
      category: 'UI/UX Design',
      description: 'A comprehensive learning platform designed to provide an intuitive and engaging educational experience. Features modern UI/UX design with focus on user accessibility and learning efficiency.',
      image: '/projectimages/Nexus-ELearning.png',
      techs: [
        { name: 'Figma', icon: '/images/skills/figma.png' },
        { name: 'Photoshop', icon: '/images/skills/photoshop.png' }
      ],
      features: [
        {
          title: 'Modern Learning Interface:',
          description: 'Designed with modern UI principles to create an engaging and intuitive learning experience.'
        },
        {
          title: 'User-Centered Design:',
          description: 'Focused on accessibility and user experience to ensure effective learning outcomes.'
        }
      ],
      borderColor: 'border-blue-500',
      dribbbleLink: 'https://dribbble.com/shots/26471587-Nexus-The-Learning-Platform'
    },
    '4': {
      title: 'Sales Forecasting System',
      category: 'Full Stack',
      description: 'Developed a sales forecasting system using machine learning algorithms to predict future sales trends based on historical data.',
      image: '/projectimages/SF.jpg',
      techs: [
        { name: 'Next.js', icon: '/images/skills/next.png' },
        { name: 'Python', icon: '/images/skills/python.png' },
        { name: 'Figma', icon: '/images/skills/figma.png' }
      ],
      features: [
        {
          title: 'ML-Powered Sales Prediction:',
          description: 'Utilizes machine learning algorithms to forecast future sales trends with precision and reliability.'
        },
        {
          title: 'Confidence & Accuracy Metrics:',
          description: 'Provides detailed confidence levels and accuracy insights to help evaluate prediction performance.'
        },
        {
          title: 'Modern Dashboard Interface:',
          description: 'Features a clean, data-driven dashboard for visualizing results and insights in a user-friendly layout.'
        },
      ],
      borderColor: 'border-purple-500',
      demoLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7379503792054194176/',
      githubLink: 'https://github.com/DeepakDayanandan1/Sales-Forecasting'
    }
  };

  const project = projects[params.id as string] || projects['1'];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Back Button */}
      <section className="pt-24 sm:pt-32 pb-4 sm:pb-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white hover:text-[#c4ff00] transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>
        </div>
      </section>

      {/* Project Header */}
      <section className="pb-8 sm:pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Project Image */}
            <div className={`rounded-2xl overflow-hidden border-4 ${project.borderColor || 'border-blue-500'}`}>
              <img src={project.image} alt={project.title} className="w-full h-auto object-contain bg-white" />
            </div>

            {/* Project Info */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
              <p className="text-[#c4ff00] text-xl mb-6">{project.category}</p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
                <div className="flex gap-4 flex-wrap">
                  {project.techs.map((tech: any, index: number) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div className="w-14 h-14 bg-[#1a1d2e] rounded-xl flex items-center justify-center p-2">
                        {tech.icon.startsWith('/') ? (
                          <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                        ) : (
                          <span className="text-2xl">{tech.icon}</span>
                        )}
                      </div>
                      <span className="text-sm text-gray-400">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {project.dribbbleLink ? (
                  <a 
                    href={project.dribbbleLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#c4ff00] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#b3e600] transition-colors"
                  >
                    <Monitor size={20} />
                    View on Dribbble
                  </a>
                ) : (
                  <>
                    <a 
                      href={project.demoLink || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#c4ff00] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#b3e600] transition-colors"
                    >
                      <Monitor size={20} />
                      Demo
                    </a>
                    <a 
                      href={project.githubLink || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#c4ff00] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#b3e600] transition-colors"
                    >
                      <Github size={20} />
                      GitHub
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-[#c4ff00]">Main Features</h2>
          <div className="space-y-6">
            {project.features.map((feature: any, index: number) => (
              <div key={index} className="bg-[#1a1d2e] rounded-2xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
