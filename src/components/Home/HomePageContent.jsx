import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/home.png';
import { solutionsList } from '../../constants/solutionsData';

export default function HomePageContent() {
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const locations = [
    { name: 'Chennai & Thanjavur', icon: '🏙️', tag: 'Paper Recycling HQ' },
    { name: 'Vaniyambadi & Kumbakonam', icon: '🏭', tag: 'Leather Processing' },
    { name: 'Virudhunagar', icon: '📦', tag: 'Carton Repurposing' },
    { name: 'Tirupur',      icon: '🧵', tag: 'Cotton Recycling' },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img 
          src={heroImg} 
          alt="Sustainable Recycling" 
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.1)', animation: 'scaleIn 20s ease-out forwards' }} 
        />
        {/* Very subtle overlay to keep image clear, relying on glass card for text contrast */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.4) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #f8fafc 0%, transparent 30%)' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 900, margin: '0 auto', padding: '100px 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Glass Container for Perfect Text Readability */}
          <div className="animate-fade-up" style={{
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            padding: '48px 64px',
            borderRadius: 40,
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1)',
            display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}>
            <div className="animate-fade-up delay-100">
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                color: '#047857', fontSize: 11, fontWeight: 800,
                textTransform: 'uppercase', letterSpacing: '0.25em', padding: '8px 24px', 
                borderRadius: 999, marginBottom: 32, boxShadow: '0 4px 20px rgba(16, 185, 129, 0.15)',
                background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)'
              }}>
                <span className="animate-pulse-glow" style={{width: 6, height: 6, borderRadius: '50%', background: '#059669', display: 'inline-block'}}></span>
                Sustainable Recycling Solutions
              </span>
            </div>

            <h1 className="animate-fade-up delay-200" style={{ 
              fontSize: 'clamp(46px, 8vw, 84px)', fontWeight: 900, color: '#021a12', 
              lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0,
            }}>
              Turning{' '}
              <span className="gradient-text animate-float" style={{ 
                display: 'inline-block', position: 'relative',
                background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>
                Waste
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(16, 185, 129, 0.2)', filter: 'blur(24px)', zIndex: -1 }}></div>
              </span>
              <br />into{' '}
              <span className="gradient-text animate-float delay-100" style={{ 
                display: 'inline-block', position: 'relative',
                background: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>
                Wealth
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(5, 150, 105, 0.2)', filter: 'blur(24px)', zIndex: -1 }}></div>
              </span>
            </h1>

            <p className="animate-fade-up delay-300" style={{ 
              marginTop: 32, fontSize: 'clamp(18px, 2.5vw, 22px)', color: '#4b5563', 
              maxWidth: 680, margin: '32px auto 0', lineHeight: 1.6, fontWeight: 500,
            }}>
              We transform industrial and agricultural waste into premium sustainable products — pioneering a circular economy that builds a cleaner tomorrow.
            </p>

            <div className="animate-fade-up delay-400" style={{ marginTop: 48, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
              <Link to="/solutions" 
                className="animate-pulse-glow card-lift"
                style={{
                  position: 'relative', overflow: 'hidden',
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)', 
                  color: '#ffffff', fontWeight: 800, padding: '18px 46px',
                  borderRadius: 999, fontSize: 18, textDecoration: 'none', 
                  boxShadow: '0 10px 40px rgba(16, 185, 129, 0.3)',
                }}
              >
                <div className="btn-shimmer" style={{ position: 'absolute', inset: 0, zIndex: 1 }}></div>
                <span style={{ position: 'relative', zIndex: 2 }}>Explore Our Products</span>
                <span style={{ position: 'relative', zIndex: 2 }}>→</span>
              </Link>
              
              <Link to="/about" 
                className="card-lift"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  color: '#047857', fontWeight: 700, padding: '18px 46px', 
                  borderRadius: 999, fontSize: 18, textDecoration: 'none',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, background: 'linear-gradient(to top, #f8fafc, transparent)' }} />
      </section>


      {/* ═══════════ WHY WE EXIST ═══════════ */}
      <section style={{ padding: '100px 24px', background: '#fff', textAlign: 'center' }}>
        <div className="reveal-on-scroll" style={{ maxWidth: 720, margin: '0 auto' }}>
          <span style={{
            display: 'inline-block', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em',
            color: '#047857', background: '#ecfdf5', border: '1px solid #a7f3d0', padding: '8px 20px', borderRadius: 999
          }}>
            Why We Exist
          </span>

          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #059669, #facc15)', borderRadius: 999, margin: '20px auto 32px' }} />

          <p style={{ fontSize: 'clamp(17px, 2.5vw, 22px)', color: '#374151', lineHeight: 1.8, margin: 0 }}>
            Every year, tons of paper, leather, cotton, and organic waste end up in landfills.{' '}
            <strong style={{ color: '#065f46', fontWeight: 700 }}>W2W Ventures</strong>{' '}
            partners with local industries to collect this waste and turn it into valuable, eco-friendly products — creating a cleaner future,{' '}
            <em style={{ color: '#047857', fontWeight: 600, fontStyle: 'normal' }}>one solution at a time.</em>
          </p>
        </div>
      </section>


      {/* ═══════════ OUR SOLUTIONS ═══════════ */}
      <section style={{ padding: '120px 24px', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)', position: 'relative' }}>
        {/* Subtle background decoration */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'radial-gradient(circle at 10% 20%, rgba(5, 150, 105, 0.03) 0%, transparent 40%)', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: 72 }}>
            <span style={{
              display: 'inline-block', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.25em',
              color: '#059669', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', 
              padding: '8px 24px', borderRadius: 999, marginBottom: 20, boxShadow: '0 4px 12px rgba(16,185,129,0.1)'
            }}>
              What We Do
            </span>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, color: '#021a12', margin: '8px 0 0', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Our Products
            </h2>
            <div className="section-divider" style={{ margin: '24px auto 20px' }} />
            <p style={{ color: '#4b5563', fontSize: 'clamp(16px, 2vw, 20px)', maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>
              From compost to export-ready recycled materials — see how we turn waste into worth.
            </p>
          </div>

          {/* 6 Cards with staggered fade up */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {solutionsList.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`reveal-on-scroll delay-${(index + 1) * 100}`}
                onClick={() => setPopup(item)}
                style={{
                  background: '#ffffff', borderRadius: 24, overflow: 'hidden',
                  border: '1px solid rgba(16, 185, 129, 0.1)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  cursor: 'pointer', textAlign: 'left', padding: 0,
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  position: 'relative',
                  display: 'flex', flexDirection: 'column'
                }}
                onMouseEnter={e => { 
                  e.currentTarget.style.transform = 'translateY(-12px)'; 
                  e.currentTarget.style.boxShadow = '0 24px 48px rgba(16, 185, 129, 0.15)'; 
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.1) rotate(1deg)';
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.transform = 'translateY(0)'; 
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'; 
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.1)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1) rotate(0deg)';
                }}
              >
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)', zIndex: 1 }}></div>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1)' }}
                  />
                </div>
                <div style={{ padding: '20px 16px', textAlign: 'center', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: '#022c22', margin: 0, lineHeight: 1.4 }}>
                    {item.name}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          <div className="reveal-on-scroll delay-600" style={{ textAlign: 'center', marginTop: 64 }}>
            <Link to="/solutions" className="card-lift" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', color: '#fff', 
              fontWeight: 800, padding: '18px 46px', borderRadius: 999, fontSize: 17, 
              textDecoration: 'none', boxShadow: '0 10px 30px rgba(5,150,105,0.3)',
              position: 'relative', overflow: 'hidden'
            }}
            onMouseEnter={e => { e.currentTarget.querySelector('span.arrow').style.transform = 'translateX(4px)'; }}
            onMouseLeave={e => { e.currentTarget.querySelector('span.arrow').style.transform = 'translateX(0)'; }}
            >
              <div className="btn-shimmer" style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.5 }}></div>
              <span style={{ position: 'relative', zIndex: 2 }}>View All Products</span>
              <span className="arrow" style={{ position: 'relative', zIndex: 2, transition: 'transform 0.3s ease' }}>→</span>
            </Link>
          </div>
        </div>
      </section>


      {/* ═══════════ LOCATIONS ═══════════ */}
      <section style={{ padding: '120px 24px', background: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)', color: '#021a12', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Abstract global map/nodes background effect */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.03) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '20%', left: '15%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(5, 150, 105, 0.05)', filter: 'blur(100px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(250, 204, 21, 0.05)', filter: 'blur(120px)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1100, margin: '0 auto' }}>
          <div className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: 72 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(16, 185, 129, 0.3)', color: '#059669', fontSize: 12, fontWeight: 800,
              textTransform: 'uppercase', letterSpacing: '0.25em', padding: '8px 24px', borderRadius: 999, marginBottom: 20,
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}>
              <span className="animate-pulse-glow" style={{width: 6, height: 6, borderRadius: '50%', background: '#059669', display: 'inline-block'}}></span>
              Our Presence
            </span>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, color: '#021a12', margin: '8px 0 0', lineHeight: 1.15, letterSpacing: '-0.02em', textShadow: 'none' }}>
              Where We Operate
            </h2>
            <div className="section-divider" style={{ margin: '24px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 28 }}>
            {locations.map((loc, index) => (
              <div key={loc.name} className={`reveal-on-scroll delay-${(index + 1) * 100}`} style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)', 
                border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: 28, padding: '40px 24px',
                textAlign: 'center', transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
                position: 'relative', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                transform: 'translateY(0)'
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.transform = 'translateY(-12px)'; 
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.5)';
                e.currentTarget.style.boxShadow = '0 24px 50px rgba(16, 185, 129, 0.15), 0 0 0 2px rgba(16, 185, 129, 0.1) inset';
                e.currentTarget.style.background = 'linear-gradient(145deg, #f0fdf4 0%, #ffffff 100%)';
                const iconContainer = e.currentTarget.querySelector('.icon-container');
                if (iconContainer) iconContainer.style.transform = 'scale(1.15) rotate(5deg) translateY(-4px)';
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.transform = 'translateY(0)'; 
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.2)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.04)';
                e.currentTarget.style.background = 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)';
                const iconContainer = e.currentTarget.querySelector('.icon-container');
                if (iconContainer) iconContainer.style.transform = 'scale(1) rotate(0deg) translateY(0)';
              }}
              >
                <div className="icon-container" style={{ 
                  width: 80, height: 80, margin: '0 auto 24px', 
                  background: 'radial-gradient(circle at top left, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.02) 100%)',
                  border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36,
                  boxShadow: '0 8px 24px rgba(16, 185, 129, 0.15), inset 0 2px 10px rgba(16, 185, 129, 0.1)',
                  transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
                }}>
                  {loc.icon}
                </div>
                <h4 style={{ fontSize: 22, fontWeight: 800, color: '#021a12', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{loc.name}</h4>
                <p style={{ fontSize: 14, color: '#4b5563', fontWeight: 500, margin: 0 }}>{loc.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════ CTA ═══════════ */}
      <section style={{ padding: '100px 24px', background: '#f8fafc' }}>
        <div className="reveal-on-scroll" style={{
          maxWidth: 880, margin: '0 auto', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          borderRadius: 32, padding: 'clamp(48px, 6vw, 80px)', textAlign: 'center', color: '#fff',
          boxShadow: '0 24px 64px rgba(16, 185, 129, 0.25)', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(250,204,21,0.08)', filter: 'blur(40px)' }} />
          <div style={{ position: 'absolute', bottom: -40, left: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(52,211,153,0.08)', filter: 'blur(40px)' }} />

          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2, textShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              Let's Build a Sustainable<br />Future Together
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(15px, 2vw, 19px)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7 }}>
              Interested in partnering with W2W Ventures or sourcing our recycled products?
            </p>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#facc15', color: '#022c22', fontWeight: 800, padding: '18px 44px',
              borderRadius: 999, fontSize: 18, textDecoration: 'none', boxShadow: '0 8px 32px rgba(250,204,21,0.3)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={e => { e.target.style.background = '#fde047'; e.target.style.transform = 'scale(1.05)'; }}
            onMouseLeave={e => { e.target.style.background = '#facc15'; e.target.style.transform = 'scale(1)'; }}
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>


      {/* ═══════════ POPUP MODAL ═══════════ */}
      {popup && (
        <div
          onClick={() => setPopup(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 16, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff', borderRadius: 24, maxWidth: 500, width: '100%', overflow: 'hidden',
              boxShadow: '0 32px 64px rgba(0,0,0,0.3)', border: '1px solid #d1fae5',
              animation: 'scaleIn 0.3s ease-out'
            }}
          >
            <div style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
              <img src={popup.image} alt={popup.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
              <button
                onClick={() => setPopup(null)}
                style={{
                  position: 'absolute', top: 12, right: 12, width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(0,0,0,0.4)', color: '#fff', border: 'none', cursor: 'pointer',
                  fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backdropFilter: 'blur(8px)'
                }}
              >✕</button>
              <h3 style={{ position: 'absolute', bottom: 16, left: 24, fontSize: 24, fontWeight: 800, color: '#fff', margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                {popup.name}
              </h3>
            </div>
            <div style={{ padding: '24px 28px 28px' }}>
              <p style={{
                display: 'inline-block', background: '#ecfdf5', color: '#047857', fontSize: 13,
                fontWeight: 600, padding: '6px 14px', borderRadius: 999, marginBottom: 12
              }}>
                {popup.description}
              </p>
              <p style={{ color: '#4b5563', fontSize: 14, lineHeight: 1.7, marginTop: 12 }}>
                {popup.details}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, marginTop: 20, borderTop: '1px solid #f3f4f6' }}>
                <Link to="/solutions" onClick={() => setPopup(null)} style={{ color: '#047857', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                  View All Products →
                </Link>
                <button onClick={() => setPopup(null)} style={{
                  background: '#064e3b', color: '#fff', padding: '10px 24px', borderRadius: 999,
                  fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer'
                }}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
