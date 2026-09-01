import { useState } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, CheckIcon, BuildingIcon } from '../components/common/Icons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'Industrial Waste Recycling',
    location: 'Chennai',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", width: '100%', background: '#f8faf8', color: '#1a1a2e', minHeight: '85vh' }}>
      
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
            Partner &amp; Industrial Desk
          </span>

          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 60px)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: '0 0 16px'
          }}>
            Get in Touch with <span style={{ background: 'linear-gradient(135deg, #facc15, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>W2W Ventures</span>
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 21px)',
            color: 'rgba(209,250,229,0.9)',
            maxWidth: 680,
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            Have waste management inquiries, bulk supply requests, or partnership proposals? Connect directly with our team.
          </p>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          MAIN CONTENT — 2-COLUMN LAYOUT
         ════════════════════════════════════════════════════ */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '64px 24px 96px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40, alignItems: 'start' }}>
          
          {/* ════════════════════════════════════════════════════
              COLUMN 1 — INTERACTIVE CONTACT FORM
             ════════════════════════════════════════════════════ */}
          <div style={{
            background: '#fff',
            borderRadius: 32,
            padding: 'clamp(32px, 4vw, 48px)',
            border: '1px solid #e2e8f0',
            boxShadow: '0 12px 36px rgba(0,0,0,0.04)'
          }}>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: '#022c22', margin: '0 0 8px' }}>
              Send Us a Message
            </h2>
            <p style={{ fontSize: 14, color: '#6b7280', margin: '0 0 32px' }}>
              Fill in your details and our regional recycling desk will respond within 24 hours.
            </p>

            {submitted ? (
              <div style={{
                background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
                border: '1px solid #a7f3d0',
                borderRadius: 24,
                padding: 36,
                textAlign: 'center'
              }}>
                <div style={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  background: '#064e3b',
                  color: '#facc15',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <CheckIcon size={32} color="#facc15" />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 900, color: '#022c22', margin: '0 0 12px' }}>
                  Inquiry Submitted Successfully!
                </h3>
                <p style={{ fontSize: 15, color: '#065f46', lineHeight: 1.6, margin: '0 0 24px' }}>
                  Thank you, <strong>{formData.name}</strong>. Our team in {formData.location} has received your inquiry regarding <strong>{formData.inquiryType}</strong> and will reach out shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: '#064e3b',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: 14,
                    padding: '12px 28px',
                    borderRadius: 999,
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                
                {/* Full Name & Company */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 8 }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: 14,
                        border: '1px solid #cbd5e1',
                        fontSize: 15,
                        outline: 'none',
                        background: '#f8fafc'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 8 }}>
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Apex Tanneries / Mill"
                      value={formData.company}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: 14,
                        border: '1px solid #cbd5e1',
                        fontSize: 15,
                        outline: 'none',
                        background: '#f8fafc'
                      }}
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 8 }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: 14,
                        border: '1px solid #cbd5e1',
                        fontSize: 15,
                        outline: 'none',
                        background: '#f8fafc'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 8 }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: 14,
                        border: '1px solid #cbd5e1',
                        fontSize: 15,
                        outline: 'none',
                        background: '#f8fafc'
                      }}
                    />
                  </div>
                </div>

                {/* Inquiry Type & Location Dropdowns */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 8 }}>
                      Inquiry Category
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: 14,
                        border: '1px solid #cbd5e1',
                        fontSize: 15,
                        outline: 'none',
                        background: '#f8fafc',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="Industrial Waste Recycling">Industrial Waste Recycling Supply</option>
                      <option value="Bulk Product Purchase">Bulk Product Purchase (Vermi Gold / Paper / Leather / Carton / Cotton)</option>
                      <option value="Strategic Partnership">Strategic Regional Partnership</option>
                      <option value="General Inquiry">General Enterprise Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 8 }}>
                      Target Region / Hub
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: 14,
                        border: '1px solid #cbd5e1',
                        fontSize: 15,
                        outline: 'none',
                        background: '#f8fafc',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="Chennai">Chennai (HQ &amp; Paper)</option>
                      <option value="Vaniyambadi">Vaniyambadi (Leather)</option>
                      <option value="Virudhunagar">Virudhunagar (Carton Box)</option>
                      <option value="Tirupur">Tirupur (Textile Cotton)</option>
                      <option value="Other Tamil Nadu Region">Other Tamil Nadu Region</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 8 }}>
                    Your Message / Waste Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your waste streams, volume estimates, or product quantity requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: 14,
                      border: '1px solid #cbd5e1',
                      fontSize: 15,
                      outline: 'none',
                      background: '#f8fafc',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    background: '#064e3b',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: 16,
                    padding: '16px 36px',
                    borderRadius: 999,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(6,78,59,0.25)',
                    transition: 'all 0.25s ease',
                    marginTop: 8
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#022c22';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#064e3b';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Submit Inquiry →
                </button>

              </form>
            )}
          </div>


          {/* ════════════════════════════════════════════════════
              COLUMN 2 — DIRECT CONTACT DETAILS & HUBS
             ════════════════════════════════════════════════════ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            
            {/* Headquarters Card */}
            <div style={{
              background: '#022c22',
              color: '#fff',
              borderRadius: 28,
              padding: 36,
              boxShadow: '0 12px 36px rgba(2,44,34,0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(250,204,21,0.08)', filter: 'blur(30px)' }} />

              <div style={{ position: 'relative', zIndex: 10 }}>
                <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#facc15', display: 'block', marginBottom: 12 }}>
                  Headquarters &amp; Executive Desk
                </span>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: '#fff', margin: '0 0 16px' }}>
                  W2W Ventures India
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <span style={{ color: '#facc15', marginTop: 2 }}>
                      <MapPinIcon size={20} color="#facc15" />
                    </span>
                    <div>
                      <h5 style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: '0 0 2px' }}>Registered Office</h5>
                      <p style={{ fontSize: 14, color: '#a7f3d0', margin: 0, lineHeight: 1.5 }}>
                        Tamil Nadu, India (Chennai · Vaniyambadi · Virudhunagar · Tirupur)
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{ color: '#facc15' }}>
                      <PhoneIcon size={20} color="#facc15" />
                    </span>
                    <div>
                      <h5 style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: '0 0 2px' }}>Phone Support</h5>
                      <a href="tel:+919876543210" style={{ fontSize: 14, color: '#a7f3d0', textDecoration: 'none', fontWeight: 600 }}>
                        +91 98765 43210 / +91 98765 43211
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{ color: '#facc15' }}>
                      <MailIcon size={20} color="#facc15" />
                    </span>
                    <div>
                      <h5 style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: '0 0 2px' }}>Email Contact</h5>
                      <a href="mailto:info@w2wventures.com" style={{ fontSize: 14, color: '#a7f3d0', textDecoration: 'none', fontWeight: 600 }}>
                        info@w2wventures.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Processing Hubs Card */}
            <div style={{
              background: '#fff',
              borderRadius: 28,
              padding: 36,
              border: '1px solid #e2e8f0',
              boxShadow: '0 8px 24px rgba(0,0,0,0.03)'
            }}>
              <h4 style={{ fontSize: 18, fontWeight: 800, color: '#022c22', margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ color: '#047857' }}><BuildingIcon size={22} color="#047857" /></span>
                <span>Regional Processing Hubs</span>
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { city: 'Chennai', desk: 'HQ & Industrial Paper Recycling Division' },
                  { city: 'Vaniyambadi', desk: 'Tannery Leather Waste Recovery Center' },
                  { city: 'Virudhunagar', desk: 'Corrugated Packaging Repurposing Facility' },
                  { city: 'Tirupur', desk: 'Garment Cotton Fiber Spinning Unit' },
                ].map((hub) => (
                  <div key={hub.city} style={{ padding: '12px 16px', borderRadius: 16, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h5 style={{ fontSize: 15, fontWeight: 800, color: '#022c22', margin: '0 0 2px' }}>
                      📍 {hub.city} Hub
                    </h5>
                    <p style={{ fontSize: 13, color: '#6b7280', margin: 0, fontWeight: 500 }}>
                      {hub.desk}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
