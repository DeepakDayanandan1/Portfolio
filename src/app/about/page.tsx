"use client";

import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Download, Instagram, Github, LinkedinIcon, Dribbble } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Figma', img: '/images/skills/figma.png', icon: '🎨', color: 'text-pink-500' },
    { name: 'Photoshop', img: '/images/skills/photoshop.png', icon: '🔷', color: 'text-green-600' },
    { name: 'Canva', img: '/images/skills/canva.png', icon: '🔷', color: 'text-green-600' },
    { name: 'DaVinci Resolve', img: '/images/skills/davinci.png', icon: '🔷', color: 'text-green-600' },
    { name: 'Tailwind', img: '/images/skills/tailwind.png', icon: '🌊', color: 'text-cyan-500' },
    { name: 'C', img: '/images/skills/c.png', icon: '⚡', color: 'text-blue-400' },
    { name: 'Python', img: '/images/skills/python.png', icon: '🐍', color: 'text-yellow-400' },
    { name: 'Next.js', img: '/images/skills/next.png', icon: '⚛️', color: 'text-cyan-400' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Header Section */}
      <section className="pt-16 sm:pt-20 pb-2 sm:pb-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1a1d2e] rounded-2xl py-1 sm:py-2 ">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-[#c4ff00] text-center leading-none tracking-normal sm:tracking-wide md:tracking-wider"
              style={{ fontFamily: 'Humane, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              ABOUT
            </h2>
          </div>
        </div>
      </section>


      {/* Main Content Section - Image + Bio as one card */}
      <section className="px-4 sm:px-6 pb-2 sm:pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1a1d2e] rounded-2xl sm:rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-12">
            
            {/* Profile Image */}
            <div className="flex-shrink-0 w-100 sm:w-125">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-gray-700">
                <img 
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Bio Section */}
            <div className="flex-1 flex flex-col justify-between">
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 text-justify">  
                I am a Computer Science Engineering student at 
                <span className="text-[#c4ff00]"> Carmel College of Engineering and Technology (KTU)</span> with a deep passion for <span className="text-[#c4ff00]"> UI/UX design </span> 
                 and creating meaningful digital experiences. I focus on crafting  <span className="text-[#c4ff00]"> intuitive, accessible, and visually engaging interfaces</span> that merge creativity with usability. My design process emphasizes 
                 user research, interaction flow, and accessibility to ensure every experience feels natural and impactful.
                <br/><br/>

                Alongside design, I specialize in 
                <span className="text-[#c4ff00]"> front-end development </span> 
                using <span className="text-[#c4ff00]">Next.js</span> and modern frameworks to bring concepts to life 
                with precision and performance. With a solid foundation in 
                <span className="text-[#c4ff00]"> C</span> and <span className="text-[#c4ff00]"> Python</span>, 
                I bridge the gap between design and development—ensuring that every product 
                not only looks great but functions seamlessly across devices.
                <br/><br/>

                Beyond design and code, I'm passionate about exploring 
                <span className="text-[#c4ff00]"> user psychology, interaction patterns,</span> and 
                <span className="text-[#c4ff00]"> usability testing </span> 
                to refine user journeys. I constantly experiment with  emerging design systems and frameworks to stay aligned with evolving industry trends.
                <br/><br/>

                I thrive in collaborative environments that follow 
                <span className="text-[#c4ff00]"> Agile and iterative workflows</span>, 
                where designers, developers, and product thinkers work together 
                to build purposeful, 
                <span className="text-[#c4ff00]"> user-centered solutions</span>.
              </p>


              <div className="flex gap-4">
                {/* View Button */}
                <a
                  href="/Deepak_Dayanandan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-[#c4ff00] text-[#c4ff00] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#c4ff00] hover:text-black transition-colors text-sm sm:text-base"
                >
                  View Resume
                </a>
                {/* Download Button */}
                <a
                  href="/Deepak_Dayanandan_Resume.pdf"
                  download="Deepak_Dayanandan_Resume.pdf"
                  className="flex items-center gap-3 bg-[#c4ff00] text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#b3e600] transition-colors text-sm sm:text-base"
                >
                  <Download size={18} className="sm:w-5 sm:h-5" />
                  Download Resume
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills + Connect Section */}
      <section className="px-4 sm:px-6 pb-0 sm:pb-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-4">
          
          {/* Skills Card */}
          <div className="bg-[#1a1d2e] rounded-2xl sm:rounded-2xl p-4 sm:p-6 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-[#c4ff00]">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#10121a] rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                    <Image
                      src={skill.img}
                      alt={skill.name}
                      width={skill.name === 'Canva' ? 60 : 44}
                      height={skill.name === 'Canva'? 60 : 44}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm sm:text-base text-gray-400">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connect Card */}
          <div className="bg-[#1a1d2e] rounded-2xl sm:rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#c4ff00]">Let's Connect</h2>
            <div className="flex gap-6 sm:gap-8">
              <a href="https://www.instagram.com/deep.4k__?igsh=N3VoMjF5aGRyaTZ0&utm_source=qr" className="text-[#c4ff00] hover:text-white transition-colors"><Instagram size={32} /></a>
              <a href="https://dribbble.com/deepak-dayanandan" className="text-[#c4ff00] hover:text-white transition-colors"><Dribbble size={32} /></a>
              <a href="https://linkedin.com/in/deepak-dayanandan" className="text-[#c4ff00] hover:text-white transition-colors"><LinkedinIcon size={32} /></a>
              <a href="https://github.com/DeepakDayanandan1" className="text-[#c4ff00] hover:text-white transition-colors"><Github size={32} /></a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
