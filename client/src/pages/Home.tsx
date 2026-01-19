import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Menu, X, ChevronRight, Linkedin, Facebook, Instagram,
  Rocket, Users, Cpu, ArrowRight, ExternalLink, CircuitBoard, MonitorSmartphone, Share2, Bot,
  Calendar, Trophy, Flag
} from "lucide-react";
import heroBg from "@assets/generated_images/abstract_futuristic_robotics_background_with_neon_nodes.png";
import rasLogo from "@assets/logo_ras-removebg-preview_(2)_1768729426847.png";
import aiOverlay from "@assets/generated_images/futuristic_ai_data_stream_overlay_texture.png";

// Team Images
import imgMohammad from "@assets/محمد_1768730747584.jpg";
import imgRama from "@assets/راما_1768730752107.jpeg";
import imgNour from "@assets/نور_1768730747585.jpeg";
import imgSerena from "@assets/سيرينا_1768730752108.jpeg";
import imgNagham from "@assets/Screenshot_2026-01-18_131226_1768731167009.png";
import imgBaraa from "@assets/image_1768733528198.png";

// RoboCraft Images
import imgRoboCraftWinners from "@assets/IMG_0608_1768731336994.JPG";
import imgRoboCraftBanner from "@assets/بنر_1768731492170.png";

// Gallery Images
import imgMarc from "@assets/Screenshot_2025-12-27_153052_1768733912431.png";
import imgGroupStairs from "@assets/DSC_0272_NEF_1768733582530.JPG";
import imgStudio from "@assets/77182938-b2c4-4a98-8539-3b32ccf5e3b6_1768733861014.JPG";
import imgGroupOutdoor from "@assets/IMG_0123_1768733861014.JPG";
import imgCertificates from "@assets/IMG_0618_1768733861015.JPG";
import imgStage from "@assets/e0de51e4-5a47-44d5-9cc2-04f0fd81fde8_1768733861015.JPG";
import imgAudience from "@assets/DSC_0251_NEF_1768734007285.JPG";

const TEAM_DATA = {
  chair: {
    name: "Mohammad Malkawi",
    role: "Chair",
    linkedin: "https://www.linkedin.com/in/mohammad-h-malkawi-3264b5365",
    image: imgMohammad
  },
  viceChair: {
    name: "Rama Maqableh",
    role: "Vice Chair",
    linkedin: "https://www.linkedin.com/in/rama-maqableh-45124821b",
    image: imgRama
  },
  executive: [
    {
      name: "Nagham Zahrawi",
      role: "Media Team Leader",
      linkedin: "https://www.linkedin.com/in/nagham-al-zahrawi-ba71b337a",
      image: imgNagham
    },
    {
      name: "Bushra Abu Alhija",
      role: "Secretary",
      linkedin: "https://www.linkedin.com/in/bushra-abu-alhija-a-863582381"
    },
    {
      name: "Baraa Alzoubi",
      role: "Treasurer",
      linkedin: "https://www.linkedin.com/in/baraa-alzoubi-65746a37b",
      image: imgBaraa
    }
  ],
  core: [
    {
      name: "Nour Khalaf",
      role: "Media Team",
      linkedin: "https://www.linkedin.com/in/nour-khalaf-0a7192361",
      image: imgNour
    },
    {
      name: "Serena Alazzam",
      role: "Webmaster",
      linkedin: "https://www.linkedin.com/in/serena-alazzam-9a8b59321",
      image: imgSerena
    },
    {
      name: "Raghad Alzoubi",
      role: "Member Development",
      linkedin: "https://www.linkedin.com/in/raghad-alzoubi-9137a1384"
    }
  ]
};

const TIMELINE_DATA = [
  {
    date: "16 / 11 / 2025",
    title: "RAS Jadara Established",
    description: "Branch Founded",
    icon: Flag,
    color: "text-primary"
  },
  {
    date: "6 / 1 / 2026",
    title: "RoboCraft",
    description: "National Robotics & AI Competition – Jordan",
    icon: Trophy,
    color: "text-secondary",
    image: imgRoboCraftWinners,
    banner: imgRoboCraftBanner
  }
];

const NAVBAR_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Team", href: "#team" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white font-space relative">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Background Motion Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -1000],
            opacity: [0, 0.2, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
          className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(229,9,20,0.1)_50%,transparent_100%)] w-px left-[10%]"
        />
        <motion.div
          animate={{
            y: [0, -1500],
            opacity: [0, 0.15, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
            delay: 5
          }}
          className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(97,17,106,0.1)_50%,transparent_100%)] w-px right-[15%]"
        />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md border-b border-white/10 py-2 shadow-lg shadow-primary/5" : "bg-transparent py-4"
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection("#home")}>
            <img
              src={rasLogo}
              alt="RAS Jadara Logo"
              className="h-24 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
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
              href="https://www.instagram.com/ieee_ras_ju/"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://www.instagram.com/ieee_ras_ju/"
              target="_blank"
              rel="noopener noreferrer"
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
                href="https://www.instagram.com/ieee_ras_ju/"
                target="_blank"
                rel="noopener noreferrer"
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
                  Started by nine passionate students with ADVISOR Dr. Nada aljaarrah, RAS Jadara is built on a foundation of curiosity and ambition.
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

      {/* Timeline Section */}
      <section id="timeline" className="py-24 bg-[#08080a] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl font-bold text-white mb-4">MILESTONES</h2>
            <div className="w-24 h-1 fusion-gradient mx-auto rounded-full" />
            <p className="mt-4 text-gray-400 font-light">OUR JOURNEY OF INNOVATION</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white/10">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full bg-gradient-to-b from-primary via-secondary to-primary"
              />
            </div>

            <div className="space-y-12">
              {TIMELINE_DATA.map((item: any, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.3 }}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}
                >
                  {/* Empty space for alignment */}
                  <div className="hidden md:block w-5/12" />

                  {/* Center Node */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-[#08080a] border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(229,9,20,0.5)] flex-shrink-0">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group overflow-hidden">
                      <div className={`flex items-center gap-3 mb-2 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                        <span className="font-mono text-sm text-gray-400">{item.date}</span>
                      </div>
                      <h3 className="font-orbitron text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">
                        {item.description}
                      </p>

                      {/* Milestone Images (Special for RoboCraft) */}
                      {item.image && (
                        <div className="mt-4 space-y-3">
                          <div className="rounded-lg overflow-hidden border border-white/10 relative h-48 w-full group/img">
                            <img
                              src={item.image}
                              alt="RoboCraft Winners"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                              <span className="text-white font-orbitron text-sm font-bold bg-primary/80 px-3 py-1 rounded">Winners</span>
                            </div>
                          </div>
                          {item.banner && (
                            <div className="rounded-lg overflow-hidden border border-white/10 h-24 w-full">
                              <img
                                src={item.banner}
                                alt="RoboCraft Banner"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 relative overflow-hidden bg-[#0a0a0e]">
        {/* Robotics Circuit Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(229,9,20,0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />
          <svg className="absolute top-0 right-0 w-1/3 h-full opacity-30 text-primary" viewBox="0 0 100 200" preserveAspectRatio="none">
            <path d="M50,0 L50,50 L90,90 L90,200" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M30,0 L30,40 L70,80 L70,200" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="90" cy="90" r="2" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 text-primary/80 uppercase tracking-widest text-xs font-bold">
              <Bot size={16} />
              <span>Our Engineers</span>
            </div>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">LEADERSHIP TEAM</h2>
            <div className="w-32 h-1 fusion-gradient mx-auto rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto space-y-16">

            {/* Leadership (Chair & Vice) */}
            <div className="grid md:grid-cols-2 gap-8 justify-center max-w-3xl mx-auto">
              {[TEAM_DATA.chair, TEAM_DATA.viceChair].map((leader, idx) => (
                <TeamCard key={leader.name} member={leader} delay={idx * 0.1} isLeader />
              ))}
            </div>

            {/* Executives */}
            <div>
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-24" />
                <h3 className="font-orbitron text-xl text-white/90 uppercase tracking-widest flex items-center gap-2">
                  <MonitorSmartphone size={18} className="text-secondary" />
                  Executive Board
                </h3>
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-24" />
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {TEAM_DATA.executive.map((exec, idx) => (
                  <TeamCard key={exec.name} member={exec} delay={idx * 0.1} />
                ))}
              </div>
            </div>

            {/* Core Members */}
            <div>
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-24" />
                <h3 className="font-orbitron text-xl text-white/90 uppercase tracking-widest flex items-center gap-2">
                  <Share2 size={18} className="text-primary" />
                  Core Members
                </h3>
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-24" />
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {TEAM_DATA.core.map((member, idx) => (
                  <TeamCard key={member.name} member={member} delay={idx * 0.1} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-[#050507] relative border-t border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.2)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.2)_75%,rgba(0,0,0,0.2)),linear-gradient(45deg,rgba(0,0,0,0.2)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.2)_75%,rgba(0,0,0,0.2))] bg-[size:20px_20px] opacity-10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-16">
            <CircuitBoard className="text-primary mb-4 w-10 h-10 opacity-80" />
            <h2 className="font-orbitron text-4xl font-bold text-white mb-2 text-center">
              GALLERY
            </h2>
            <p className="text-gray-400 font-light tracking-wide">CAPTURING INNOVATION IN MOTION</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Meet Marc",
                subtitle: "OUR ROBOT",
                type: "square",
                img: imgMarc
              },
              {
                title: "RAS Family",
                subtitle: "COMMUNITY",
                type: "landscape",
                img: imgGroupStairs
              },
              {
                title: "Media Production",
                subtitle: "BEHIND THE SCENES",
                type: "square",
                img: imgStudio
              },
              {
                title: "Recognition",
                subtitle: "ACHIEVEMENTS",
                type: "square",
                img: imgCertificates
              },
              {
                title: "Team Spirit",
                subtitle: "TOGETHER",
                type: "square",
                img: imgGroupOutdoor
              },
              {
                title: "Grand Events",
                subtitle: "IMPACT",
                type: "landscape",
                img: imgStage
              },
              {
                title: "Engaged Community",
                subtitle: "EVENTS",
                type: "square",
                img: imgAudience
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className={`relative group overflow-hidden rounded-md border border-white/10 cursor-pointer 
                  ${item.type === 'landscape' ? 'md:col-span-2' : 'md:col-span-1'} 
                  h-64 md:h-72 lg:h-80`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.img})` }}
                />

                {/* Tech Grid Overlay on Hover */}
                <div className="absolute inset-0 bg-[#0a0a0e]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-[linear-gradient(transparent_98%,rgba(0,240,255,0.2)_100%),linear-gradient(90deg,transparent_98%,rgba(0,240,255,0.2)_100%)] bg-[size:40px_40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-secondary opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="inline-block px-2 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
                      {item.subtitle}
                    </div>
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

function TeamCard({ member, delay, isLeader = false }: { member: any, delay: number, isLeader?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className={`glass-card relative overflow-hidden rounded-xl hover:shadow-[0_0_20px_rgba(229,9,20,0.15)] transition-all group duration-300 border border-white/5 hover:border-primary/40 group
        ${isLeader ? 'p-8 min-h-[320px]' : 'p-6 min-h-[280px]'}`}
    >
      {/* Card Tech Decoration */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent -mr-8 -mt-8 rounded-full blur-md group-hover:bg-primary/20 transition-colors" />

      <div className="flex flex-col items-center text-center h-full relative z-10">
        <div className={`relative mb-6 rounded-full p-1 fusion-gradient group-hover:scale-105 transition-transform duration-300
           ${isLeader ? 'w-28 h-28' : 'w-20 h-20'}`}>
          <div className="w-full h-full rounded-full bg-[#15151a] flex items-center justify-center overflow-hidden relative">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              /* Initials Fallback */
              <span className={`font-orbitron font-bold text-white group-hover:text-primary transition-colors
                 ${isLeader ? 'text-3xl' : 'text-xl'}`}>
                {member.name.charAt(0)}
              </span>
            )}
          </div>

          {/* LinkedIn Overlay Button */}
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 rounded-full bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm cursor-pointer"
          >
            <Linkedin className="text-white w-6 h-6 hover:scale-110 transition-transform" />
          </a>
        </div>

        <div className="flex-grow">
          <h4 className={`font-orbitron font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:fusion-gradient transition-all
            ${isLeader ? 'text-2xl' : 'text-lg'}`}>
            {member.name}
          </h4>
          <div className="h-0.5 w-12 bg-white/10 mx-auto mb-3 group-hover:w-20 group-hover:bg-primary transition-all duration-300" />
          <p className="text-primary/90 font-medium tracking-wide text-sm uppercase">{member.role}</p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  );
}
