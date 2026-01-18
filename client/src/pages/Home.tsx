import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronRight, Linkedin, Facebook, Instagram, 
  Rocket, Users, Cpu, ArrowRight, ExternalLink 
} from "lucide-react";
import heroBg from "@assets/generated_images/abstract_futuristic_robotics_background_with_neon_nodes.png";

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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <Cpu className="text-background w-5 h-5" />
            </div>
            <span className="font-orbitron font-bold text-xl tracking-wider text-white">
              RAS <span className="text-primary">Jadara</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAVBAR_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </button>
            ))}
            <a
              href="#" // Placeholder for Google Form
              className="px-6 py-2 bg-primary text-background font-bold text-sm uppercase tracking-wider rounded hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]"
            >
              Join Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
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
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col gap-6"
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
              className="mt-4 px-6 py-4 bg-primary text-background font-bold text-center text-lg uppercase tracking-wider rounded"
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
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.8)_100%)]" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
              WELCOME TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 neon-text">
                RAS JADARA
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Where innovation meets robotics. Empowering students to explore, learn, and innovate.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="w-full md:w-auto px-8 py-4 bg-primary text-background font-bold text-lg uppercase tracking-wider rounded hover:bg-cyan-400 transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] flex items-center justify-center gap-2 group"
              >
                Join Us Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => scrollToSection("#about")}
                className="w-full md:w-auto px-8 py-4 border border-white/20 hover:border-primary text-white font-bold text-lg uppercase tracking-wider rounded hover:bg-primary/10 transition-all backdrop-blur-sm"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50"
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-orbitron text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary block" />
                WHO WE ARE
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>
                  Started by nine passionate students, RAS Jadara is built on a foundation of curiosity and ambition.
                </p>
                <p>
                  We focus on <span className="text-primary font-medium">robotics, automation, and technology</span>, 
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
                  color: "text-purple-400"
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  desc: "Working together to achieve greatness.",
                  color: "text-primary"
                },
                {
                  icon: Cpu,
                  title: "Automation",
                  desc: "Building the future of efficient systems.",
                  color: "text-emerald-400"
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors group border-l-4 border-l-transparent hover:border-l-primary"
                >
                  <div className={`p-3 rounded-lg bg-white/5 ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gradient-to-b from-background to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">OUR TEAM</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
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
                  <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  <div className="relative glass-card p-8 rounded-2xl border border-primary/20 text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full mb-6 flex items-center justify-center border-2 border-primary">
                       <span className="font-orbitron text-2xl font-bold text-primary">
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
               <h3 className="font-orbitron text-xl text-gray-400 text-center mb-8 uppercase tracking-widest">Executive Board</h3>
               <div className="grid md:grid-cols-3 gap-6">
                {TEAM_DATA.executive.map((exec, idx) => (
                  <TeamCard key={exec.name} member={exec} delay={idx * 0.1} />
                ))}
               </div>
            </div>

            {/* Core Members */}
            <div>
               <h3 className="font-orbitron text-xl text-gray-400 text-center mb-8 uppercase tracking-widest">Core Members</h3>
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
      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto px-6">
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
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-all duration-300">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 block">{item.subtitle}</span>
                    <h3 className="font-orbitron text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-slate-950 py-16 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
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
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-background transition-all hover:scale-110"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
            <p>&copy; 2025 RAS Jadara. All rights reserved.</p>
            <p className="flex items-center gap-2 mt-4 md:mt-0">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
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
      className="glass-card p-6 rounded-xl hover:bg-white/5 transition-all group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
          <span className="font-orbitron font-bold text-gray-400 group-hover:text-primary transition-colors">
            {member.name.charAt(0)}
          </span>
        </div>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
      </div>
      <h4 className="font-orbitron text-lg font-bold text-white truncate">{member.name}</h4>
      <p className="text-sm text-gray-400">{member.role}</p>
    </motion.div>
  );
}
