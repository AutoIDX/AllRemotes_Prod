'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { ShieldCheck, Truck, RotateCcw, ShoppingCart, Activity, Cpu, BarChart3, ChevronRight, Star } from 'lucide-react';

/* 
  ULTIMATE DESIGN - CLEAN MEANINGFUL HUD + AUSSIE SLANG
  - High Contrast Obsidian Flux
  - Clean English Copy (No Underscores)
  - Cheeky Aussie Personality contrasted with Premium UI
*/

const COLORS = {
  teal: '#2ddbde',
  red: '#ff4d4d',
  obsidian: '#050505',
  glass: 'rgba(20, 20, 20, 0.85)',
  border: 'rgba(255, 255, 255, 0.1)'
};

const CATEGORIES = {
  garage: {
    label: 'Garage',
    sets: [
      {
        title: 'THE ROLLER DOOR BOSS',
        subtitle: 'FAIR DINKUM REPLACEMENTS',
        brands: 'Merlin, B&D, ATA, and the rest of the gang',
        code: 'GARAGE GEAR'
      },
      {
        title: 'FLICK THE SWITCH',
        subtitle: 'OPEN SESAME MATE',
        brands: 'Glidermatic, Dominator, and more Aussie faves',
        code: 'ACCESS GRANTED'
      },
      {
        title: 'NEVER GET OUT',
        subtitle: 'STAY IN THE COMMODORE',
        brands: 'Genuine hardware for the modern shed',
        code: 'RAIN AVOIDANCE'
      }
    ]
  },
  car: {
    label: 'Automotive',
    sets: [
      {
        title: 'PROPER KEY FOBS',
        subtitle: "DON'T GET STRANDED MATE",
        brands: 'Toyota, Mazda, Ford, Nissan, Holden',
        code: 'AUTO KIT'
      },
      {
         title: 'POCKET POWER',
         subtitle: 'CLICK AND CRUISE',
         brands: 'Original & Aftermarket transponder tech',
         code: 'START COMMAND'
      },
      {
         title: 'BACKUP BUTTONS',
         subtitle: 'JUST IN CASE YOU LOSE EM',
         brands: 'Robust automotive hardware that lasts yonks',
         code: 'BEACH READY'
      }
    ]
  },
  gate: {
    label: 'Gate',
    sets: [
      {
        title: 'BEEFY GATE CLICKERS',
        subtitle: 'KEEP THE RIFF-RAFF OUT',
        brands: 'Commercial & High-End Residential units',
        code: 'GATE SECURITY'
      },
      {
        title: 'SECURE THE PERIMETER',
        subtitle: 'NOT ON MY WATCH',
        brands: 'Heavy-duty industrial access control',
        code: 'LOCKDOWN MODE'
      },
      {
        title: 'STRESS-FREE ENTRY',
        subtitle: 'SMOOTH AS BUTTER',
        brands: 'Reliable gate remotes for acreage and strata',
        code: 'VILLA ACCESS'
      }
    ]
  }
} as const;

type Category = keyof typeof CATEGORIES;

export default function AussieUltimatePage() {
  const [activeTab, setActiveTab] = useState<Category>('garage');
  const [textIndex, setTextIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax Engine
  const springY = useSpring(scrollY, { stiffness: 100, damping: 30 });
  const videoY = useTransform(springY, [0, 1000], [0, 200]);
  const heroOpacity = useTransform(springY, [300, 900], [1, 0]);
  const ringRotate1 = useTransform(springY, [0, 1000], [0, 45]);
  const ringRotate2 = useTransform(springY, [0, 1000], [0, -90]);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setTextIndex(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTextIndex(0);
  }, [activeTab]);

  return (
    <main className="relative min-h-[220vh] bg-[#050505] text-[#e5e1e1] overflow-x-hidden select-none">
      
      {/* 1. CINEMATIC BACKGROUND ENGINE */}
      <motion.div 
        style={{ y: videoY, position: 'fixed', inset: 0, zIndex: 0, opacity: 0.35, filter: 'grayscale(0.8) contrast(1.1)' }}
      >
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #050505 0%, transparent 50%, #050505 100%)' }} />
      </motion.div>

      <div className="scanline" />

      {/* ABSTRACT HUD ROTOR (Awwwards Effect) */}
      <motion.div
        style={{ rotate: ringRotate1, position: 'fixed', top: '10%', left: '50%', width: '120vw', height: '120vw', marginLeft: '-60vw', borderRadius: '50%', border: `1px dashed ${COLORS.teal}40`, zIndex: 0, opacity: 0.15, pointerEvents: 'none' }}
      />
      <motion.div
        style={{ rotate: ringRotate2, position: 'fixed', top: '15%', left: '50%', width: '140vw', height: '140vw', marginLeft: '-70vw', borderRadius: '50%', border: `1px solid ${COLORS.teal}20`, zIndex: 0, opacity: 0.1, pointerEvents: 'none' }}
      />

      {/* 2. PREMIUM HEADER */}
      <header className="fixed top-0 left-0 w-full z-[100] px-4 py-4 md:px-6 md:py-6 pointer-events-none">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          
          {/* Logo Badge - Clean High-Contrast Label */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="pointer-events-auto bg-white px-3 py-2 md:px-5 md:py-2.5 rounded flex items-center justify-center gap-2 md:gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-full sm:w-auto overflow-hidden"
            style={{ border: `1px solid ${COLORS.teal}` }}
          >
            <img src="/logo.png" alt="AllRemotes" className="h-[18px] md:h-[24px] w-auto shrink-0" />
            <div className="w-[1px] h-[12px] md:h-[16px] bg-[#ddd] shrink-0" />
            <span className="text-[10px] md:text-[11px] font-black text-black tracking-[0.1em] md:tracking-[0.15em] h-hud whitespace-nowrap shrink-0">AUSTRALIA</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full sm:w-auto text-center pointer-events-auto"
          >
            <div className="px-3 py-2 md:px-5 md:py-2 bg-black/80 rounded flex items-center justify-center gap-2 md:gap-2.5 backdrop-blur-md w-full sm:w-auto"
                 style={{ border: `1px solid ${COLORS.border}` }}>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--color-primary-teal)] animate-pulse shadow-[0_0_8px_var(--color-primary-teal)] shrink-0" />
              <span className="text-[9px] md:text-[11px] font-black tracking-[0.05em] md:tracking-[0.1em] h-hud whitespace-nowrap shrink-0" style={{ color: COLORS.teal }}>WE'RE ON TEA BREAK</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', paddingTop: '140px' }}>
        <motion.div 
          style={{ opacity: heroOpacity, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          className="w-full max-w-5xl"
        >
          {/* Status Indicators */}
          <div style={{ marginBottom: '64px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            <div style={{ padding: '10px 24px', border: `1px solid ${COLORS.teal}`, background: `${COLORS.teal}15`, borderRadius: '4px', color: COLORS.teal, fontSize: '11px', fontWeight: 900, letterSpacing: '0.25em' }} className="h-hud flex items-center gap-3">
               HANG TIGHT MATE
            </div>
            <div style={{ padding: '10px 24px', border: `1px solid ${COLORS.border}`, background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: '#888', fontSize: '11px', fontWeight: 900, letterSpacing: '0.25em' }} className="h-hud">
              1,500+ LEGENDS REVIEWED US
            </div>
          </div>

          {/* Meaningful Headline */}
          <div style={{ minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={`${activeTab}-${textIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center"
              >
                <div style={{ fontSize: '13px', fontWeight: 900, color: COLORS.teal, letterSpacing: '0.5em', marginBottom: '20px' }}>{CATEGORIES[activeTab].sets[textIndex].code}</div>
                
                {/* Monolith Text Reveal Mask */}
                <div style={{ overflow: 'hidden', paddingBottom: '12px', paddingTop: '12px' }}>
                  <motion.h1 
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ fontWeight: 900, fontSize: 'clamp(2.5rem, 10vw, 7rem)', letterSpacing: '-0.02em', lineHeight: 1, margin: 0, color: '#fff' }} className="h-hud">
                    {CATEGORIES[activeTab].sets[textIndex].title}
                  </motion.h1>
                </div>

                <p style={{ marginTop: '24px', fontSize: '1.5rem', color: COLORS.teal, fontWeight: 700, letterSpacing: '0.1em', maxWidth: '800px' }} className="h-hud">
                   {CATEGORIES[activeTab].sets[textIndex].subtitle}
                </p>
                <p style={{ marginTop: '24px', fontSize: '15px', color: '#888', fontWeight: 500, letterSpacing: '0.12em', maxWidth: '650px', lineHeight: 1.6 }} className="uppercase">
                  WE SORT OUT: {CATEGORIES[activeTab].sets[textIndex].brands}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Clean Interactive Toggle */}
          <div style={{ marginTop: '80px', display: 'flex', gap: '10px', padding: '10px', background: 'rgba(255,255,255,0.04)', border: `1px solid ${COLORS.border}`, borderRadius: '8px', backdropFilter: 'blur(30px)' }}>
            {(Object.keys(CATEGORIES) as Category[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '16px 32px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 900,
                  letterSpacing: '0.2em',
                  transition: 'all 0.3s ease',
                  background: activeTab === tab ? COLORS.teal : 'transparent',
                  color: activeTab === tab ? '#000' : '#777',
                  border: 'none',
                  cursor: 'pointer',
                  textTransform: 'uppercase'
                }}
              >
                {CATEGORIES[tab].label}
              </button>
            ))}
          </div>

          {/* Cheeky eBay Call Out */}
          <div style={{ marginTop: '100px', maxWidth: '600px', padding: '0 20px' }}>
             <p style={{ fontSize: '16px', color: '#ccc', fontWeight: 500, lineHeight: 1.6, letterSpacing: '0.05em' }}>
               While we're out back hammering this shiny new website together, you can still grab all your gear over on our eBay store. No dramas.
             </p>
          </div>

          {/* Primary Shop Action */}
          <motion.a 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.ebay.com.au/str/allremotes"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              marginTop: '40px',
              textDecoration: 'none',
              padding: '24px 72px',
              background: COLORS.red,
              color: '#fff',
              borderRadius: '4px',
              fontWeight: 900,
              fontSize: '20px',
              letterSpacing: '0.3em',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              boxShadow: `0 20px 60px ${COLORS.red}40`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <ShoppingCart size={24} />
            <span className="h-hud">GRAB 'EM ON EBAY</span>
            <ChevronRight size={22} className="opacity-50" />
          </motion.a>
          
        </motion.div>
      </section>

      {/* 4. VALUE PROPOSITION SECTION */}
      <section style={{ position: 'relative', zIndex: 10, background: '#050505', padding: '140px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -80, y: 60 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: '64px 40px', border: `1px solid ${COLORS.border}`, background: 'rgba(255,255,255,0.02)', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
             <ShieldCheck size={44} style={{ color: COLORS.teal }} />
             <div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff' }} className="h-hud">12 MONTH WARRANTY</h3>
                <p style={{ marginTop: '16px', color: '#777', fontSize: '14px', lineHeight: 1.8, letterSpacing: '0.05em' }} className="uppercase">If it craps out, we've got your back. Full hardware protection on all genuine and compatible clickers. Deadset.</p>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: '64px 40px', border: `1px solid ${COLORS.teal}`, background: `${COLORS.teal}05`, borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
             <Truck size={44} style={{ color: COLORS.teal }} />
             <div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff' }} className="h-hud">FREE AU SHIPPING</h3>
                <p style={{ marginTop: '16px', color: '#999', fontSize: '14px', lineHeight: 1.8, letterSpacing: '0.05em' }} className="uppercase">Fast and free delivery nationwide. We'll chuck it in the post straight from Sydney so you're not waiting yonks.</p>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 80, y: 60 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: '64px 40px', border: `1px solid ${COLORS.border}`, background: 'rgba(255,255,255,0.02)', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
             <RotateCcw size={44} style={{ color: COLORS.teal }} />
             <div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff' }} className="h-hud">30 DAY RETURNS</h3>
                <p style={{ marginTop: '16px', color: '#777', fontSize: '14px', lineHeight: 1.8, letterSpacing: '0.05em' }} className="uppercase">Bought the wrong one? No wukkas. Send it back within 30 days and we'll sort you out. Easy as.</p>
             </div>
          </motion.div>

        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section style={{ position: 'relative', zIndex: 10, padding: '100px 24px', background: 'rgba(255,255,255,0.02)', borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}` }}>
         <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <Cpu size={36} style={{ color: COLORS.teal, marginBottom: '40px' }} />
            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '0.3em', color: COLORS.teal, marginBottom: '28px' }} className="h-hud">THE ALLREMOTES CREW</h2>
            <p style={{ fontSize: '18px', color: '#999', lineHeight: 2, letterSpacing: '0.08em' }} className="uppercase">
               WE'VE BEEN SUSSING OUT AUTHENTIC REPLACEMENT HARDWARE FOR AUTOMOTIVE, GARAGE, AND GATE SYSTEMS FOR AGES. ENGINEERED FOR RELIABILITY, WE'RE TRUSTED BY OVER 1,500 PROFESSIONALS AND LOCAL LEGENDS NATIONWIDE.
            </p>
         </div>
      </section>

      {/* 6. SOCIAL PROOF STREAM */}
      <section style={{ position: 'relative', zIndex: 10, width: '100%', paddingTop: '60px', paddingBottom: '60px', borderBottom: `1px solid ${COLORS.border}` }}>
        <div className="flex gap-16 whitespace-nowrap py-12 overflow-hidden">
          {[1,2,3].map(i => (
             <div key={i} className="flex gap-24 items-center animate-infinite-scroll">
               <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '12px', fontWeight: 900, letterSpacing: '0.4em' }}>
                  <Star size={16} style={{ color: COLORS.teal }} fill="currentColor" />
                  1,500+ LEGENDS WHO LOVE OUR GEAR
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '12px', fontWeight: 900, letterSpacing: '0.4em' }}>
                  <BarChart3 size={16} style={{ color: COLORS.teal }} />
                  5.0 STAR EBAY FEEDBACK
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '12px', fontWeight: 900, letterSpacing: '0.4em' }}>
                  <Activity size={16} style={{ color: COLORS.teal }} />
                  QUICKER THAN A HICCUP DISPATCH
               </div>
             </div>
          ))}
        </div>
      </section>

      {/* 7. FINAL ACTION FOOTER */}
      <footer style={{ position: 'relative', zIndex: 10, padding: '120px 24px', background: '#050505' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '64px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
             <img src="/logo.png" alt="AllRemotes" style={{ height: '22px', width: 'auto', filter: 'grayscale(1) brightness(3)', opacity: 0.25 }} />
             <p style={{ fontSize: '10px', fontWeight: 900, color: '#444', letterSpacing: '0.4em' }} className="h-hud">© {new Date().getFullYear()} ALLREMOTES. PROUDLY AUSSIE OWNED & OPERATED.</p>
          </div>

          <motion.a 
             whileHover={{ scale: 1.05 }}
             href="https://www.ebay.com.au/str/allremotes" 
             target="_blank" 
             rel="noopener noreferrer" 
             style={{ padding: '24px 64px', background: '#fff', color: COLORS.red, fontWeight: 900, fontSize: '16px', letterSpacing: '0.25em', borderRadius: '4px', textDecoration: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} 
             className="h-hud"
          >
             HEAD TO EBAY MATE
          </motion.a>

        </div>
      </footer>

    </main>
  );
}
