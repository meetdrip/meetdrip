import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { api } from '../lib/api';

export default function Login() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPinFocused, setIsPinFocused] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const pinInputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  // Blocca autofill al mount
  useEffect(() => {
    if (pinInputRef.current) {
      pinInputRef.current.setAttribute('readonly', 'readonly');
      setTimeout(() => {
        if (pinInputRef.current) {
          pinInputRef.current.removeAttribute('readonly');
        }
      }, 100);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/auth/login', { pin });
      setAuth(response.data.token);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.error || 'PIN non valido');
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();
      
      setRipples([...ripples, { id, x, y }]);
      
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
      }, 600);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Background decorative elements - gradienti più sottili e raffinati */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-sm relative z-10 animate-fade-in">
        <div 
          className={`glass-card p-10 animate-slide-up transition-all duration-300 ${
            isPinFocused ? 'ring-2 ring-primary/50 ring-opacity-50' : ''
          }`}
          style={{
            boxShadow: isPinFocused 
              ? '0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 0 1px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.15)'
              : '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
          }}
        >
          {/* Logo/Title */}
          <div className="text-center mb-8">
            <img 
              src="/logoint.png" 
              alt="Meetdrip" 
              className="mx-auto max-w-full h-auto"
              style={{ 
                maxHeight: '160px',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2)) drop-shadow(0 12px 24px rgba(0, 0, 0, 0.15))',
                width: 'auto',
                animation: 'fadeInUp 0.8s ease-out, float 4s ease-in-out infinite',
                willChange: 'transform'
              }}
            />
          </div>

          <form 
            onSubmit={handleSubmit} 
            autoComplete="off" 
            className="space-y-6"
            style={{ position: 'relative' }}
          >
            {error && (
              <div className="p-4 bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-xl text-red-400 animate-fade-in">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>{error}</span>
                </div>
              </div>
            )}
            
            <div className="space-y-2 relative">
              <div className="relative">
                <input
                  ref={pinInputRef}
                  type="tel"
                  name="access-code"
                  value={pin}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    setPin(value);
                  }}
                  onFocus={(e) => {
                    setIsPinFocused(true);
                    e.target.setAttribute('readonly', 'readonly');
                    setTimeout(() => {
                      e.target.removeAttribute('readonly');
                    }, 1);
                  }}
                  onBlur={() => {
                    setIsPinFocused(false);
                  }}
                  className="premium-input text-center text-2xl tracking-widest"
                  style={{
                    WebkitTextSecurity: 'disc' as any,
                    textSecurity: 'disc',
                    fontFamily: 'monospace',
                    letterSpacing: '0.5em'
                  } as React.CSSProperties}
                  inputMode="numeric"
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                  data-form-type="other"
                  data-lpignore="true"
                  data-1p-ignore="true"
                  data-bwignore="true"
                  data-dashlane-ignore="true"
                  data-keepass-disable-autofill="true"
                  required
                />
              </div>
            </div>
            
            <button
              ref={buttonRef}
              type="submit"
              disabled={loading}
              className="premium-button w-full relative overflow-hidden"
              onClick={handleButtonClick}
            >
              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="absolute rounded-full bg-white/30 pointer-events-none"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: 0,
                    height: 0,
                    transform: 'translate(-50%, -50%)',
                    animation: 'ripple 0.6s ease-out'
                  }}
                />
              ))}
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Caricamento...
                </span>
              ) : (
                'Accedi'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

