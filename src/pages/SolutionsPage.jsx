import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { solutionsData } from '../constants/solutionsData';
import { MapPinIcon, CogIcon, BoxIcon, LeafIcon, CheckIcon } from '../components/common/Icons';

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const location = useLocation();
  const navigate = useNavigate();

  // Handle URL hash or param auto-opening
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const match = solutionsData.find((s) => s.id === hash);
      if (match) {
        setSelectedSolution(match);
        setActiveFilter(match.id);
      }
    }
  }, [location.hash]);

  const filteredList = activeFilter === 'all'
    ? solutionsData
    : solutionsData.filter((s) => s.id === activeFilter);

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
        <div style={{ position: 'absolute', top: -60, left: '20%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(250,204,21,0.08)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: -60, right: '20%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(52,211,153,0.1)', filter: 'blur(80px)' }} />

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
            Waste Stream Transformation
          </span>

          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 60px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: '0 0 16px'
          }}>
            Our <span style={{ background: 'linear-gradient(135deg, #facc15, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Products</span>
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 21px)',
            color: 'rgba(209,250,229,0.9)',
            maxWidth: 640,
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            Every waste stream has a sustainable solution. Select any product to explore the transformation workflow.
          </p>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          MAIN CONTENT CONTAINER
         ════════════════════════════════════════════════════ */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 96px', display: 'flex', flexDirection: 'column', gap: 48 }}>

        {/* SOLUTION NAVIGATION TABS */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            style={{
              background: activeFilter === 'all' ? '#064e3b' : '#fff',
              color: activeFilter === 'all' ? '#facc15' : '#374151',
              border: activeFilter === 'all' ? '1px solid #064e3b' : '1px solid #e2e8f0',
              fontWeight: activeFilter === 'all' ? 800 : 600,
              fontSize: 14,
              padding: '10px 22px',
              borderRadius: 999,
              cursor: 'pointer',
              boxShadow: activeFilter === 'all' ? '0 6px 18px rgba(6,78,59,0.2)' : '0 2px 6px rgba(0,0,0,0.02)',
              transition: 'all 0.25s ease'
            }}
          >
            All Products
          </button>
          {solutionsData.map((item) => {
            const isActive = activeFilter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveFilter(item.id);
                  navigate(`/solutions/${item.id}`);
                }}
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
                {item.solutionName}
              </button>
            );
          })}
        </div>


        {/* 2. SOLUTIONS GRID — 5 CARDS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 32
        }}>
          {filteredList.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/solutions/${item.id}`)}
              style={{
                background: '#fff',
                borderRadius: 28,
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.12)';
                e.currentTarget.style.borderColor = '#a7f3d0';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              <div>
                {/* Image */}
                <div style={{ aspectRatio: '16/10', overflow: 'hidden', position: 'relative', background: '#ecfdf5' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: 'rgba(0,0,0,0.65)',
                    backdropFilter: 'blur(8px)',
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 700,
                    padding: '6px 14px',
                    borderRadius: 999,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6
                  }}>
                    <MapPinIcon size={14} color="#6ee7b7" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: 28 }}>
                  
                  {/* Solution Title */}
                  <h3 style={{ fontSize: 22, fontWeight: 900, color: '#022c22', margin: '0 0 10px' }}>
                    {item.name}
                  </h3>

                  <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.6, margin: '0 0 20px', fontWeight: 400 }}>
                    {item.description}
                  </p>

                  {/* Output Highlight Pill */}
                  <div style={{
                    background: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    borderRadius: 16,
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                  }}>
                    <span style={{ color: '#047857', flexShrink: 0 }}>
                      <BoxIcon size={18} color="#047857" />
                    </span>
                    <span style={{ fontSize: 13, color: '#065f46', fontWeight: 700, lineHeight: 1.4 }}>
                      Output: {item.output}
                    </span>
                  </div>

                </div>
              </div>

              {/* Action Button Footer */}
              <div style={{ padding: '0 28px 28px', display: 'flex', gap: 10 }}>
                <Link
                  to={`/solutions/${item.id}`}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    flex: 1,
                    background: '#064e3b',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: 14,
                    padding: '14px 20px',
                    borderRadius: 16,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    boxShadow: '0 4px 14px rgba(6,78,59,0.2)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <span>Explore Workflow</span>
                  <span style={{ fontSize: 16 }}>→</span>
                </Link>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSolution(item);
                  }}
                  style={{
                    background: '#fefce8',
                    color: '#a16207',
                    border: '1px solid #fde047',
                    fontWeight: 800,
                    fontSize: 13,
                    padding: '14px 16px',
                    borderRadius: 16,
                    cursor: 'pointer'
                  }}
                >
                  Quick Specs
                </button>
              </div>

            </div>
          ))}
        </div>


        {/* CTA BANNER */}
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
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900, margin: '0 0 16px' }}>
              Custom Industrial Recycling Solutions
            </h2>
            <p style={{ color: 'rgba(209,250,229,0.85)', fontSize: 'clamp(15px, 2vw, 18px)', margin: '0 auto 32px', lineHeight: 1.6 }}>
              Need tailored recycling workflows for your factory, mill, or agricultural supply chain?
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
                padding: '16px 40px',
                borderRadius: 999,
                fontSize: 17,
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(250,204,21,0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              Inquire About Custom Processing →
            </Link>
          </div>
        </section>

      </div>


      {/* FULL DETAIL POPUP MODAL */}
      {selectedSolution && (
        <div
          onClick={() => setSelectedSolution(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(6px)',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: 32,
              maxWidth: 640,
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 32px 64px rgba(0,0,0,0.3)',
              border: '1px solid #a7f3d0',
              animation: 'scaleIn 0.3s ease-out'
            }}
          >
            {/* Modal Header */}
            <div style={{ position: 'relative', height: 260, overflow: 'hidden', background: '#022c22' }}>
              <img
                src={selectedSolution.image}
                alt={selectedSolution.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,44,34,0.85), transparent)' }} />
              
              <button
                type="button"
                onClick={() => setSelectedSolution(null)}
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.5)',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 16,
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(8px)'
                }}
              >
                ✕
              </button>

              <div style={{ position: 'absolute', bottom: 20, left: 28, right: 28 }}>
                <span style={{
                  display: 'inline-block',
                  background: '#facc15',
                  color: '#022c22',
                  fontSize: 11,
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '4px 12px',
                  borderRadius: 999,
                  marginBottom: 8
                }}>
                  W2W Product Blueprint
                </span>
                <h3 style={{ fontSize: 28, fontWeight: 900, color: '#fff', margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                  {selectedSolution.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '32px 28px' }}>
              
              {/* Detail Cards: Process, Location, Output */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
                
                {/* ⚙️ Process */}
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: 20,
                  padding: '18px 20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ color: '#047857' }}><CogIcon size={20} /></span>
                    <span style={{ fontSize: 13, fontWeight: 800, color: '#047857', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Process
                    </span>
                  </div>
                  <p style={{ fontSize: 15, color: '#1f2937', margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
                    {selectedSolution.process}
                  </p>
                </div>

                {/* 📍 Location */}
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: 20,
                  padding: '18px 20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ color: '#047857' }}><MapPinIcon size={20} /></span>
                    <span style={{ fontSize: 13, fontWeight: 800, color: '#047857', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Location
                    </span>
                  </div>
                  <p style={{ fontSize: 15, color: '#1f2937', margin: 0, lineHeight: 1.6, fontWeight: 600 }}>
                    {selectedSolution.location}
                  </p>
                </div>

                {/* 📦 Output */}
                <div style={{
                  background: '#ecfdf5',
                  border: '1px solid #a7f3d0',
                  borderRadius: 20,
                  padding: '18px 20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ color: '#047857' }}><BoxIcon size={20} /></span>
                    <span style={{ fontSize: 13, fontWeight: 800, color: '#047857', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Output Product
                    </span>
                  </div>
                  <p style={{ fontSize: 15, color: '#065f46', margin: 0, lineHeight: 1.6, fontWeight: 700 }}>
                    {selectedSolution.output}
                  </p>
                </div>

              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12, paddingTop: 20, borderTop: '1px solid #f1f5f9' }}>
                <Link
                  to={`/solutions/${selectedSolution.id}`}
                  onClick={() => setSelectedSolution(null)}
                  style={{
                    background: '#064e3b',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: 14,
                    padding: '12px 20px',
                    borderRadius: 999,
                    textDecoration: 'none'
                  }}
                >
                  Open Full Page →
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setSelectedSolution(null)}
                  style={{
                    background: '#facc15',
                    color: '#022c22',
                    fontWeight: 800,
                    fontSize: 14,
                    padding: '12px 20px',
                    borderRadius: 999,
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(250,204,21,0.3)'
                  }}
                >
                  Inquire Now
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}