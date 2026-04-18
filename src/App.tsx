import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Clock, Facebook, Instagram, 
  MessageCircle, ArrowUp, GraduationCap, Users, Trophy, BookOpen,
  ChevronRight, Star, Quote, Image as ImageIcon, Send, CheckCircle2,
  Award, Heart, Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants & Data ---

const BUSINESS_NAME = "Pillars Global School";
const BUSINESS_TYPE = "English Medium School";
const CITY = "Gorakhpur";
const PHONE = "+91 9140615647";
const EMAIL = "info@pillarsglobalschool.com";
const ADDRESS = "Saintal, Bansgaon, Gorakhpur (U.P.)";
const TAGLINE = "Strong Academics, Strong Competitive Future";

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  {
    title: "English Medium Education",
    desc: "Rigorous curriculum from Nursery to 8th grade with a focus on language proficiency.",
    icon: <BookOpen className="w-6 h-6" />,
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    price: "Affordable"
  },
  {
    title: "Expert Faculty",
    desc: "Highly qualified and experienced teachers dedicated to nurturing every student.",
    icon: <Users className="w-6 h-6" />,
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    price: "Dedicated"
  },
  {
    title: "Competitive Prep",
    desc: "Specialized training for Sainik School, Military School, and RIMC entrance exams.",
    icon: <Trophy className="w-6 h-6" />,
    img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
    price: "Future Ready"
  },
  {
    title: "Smart Classes",
    desc: "Modern digital classrooms equipped with the latest teaching aids and technology.",
    icon: <GraduationCap className="w-6 h-6" />,
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    price: "Digital"
  },
  {
    title: "Holistic Development",
    desc: "Focus on sports, arts, and character building alongside academic excellence.",
    icon: <Heart className="w-6 h-6" />,
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    price: "All-round"
  },
  {
    title: "Safety & Security",
    desc: "Secure campus environment with 24/7 monitoring and child safety protocols.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    price: "Secure"
  }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Parent",
    text: "Pillars Global School has been a game-changer for my son. The competitive exam prep is excellent.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Sunita Singh",
    role: "Parent",
    text: "The focus on English communication and value-based education is what makes this school stand out.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Amit Verma",
    role: "Alumni Parent",
    text: "My daughter cleared the Sainik School entrance thanks to the dedicated teachers here.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];

// --- Components ---

const SectionHeading = ({ children, subtitle, label }: { children: React.ReactNode, subtitle?: string, label?: string }) => (
  <div className="text-center mb-12 md:mb-16 px-4">
    {label && <span className="label-caps mb-4 mx-auto">{label}</span>}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl md:text-6xl font-serif text-ink mb-4 leading-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg italic font-serif"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=1920&q=80",
    title: "Main Campus Building"
  },
  {
    url: "https://images.unsplash.com/photo-1544531585-f14d3ec09023?auto=format&fit=crop&w=1920&q=80",
    title: "Vibrant Playgrounds"
  },
  {
    url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&q=80",
    title: "Rich Digital Library"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans bg-paper selection:bg-accent selection:text-white">
      
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMenuOpen ? 'bg-white' : 'bg-white/90 backdrop-blur-xl border-b border-black/5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-2 group">
              <span className="font-serif italic text-xl md:text-3xl text-ink tracking-tight">
                Pillars<span className="text-accent font-sans not-italic font-bold text-[10px] md:text-xs align-super ml-1">GLOBAL</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-[10px] lg:text-[11px] font-bold text-gray-400 hover:text-ink transition-colors tracking-widest uppercase"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-accent hover:brightness-110 text-white px-6 lg:px-8 py-3 text-[10px] lg:text-[11px] font-bold transition-all tracking-widest uppercase rounded-full"
              >
                Enroll Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-primary p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'calc(100vh - 80px)', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white overflow-y-auto"
            >
              <div className="px-8 py-12 flex flex-col gap-8">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-4xl font-serif italic text-ink hover:text-accent transition-colors border-b border-black/5 pb-4"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="mt-4 bg-accent text-white text-center py-6 text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-accent/20"
                >
                  Book Admission 2026-27
                </a>
                
                <div className="mt-auto pt-10 border-t border-black/5">
                  <span className="label-caps mb-4">Quick Contact</span>
                  <p className="text-sm font-medium text-gray-500">{PHONE}</p>
                  <p className="text-sm font-medium text-gray-500">{EMAIL}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="pt-24 lg:pt-0 min-h-screen flex items-center relative overflow-hidden bg-ink">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.25, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src={carouselImages[currentSlide].url} 
              className="w-full h-full object-cover"
              alt={carouselImages[currentSlide].title}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Brand Overlay */}
        <div className="absolute inset-0 hidden lg:flex flex-col items-center justify-start pt-20 pointer-events-none">
          <motion.div
            key={`title-${currentSlide}`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-accent/90 backdrop-blur-sm px-16 py-4 border-b-4 border-white/20 shadow-2xl"
          >
            <h2 className="text-white text-4xl font-sans font-black tracking-[0.2em] uppercase">PILLARS GLOBAL SCHOOL</h2>
            <div className="text-white/60 text-[10px] text-center mt-2 tracking-[0.5em] font-bold uppercase">
              {carouselImages[currentSlide].title}
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="inline-block bg-accent px-4 py-1 rounded-full mb-6"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white">Nursery to VIII</span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white leading-[1.1] md:leading-[1.05] mb-8 md:mb-10">
                Foundations for a <span className="italic text-accent">Brilliant</span> Future.
              </h1>
              <p className="text-base md:text-xl text-white/60 mb-8 md:mb-12 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                {TAGLINE}. Premium English Medium Education from Nursery to 8th Grade in {CITY}.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 items-center">
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="bg-accent hover:brightness-110 text-white px-12 py-5 text-[12px] font-bold transition-all tracking-[0.2em] uppercase rounded-full shadow-xl hover:shadow-accent/40"
                >
                  Book Admission
                </a>
                
                {/* Floating Admission Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4"
                >
                  <div className="bg-accent p-2 rounded-lg">
                    <GraduationCap className="text-white w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-accent font-bold uppercase tracking-widest">Admission Open</div>
                    <div className="text-white text-xs font-medium">Session 2026-27</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Architectural Rendering Image */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="hidden lg:block relative"
            >
              <div className="editorial-card p-3 bg-white/5 backdrop-blur-sm border-white/20 shadow-2xl relative z-10">
                <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=1200&q=80" 
                    alt="Pillars Global School Rendering"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-6 flex justify-between items-end border-t border-white/10 pt-4 px-2">
                  <div>
                    <div className="text-[10px] text-accent font-bold uppercase tracking-widest mb-1">Concept Architecture</div>
                    <div className="text-white font-serif italic text-xl">Main Campus Vision</div>
                  </div>
                  <div className="bg-white/10 px-3 py-1 rounded-full text-[9px] text-white/50 tracking-widest uppercase">
                    Ref: PG-2026
                  </div>
                </div>
              </div>
              
              {/* Decorative accent squares */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-paper/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-lg border-t border-white/10 hidden lg:block">
          <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-4 gap-8">
            {[ 
              { label: 'Academic Excellence', val: '100%', sub: 'Focus' },
              { label: 'Success Rate', val: '95%', sub: 'Competitive Prep' },
              { label: 'Extracurricular', val: '20+', sub: 'Activities' },
              { label: 'Campus Area', val: 'Digital', sub: 'Infrastructure' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-heading font-bold text-secondary mb-1">{stat.val}</div>
                <div className="text-sm text-blue-100/70 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="label-caps mb-6 mx-auto">Established 2012</span>
            <h2 className="text-4xl md:text-6xl font-serif text-ink mb-10 leading-[1.1]">
              Nurturing the <span className="italic text-accent">Leaders</span> of Tomorrow
            </h2>
            <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-serif italic">
              <p>
                Pillars Global School is a sanctuary of serene learning. Located in {CITY}, we provide a holistic approach to education where students feel safe, valued, and inspired.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 not-italic font-sans text-sm tracking-wide uppercase font-bold text-ink pt-8">
                {[
                  "CBSE Based Curriculum",
                  "Stress-Free Environment",
                  "Modern Labs & Library",
                  "Experienced Subject Experts"
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-center gap-3 border-b border-black/5 pb-2">
                     <span className="text-accent">•</span> {item}
                  </div>
                ))}
              </div>
              <div className="pt-12 border-t border-black/5 flex flex-col items-center justify-center gap-4 not-italic font-sans">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">VP</div>
                <div>
                  <h4 className="font-bold text-ink text-sm tracking-widest uppercase">Vinit Pandey</h4>
                  <p className="text-[10px] uppercase tracking-widest text-accent font-bold mt-1">12 Years of Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-32 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading 
            label="Our Menu" 
            subtitle="Extensive academic and extracurricular offerings designed for holistic excellence."
          >
            Distinctive Features
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {services.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-between items-center border-b border-black/5 pb-8 group"
              >
                <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 editorial-card overflow-hidden">
                    <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt={item.title} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-ink mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-400 font-medium">{item.desc}</p>
                  </div>
                </div>
                <div className="font-serif italic text-accent text-xl">
                  {item.price}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <section id="testimonials" className="py-32 bg-sage">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading label="Guest Review" subtitle="Reflections from our community on the PGS experience.">
            Voices of Trust
          </SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-10 bg-white/5 border border-white/10 text-white relative"
              >
                <p className="text-xl font-serif italic leading-relaxed mb-8 opacity-90">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="text-[11px] font-bold uppercase tracking-widest">— {item.name}</div>
                </div>
                <div className="text-accent text-xs mt-4">★★★★★</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-20 md:py-32 bg-paper border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 bg-white p-6 md:p-12 editorial-card gap-12 lg:gap-0">
            {/* Nav Grid */}
            <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-black/5 pb-10 lg:pb-0 lg:pr-10">
              <span className="label-caps mb-8 text-center lg:text-left">Contact Us</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 text-xs font-bold uppercase tracking-widest text-gray-500">
                <div>
                  <label className="text-accent mb-2 block">Location</label>
                  <p className="text-ink leading-relaxed font-sans normal-case">{ADDRESS}</p>
                </div>
                <div>
                  <label className="text-accent mb-2 block">Phone</label>
                  <p className="text-ink text-base md:text-lg font-serif italic">{PHONE}</p>
                </div>
                <div>
                  <label className="text-accent mb-2 block">Email</label>
                  <p className="text-ink lowercase font-sans">{EMAIL}</p>
                </div>
                <div>
                  <label className="text-accent mb-2 block">Hours</label>
                  <p className="text-ink font-sans">Mon-Sat: 9am - 8pm</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 pl-0 lg:pl-12">
              <span className="label-caps mb-8 text-center lg:text-left">Inquiry Form</span>
              <form className="grid sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Name" className="p-4 border border-black/5 text-xs bg-paper focus:outline-accent w-full" />
                <input type="email" placeholder="Email" className="p-4 border border-black/5 text-xs bg-paper focus:outline-accent w-full" />
                <textarea placeholder="Your Message" className="p-4 border border-black/5 text-xs bg-paper focus:outline-accent col-span-1 sm:col-span-2 h-32 resize-none w-full"></textarea>
                <button type="button" className="bg-ink text-white p-4 text-[10px] font-bold uppercase tracking-widest col-span-1 sm:col-span-2 hover:bg-accent transition-all rounded-full md:rounded-none">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-ink pt-24 pb-12 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-20 pb-20 border-b border-white/5">
            <div className="col-span-2 space-y-8">
              <span className="font-serif italic text-3xl">Pillars<span className="text-accent font-sans not-italic font-bold text-xs align-super ml-1">GLOBAL</span></span>
              <p className="text-white/40 leading-relaxed font-serif italic text-lg max-w-sm">
                Dedicated to providing high-quality English medium education and character building for children in {CITY}.
              </p>
            </div>

            <div>
              <span className="label-caps !text-white/30 mb-8">Navigation</span>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-[11px] font-bold uppercase tracking-widest text-white/50 hover:text-accent transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="label-caps !text-white/30 mb-8">Connect</span>
              <div className="flex gap-6">
                {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
                  <a key={i} href="#" className="text-white/30 hover:text-accent transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase font-bold tracking-[0.2em] text-white/20">
            <p>© {new Date().getFullYear()} {BUSINESS_NAME}.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- Floating Elements --- */}
      
      {/* WhatsApp Button */}
      <motion.a 
        href={`https://wa.me/${PHONE.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 left-8 z-[60] bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:brightness-110 transition-all font-bold"
      >
        W
      </motion.a>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-[60] bg-ink text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl border border-white/10"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Admission Sticker (Mobile only highlight) */}
      <div className="fixed top-24 right-0 z-40 md:hidden">
        <div className="bg-secondary text-primary font-black px-4 py-2 rounded-l-2xl shadow-xl flex items-center gap-2 text-xs border-y-2 border-l-2 border-primary animate-pulse">
          <Calendar size={14} /> ADMISSION 2026-27 OPEN
        </div>
      </div>

    </div>
  );
}
