import { useState } from 'react';
import { Link } from 'react-router-dom';
import { partners, partnerCategories } from '../constants/partners';
import { FactoryIcon, GlobeIcon, LeafIcon, ThreadIcon, BoxIcon, HandshakeIcon, MapPinIcon, CheckIcon, SearchIcon } from '../components/common/Icons';

export default function PartnersPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPartners = partners.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getPartnerIcon = (type, color) => {
    switch (type) {
      case 'factory': return <FactoryIcon size={28} color={color} />;
      case 'globe': return <GlobeIcon size={28} color={color} />;
      case 'leaf': return <LeafIcon size={28} color={color} />;
      case 'thread': return <ThreadIcon size={28} color={color} />;
      case 'box': return <BoxIcon size={28} color={color} />;
      case 'handshake': return <HandshakeIcon size={28} color={color} />;
      default: return <HandshakeIcon size={28} color={color} />;
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", width: '100%', background: '#f8faf8', color: '#1a1a2e', minHeight: '80vh' }}>
      
      {/* ════════════════════════════════════════════════════
          1. PAGE HEADER
         ════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #e6f6f0 0%, #f3fcf8 50%, #ffffff 100%)',
        color: '#021a12',
        padding: '72px 24px 80px',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <div className="animate-blob" style={{ position: 'absolute', top: -100, left: '10%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(16, 185, 129, 0.08)', filter: 'blur(100px)' }} />
        <div className="animate-blob" style={{ position: 'absolute', bottom: -100, right: '10%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(250, 204, 21, 0.08)', filter: 'blur(100px)', animationDelay: '2s' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 840, margin: '0 auto' }}>
          <span className="animate-fade-up delay-100" style={{
            display: 'inline-block',
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            color: '#047857',
            fontSize: 13,
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            padding: '10px 24px',
            borderRadius: 999,
            marginBottom: 24,
            boxShadow: '0 8px 16px rgba(16,185,129,0.1)'
          }}>
            Collaborative Ecosystem
          </span>

          <h1 className="animate-fade-up delay-200" style={{
            fontSize: 'clamp(40px, 7vw, 72px)',
            fontWeight: 900,
            color: '#021a12',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            margin: '0 0 20px'
          }}>
            Meet Our{' '}
            <span className="animate-pulse-glow" style={{ 
              background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)', 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              display: 'inline-block',
              padding: '0 4px'
            }}>
              Partners
            </span>
          </h1>

          <p className="animate-fade-up delay-300" style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            color: '#4b5563',
            maxWidth: 720,
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 500
          }}>
            Working together with industries and communities to turn waste into wealth.
          </p>

          {/* Quick Stats */}
          <div className="animate-fade-up delay-400" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 32,
            marginTop: 40,
            padding: '24px 48px',
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: 24,
            border: '1px solid rgba(16, 185, 129, 0.15)',
            boxShadow: '0 12px 32px rgba(16, 185, 129, 0.05)',
            width: 'fit-content',
            margin: '40px auto 0'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#047857', lineHeight: 1 }}>{partners.length}+</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', marginTop: 8 }}>Active Alliances</div>
            </div>
            <div style={{ width: 1, height: 40, background: 'rgba(16, 185, 129, 0.2)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#047857', lineHeight: 1 }}>5</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', marginTop: 8 }}>Major Cities</div>
            </div>
            <div style={{ width: 1, height: 40, background: 'rgba(16, 185, 129, 0.2)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#047857', lineHeight: 1 }}>10K+</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', marginTop: 8 }}>Tons Processed</div>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          MAIN CONTENT CONTAINER
         ════════════════════════════════════════════════════ */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '64px 24px 96px', display: 'flex', flexDirection: 'column', gap: 48 }}>

        {/* ════════════════════════════════════════════════════
            CONTROL BAR (Search & Filters)
           ════════════════════════════════════════════════════ */}
        <div className="animate-fade-up delay-500" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          marginBottom: 16
        }}>
          {/* Search Input */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: 480
          }}>
            <div style={{ position: 'absolute', top: '50%', left: 24, transform: 'translateY(-50%)', color: '#10b981' }}>
              <SearchIcon size={22} color="#10b981" />
            </div>
            <input
              type="text"
              placeholder="Search partners by name or city..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '18px 24px 18px 64px',
                borderRadius: 999,
                border: '1px solid rgba(16, 185, 129, 0.2)',
                background: '#ffffff',
                boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                fontSize: 16,
                fontWeight: 500,
                color: '#022c22',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={e => {
                e.target.style.borderColor = '#10b981';
                e.target.style.boxShadow = '0 12px 32px rgba(16, 185, 129, 0.15)';
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(16, 185, 129, 0.2)';
                e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.04)';
              }}
            />
          </div>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: 12,
            background: '#ffffff',
            padding: '12px 24px',
            borderRadius: 999,
            boxShadow: '0 12px 32px rgba(0,0,0,0.04)',
            border: '1px solid rgba(16, 185, 129, 0.1)',
            width: 'fit-content'
          }}>
            {partnerCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: isActive ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'transparent',
                  color: isActive ? '#fff' : '#6b7280',
                  border: 'none',
                  fontWeight: isActive ? 800 : 600,
                  fontSize: 15,
                  padding: '12px 28px',
                  borderRadius: 999,
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 8px 24px rgba(16, 185, 129, 0.25)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={e => {
                  if(!isActive) {
                    e.currentTarget.style.color = '#10b981';
                    e.currentTarget.style.background = '#f8fafc';
                  }
                }}
                onMouseLeave={e => {
                  if(!isActive) {
                    e.currentTarget.style.color = '#6b7280';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
          </div>
        </div>


        {/* ════════════════════════════════════════════════════
            PARTNERS GRID (3 per row desktop, 1 per row mobile)
           ════════════════════════════════════════════════════ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 28
        }}>
          {filteredPartners.map((partner, index) => (
            <div
              key={partner.id}
              className={`card-lift animate-fade-up delay-${((index % 3) + 4) * 100}`}
              style={{
                background: '#ffffff',
                borderRadius: 32,
                padding: 40,
                border: '1px solid rgba(16, 185, 129, 0.15)',
                boxShadow: '0 24px 48px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.5)';
                e.currentTarget.style.boxShadow = '0 32px 64px rgba(16, 185, 129, 0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.15)';
                e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.04)';
              }}
            >
              <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', background: partner.bg || 'rgba(16, 185, 129, 0.05)', filter: 'blur(40px)', zIndex: 0 }} />

              <div style={{ position: 'relative', zIndex: 10 }}>
                {/* Header Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                  <div className="animate-float" style={{
                    width: 72,
                    height: 72,
                    borderRadius: 24,
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 12px 32px rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}>
                    {getPartnerIcon(partner.iconType, partner.color)}
                  </div>

                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 800,
                    color: '#059669',
                    background: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    padding: '6px 16px',
                    borderRadius: 999,
                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.08)'
                  }}>
                    <MapPinIcon size={16} color="#059669" />
                    <span>{partner.city}</span>
                  </span>
                </div>

                <h3 style={{ fontSize: 24, fontWeight: 900, color: '#021a12', margin: '0 0 12px', lineHeight: 1.3 }}>
                  {partner.name}
                </h3>
                <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.6, margin: '0 0 24px', fontWeight: 500 }}>
                  {partner.role}
                </p>
              </div>

              <div style={{ paddingTop: 20, borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 10 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {partner.category}
                </span>
                <span style={{ fontSize: 14, fontWeight: 800, color: '#10b981', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span>Active Alliance</span>
                  <div style={{ background: '#ecfdf5', borderRadius: '50%', padding: 4 }}>
                    <CheckIcon size={14} color="#10b981" />
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>


        {/* DATA NOTE BANNER */}
        <div className="animate-fade-up delay-700" style={{
          background: 'linear-gradient(135deg, #fefce8 0%, #fffbeb 100%)',
          border: '1px solid #fde047',
          borderRadius: 24,
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          boxShadow: '0 12px 32px rgba(234,179,8,0.08)'
        }}>
          <div style={{ background: '#fef08a', padding: 12, borderRadius: 16 }}>
            <MapPinIcon size={28} color="#b45309" />
          </div>
          <p style={{ fontSize: 15, color: '#854d0e', margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
            <strong>Note for Team:</strong> Official partner names, vector logos, and specific alliance metrics can be fully customized based on exact company records.
          </p>
        </div>


        {/* CTA SECTION - Glassmorphism Light Theme */}
        <section className="animate-fade-up delay-800" style={{
          position: 'relative',
          background: '#ffffff',
          borderRadius: 40,
          padding: 'clamp(64px, 8vw, 100px) 24px',
          textAlign: 'center',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          boxShadow: '0 32px 64px rgba(16, 185, 129, 0.08)',
          overflow: 'hidden'
        }}>
          <div className="animate-blob" style={{ position: 'absolute', top: -150, left: '20%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(16, 185, 129, 0.06)', filter: 'blur(100px)' }} />
          <div className="animate-blob" style={{ position: 'absolute', bottom: -150, right: '20%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(52, 211, 153, 0.08)', filter: 'blur(100px)', animationDelay: '2s' }} />
          
          <div style={{ position: 'relative', zIndex: 10, maxWidth: 720, margin: '0 auto' }}>
            <span style={{
              display: 'inline-block',
              color: '#059669',
              fontSize: 14,
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: 16
            }}>
              Join The Movement
            </span>
            <h2 style={{ color: '#021a12', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, margin: '0 0 24px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Interested in Partnering with Us?
            </h2>
            <p style={{ color: '#4b5563', fontSize: 'clamp(18px, 2.5vw, 22px)', margin: '0 auto 40px', lineHeight: 1.6, fontWeight: 500 }}>
              Join our growing network of industrial suppliers, recycling units, and global export channels.
            </p>
            
            <Link
              to="/contact"
              className="card-lift animate-gradient-pan"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
                color: '#fff',
                fontWeight: 800,
                padding: '20px 48px',
                borderRadius: 999,
                fontSize: 18,
                textDecoration: 'none',
                boxShadow: '0 16px 40px rgba(16, 185, 129, 0.3)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Get in Touch Today →
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}