import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  href: string;
  children?: MenuItem[];
}

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href)
        ? prev.filter((item) => item !== href)
        : [...prev, href]
    );
  };

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  const menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      href: '/dashboard',
    },
    {
      label: 'Prodotti',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      href: '/prodotti',
      children: [
        { label: 'Lista', icon: null, href: '/prodotti' },
        { label: 'Categorie', icon: null, href: '/prodotti/categorie' },
        { label: 'Gestione', icon: null, href: '/prodotti/gestione' },
      ],
    },
    {
      label: 'Clienti',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      href: '/clienti',
      children: [
        { label: 'Lista', icon: null, href: '/clienti' },
        { label: 'Gestione', icon: null, href: '/clienti/gestione' },
      ],
    },
    {
      label: 'Magazzino',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      href: '/magazzino',
      children: [
        { label: 'Inventario', icon: null, href: '/magazzino/inventario' },
        { label: 'Movimenti', icon: null, href: '/magazzino/movimenti' },
        { label: 'Gestione', icon: null, href: '/magazzino/gestione' },
      ],
    },
    {
      label: 'Cassa',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      href: '/cassa',
      children: [
        { label: 'Flussi', icon: null, href: '/cassa/flussi' },
        { label: 'Gestione', icon: null, href: '/cassa/gestione' },
      ],
    },
    {
      label: 'Report',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      href: '/report',
    },
    {
      label: 'Gestione',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      href: '/gestione',
      children: [
        { label: 'Tipi', icon: null, href: '/gestione/tipi' },
        { label: 'Config', icon: null, href: '/gestione/config' },
      ],
    },
  ];

  return (
    <aside className={`fixed left-0 top-16 bottom-0 w-64 z-40
                      bg-background-card/95 backdrop-blur-xl
                      border-r border-white/10
                      overflow-y-auto
                      sidebar-scrollbar
                      transform transition-transform duration-300
                      lg:translate-x-0
                      ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* Logo Sidebar (Piccolo) */}
      <div className="p-4 border-b border-white/10">
        <Link to="/dashboard" className="flex items-center justify-center">
          <img 
            src="/logoint.png" 
            alt="Meetdrip" 
            className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const isExpanded = expandedItems.includes(item.href);
          const active = isActive(item.href);

          return (
            <div key={item.href}>
              {hasChildren ? (
                <>
                  <button
                    onClick={() => toggleExpanded(item.href)}
                    className={`flex items-center justify-between w-full 
                               px-4 py-3 rounded-lg transition-all duration-200
                               group ${
                                 active
                                   ? 'text-white bg-gradient-gold-subtle border border-primary/30'
                                   : 'text-gray-300 hover:text-white hover:bg-white/10'
                               }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={active ? 'text-primary' : 'group-hover:text-primary transition-colors'}>
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <svg
                      className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Submenu */}
                  {isExpanded && (
                    <div className="ml-8 mt-1 space-y-1 animate-fade-in">
                      {item.children!.map((child) => {
                        const childActive = isActive(child.href);
                        return (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => {
                              // Chiudi sidebar su mobile quando si clicca un link
                              if (onClose) {
                                onClose();
                              }
                            }}
                            className={`flex items-center gap-3 px-4 py-2 rounded-lg
                                     transition-all duration-200 text-sm ${
                                       childActive
                                         ? 'text-white bg-white/10 border border-white/20'
                                         : 'text-gray-400 hover:text-white hover:bg-white/5'
                                     }`}
                          >
                            <span>{child.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => {
                    // Chiudi sidebar su mobile quando si clicca un link
                    if (onClose) {
                      onClose();
                    }
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg
                           transition-all duration-200 group ${
                             active
                               ? 'text-white bg-gradient-gold-subtle border border-primary/30'
                               : 'text-gray-300 hover:text-white hover:bg-white/10'
                           }`}
                >
                  <span className={active ? 'text-primary' : 'group-hover:text-primary transition-colors'}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

