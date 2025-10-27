"use client";

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Dribbble, Github, Linkedin } from 'lucide-react';
import ScrambledText from '@/components/ui/scrambledtext';
import ScrollVelocity from '@/components/ui/scrollvelocity';

<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet" />



export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio',
      category: 'Frontend',
      description: 'Developed to showcase my expertise in UI/UX design and front-end development, this portfolio highlights my skills in Next.js, TypeScript, and Tailwind CSS through a modern, user-focused interface.',
       image: '/projectimages/Portfol.png',
      techs: [
        { name: 'Next.js', icon: '/images/skills/next.png' },
        { name: 'Tailwind CSS', icon: '/images/skills/tailwind.png' },
        { name: 'TypeScript', icon: '/images/skills/typeScript.png' },
        { name: 'Figma', icon: '/images/skills/figma.png' }
      ],
      borderColor: 'border-[#c4ff00]',
      demoLink: '#',
      githubLink: 'https://github.com/DeepakDayanandan1/Portfolio'
    },
    {
      id: 2,
      title: 'Houseboat Booking',
      category: 'UI/UX Design',
      description: 'The Houseboat Booking UI Design Template is built for speed and flexibility. Tweak colors, components, and layouts in seconds to match your brand, then launch a seamless reservation flow-from date picking. Ship faster, iterate easier, and give your guests a delightful booking experience.',
       image: '/projectimages/HSBooking.jpg',
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
       image: '/projectimages/Nexus-ELearning.png',
      techs: [
        { name: 'Figma', icon: '/images/skills/figma.png' },
        { name: 'Photoshop', icon: '/images/skills/photoshop.png' }
      ],
      borderColor: 'border-blue-500',
      dribbbleLink: 'https://dribbble.com/shots/26471587-Nexus-The-Learning-Platform'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
        {/* Infinite Background Text Marquee with ScrollVelocity */}
<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 space-y-4">
  {/* Line 1 - scroll left */}
  <ScrollVelocity
    texts={['DESIGNER UI DESIGNER UI DESIGNER  DESIGNER UI DESIGNER UI DESIGNER']} 
    velocity={50} 
    loop={true}       // loop infinitely
    className="text-[80px] sm:text-[120px] lg:text-[200px] font-bold leading-none whitespace-nowrap"
  />

  {/* Line 2 - scroll right */}
  <ScrollVelocity
    texts={['UX DEVELOPER FRONTEND DEVELOPER  UX DEVELOPER FRONTEND DEVELOPER']} 
    velocity={-60} 
    loop={true}
    className="text-[80px] sm:text-[120px] lg:text-[200px] font-bold leading-none whitespace-nowrap"
  />

  {/* Line 3 - scroll left */}
  <ScrollVelocity
    texts={['DESIGNER UI DESIGNER UI DESIGNER  DESIGNER UI DESIGNER UI DESIGNER']} 
    velocity={40} 
    loop={true}
    className="text-[80px] sm:text-[120px] lg:text-[200px] font-bold leading-none whitespace-nowrap"
  />

  {/* Line 4 - scroll right */}
  <ScrollVelocity
    texts={['UX DEVELOPER FRONTEND DEVELOPER  UX DEVELOPER FRONTEND DEVELOPER']} 
    velocity={-45} 
    loop={true}
    className="text-[80px] sm:text-[120px] lg:text-[200px] font-bold leading-none whitespace-nowrap"
  />
</div>

        
        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl w-full">
          <p className="text-base sm:text-lg mb-4 md:text-l text-gray-300 font-semibold">Hey There I'm</p>
          <h1 style={{ fontFamily: 'Humane, -apple-system, BlinkMacSystemFont, sans-serif' }} 
          className="text-[40px] sm:text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] font-black leading-none text-[#c4ff00] mb-2 sm:mb-4 md:mb-6 tracking-wider sm:tracking-wider md:tracking-wider">
            DEEPAK
          </h1>
          <p className="text-base sm:text-lg md:text-l text-gray-300 mb-6 sm:mb-6 px-4 font-semibold">
            Currently Studying Computer Science<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>and Engineering
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <a href="https://dribbble.com/deepak-dayanandan" target="_blank" rel="noopener noreferrer" 
               className="text-[#c4ff00] hover:text-white transition-colors">
              <Dribbble size={28} className="sm:w-8 sm:h-8" />
            </a>
            <a href="https://linkedin.com/in/deepak-dayanandan" target="_blank" rel="noopener noreferrer" 
               className="text-[#c4ff00] hover:text-white transition-colors">
              <Linkedin size={28} className="sm:w-8 sm:h-8" />
            </a>
            <a href="https://github.com/DeepakDayanandan1" target="_blank" rel="noopener noreferrer" 
               className="text-[#c4ff00] hover:text-white transition-colors">
              <Github size={28} className="sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-1 sm:py-2 md:py-3 px-1 sm:px-2">
  <div className="max-w-6xl mx-auto">
    <div className="bg-[#c4ff00] rounded-2xl sm:rounded-2xl p-6 sm:p-10 md:p-12 lg:p-16 ">
      <h2
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black mb-2 sm:mb-4 md:mb-4 text-center leading-none tracking-wider sm:tracking-wider md:tracking-wider"
        style={{ fontFamily: 'Humane, -apple-system, BlinkMacSystemFont, sans-serif' }}
      >
        About
      </h2>

      <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 text-justify max-w-6xl mx-auto">
        {/* Add ScrambledText effect here */}
        <ScrambledText
          className="scrambled-text-demo font-console"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >{" "}
       Hi there! I'm <span className="font-bold">Deepak Dayanandan</span>, a final-year Computer Science student and passionate UI/UX designer dedicated to crafting modern, intuitive digital experiences. Skilled in Figma, Photoshop, and design systems, I specialize in creating user-friendly interfaces that balance aesthetics with functionality — driven by usability, accessibility, and thoughtful design solutions.{" "}
        </ScrambledText>
      </p>  
    
      <div className="text-right">
        <Link 
          href="/about"
          className="inline-block bg-[#1a1d2e] text-[#c4ff00] px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl font-semibold hover:bg-black transition-colors text-sm sm:text-base"
        >
          More...
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Recent Projects Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-wider sm:tracking-wider md:tracking-wider text-left"
              style={{ fontFamily: 'Humane, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              Recent Projects
            </h2>

            <Link
              href="/projects"
              className="text-[#c4ff00] hover:text-white transition-colors flex items-center gap-2 text-sm sm:text-base font-medium sm:mt-2"
            >
              See all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} 
                    className="group block">
                <div className={`bg-[#1a1d2e] rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 ${project.borderColor} hover:scale-105 transition-transform`}>
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                    <img src={project.image} alt={project.title} 
                         className="w-full h-full object-contain bg-white" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3">{project.category}</p>
                    <p className="text-gray-300 text-xs sm:text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.techs.map((tech, index) => {
                        const src = typeof tech === "string" ? `/images/skills/${tech}.png` : tech.icon;
                        const alt = typeof tech === "string" ? tech : tech.name;
                        return (
                           <div key={index} className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center p-1">
                            <img src={src} alt={alt} className="w-full h-full object-contain" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#c4ff00] rounded-2xl sm:rounded-2xl p-6 sm:p-10 md:p-12 lg:p-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6">Get in Touch</h2>
            <p className="text-black text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
              If you are interested in my work or want<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>to provide feedback about this website,<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>I am open to exchanging ideas.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-4">
              <span className="text-black text-sm sm:text-base md:text-lg">Follow me on</span>
              <div className="flex gap-3 sm:gap-4">
                <a href="https://dribbble.com/deepak-dayanandan" target="_blank" rel="noopener noreferrer" 
               className="text-[#000000] hover:text-white transition-colors">
              <Dribbble size={28} className="sm:w-8 sm:h-8" />
            </a>
            <a href="https://linkedin.com/in/deepak-dayanandan" target="_blank" rel="noopener noreferrer" 
               className="text-[#000000] hover:text-white transition-colors">
              <Linkedin size={28} className="sm:w-8 sm:h-8" />
            </a>
              </div>
              <Link href="/contact" 
                    className="w-full sm:w-auto sm:ml-auto bg-[#1a1d2e] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-black transition-colors text-center text-sm sm:text-base">
                Contact Me →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}