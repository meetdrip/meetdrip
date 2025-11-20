import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { useState } from 'react';

interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const location = useLocation();
  const logout = useAuthStore((state) => state.logout);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Genera breadcrumb dalla location
  const generateBreadcrumb = () => {
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    
    const breadcrumbItems = [{ label: 'Home', href: '/dashboard' }];
    
    if (segments.length > 0 && segments[0] !== 'dashboard') {
      segments.forEach((segment, index) => {
        const href = '/' + segments.slice(0, index + 1).join('/');
        const label = segment.charAt(0).toUpperCase() + segment.slice(1);
        breadcrumbItems.push({ label, href });
      });
    }
    
    return breadcrumbItems;
  };

  const breadcrumbItems = generateBreadcrumb();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 
                       bg-background/80 backdrop-blur-xl 
                       border-b border-white/10 
                       shadow-premium">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        {/* Logo + Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg bg-white/5 
                     hover:bg-white/10 border border-white/10 transition-all"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <Link to="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="/logoint.png" 
              alt="Meetdrip" 
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Breadcrumb (Desktop) */}
        <nav className="hidden md:flex items-center gap-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-gray-500">/</span>}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-white font-medium">{item.label}</span>
              ) : (
                <Link 
                  to={item.href} 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* User Menu */}
        <div className="flex items-center gap-4">
          {/* User Avatar + Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 p-2 rounded-lg 
                       bg-white/5 hover:bg-white/10 
                       border border-white/10 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-gold 
                            flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </button>

            {/* Dropdown Menu */}
            {userMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 
                            glass-card p-2 animate-fade-in z-50">
                <Link
                  to="/profile"
                  onClick={() => setUserMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                           hover:bg-white/10 transition-colors text-sm"
                >
                  Profilo
                </Link>
                <Link
                  to="/settings"
                  onClick={() => setUserMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white 
                           hover:bg-white/10 transition-colors text-sm"
                >
                  Impostazioni
                </Link>
                <button
                  onClick={() => {
                    setUserMenuOpen(false);
                    logout();
                  }}
                  className="w-full text-left px-4 py-2 rounded-lg text-red-400 
                           hover:text-red-300 hover:bg-red-500/10 transition-colors text-sm"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

