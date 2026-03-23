'use client';

import { useState, useEffect, useRef } from 'react';
import { Home, Car, Lock, ShieldCheck, Truck, RotateCcw, ShoppingCart, ExternalLink, CheckCircle } from 'lucide-react';

const categoryContent = {
  garage: {
    headline: 'Garage Door Remotes',
    subheadline: 'Browse 500+ garage door remotes from leading brands like B&D, Merlin, ATA, and more.'
  },
  car: {
    headline: 'Automotive Specialists',
    subheadline: 'Find replacement car key fobs and automotive remotes for all major vehicle brands.'
  },
  gate: {
    headline: 'Secure Gate Solutions',
    subheadline: 'Premium gate remotes and access control devices for homes and businesses.'
  }
};

type Category = 'garage' | 'car' | 'gate';

export default function LandingPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('garage');
  const [pulse, setPulse] = useState(false);
  const [reviewCount, setReviewCount] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);

  const heroContentRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  // Parallax + Pulse effect
  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const pulseInterval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(pulseInterval);
    };
  }, []);

  // 3D Tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroContentRef.current) return;
    const rect = heroContentRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    heroContentRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!heroContentRef.current) return;
    heroContentRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  // Review count animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) {
        setAnimated(true);
        let count = 0;
        const target = 1500;
        const interval = setInterval(() => {
          count += 25;
          if (count >= target) {
            count = target;
            clearInterval(interval);
          }
          setReviewCount(count);
        }, 15);
      }
    }, { threshold: 0.5 });

    if (reviewsRef.current) {
      observer.observe(reviewsRef.current);
    }
    return () => observer.disconnect();
  }, [animated]);

  return (
    <main>
      <div className="hero">
        <video 
          className="hero-bg" 
          style={{ transform: `translateY(${scrollPos * 0.3}px)` }} 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="container animate-fade-in relative z-10 w-full flex justify-center">
          <div
            className="hero-content w-full"
            ref={heroContentRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="logo-container">
              <div className="logo">
                <span>ALL</span><span className="accent">REMOTES</span>
              </div>
            </div>

            <div className={`status-badge ${pulse ? 'pulse' : ''}`}>
              Launching Soon
            </div>

            <h1 className="headline" key={`h1-${activeCategory}`}>
              {categoryContent[activeCategory].headline}
            </h1>
            <p className="subheadline" key={`p-${activeCategory}`}>
              {categoryContent[activeCategory].subheadline}
            </p>

            <div className="categories">
              <button
                onClick={() => setActiveCategory('garage')}
                className={`cat-btn ${activeCategory === 'garage' ? 'active' : ''}`}
              >
                <Home size={18} /> Garage
              </button>
              <button
                onClick={() => setActiveCategory('car')}
                className={`cat-btn ${activeCategory === 'car' ? 'active' : ''}`}
              >
                <Car size={18} /> Automotive
              </button>
              <button
                onClick={() => setActiveCategory('gate')}
                className={`cat-btn ${activeCategory === 'gate' ? 'active' : ''}`}
              >
                <Lock size={18} /> Gate
              </button>
            </div>

            <div className="ebay-cta">
              <p className="ebay-message">
                While we're building something amazing, you can still shop our full range:
              </p>
              <a
                href="https://www.ebay.com.au/str/allremotes"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ebay"
              >
                <ShoppingCart size={20} />
                Shop Now on eBay
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon"><ShieldCheck size={28} /></div>
                <h3>12-Month Warranty</h3>
                <p>Full protection on all genuine & compatible products.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><Truck size={28} /></div>
                <h3>Free AU Shipping</h3>
                <p>Fast and free delivery across Australia, no minimum spend.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><RotateCcw size={28} /></div>
                <h3>30-Day Returns</h3>
                <p>Hassle-free 30-day money back guarantee.</p>
              </div>
            </div>

            <div className="reviews-ticker" ref={reviewsRef}>
              <div className="review-stats">
                <div className="review-item">
                  <span className="stars">★★★★★</span>
                  <span>{reviewCount.toLocaleString()}+ Reviews</span>
                </div>
                <div className="review-item">
                  <CheckCircle size={20} style={{ color: 'var(--primary-teal)' }} />
                  <span>Trusted AU Retailer</span>
                </div>
              </div>
            </div>

            <div className="aus-badge flex items-center gap-2">
              <span style={{ fontSize: '1.5rem' }}>🇦🇺</span>
              <span>Australian Owned & Operated</span>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
