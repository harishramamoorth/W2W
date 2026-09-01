import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';

const solutionLinks = [
  { label: 'Vermi Gold', path: '/solutions/vermi-gold' },
  { label: 'Paper Recycle', path: '/solutions/delta-export-paper' },
  { label: 'Leather Waste', path: '/solutions/leather-waste' },
  { label: 'Recycle Carton Box', path: '/solutions/carton-box' },
  { label: 'Recycle Cotton', path: '/solutions/recycle-cotton' },
];

const mainLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Meet Partners', path: '/partners' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isSolutionsActive = location.pathname.startsWith('/solutions');

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 1000,
      background: '#022c22',
      color: '#fff',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Transparent Seamless Brand Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Logo variant="light" height={58} />
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="hidden md:flex">
          {mainLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? '#facc15' : '#a7f3d0',
                fontWeight: isActive ? 800 : 600,
                fontSize: 15,
                transition: 'color 0.2s ease',
                padding: '6px 0'
              })}
              onMouseEnter={e => {
                if (!e.currentTarget.classList.contains('active')) {
                  e.currentTarget.style.color = '#facc15';
                }
              }}
              onMouseLeave={e => {
                if (!e.currentTarget.classList.contains('active')) {
                  e.currentTarget.style.color = '#a7f3d0';
                }
              }}
            >
              {link.label}
            </NavLink>
          ))}

          {/* Our Solutions Dropdown */}
          <div style={{ position: 'relative' }} ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: isSolutionsActive || dropdownOpen ? '#facc15' : '#a7f3d0',
                fontWeight: isSolutionsActive || dropdownOpen ? 800 : 600,
                fontSize: 15,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 0',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#facc15'; }}
              onMouseLeave={e => {
                if (!dropdownOpen && !isSolutionsActive) e.currentTarget.style.color = '#a7f3d0';
              }}
            >
              Our Solutions
              <span style={{
                fontSize: 10,
                transition: 'transform 0.2s ease',
                transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
              }}>▼</span>
            </button>

            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 12px)',
                right: 0,
                width: 230,
                background: '#fff',
                borderRadius: 16,
                boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                border: '1px solid #d1fae5',
                padding: '8px 0',
                zIndex: 110,
                overflow: 'hidden',
                animation: 'scaleIn 0.2s ease-out'
              }}>
                <Link
                  to="/solutions"
                  onClick={() => setDropdownOpen(false)}
                  style={{
                    display: 'block',
                    padding: '10px 20px',
                    fontSize: 14,
                    fontWeight: 800,
                    color: location.pathname === '/solutions' ? '#047857' : '#064e3b',
                    textDecoration: 'none',
                    borderBottom: '1px solid #f3f4f6',
                    background: location.pathname === '/solutions' ? '#d1fae5' : '#f0fdf4'
                  }}
                >
                  All Solutions →
                </Link>
                {solutionLinks.map(item => {
                  const isItemActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setDropdownOpen(false)}
                      style={{
                        display: 'block',
                        padding: '10px 20px',
                        fontSize: 14,
                        fontWeight: isItemActive ? 800 : 500,
                        color: isItemActive ? '#047857' : '#374151',
                        background: isItemActive ? '#ecfdf5' : 'transparent',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#ecfdf5';
                        e.currentTarget.style.color = '#047857';
                      }}
                      onMouseLeave={e => {
                        if (!isItemActive) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#374151';
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Contact Button */}
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              textDecoration: 'none',
              background: isActive ? '#fde047' : '#facc15',
              color: '#022c22',
              fontWeight: 800,
              fontSize: 14,
              padding: '10px 24px',
              borderRadius: 999,
              boxShadow: '0 4px 12px rgba(250,204,21,0.25)',
              transition: 'all 0.25s ease'
            })}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#fde047';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#facc15';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: 24,
            cursor: 'pointer',
            padding: 4
          }}
          className="md:hidden"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          background: '#064e3b',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        }} className="md:hidden">
          {mainLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? '#facc15' : '#fff',
                fontWeight: isActive ? 800 : 600,
                fontSize: 16,
                padding: '8px 0'
              })}
            >
              {link.label}
            </NavLink>
          ))}

          {/* Mobile Accordion */}
          <button
            type="button"
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: isSolutionsActive ? '#facc15' : '#fff',
              fontWeight: isSolutionsActive ? 800 : 600,
              fontSize: 16,
              textAlign: 'left',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 0',
              cursor: 'pointer'
            }}
          >
            Our Solutions
            <span>{mobileDropdownOpen ? '▲' : '▼'}</span>
          </button>

          {mobileDropdownOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingLeft: 16, borderLeft: '2px solid #059669' }}>
              <Link
                to="/solutions"
                onClick={() => setMobileOpen(false)}
                style={{ color: '#facc15', fontWeight: 800, textDecoration: 'none', fontSize: 14 }}
              >
                All Solutions →
              </Link>
              {solutionLinks.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  style={{ color: '#a7f3d0', textDecoration: 'none', fontSize: 14 }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              textDecoration: 'none',
              background: '#facc15',
              color: '#022c22',
              fontWeight: 800,
              fontSize: 15,
              padding: '12px',
              borderRadius: 12,
              textAlign: 'center',
              marginTop: 8
            }}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}