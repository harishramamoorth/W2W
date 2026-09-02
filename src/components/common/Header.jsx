import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import {
  HomeIcon,
  NetworkIcon,
  PlusCircleIcon,
  HandshakeIcon,
  MailIcon,
  ChevronDownIcon,
  BellIcon,
  LeafIcon,
  RecycleIcon,
  BoxIcon,
  ThreadIcon,
  FactoryIcon
} from './Icons';

const solutionLinks = [
  { 
    id: 'vermi-gold',
    label: 'Vermi Gold', 
    path: '/solutions/vermi-gold', 
    desc: 'Organic waste conversion & premium bio-fertilizer',
    icon: LeafIcon,
    tag: 'Popular'
  },
  { 
    id: 'delta-export-paper',
    label: 'Paper Recycle', 
    path: '/solutions/delta-export-paper', 
    desc: 'Eco paper pulp processing & export packaging',
    icon: FactoryIcon,
    tag: 'Industrial'
  },
  { 
    id: 'leather-waste',
    label: 'Leather Waste', 
    path: '/solutions/leather-waste', 
    desc: 'Upcycled leather products & sustainable granules',
    icon: RecycleIcon,
    tag: 'Eco Tech'
  },
  { 
    id: 'carton-box',
    label: 'Recycle Carton Box', 
    path: '/solutions/carton-box', 
    desc: 'Corrugated heavy-duty eco-friendly boxes',
    icon: BoxIcon,
    tag: 'Packaging'
  },
  { 
    id: 'recycle-cotton',
    label: 'Recycle Cotton', 
    path: '/solutions/recycle-cotton', 
    desc: 'Textile waste recycling & premium yarn',
    icon: ThreadIcon,
    tag: 'Textile'
  },
];

// Matches the 5 icon tabs from the user's reference graphic (Row 2 active pill style!)
const navItems = [
  { id: 'home', label: 'Home', path: '/', icon: HomeIcon, exact: true },
  { id: 'about', label: 'Network', subLabel: 'About Us', path: '/about', icon: NetworkIcon },
  { id: 'solutions', label: 'Post', subLabel: 'Our Solutions', path: '/solutions', icon: PlusCircleIcon, hasDropdown: true },
  { id: 'partners', label: 'Notification', subLabel: 'Meet Partners', path: '/partners', icon: HandshakeIcon },
  { id: 'contact', label: 'Job', subLabel: 'Contact', path: '/contact', icon: MailIcon },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const dropdownRef = useRef(null);
  const notifRef = useRef(null);
  const location = useLocation();

  const isSolutionsRouteActive = location.pathname.startsWith('/solutions');

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Check route active
  const checkActive = (item) => {
    if (item.exact) return location.pathname === item.path;
    return location.pathname.startsWith(item.path);
  };

  return (
    <>
      {/* Top Header Bar */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        color: '#4b5563',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        fontFamily: "'Inter', sans-serif"
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 24px',
          height: 84,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Brand Logo & Eco Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Logo variant="dark" height={72} />
            </Link>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 11,
              fontWeight: 700,
              background: 'rgba(16, 185, 129, 0.1)',
              color: '#059669',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              padding: '4px 12px',
              borderRadius: 999,
              letterSpacing: '0.3px'
            }}>
              <LeafIcon size={13} color="#059669" />
              <span>Eco Ventures</span>
            </div>
          </div>

          {/* Desktop Floating Navbar Strip - Replicated from User Image */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            background: '#ffffff',
            padding: '6px 24px',
            borderRadius: 999,
            border: '1px solid rgba(0, 0, 0, 0.05)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
            gap: 24
          }} className="hidden md:flex">
            {navItems.map(item => {
              const isActive = checkActive(item);
              const IconComp = item.icon;

              if (item.hasDropdown) {
                const isRouteActive = isActive || isSolutionsRouteActive;
                return (
                  <div 
                    key={item.id} 
                    style={{ position: 'relative' }} 
                    ref={dropdownRef}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        padding: isRouteActive ? '10px' : '6px 8px',
                        width: isRouteActive ? 48 : 'auto',
                        height: isRouteActive ? 48 : 'auto',
                        borderRadius: isRouteActive ? 16 : 8,
                        border: 'none',
                        cursor: 'pointer',
                        background: isRouteActive
                          ? '#10b981'
                          : 'transparent',
                        color: isRouteActive ? '#ffffff' : '#6ee7b7',
                        boxShadow: isRouteActive ? '0 8px 20px rgba(16, 185, 129, 0.4)' : 'none',
                        fontWeight: 700,
                        fontSize: 12,
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={e => {
                        if (!isRouteActive) e.currentTarget.style.color = '#10b981';
                      }}
                      onMouseLeave={e => {
                        if (!isRouteActive) e.currentTarget.style.color = '#6ee7b7';
                      }}
                    >
                      <IconComp size={isRouteActive ? 22 : 20} color="currentColor" />
                      {!isRouteActive && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 2, color: dropdownOpen ? '#111827' : 'inherit' }}>
                          <span style={{ color: dropdownOpen ? '#111827' : 'inherit' }}>{item.subLabel}</span>
                          <ChevronDownIcon size={12} color="currentColor" />
                        </span>
                      )}
                    </button>

                    {/* Streamlined Solutions Dropdown Menu */}
                    {dropdownOpen && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 110,
                        paddingTop: '12px'
                      }}>
                        <div style={{
                          width: 380,
                          background: '#ffffff',
                          borderRadius: 24,
                          boxShadow: '0 30px 60px -12px rgba(16, 185, 129, 0.25)',
                          border: '1px solid rgba(16, 185, 129, 0.2)',
                          padding: '12px',
                          animation: 'scaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                          transformOrigin: 'top center'
                        }}>
                          {/* Streamlined Direct Solutions List */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {solutionLinks.map((sol, index) => {
                              const isSolActive = location.pathname === sol.path;
                              const SolIcon = sol.icon;
                              return (
                                <Link
                                  key={sol.id}
                                  to={sol.path}
                                  className={`animate-fade-up delay-${(index + 1) * 100}`}
                                  onClick={() => setDropdownOpen(false)}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 16,
                                    padding: '14px 16px',
                                    borderRadius: 16,
                                    textDecoration: 'none',
                                    background: isSolActive ? 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)' : 'transparent',
                                    border: isSolActive ? '1px solid #a7f3d0' : '1px solid transparent',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                  }}
                                  onMouseEnter={e => {
                                    e.currentTarget.style.background = '#f8fafc';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.08)';
                                  }}
                                  onMouseLeave={e => {
                                    e.currentTarget.style.background = isSolActive ? 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)' : 'transparent';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                  }}
                                >
                                  <div style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: 14,
                                    background: isSolActive ? 'linear-gradient(135deg, #10b981 0%, #047857 100%)' : '#ecfdf5',
                                    color: isSolActive ? '#ffffff' : '#059669',
                                    boxShadow: isSolActive ? '0 8px 16px rgba(16, 185, 129, 0.3)' : 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                  }}>
                                    <SolIcon size={20} color="currentColor" />
                                  </div>
                                  <div style={{ flexGrow: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                      <span style={{ fontSize: 15, fontWeight: 900, color: isSolActive ? '#047857' : '#0f172a' }}>
                                        {sol.label}
                                      </span>
                                      <span style={{ fontSize: 11, fontWeight: 800, color: '#059669', background: '#d1fae5', padding: '4px 8px', borderRadius: 8, boxShadow: '0 2px 8px rgba(16, 185, 129, 0.15)' }}>
                                        {sol.tag}
                                      </span>
                                    </div>
                                    <div style={{ fontSize: 13, color: '#475569', marginTop: 4, lineHeight: 1.5, fontWeight: 500 }}>
                                      {sol.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                        {/* Sleek Bottom CTA Link */}
                        <Link
                          to="/solutions"
                          onClick={() => setDropdownOpen(false)}
                          className="animate-fade-up delay-600"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 8,
                            marginTop: 12,
                            padding: '14px',
                            borderRadius: 16,
                            background: 'linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)',
                            color: '#047857',
                            fontWeight: 800,
                            fontSize: 14,
                            textDecoration: 'none',
                            border: '1px solid rgba(16, 185, 129, 0.2)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.1)'
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, #10b981 0%, #047857 100%)';
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.boxShadow = '0 12px 24px rgba(16, 185, 129, 0.3)';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)';
                            e.currentTarget.style.color = '#047857';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.1)';
                          }}
                        >
                          <span>Explore All Solutions</span>
                          <span style={{ fontSize: 14 }}>→</span>
                        </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Standard Navigation Link
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  style={({ isActive: navActive }) => {
                    const active = navActive;
                    return {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                      padding: active ? '10px' : '6px 8px',
                      width: active ? 48 : 'auto',
                      height: active ? 48 : 'auto',
                      borderRadius: active ? 16 : 8,
                      textDecoration: 'none',
                      background: active
                        ? '#10b981'
                        : 'transparent',
                      color: active ? '#ffffff' : '#6ee7b7',
                      boxShadow: active ? '0 8px 20px rgba(16, 185, 129, 0.4)' : 'none',
                      fontWeight: 700,
                      fontSize: 12,
                      transition: 'all 0.2s ease',
                    };
                  }}
                  onMouseEnter={e => {
                    if (!checkActive(item)) e.currentTarget.style.color = '#10b981';
                  }}
                  onMouseLeave={e => {
                    if (!checkActive(item)) e.currentTarget.style.color = '#6ee7b7';
                  }}
                >
                  <IconComp size={checkActive(item) ? 22 : 20} color="currentColor" />
                  {!checkActive(item) && <span style={{ marginTop: 2 }}>{item.subLabel || item.label}</span>}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Section: Notification & Contact Action CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ position: 'relative' }} ref={notifRef}>
              <button
                type="button"
                onClick={() => setNotifOpen(!notifOpen)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#facc15',
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                title="Platform Notifications"
              >
                <BellIcon size={24} color="#facc15" />
                <span style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  width: 10,
                  height: 10,
                  background: '#ef4444',
                  borderRadius: '50%',
                  boxShadow: '0 0 12px rgba(239, 68, 68, 0.8)'
                }} />
              </button>

              {/* Notification Drawer Popover */}
              {notifOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 14px)',
                  right: 0,
                  width: 320,
                  background: '#ffffff',
                  color: '#1f2937',
                  borderRadius: 24,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.35)',
                  border: '1px solid #e5e7eb',
                  padding: '18px',
                  zIndex: 120,
                  animation: 'scaleIn 0.2s ease-out'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, borderBottom: '1px solid #f3f4f6', paddingBottom: 10 }}>
                    <span style={{ fontWeight: 800, fontSize: 14, color: '#064e3b' }}>Live Updates</span>
                    <span style={{ fontSize: 11, background: '#d1fae5', color: '#047857', padding: '3px 10px', borderRadius: 999, fontWeight: 800 }}>
                      3 Active
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 }}>
                    <div style={{ padding: '10px 12px', background: '#f9fafb', borderRadius: 12, borderLeft: '3px solid #10b981' }}>
                      <strong style={{ color: '#059669', display: 'block', fontSize: 13 }}>Vermi Gold Production Batch</strong>
                      <span style={{ color: '#4b5563', fontSize: 12 }}>New organic fertilizer yield metrics uploaded.</span>
                    </div>
                    <div style={{ padding: '10px 12px', background: '#f9fafb', borderRadius: 12, borderLeft: '3px solid #f59e0b' }}>
                      <strong style={{ color: '#d97706', display: 'block', fontSize: 13 }}>Strategic Partnership</strong>
                      <span style={{ color: '#4b5563', fontSize: 12 }}>Delta Export Paper network joined W2W.</span>
                    </div>
                    <div style={{ padding: '10px 12px', background: '#f9fafb', borderRadius: 12, borderLeft: '3px solid #3b82f6' }}>
                      <strong style={{ color: '#2563eb', display: 'block', fontSize: 13 }}>Sustainability Report 2026</strong>
                      <span style={{ color: '#4b5563', fontSize: 12 }}>Updated carbon reduction impact data.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Premium Contact Us CTA Button */}
            <Link
              to="/contact"
              style={{
                background: '#facc15',
                color: '#021a12',
                fontWeight: 800,
                fontSize: 14,
                padding: '12px 28px',
                borderRadius: 999,
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(250, 204, 21, 0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#fde047';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#facc15';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get In Touch →
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                color: '#fff',
                width: 44,
                height: 44,
                borderRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: 20
              }}
              className="md:hidden"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Drawer (Top Drawer Panel) */}
        {mobileOpen && (
          <div style={{
            background: 'rgba(2, 44, 34, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '20px 24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: 14
          }} className="md:hidden animate-slide-down">
            <div style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', color: '#facc15', letterSpacing: 0.8 }}>
              Navigation Menu
            </div>
            {navItems.map(item => {
              const isActive = checkActive(item);
              const IconComp = item.icon;
              return (
                <NavLink
                  key={`mobile-nav-${item.id}`}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    color: isActive ? '#ffffff' : '#a7f3d0',
                    textDecoration: 'none',
                    fontSize: 15,
                    fontWeight: isActive ? 800 : 600,
                    padding: '10px 14px',
                    borderRadius: 14,
                    background: isActive ? 'linear-gradient(135deg, #10b981 0%, #047857 100%)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    boxShadow: isActive ? '0 4px 12px rgba(16, 185, 129, 0.35)' : 'none'
                  }}
                >
                  <IconComp size={20} color={isActive ? '#ffffff' : '#a7f3d0'} />
                  <span>{item.subLabel}</span>
                </NavLink>
              );
            })}

            <div style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', color: '#facc15', letterSpacing: 0.8, marginTop: 8 }}>
              Solutions Quick Links
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {solutionLinks.map(sol => (
                <Link
                  key={sol.id}
                  to={sol.path}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    color: location.pathname === sol.path ? '#facc15' : '#a7f3d0',
                    textDecoration: 'none',
                    fontSize: 13,
                    fontWeight: location.pathname === sol.path ? 700 : 500,
                    padding: '8px 10px',
                    borderRadius: 10,
                    background: 'rgba(255,255,255,0.06)'
                  }}
                >
                  {sol.label}
                </Link>
              ))}
            </div>

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              style={{
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #facc15 0%, #eab308 100%)',
                color: '#022c22',
                fontWeight: 800,
                fontSize: 15,
                padding: '14px',
                borderRadius: 16,
                textAlign: 'center',
                marginTop: 10,
                boxShadow: '0 6px 20px rgba(250, 204, 21, 0.3)'
              }}
            >
              Contact Us Now →
            </Link>
          </div>
        )}
      </header>
    </>
  );
}