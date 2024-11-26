import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, Briefcase, GraduationCap, User, MessageSquare } from 'lucide-react';
import TypeWriter from './animation.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 pb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            XXX XXX
          </h1>
          {/* <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Junior Full Stack Developer
          </p> */}
          <div className="text-xl md:text-2xl text-gray-300 flex items-center justify-center mb-8">
            <TypeWriter text="Junior Full Stack Developer" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Passionate about solving challenges with creative solutions. Skilled in blending
            design and technology to deliver impactful and elegant results.
          </p>
          <div className="flex gap-6 justify-center mb-16">
            <a href="https://github.com" target="_blank" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:000000@mail.com" target="_blank" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <ChevronDown size={32} className="absolute bottom-8 animate-bounce" />
      </header>

      {/* About Section */}
      <section className="py-20 px-4" id="about">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-blue-400" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <img
              src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
            />
            <p className="text-gray-300 leading-relaxed mb-6 text-justify">
              I am a motivated and dedicated Master's student in Information Technology,
              passionate about becoming a skilled Full Stack Developer. Despite being at
              the early stages of my career, I have already completed two meaningful
              projects: a personal portfolio website showcasing my skills and an open-source
              food delivery website project where I gained experience working with collaborative
              development tools and learned practical web development concepts.<br /><br />

              I am eager to improve my skills and build a strong foundation through hands-on learning
              and real-world projects. My approach to learning is practical and iterative: I enjoy
              tackling challenges, improving with each iteration, and transforming ideas into
              functional, user-friendly applications.<br /><br />

              With a strong work ethic and a commitment to continuous improvement, I am seeking
              opportunities to contribute to real-world projects, where I can learn from experienced
              professionals and add value through my creativity and enthusiasm.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-800/30" id="skills">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-blue-400 mt-1" />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Skills */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h3>
              <div className="space-y-4">
                {[
                  { skill: "React", level: 75 },
                  { skill: "JavaScript", level: 75 },
                  { skill: "Tailwind CSS", level: 75 },
                  { skill: "HTML", level: 90 }
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between">
                      <span className="text-white">{item.skill}</span>
                      {/* <span className="text-gray-400">{item.level}%</span> */}
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Backend</h3>
              <div className="space-y-4">
                {[
                  { skill: "Python", level: 80 },
                  { skill: "Node.js", level: 65 },
                  { skill: "MySQL", level: 70 },
                  { skill: "MongoDB", level: 65 }
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between">
                      <span className="text-white">{item.skill}</span>
                      {/* <span className="text-gray-400">{item.level}%</span> */}
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps Skills */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Docker", "Git"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Skills */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["VS Code", "Notion", "Figma", "Photoshop"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section className="py-20 px-4" id="experience">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="text-blue-400 mt-1" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                role: "Web Developer",
                company: "Personal Project ( Personal Portfolio Web )",
                period: "Nov 2024 - Present",
                description: "Designed and implemented a responsive, visually engaging personal portfolio website using React and Tailwind CSS, showcasing professional projects and skills."
              },
              {
                role: "Full Stack Developer",
                company: "Open Source Project ( Tomato Delivery Web )",
                period: "Jul 2024 - Sep 2024",
                description: "Developed a full-stack food delivery application using React, Node.js and MongoDB. Implemented responsive design, user authentication, Stripe payment integration, and dynamic order tracking features, providing a seamless user experience."
              }
            ].map((job) => (
              <div key={job.role} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-blue-400">{job.role}</h3>
                <p className="text-gray-300 mt-1">{job.company}</p>
                <p className="text-gray-400 text-sm mt-1">{job.period}</p>
                <p className="text-gray-300 mt-4 text-justify">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-gray-800/30" id="education">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="text-blue-400 mt-1" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                major: "Master of Information Technology",
                uni: "University of Wollongong",
                period: "Jul 2024 - Present"
              },
              {
                major: "Bachelor of Industrial Design",
                uni: "China University of Mining and Technology",
                period: "Sep 2020 - Jun 2024"
              }
            ].map((study) => (
              <div key={study.major} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-blue-400">{study.major}</h3>
                <p className="text-gray-300 mt-1">{study.uni}</p>
                <p className="text-gray-400 text-sm mt-1">{study.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <MessageSquare className="text-blue-400 mt-1" />
            <h2 className="text-3xl font-bold">Contact</h2>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new jobs, projects and opportunities.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:000000@mail.com" target="_blank"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Mail size={20} />
                000000@mail.com
              </a>
              <a
                href="https://www.linkedin.com" target="_blank"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn Profile
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400">
        <div className="flex flex-wrap justify-center gap-4">
          <p>© {new Date().getFullYear()} XXX XXX.</p>
          <p>All rights reserved.</p>
          <p>Do not share my personal information.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
