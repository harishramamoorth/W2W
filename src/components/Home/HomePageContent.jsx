import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/home.png';
import { solutionsList } from '../../constants/solutionsData';

export default function HomePageContent() {
  const [popup, setPopup] = useState(null);

  const locations = [
    { name: 'Chennai',      icon: '🏙️', tag: 'Paper Recycling HQ' },
    { name: 'Vaniyambadi',  icon: '🏭', tag: 'Leather Processing' },
    { name: 'Virudhunagar', icon: '📦', tag: 'Carton Repurposing' },
    { name: 'Tirupur',      icon: '🧵', tag: 'Cotton Recycling' },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img src={heroImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.05)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,78,59,0.78)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #022c22 0%, transparent 50%, rgba(6,78,59,0.5) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 900, margin: '0 auto', padding: '100px 24px', textAlign: 'center' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.2)', color: '#facc15', fontSize: 12, fontWeight: 800,
            textTransform: 'uppercase', letterSpacing: '0.25em', padding: '8px 20px', borderRadius: 999, marginBottom: 32
          }}>
            ♻️&ensp;Sustainable Recycling Solutions
          </span>

          <h1 style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0 }}>
            Turning{' '}
            <span style={{ background: 'linear-gradient(135deg, #facc15, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Waste</span>
            {' '}into{' '}
            <span style={{ background: 'linear-gradient(135deg, #facc15, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Wealth</span>
          </h1>

          <p style={{ marginTop: 28, fontSize: 'clamp(16px, 2.5vw, 20px)', color: 'rgba(209,250,229,0.9)', maxWidth: 620, margin: '28px auto 0', lineHeight: 1.7 }}>
            We transform industrial and agricultural waste into sustainable, reusable products — reducing pollution while building a circular economy.
          </p>

          <div style={{ marginTop: 48, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
            <Link to="/solutions" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#facc15', color: '#022c22', fontWeight: 800, padding: '16px 40px',
              borderRadius: 999, fontSize: 18, textDecoration: 'none', boxShadow: '0 8px 32px rgba(250,204,21,0.3)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={e => { e.target.style.background = '#fde047'; e.target.style.transform = 'scale(1.05)'; }}
            onMouseLeave={e => { e.target.style.background = '#facc15'; e.target.style.transform = 'scale(1)'; }}
            >
              Explore Our Solutions →
            </Link>
            <Link to="/about" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', fontWeight: 700, padding: '16px 40px', borderRadius: 999, fontSize: 18, textDecoration: 'none',
              transition: 'all 0.3s'
            }}
            onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={e => { e.target.style.background = 'rgba(255,255,255,0.1)'; }}
            >
              Learn More
            </Link>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to top, #fff, transparent)' }} />
      </section>


      {/* ═══════════ WHY WE EXIST ═══════════ */}
      <section style={{ padding: '100px 24px', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
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
      <section style={{ padding: '100px 24px', background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{
              display: 'inline-block', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em',
              color: '#047857', background: '#ecfdf5', border: '1px solid #a7f3d0', padding: '8px 20px', borderRadius: 999, marginBottom: 16
            }}>
              What We Do
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, color: '#022c22', margin: '8px 0 0', lineHeight: 1.15 }}>
              Our Solutions
            </h2>
            <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #059669, #facc15)', borderRadius: 999, margin: '20px auto 16px' }} />
            <p style={{ color: '#6b7280', fontSize: 'clamp(15px, 2vw, 18px)', maxWidth: 500, margin: '0 auto' }}>
              From compost to export-ready recycled materials — see how we turn waste into worth.
            </p>
          </div>

          {/* 5 Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {solutionsList.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setPopup(item)}
                style={{
                  background: '#fff', borderRadius: 20, overflow: 'hidden',
                  border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  cursor: 'pointer', textAlign: 'left', padding: 0,
                  transition: 'all 0.35s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'; }}
              >
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    onMouseEnter={e => { e.target.style.transform = 'scale(1.1)'; }}
                    onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
                  />
                </div>
                <div style={{ padding: '16px 12px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#022c22', margin: 0, lineHeight: 1.3 }}>
                    {item.name}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <Link to="/solutions" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#064e3b', color: '#fff', fontWeight: 700, padding: '16px 40px',
              borderRadius: 999, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 24px rgba(6,78,59,0.25)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={e => { e.target.style.background = '#022c22'; e.target.style.transform = 'scale(1.05)'; }}
            onMouseLeave={e => { e.target.style.background = '#064e3b'; e.target.style.transform = 'scale(1)'; }}
            >
              View All Solutions →
            </Link>
          </div>
        </div>
      </section>


      {/* ═══════════ LOCATIONS ═══════════ */}
      <section style={{ padding: '80px 24px', background: '#022c22', color: '#fff', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, borderRadius: '50%', background: 'rgba(6,95,70,0.3)', filter: 'blur(80px)' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 960, margin: '0 auto' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.15)', color: '#facc15', fontSize: 11, fontWeight: 800,
            textTransform: 'uppercase', letterSpacing: '0.2em', padding: '8px 20px', borderRadius: 999, marginBottom: 16
          }}>
            Our Presence
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, color: '#fff', margin: '0 0 8px' }}>
            Where We Operate
          </h2>
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #facc15, #34d399)', borderRadius: 999, margin: '0 auto 48px' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {locations.map((loc) => (
              <div key={loc.name} style={{
                background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '32px 20px',
                textAlign: 'center', transition: 'all 0.3s'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontSize: 40, marginBottom: 12 }}>{loc.icon}</div>
                <h4 style={{ fontSize: 20, fontWeight: 800, color: '#facc15', margin: '0 0 4px' }}>{loc.name}</h4>
                <p style={{ fontSize: 12, color: '#6ee7b7', fontWeight: 500 }}>{loc.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════ CTA ═══════════ */}
      <section style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{
          maxWidth: 880, margin: '0 auto', background: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)',
          borderRadius: 32, padding: 'clamp(48px, 6vw, 80px)', textAlign: 'center', color: '#fff',
          boxShadow: '0 24px 64px rgba(0,0,0,0.15)', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(250,204,21,0.08)', filter: 'blur(40px)' }} />
          <div style={{ position: 'absolute', bottom: -40, left: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(52,211,153,0.08)', filter: 'blur(40px)' }} />

          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>
              Let's Build a Sustainable<br />Future Together
            </h2>
            <p style={{ color: 'rgba(209,250,229,0.8)', fontSize: 'clamp(15px, 2vw, 19px)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7 }}>
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
                  View All Solutions →
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
