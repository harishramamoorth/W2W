import { useState } from 'react';
import { Link } from 'react-router-dom';
import { partners, partnerCategories } from '../constants/partners';
import { FactoryIcon, GlobeIcon, LeafIcon, ThreadIcon, BoxIcon, HandshakeIcon, MapPinIcon, CheckIcon } from '../components/common/Icons';

export default function PartnersPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPartners = activeCategory === 'All'
    ? partners
    : partners.filter(p => p.category === activeCategory);

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
        background: 'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #022c22 100%)',
        color: '#fff',
        padding: '72px 24px 80px',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -60, left: '25%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(250,204,21,0.08)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: -60, right: '25%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(52,211,153,0.1)', filter: 'blur(80px)' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 840, margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.18)',
            color: '#facc15',
            fontSize: 12,
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            padding: '8px 20px',
            borderRadius: 999,
            marginBottom: 20
          }}>
            Collaborative Ecosystem
          </span>

          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 60px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: '0 0 16px'
          }}>
            Meet Our <span style={{ background: 'linear-gradient(135deg, #facc15, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Partners</span>
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 21px)',
            color: 'rgba(209,250,229,0.9)',
            maxWidth: 640,
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            Working together with industries and communities to turn waste into wealth
          </p>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          MAIN CONTENT CONTAINER
         ════════════════════════════════════════════════════ */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '64px 24px 96px', display: 'flex', flexDirection: 'column', gap: 48 }}>

        {/* ════════════════════════════════════════════════════
            CATEGORIES FILTER TABS
           ════════════════════════════════════════════════════ */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
          {partnerCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: isActive ? '#064e3b' : '#fff',
                  color: isActive ? '#facc15' : '#374151',
                  border: isActive ? '1px solid #064e3b' : '1px solid #e2e8f0',
                  fontWeight: isActive ? 800 : 600,
                  fontSize: 14,
                  padding: '10px 22px',
                  borderRadius: 999,
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 6px 18px rgba(6,78,59,0.2)' : '0 2px 6px rgba(0,0,0,0.02)',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>


        {/* ════════════════════════════════════════════════════
            PARTNERS GRID (3 per row desktop, 1 per row mobile)
           ════════════════════════════════════════════════════ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 28
        }}>
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              style={{
                background: '#fff',
                borderRadius: 28,
                padding: 32,
                border: '1px solid #e2e8f0',
                boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#a7f3d0';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              <div>
                {/* Header Row: Vector SVG Icon + City Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <div style={{
                    width: 64,
                    height: 64,
                    borderRadius: 20,
                    background: partner.bg || '#ecfdf5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}>
                    {getPartnerIcon(partner.iconType, partner.color)}
                  </div>

                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#047857',
                    background: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    padding: '4px 12px',
                    borderRadius: 999
                  }}>
                    <MapPinIcon size={14} color="#047857" />
                    <span>{partner.city}</span>
                  </span>
                </div>

                {/* Partner Name */}
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#022c22', margin: '0 0 10px', lineHeight: 1.3 }}>
                  {partner.name}
                </h3>

                {/* Role / What they do with W2W */}
                <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.6, margin: '0 0 20px', fontWeight: 400 }}>
                  {partner.role}
                </p>
              </div>

              {/* Footer Row: Category tag */}
              <div style={{ paddingTop: 16, borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {partner.category}
                </span>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#059669', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span>Active Alliance</span>
                  <CheckIcon size={16} color="#059669" />
                </span>
              </div>
            </div>
          ))}
        </div>


        {/* DATA NOTE BANNER */}
        <div style={{
          background: 'linear-gradient(135deg, #fefce8 0%, #fffbeb 100%)',
          border: '1px solid #fde047',
          borderRadius: 20,
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          boxShadow: '0 4px 14px rgba(234,179,8,0.06)'
        }}>
          <span style={{ color: '#ca8a04', flexShrink: 0 }}>
            <MapPinIcon size={24} color="#ca8a04" />
          </span>
          <p style={{ fontSize: 14, color: '#854d0e', margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
            <strong>Note for Team:</strong> Official partner names, vector logos, and specific alliance metrics can be fully customized based on exact company records.
          </p>
        </div>


        {/* CTA SECTION */}
        <section style={{
          background: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)',
          borderRadius: 32,
          padding: 'clamp(48px, 6vw, 80px) 24px',
          textAlign: 'center',
          color: '#fff',
          boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'relative', zIndex: 10, maxWidth: 640, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 44px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.2 }}>
              Interested in Partnering with Us?
            </h2>
            <p style={{ color: 'rgba(209,250,229,0.85)', fontSize: 'clamp(15px, 2vw, 19px)', margin: '0 auto 36px', lineHeight: 1.6, fontWeight: 400 }}>
              Join our growing network of industrial suppliers, recycling units, and global export channels.
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#facc15',
                color: '#022c22',
                fontWeight: 800,
                padding: '18px 44px',
                borderRadius: 999,
                fontSize: 18,
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(250,204,21,0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              Get in Touch →
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}