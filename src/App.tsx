/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Youtube, 
  Video, 
  Briefcase, 
  Heart, 
  Palette, 
  ChevronRight, 
  Mail, 
  Instagram, 
  Twitter, 
  Menu, 
  X,
  Play,
  CheckCircle2,
  Scissors,
  Layers,
  Music,
  Activity
} from 'lucide-react';

const SERVICES = [
  {
    title: "YouTube Long-Form",
    description: "Engaging storytelling and pacing designed to maximize retention and watch time.",
    icon: <Youtube className="w-8 h-8 text-accent-cyan" />,
  },
  {
    title: "Short-Form Reels & TikTok",
    description: "High-energy, fast-paced edits that stop the scroll and go viral.",
    icon: <Video className="w-8 h-8 text-accent-purple" />,
  },
  {
    title: "Brand & Corporate",
    description: "Professional visuals that communicate your brand's message with clarity and impact.",
    icon: <Briefcase className="w-8 h-8 text-accent-cyan" />,
  },
  {
    title: "Social Media Strategy",
    description: "Data-driven content planning to boost your presence across all social platforms.",
    icon: <Instagram className="w-8 h-8 text-accent-purple" />,
  },
  {
    title: "Color Grading & Motion",
    description: "Advanced color correction and dynamic motion graphics to elevate production value.",
    icon: <Palette className="w-8 h-8 text-accent-cyan" />,
  },
];

const PORTFOLIO_VIDEOS = [
  // Using some representative IDs from the general niche or high quality placeholders
  // Since I can't dynamically pull from the playlist URL without API, I'll use these
  "https://www.youtube.com/embed/videoseries?list=PLFRBwrMbKx8dEjrpdp7u5V0aRZA0JphLH",
  "https://www.youtube.com/embed/videoseries?list=PLFRBwrMbKx8fnWd4qjtcOX4VsfCAablCU",
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background selection:bg-accent-cyan selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter text-white"
          >
            SAGEN<span className="text-accent-cyan">.</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Work', 'Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-white/70 hover:text-accent-cyan transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {['Home', 'Work', 'Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-2xl font-bold text-white hover:text-accent-cyan transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/75 z-10" />
          <iframe 
            className="w-full h-full object-cover scale-150 pointer-events-none"
            src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&mute=1&controls=0&loop=1&playlist=aqz-KE-bpKQ&showinfo=0&rel=0&start=10"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        </div>

        {/* Advanced Editing Animation Stuffs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {/* Floating Icons */}
          {[...Array(8)].map((_, i) => {
            const Icons = [Video, Play, Scissors, Layers, Music, Activity];
            const Icon = Icons[i % Icons.length];
            return (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: Math.random() * 100 + "%",
                  opacity: 0
                }}
                animate={{ 
                  x: [null, Math.random() * 100 + "%", Math.random() * 100 + "%"],
                  y: [null, Math.random() * 100 + "%", Math.random() * 100 + "%"],
                  rotate: [0, 180, 360],
                  opacity: [0, 0.15, 0]
                }}
                transition={{ 
                  duration: 15 + Math.random() * 15, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute"
              >
                <Icon className="w-10 h-10 text-accent-cyan" />
              </motion.div>
            );
          })}
          
          {/* Scanning Line */}
          <motion.div 
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-accent-cyan/20 blur-sm z-20"
          />

          {/* Audio Waveform Visualization */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-end gap-1 h-12 opacity-30">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [10, Math.random() * 40 + 10, 10] }}
                transition={{ duration: 0.5 + Math.random(), repeat: Infinity }}
                className="w-1 bg-accent-purple rounded-full"
              />
            ))}
          </div>

          {/* Keyframe Dots */}
          <div className="absolute top-1/4 left-10 space-y-4 opacity-20">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                className="w-2 h-2 bg-accent-cyan rounded-full"
              />
            ))}
          </div>
          
          {/* Animated Timeline Bar */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-accent-cyan via-accent-purple to-accent-cyan origin-left opacity-40"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none">
              Raw Footage to <br />
              <span className="text-gradient">Viral Magic</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Professional video editing that makes your content impossible to scroll past. 
              Fast turnaround • Cinematic quality • Delivered with passion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Buttons removed as per request */}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/30 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">Our Services</h2>
            <div className="h-1.5 w-24 bg-accent-cyan mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl hover:border-accent-cyan/50 transition-all group"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-24 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-4">Featured Work</h2>
              <p className="text-white/60 max-w-xl">
                A collection of viral hits and cinematic masterpieces crafted for creators worldwide.
              </p>
            </div>
            <button className="text-accent-cyan font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All Projects <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PORTFOLIO_VIDEOS.map((url, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-video rounded-3xl overflow-hidden glass group relative"
              >
                <iframe
                  className="w-full h-full"
                  src={url}
                  title={`Portfolio Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 pointer-events-none border-2 border-white/0 group-hover:border-accent-cyan/30 transition-all rounded-3xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-cyan/5 blur-[120px] -z-10" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8">About Me</h2>
              <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                <p>
                  Hey there! 👋 I'm <span className="text-white font-bold">Sagen Soren</span>, a passionate about video editing/cinematography and film making with a knack for crafting compelling visual stories. capturing moments from ideas to visual stories teller.
                </p>
                <p>
                  With a freelancer video editor specializing in high-quality, engaging content for brands and creators for digital platforms, including real estate videos, educational content, podcasts, advertisements, and short-form content for Instagram Reels and YouTube Shorts.
                </p>
                <p>
                  I craft compelling visuals that captivate audiences and drive engagement.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[3rem]"
            >
              <h3 className="text-2xl font-black mb-8 text-accent-cyan uppercase tracking-widest">Expertise</h3>
              <div className="space-y-8">
                {[
                  { emoji: "🎬", title: "Social Media & Marketing Videos", desc: "Optimized for YouTube, Instagram, Facebook & TikTok." },
                  { emoji: "🎥", title: "Cinematic Storytelling", desc: "Smooth edits, dynamic pacing & compelling narratives." },
                  { emoji: "🔥", title: "Motion Graphics & Effects", desc: "Eye-catching text animations & seamless transitions." },
                  { emoji: "📱", title: "Platform-Specific Optimization", desc: "Custom formats (16:9, 9:16, 1:1) for maximum impact." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-3xl shrink-0">{item.emoji}</span>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-white/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-8">Let's Create <br /><span className="text-gradient">Something Iconic</span></h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Have a project in mind? Reach out and let's discuss how we can make your vision a reality.
          </p>
          
          <div className="flex flex-col items-center space-y-8">
            <a 
              href="mailto:sagen2797@gmail.com" 
              className="group flex items-center gap-4 text-2xl md:text-4xl font-bold hover:text-accent-cyan transition-colors"
            >
              <div className="p-4 glass rounded-full group-hover:bg-accent-cyan group-hover:text-black transition-all">
                <Mail className="w-8 h-8" />
              </div>
              sagen2797@gmail.com
            </a>

            <div className="flex gap-6">
              {[
                { icon: <Instagram />, label: "Instagram" },
                { icon: <Twitter />, label: "Twitter" },
                { icon: <Youtube />, label: "YouTube" }
              ].map((social, i) => (
                <button key={i} className="p-4 glass rounded-full hover:text-accent-cyan hover:border-accent-cyan transition-all">
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-background">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-black tracking-tighter">
            SAGEN<span className="text-accent-cyan">.</span>
          </div>
          <p className="text-white/40 text-sm">
            © 2026 SAGEN. All rights reserved. Video Editing | Reels | YouTube | Brand
          </p>
          <div className="flex gap-8">
            <button className="text-xs text-white/40 hover:text-white transition-colors">Privacy Policy</button>
            <button className="text-xs text-white/40 hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
