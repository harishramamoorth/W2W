import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner.png';
import mapImg from '../../assets/tn_map.jpg';
import {
  BookIcon,
  TargetIcon,
  StarIcon,
  TrashIcon,
  RecycleIcon,
  HandshakeIcon,
  BuildingIcon,
  FactoryIcon,
  BoxIcon,
  ThreadIcon,
  MapPinIcon
} from '../common/Icons';

export default function AboutSection() {
  const locationsList = [
    {
      name: 'Chennai',
      desc: 'Headquarters & Industrial Waste Paper Recycling Hub',
      icon: <BuildingIcon size={26} color="#047857" />,
    },
    {
      name: 'Vaniyambadi',
      desc: 'Post-Industrial Leather Waste Processing Center',
      icon: <FactoryIcon size={26} color="#047857" />,
    },
    {
      name: 'Virudhunagar',
      desc: 'Eco-Friendly Carton Box Repurposing Facility',
      icon: <BoxIcon size={26} color="#047857" />,
    },
    {
      name: 'Tirupur',
      desc: 'Textile & Agricultural Cotton Waste Recycling Unit',
      icon: <ThreadIcon size={26} color="#047857" />,
    },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", width: '100%', background: '#f8faf8', color: '#1a1a2e' }}>
      
      {/* ════════════════════════════════════════════════════
          1. PAGE HEADER (About W2W Ventures + Landscape Banner)
         ════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #022c22 100%)',
        color: '#fff',
        padding: '72px 24px 80px',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -80, left: '20%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(250,204,21,0.08)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: -80, right: '20%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(52,211,153,0.1)', filter: 'blur(80px)' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 960, margin: '0 auto' }}>
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
            Waste to Wealth Enterprise
          </span>

          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: '0 0 16px'
          }}>
            About <span style={{ background: 'linear-gradient(135deg, #facc15, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>W2W Ventures</span>
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            color: 'rgba(209,250,229,0.92)',
            maxWidth: 680,
            margin: '0 auto 40px',
            lineHeight: 1.6,
            fontWeight: 500
          }}>
            Building a cleaner tomorrow, one waste stream at a time
          </p>

          {/* Landscape Banner Image */}
          <div style={{
            maxWidth: 1040,
            margin: '0 auto',
            borderRadius: 24,
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.45)',
            border: '2px solid rgba(255,255,255,0.15)'
          }}>
            <img
              src={bannerImg}
              alt="W2W Ventures Landscape Banner"
              style={{
                width: '100%',
                maxHeight: 460,
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          MAIN CONTENT CONTAINER
         ════════════════════════════════════════════════════ */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '80px 24px', display: 'flex', flexDirection: 'column', gap: 72 }}>
        
        {/* ════════════════════════════════════════════════════
            2. OUR STORY
           ════════════════════════════════════════════════════ */}
        <section style={{
          background: '#fff',
          borderRadius: 32,
          padding: 'clamp(36px, 5vw, 64px)',
          border: '1px solid #e2e8f0',
          boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: 840, margin: '0 auto' }}>
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
              marginBottom: 16
            }}>
              Background &amp; Origins
            </span>

            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 900,
              color: '#022c22',
              margin: '0 0 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12
            }}>
              <span style={{ color: '#047857' }}><BookIcon size={32} /></span>
              <span>Our Story</span>
            </h2>

            <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #059669, #facc15)', borderRadius: 999, margin: '0 auto 28px' }} />

            <p style={{
              fontSize: 'clamp(17px, 2.2vw, 21px)',
              color: '#374151',
              lineHeight: 1.8,
              fontWeight: 400,
              margin: 0
            }}>
              W2W Ventures started with a simple observation — tons of usable industrial and agricultural waste were going to landfills every day. We set out to change that by turning discarded paper, leather, cartons, and cotton into valuable resources, creating a sustainable circular economy across Tamil Nadu.
            </p>
          </div>
        </section>


        {/* ════════════════════════════════════════════════════
            3. MISSION & VISION (2 Columns / Blocks)
           ════════════════════════════════════════════════════ */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
          
          {/* Mission */}
          <div style={{
            background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
            borderRadius: 28,
            padding: '40px 36px',
            border: '1px solid #a7f3d0',
            boxShadow: '0 8px 24px rgba(6,95,70,0.06)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: '#065f46',
              color: '#facc15',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 24,
              boxShadow: '0 6px 16px rgba(6,95,70,0.2)'
            }}>
              <TargetIcon size={28} />
            </div>
            <h3 style={{ fontSize: 28, fontWeight: 800, color: '#022c22', margin: '0 0 12px' }}>
              Our Mission
            </h3>
            <p style={{ fontSize: 17, color: '#1f2937', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
              To convert industrial and agricultural waste into sustainable products, reducing environmental impact.
            </p>
          </div>

          {/* Vision */}
          <div style={{
            background: 'linear-gradient(135deg, #fefce8 0%, #fef08a 100%)',
            borderRadius: 28,
            padding: '40px 36px',
            border: '1px solid #fde047',
            boxShadow: '0 8px 24px rgba(234,179,8,0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: '#ca8a04',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 24,
              boxShadow: '0 6px 16px rgba(202,138,4,0.2)'
            }}>
              <StarIcon size={28} />
            </div>
            <h3 style={{ fontSize: 28, fontWeight: 800, color: '#022c22', margin: '0 0 12px' }}>
              Our Vision
            </h3>
            <p style={{ fontSize: 17, color: '#1f2937', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
              A circular economy where nothing goes to waste.
            </p>
          </div>
        </section>


        {/* ════════════════════════════════════════════════════
            4. WHY WASTE-TO-WEALTH MATTERS (3 Points)
           ════════════════════════════════════════════════════ */}
        <section style={{
          background: 'linear-gradient(135deg, #022c22 0%, #064e3b 100%)',
          borderRadius: 32,
          padding: 'clamp(40px, 5vw, 64px) clamp(24px, 4vw, 48px)',
          color: '#fff',
          boxShadow: '0 20px 48px rgba(2,44,34,0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ textAlign: 'center', marginBottom: 48, position: 'relative', zIndex: 10 }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#facc15',
              fontSize: 11,
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              padding: '6px 18px',
              borderRadius: 999,
              marginBottom: 14
            }}>
              Environmental &amp; Economic Impact
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, color: '#fff', margin: '0 0 8px' }}>
              Why It Matters
            </h2>
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #facc15, #34d399)', borderRadius: 999, margin: '0 auto' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, position: 'relative', zIndex: 10 }}>
            {/* Point 1 */}
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 24,
              padding: '32px 24px',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ color: '#facc15', display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                <TrashIcon size={36} />
              </div>
              <h4 style={{ fontSize: 20, fontWeight: 800, color: '#facc15', margin: '0 0 10px' }}>
                Reduces Landfill Waste
              </h4>
              <p style={{ fontSize: 14, color: '#d1fae5', lineHeight: 1.6, margin: 0 }}>
                Diverts tons of industrial and agricultural waste from reaching landfills daily.
              </p>
            </div>

            {/* Point 2 */}
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 24,
              padding: '32px 24px',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ color: '#facc15', display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                <RecycleIcon size={36} />
              </div>
              <h4 style={{ fontSize: 20, fontWeight: 800, color: '#facc15', margin: '0 0 10px' }}>
                Creates Sustainable Products
              </h4>
              <p style={{ fontSize: 14, color: '#d1fae5', lineHeight: 1.6, margin: 0 }}>
                Transforms raw discarded waste into high-value, eco-friendly reusable items.
              </p>
            </div>

            {/* Point 3 */}
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 24,
              padding: '32px 24px',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ color: '#facc15', display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                <HandshakeIcon size={36} />
              </div>
              <h4 style={{ fontSize: 20, fontWeight: 800, color: '#facc15', margin: '0 0 10px' }}>
                Supports Local Communities
              </h4>
              <p style={{ fontSize: 14, color: '#d1fae5', lineHeight: 1.6, margin: 0 }}>
                Generates regional economic growth and empowers industries across Tamil Nadu.
              </p>
            </div>
          </div>
        </section>


        {/* ════════════════════════════════════════════════════
            5. WHERE WE WORK (Locations + Map)
           ════════════════════════════════════════════════════ */}
        <section style={{
          background: '#fff',
          borderRadius: 32,
          padding: 'clamp(36px, 5vw, 64px)',
          border: '1px solid #e2e8f0',
          boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
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
              marginBottom: 14
            }}>
              Regional Footprint
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, color: '#022c22', margin: '0 0 12px' }}>
              Our Locations
            </h2>
            <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #059669, #facc15)', borderRadius: 999, margin: '0 auto 12px' }} />
            <p style={{ color: '#6b7280', fontSize: 16, margin: 0 }}>
              Active processing hubs and collection networks across Tamil Nadu
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40, alignItems: 'center' }}>
            
            {/* Location Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {locationsList.map((loc) => (
                <div
                  key={loc.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    padding: '20px 24px',
                    borderRadius: 20,
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    background: '#ecfdf5',
                    width: 52,
                    height: 52,
                    borderRadius: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #a7f3d0',
                    flexShrink: 0
                  }}>
                    {loc.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: 18, fontWeight: 800, color: '#022c22', margin: '0 0 4px' }}>
                      {loc.name}
                    </h4>
                    <p style={{ fontSize: 14, color: '#4b5563', margin: 0, lineHeight: 1.5, fontWeight: 500 }}>
                      {loc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tamil Nadu Map Graphic */}
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              border: '2px solid #a7f3d0',
              boxShadow: '0 12px 32px rgba(6,95,70,0.1)',
              background: '#ecfdf5'
            }}>
              <img
                src={mapImg}
                alt="Tamil Nadu Locations Map — W2W Ventures"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </section>


        {/* ════════════════════════════════════════════════════
            6. CTA
           ════════════════════════════════════════════════════ */}
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
              Want to know more?
            </h2>
            <p style={{ color: 'rgba(209,250,229,0.85)', fontSize: 'clamp(15px, 2vw, 19px)', margin: '0 auto 36px', lineHeight: 1.6, fontWeight: 400 }}>
              Discover how our innovative waste management processes convert waste streams into sustainable wealth.
            </p>
            <Link
              to="/solutions"
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
              Explore Our Solutions →
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
