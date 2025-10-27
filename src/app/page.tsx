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
      description: 'Developed to showcase my skills in web development, my portfolio website exemplifies proficiency in technologies such as ReactJS, CSS, and',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      techs: ['React', 'JavaScript', 'CSS', 'Figma'],
      borderColor: 'border-green-500'
    },
    {
      id: 2,
      title: 'Weather App',
      category: 'Full Stack',
      description: 'Developed a full-stack weather app using NodeJS/ Express for server-side logic and ReactJS/Handlebars for interactive frontend, delivering real-time weather data',
      image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&q=80',
      techs: ['React', 'JavaScript', 'CSS', 'Figma'],
      borderColor: 'border-blue-500'
    },
    {
      id: 3,
      title: 'Cred Clone',
      category: 'Frontend',
      description: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      techs: ['React', 'JavaScript', 'CSS', 'Figma'],
      borderColor: 'border-purple-500'
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
          <h1 style={{ fontFamily: 'Humane, -apple-system, BlinkMacSystemFont, sans-serif' }} className="text-[60px] sm:text-[200px] md:text-[160px] lg:text-[200px] font-black leading-none text-[#c4ff00] mb-0 sm:mb-1 leading-none tracking-tight sm:tracking-normal md:tracking-wide">
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
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">
    <div className="bg-[#c4ff00] rounded-2xl sm:rounded-2xl p-6 sm:p-10 md:p-12 lg:p-16 ">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 md:mb-8 ml-16 sm:ml-18 md:ml-20">
        About
      </h2>
      <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 text-justify">
        {/* Add ScrambledText effect here */}
        <ScrambledText
          className="scrambled-text-demo font-console"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >{" "}
        Hi there! I'm <span className="font-bold">Deepak Dayanandan</span>, a final-year Computer Science student at Carmel College of Engineering and Technology with a passion for crafting user-centric experiences.
        
        I specialize in UI/UX design, front-end development, and graphic design, with expertise in HTML, CSS, JavaScript, React, Tailwind CSS, Python, and C.

        I thrive on collaboration and bring experience in agile scrum methodologies. Beyond coding, I enjoy photography, graphic design, and exploring music. Let's connect and bring your digital visions to life.{" "}
        </ScrambledText>
      </p>

      <Link 
        href="/about"
        className="inline-block bg-[#1a1d2e] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-black transition-colors text-sm sm:text-base ml-204 sm:ml-206 md:ml-208"
      >
        More...
      </Link>
    </div>
  </div>
</section>


      {/* Recent Projects Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Recent Projects</h2>
            <Link href="/projects" 
                  className="text-[#c4ff00] hover:underline flex items-center gap-2 text-sm sm:text-base">
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
                         className="w-full h-full object-cover opacity-80" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3">{project.category}</p>
                    <p className="text-gray-300 text-xs sm:text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.techs.map((tech, index) => (
                        <div key={index} className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                          <span className="text-xs">{tech[0]}</span>
                        </div>
                      ))}
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