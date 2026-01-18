import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronRight, Linkedin, Facebook, Instagram, 
  Rocket, Users, Cpu, ArrowRight, ExternalLink 
} from "lucide-react";
import heroBg from "@assets/generated_images/abstract_futuristic_robotics_background_with_neon_nodes.png";
import rasLogo from "@assets/logo_ras-removebg-preview_(2)_1768729426847.png";
import aiOverlay from "@assets/generated_images/futuristic_ai_data_stream_overlay_texture.png";

// Gallery Images
import imgGreenEye from "@assets/stock_images/futuristic_robotic_e_c8f06005.jpg";
import imgBranch from "@assets/stock_images/group_of_engineering_371ca71d.jpg";
import imgMedia from "@assets/stock_images/media_team_camera_fi_e6c50aac.jpg";
import imgShowcase from "@assets/stock_images/futuristic_robot_exh_d71a7c20.jpg";
import imgWork from "@assets/stock_images/students_working_on__fbb8693f.jpg";
import imgFun from "@assets/stock_images/happy_university_stu_786df665.jpg";

const TEAM_DATA = {
  chair: {
    name: "Mohammad Malkawi",
    role: "Chair",
    linkedin: "https://www.linkedin.com/in/mohammad-h-malkawi-3264b5365"
  },
  viceChair: {
    name: "Rama Maqableh",
    role: "Vice Chair",
    linkedin: "https://www.linkedin.com/in/rama-maqableh-45124821b"
  },
  executive: [
    {
      name: "Nagham Zahrawi",
      role: "Media Team Leader",
      linkedin: "https://www.linkedin.com/in/nagham-al-zahrawi-ba71b337a"
    },
    {
      name: "Bushra Abu Alhija",
      role: "Secretary",
      linkedin: "https://www.linkedin.com/in/bushra-abu-alhija-a-863582381"
    },
    {
      name: "Baraa Alzoubi",
      role: "Treasurer",
      linkedin: "https://www.linkedin.com/in/baraa-alzoubi-65746a37b"
    }
  ],
  core: [
    {
      name: "Nour Khalaf",
      role: "Media Team",
      linkedin: "https://www.linkedin.com/in/nour-khalaf-0a7192361"
    },
    {
      name: "Serena Alazzam",
      role: "Webmaster",
      linkedin: "https://www.linkedin.com/in/serena-alazzam-9a8b59321"
    },
    {
      name: "Raghad Alzoubi",
      role: "Member Development",
      linkedin: "https://www.linkedin.com/in/raghad-alzoubi-9137a1384"
    }
  ]
};

const NAVBAR_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-md border-b border-white/10 py-2 shadow-lg shadow-primary/5" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection("#home")}>
            <img 
              src={rasLogo} 
              alt="RAS Jadara Logo" 
              className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAVBAR_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-gray-300 hover:text-white hover:neon-text transition-all uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </button>
            ))}
            <a
              href="#" // Placeholder for Google Form
              className="px-6 py-2 fusion-gradient text-white font-bold text-sm uppercase tracking-wider rounded-md hover:brightness-110 transition-all shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/50"
            >
              Join Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col gap-6"
          >
            {NAVBAR_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-2xl font-orbitron font-bold text-white hover:text-primary text-left"
              >
                {link.name}
              </button>
            ))}
            <a
              href="#"
              className="mt-4 px-6 py-4 fusion-gradient text-white font-bold text-center text-lg uppercase tracking-wider rounded-md shadow-lg shadow-primary/20"
            >
              Join Us Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Robotics Background"
            className="w-full h-full object-cover opacity-20 grayscale contrast-125 scale-105"
          />
          {/* AI Overlay Layer */}
          <div 
            className="absolute inset-0 opacity-10 mix-blend-screen"
            style={{ 
              backgroundImage: `url(${aiOverlay})`, 
              backgroundSize: 'cover',
              filter: 'hue-rotate(90deg)' 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,14,0.95)_100%)]" />
          
          {/* Animated Tech Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
          
          {/* Fusion Ambient Glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-primary tracking-widest uppercase">System Online</span>
            </div>
            
            <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
              WELCOME TO <br />
              <span className="fusion-text-gradient neon-text">
                RAS JADARA
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Where <span className="text-white font-medium">Artificial Intelligence</span> meets Robotics. 
              <br className="hidden md:block" />
              Empowering the next generation of engineers to innovate.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="#"
                className="w-full md:w-auto px-8 py-4 fusion-gradient text-white font-bold text-lg uppercase tracking-wider rounded-md hover:brightness-110 transition-all hover:shadow-[0_0_30px_rgba(229,9,20,0.6)] flex items-center justify-center gap-2 group"
              >
                Join Us Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => scrollToSection("#about")}
                className="w-full md:w-auto px-8 py-4 border border-white/20 hover:border-primary text-white font-bold text-lg uppercase tracking-wider rounded-md hover:bg-white/5 transition-all backdrop-blur-sm group"
              >
                Learn More
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary mt-1"></span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-orbitron text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-10 fusion-gradient block rounded-sm" />
                WHO WE ARE
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>
                  Started by nine passionate students, RAS Jadara is built on a foundation of curiosity and ambition.
                </p>
                <p>
                  We focus on <span className="text-primary font-medium">robotics, automation, and AI</span>, 
                  driven by a mission to empower students to explore new frontiers, learn cutting-edge skills, 
                  and innovate for the future.
                </p>
                <p>
                  Our goal is to turn theoretical ideas into real-world solutions that make a difference.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {[
                {
                  icon: Rocket,
                  title: "Innovation",
                  desc: "Pushing boundaries and creating new solutions.",
                  color: "text-primary"
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  desc: "Working together to achieve greatness.",
                  color: "text-purple-400"
                },
                {
                  icon: Cpu,
                  title: "Automation",
                  desc: "Building the future of efficient systems.",
                  color: "text-red-400"
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors group border-l-4 border-l-transparent hover:border-l-[#e50914]"
                >
                  <div className={`p-3 rounded-lg bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gradient-to-b from-background to-[#0f0f12]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">OUR TEAM</h2>
            <div className="w-32 h-1 fusion-gradient mx-auto rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Leadership */}
            <div className="grid md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
              {[TEAM_DATA.chair, TEAM_DATA.viceChair].map((leader) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  <div className="relative glass-card p-8 rounded-2xl border border-white/5 text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-24 h-24 mx-auto bg-slate-900 rounded-full mb-6 flex items-center justify-center border-2 border-primary shadow-lg shadow-primary/20 group-hover:shadow-primary/50 transition-all">
                       <span className="font-orbitron text-3xl font-bold text-primary">
                         {leader.name.charAt(0)}
                       </span>
                    </div>
                    <h3 className="font-orbitron text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">{leader.role}</p>
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                      <span className="text-sm">Connect on LinkedIn</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Executives */}
            <div>
               <h3 className="font-orbitron text-xl text-white/80 text-center mb-8 uppercase tracking-widest flex items-center justify-center gap-4">
                 <span className="w-8 h-px bg-white/20"></span>
                 Executive Board
                 <span className="w-8 h-px bg-white/20"></span>
               </h3>
               <div className="grid md:grid-cols-3 gap-6">
                {TEAM_DATA.executive.map((exec, idx) => (
                  <TeamCard key={exec.name} member={exec} delay={idx * 0.1} />
                ))}
               </div>
            </div>

            {/* Core Members */}
            <div>
               <h3 className="font-orbitron text-xl text-white/80 text-center mb-8 uppercase tracking-widest flex items-center justify-center gap-4">
                 <span className="w-8 h-px bg-white/20"></span>
                 Core Members
                 <span className="w-8 h-px bg-white/20"></span>
               </h3>
               <div className="grid md:grid-cols-3 gap-6">
                {TEAM_DATA.core.map((member, idx) => (
                  <TeamCard key={member.name} member={member} delay={idx * 0.1} />
                ))}
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-background relative">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-orbitron text-4xl font-bold text-white mb-12 text-center">
            GALLERY
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4 auto-rows-[250px]">
            {[
              { 
                title: "Innovation in Action", 
                subtitle: "GREEN EYE", 
                colSpan: "md:col-span-2", 
                img: imgGreenEye 
              },
              { 
                title: "Building Together", 
                subtitle: "BRANCH PIC", 
                colSpan: "", 
                img: imgBranch 
              },
              { 
                title: "Behind the Scenes", 
                subtitle: "MEDIA ON", 
                colSpan: "", 
                img: imgMedia 
              },
              { 
                title: "Future of Robotics", 
                subtitle: "Tech Showcase", 
                colSpan: "md:col-span-2", 
                img: imgShowcase 
              },
              { 
                title: "Minds at Work", 
                subtitle: "TIME WORK", 
                colSpan: "", 
                img: imgWork 
              },
              { 
                title: "Create Fun and Minds", 
                subtitle: "FUN", 
                colSpan: "md:col-span-3", 
                img: imgFun 
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className={`relative group overflow-hidden rounded-xl cursor-pointer ${item.colSpan}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />
                
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <span className="text-white text-xs font-bold uppercase tracking-wider mb-1 block">{item.subtitle}</span>
                    <h3 className="font-orbitron text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-[#050507] py-16 border-t border-white/5 relative overflow-hidden">
        {/* Footer glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-12">
            <h2 className="font-orbitron text-3xl font-bold text-white mb-8">CONNECT WITH US</h2>
            <div className="flex justify-center gap-6">
              {[
                { icon: Facebook, href: "https://www.facebook.com/share/1CXi1ZzDWL/", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/ieee_ras_ju", label: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/robot%E2%80%99s-and-automation-society-ieee-ras/", label: "LinkedIn" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
            <p>&copy; 2025 RAS Jadara. All rights reserved.</p>
            <p className="flex items-center gap-2 mt-4 md:mt-0">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              IEEE Professional Standard
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TeamCard({ member, delay }: { member: any, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-xl hover:bg-white/5 transition-all group hover:border-primary/50"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
          <span className="font-orbitron font-bold text-gray-400 group-hover:text-primary transition-colors">
            {member.name.charAt(0)}
          </span>
        </div>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
      </div>
      <h4 className="font-orbitron text-lg font-bold text-white truncate group-hover:text-primary transition-colors">{member.name}</h4>
      <p className="text-sm text-gray-400">{member.role}</p>
    </motion.div>
  );
}
