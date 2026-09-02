import { useParams, Link, useNavigate } from 'react-router-dom';
import { solutionsData } from '../constants/solutionsData';
import {
  MapPinIcon,
  BoxIcon,
  BriefcaseIcon,
  LeafIcon,
  CheckIcon
} from '../components/common/Icons';

export default function SolutionDetailPage() {
  const { solutionId } = useParams();
  const navigate = useNavigate();

  const solution = solutionsData.find((s) => s.id === solutionId) || solutionsData[0];
  const otherSolutions = solutionsData.filter((s) => s.id !== solution.id);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", width: '100%', background: '#f8faf8', color: '#1a1a2e', minHeight: '85vh' }}>
      
      {/* ════════════════════════════════════════════════════
          HERO BANNER FOR DEDICATED SOLUTION
         ════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #022c22 100%)',
        color: '#fff',
        padding: '60px 24px 72px',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -60, left: '15%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(250,204,21,0.08)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: -60, right: '15%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(52,211,153,0.1)', filter: 'blur(80px)' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1120, margin: '0 auto' }}>
          
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#a7f3d0', marginBottom: 24, flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: '#a7f3d0', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
            <span>/</span>
            <Link to="/solutions" style={{ color: '#a7f3d0', textDecoration: 'none', fontWeight: 500 }}>Our Products</Link>
            <span>/</span>
            <span style={{ color: '#facc15', fontWeight: 700 }}>{solution.name}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40, alignItems: 'center' }}>
            
            {/* Left Header Content */}
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', marginBottom: 16 }}>
                <span style={{
                  background: '#facc15',
                  color: '#022c22',
                  fontSize: 12,
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '6px 16px',
                  borderRadius: 999
                }}>
                  W2W Enterprise Product
                </span>

                <span style={{
                  background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#6ee7b7',
                  fontSize: 12,
                  fontWeight: 700,
                  padding: '6px 16px',
                  borderRadius: 999,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6
                }}>
                  <MapPinIcon size={14} color="#6ee7b7" />
                  <span>{solution.location}</span>
                </span>
              </div>

              <h1 style={{
                fontSize: 'clamp(34px, 5vw, 54px)',
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: '0 0 20px'
              }}>
                {solution.name}
              </h1>

              <p style={{
                fontSize: 'clamp(16px, 2vw, 19px)',
                color: 'rgba(209,250,229,0.92)',
                lineHeight: 1.6,
                margin: '0 0 32px',
                fontWeight: 400
              }}>
                {solution.details}
              </p>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link
                  to="/contact"
                  style={{
                    background: '#facc15',
                    color: '#022c22',
                    fontWeight: 800,
                    fontSize: 16,
                    padding: '14px 32px',
                    borderRadius: 999,
                    textDecoration: 'none',
                    boxShadow: '0 8px 24px rgba(250,204,21,0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Inquire For Bulk Supply →
                </Link>

                <Link
                  to="/solutions"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 16,
                    padding: '14px 28px',
                    borderRadius: 999,
                    textDecoration: 'none'
                  }}
                >
                  ← All Products
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div style={{
              borderRadius: 28,
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)',
              border: '2px solid rgba(255,255,255,0.15)',
              maxHeight: 400
            }}>
              <img
                src={solution.image}
                alt={solution.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          MAIN PRODUCT WORKFLOW & SPECIFICATIONS
         ════════════════════════════════════════════════════ */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '64px 24px 96px', display: 'flex', flexDirection: 'column', gap: 56 }}>
        
        {/* RECYCLING WORKFLOW STEPS (Step 1 -> Step 2 -> Step 3) */}
        <section>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span style={{
              fontSize: 11,
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#047857',
              background: '#ecfdf5',
              border: '1px solid #a7f3d0',
              padding: '6px 18px',
              borderRadius: 999,
              display: 'inline-block',
              marginBottom: 12
            }}>
              Transformation Workflow
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 900, color: '#022c22', margin: 0 }}>
              How We Do It — Step-by-Step Process
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {solution.workflow && solution.workflow.map((item, idx) => (
              <div
                key={item.step}
                style={{
                  background: '#fff',
                  borderRadius: 24,
                  padding: '32px 28px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.03)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{
                    fontSize: 14,
                    fontWeight: 900,
                    color: '#047857',
                    background: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20
                  }}>
                    {item.step}
                  </div>
                  <h4 style={{ fontSize: 18, fontWeight: 800, color: '#022c22', margin: '0 0 10px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px dashed #e2e8f0', display: 'flex', alignItems: 'center', gap: 6, color: '#059669', fontSize: 12, fontWeight: 700 }}>
                  <span>Stage {idx + 1} Verified</span>
                  <CheckIcon size={14} color="#059669" />
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* USE CASES & OUTPUT SPECIFICATIONS */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
          
          {/* Primary Use Cases */}
          <div style={{
            background: '#fff',
            borderRadius: 28,
            padding: '36px 32px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 48, height: 48, borderRadius: 16, background: '#eff6ff', color: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #bfdbfe' }}>
                <BriefcaseIcon size={24} color="#1d4ed8" />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: '#022c22', margin: 0 }}>
                Primary Use Cases
              </h3>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {solution.useCases && solution.useCases.map((uc, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, color: '#374151', lineHeight: 1.5, fontWeight: 500 }}>
                  <span style={{ color: '#059669', marginTop: 2 }}>
                    <CheckIcon size={16} color="#059669" />
                  </span>
                  <span>{uc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Output Product Card */}
          <div style={{
            background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
            borderRadius: 28,
            padding: '36px 32px',
            border: '1px solid #a7f3d0',
            boxShadow: '0 8px 24px rgba(6,95,70,0.06)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: 16, background: '#064e3b', color: '#facc15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BoxIcon size={24} color="#facc15" />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: '#022c22', margin: 0 }}>
                  Final Output Product
                </h3>
              </div>

              <p style={{ fontSize: 20, color: '#065f46', lineHeight: 1.5, margin: '0 0 16px', fontWeight: 900 }}>
                {solution.output}
              </p>

              <p style={{ fontSize: 14, color: '#047857', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                Produced at our regional facility in <strong>{solution.location}</strong> to supply commercial industrial partners and export markets.
              </p>
            </div>

            <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(6,95,70,0.15)' }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#064e3b',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: 14,
                  padding: '12px 24px',
                  borderRadius: 999,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(6,78,59,0.2)'
                }}
              >
                Inquire Specs &amp; Samples →
              </Link>
            </div>
          </div>

        </section>


        {/* ENVIRONMENTAL IMPACT CARD */}
        <section style={{
          background: 'linear-gradient(135deg, #022c22 0%, #064e3b 100%)',
          borderRadius: 28,
          padding: '40px 36px',
          color: '#fff',
          boxShadow: '0 20px 48px rgba(2,44,34,0.25)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span style={{ color: '#facc15' }}><LeafIcon size={28} color="#facc15" /></span>
            <h3 style={{ fontSize: 24, fontWeight: 900, color: '#fff', margin: 0 }}>
              Environmental &amp; Sustainability Impact
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginTop: 24 }}>
            {solution.envImpact && solution.envImpact.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 20,
                  padding: 20,
                  fontSize: 15,
                  color: '#d1fae5',
                  lineHeight: 1.5,
                  fontWeight: 600
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>


        {/* ALL SOLUTIONS NAVIGATION BAR */}
        <div style={{ marginTop: 24 }}>
          <h3 style={{ fontSize: 22, fontWeight: 900, color: '#022c22', marginBottom: 20 }}>
            Explore All W2W Products
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {solutionsData.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/solutions/${item.id}`)}
                style={{
                  background: '#fff',
                  borderRadius: 20,
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#6ee7b7';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '16px 14px', textAlign: 'center' }}>
                  <h4 style={{ fontSize: 15, fontWeight: 800, color: '#022c22', margin: 0 }}>
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
