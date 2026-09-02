import { Link } from 'react-router-dom';
import Logo from './Logo';
import { GlobeIcon, FacebookIcon, InstagramIcon, TwitterIcon, MapPinIcon, PhoneIcon, MailIcon } from './Icons';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Meet Partners', path: '/partners' },
  { label: 'Our Solutions', path: '/solutions' },
];

const solutions = [
  { label: 'Vermi Gold', path: '/solutions/vermi-gold' },
  { label: 'Waste Paper', path: '/solutions/delta-export-paper' },
  { label: 'Leather Waste', path: '/solutions/leather-waste' },
  { label: 'Carton Box', path: '/solutions/carton-box' },
  { label: 'Recycle Cotton', path: '/solutions/recycle-cotton' },
];

export default function Footer() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <footer style={{ background: 'linear-gradient(135deg, #021a12 0%, #064e3b 100%)', color: '#fff', fontFamily: "'Inter', sans-serif" }}>
      {/* Main Footer Content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48 }}>

          {/* Column 1 — Brand */}
          <div>
            <Link to="/" onClick={handleLinkClick} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', marginBottom: 16 }}>
              <Logo variant="light" height={96} />
            </Link>
            <p style={{ color: 'rgba(209, 250, 229, 0.8)', fontSize: 14, lineHeight: 1.7, marginTop: 8, maxWidth: 280, fontWeight: 400 }}>
              Transforming industrial &amp; agricultural waste into wealth. Building a sustainable circular economy across Tamil Nadu.
            </p>
            
            {/* Social Icons — Professional SVG */}
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              {[
                { icon: <GlobeIcon size={18} />, label: 'Website', href: '#' },
                { icon: <FacebookIcon size={18} />, label: 'Facebook', href: '#' },
                { icon: <InstagramIcon size={18} />, label: 'Instagram', href: '#' },
                { icon: <TwitterIcon size={18} />, label: 'Twitter', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#a7f3d0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#10b981';
                    e.currentTarget.style.borderColor = '#10b981';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(16, 185, 129, 0.3)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = '#a7f3d0';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#10b981', marginBottom: 20 }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={e => { e.target.style.color = '#10b981'; }}
                    onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.7)'; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Solutions */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#10b981', marginBottom: 20 }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {solutions.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={handleLinkClick}
                    style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={e => { e.target.style.color = '#10b981'; }}
                    onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.7)'; }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#10b981', marginBottom: 20 }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ color: '#10b981', marginTop: 2 }}>
                  <MapPinIcon size={18} color="#10b981" />
                </span>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, lineHeight: 1.6, fontWeight: 400 }}>
                  Tamil Nadu, India<br />
                  <span style={{ color: 'rgba(167, 243, 208, 0.7)', fontSize: 12 }}>Chennai · Vaniyambadi · Virudhunagar · Tirupur</span>
                </span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ color: '#10b981' }}>
                  <PhoneIcon size={18} color="#10b981" />
                </span>
                <a href="tel:+919876543210" style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#10b981'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
                >
                  +91 98765 43210
                </a>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ color: '#10b981' }}>
                  <MailIcon size={18} color="#10b981" />
                </span>
                <a href="mailto:info@w2wventures.com" style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#10b981'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
                >
                  info@w2wventures.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 24px',
        textAlign: 'center', background: 'rgba(0,0,0,0.15)'
      }}>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, margin: 0, fontWeight: 500 }}>
          © 2026 W2W Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
