import { ReactNode, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background decorative elements - molto leggeri */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] 
                        bg-primary/3 rounded-full blur-3xl opacity-30
                        animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] 
                        bg-secondary/3 rounded-full blur-3xl opacity-30
                        animate-glow-pulse" 
             style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[1000px] h-[1000px] bg-primary/2 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Layout Components */}
      <Header onMenuToggle={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content Area */}
      <main className="relative ml-0 lg:ml-64 pt-16 min-h-screen z-10
                       bg-transparent transition-all duration-300">
        {children}
      </main>
    </div>
  );
}

