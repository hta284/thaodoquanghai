import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, HardHat } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Giới thiệu', path: '/gioi-thieu' },
  { name: 'Dịch vụ', path: '/dich-vu' },
  { name: 'Dự án', path: '/du-an' },
  { name: 'Tin tức', path: '/tin-tuc' },
  { name: 'Liên hệ', path: '/lien-he' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white',
        isScrolled ? 'shadow-md py-2' : 'py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tighter leading-none text-secondary">
                QUANG HẢI
              </h1>
              <p className="text-[10px] font-bold tracking-widest uppercase mt-1 text-gray-500">
                Uy tín - Chuyên Nghiệp
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-3 py-2 font-bold text-sm uppercase tracking-wide rounded-md transition-colors",
                    isActive ? "text-secondary" : "text-gray-700 hover:text-secondary" 
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:0972833227" 
              className="hidden md:flex items-center gap-2 font-bold px-5 py-2 rounded-sm bg-secondary text-white hover:bg-secondary-hover transition-colors text-sm uppercase tracking-wide"
            >
              Hồ sơ nhân lực
            </a>
            
            <button 
              className="lg:hidden p-2 text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-xl overflow-hidden border-t"
          >
            <nav className="flex flex-col py-4">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "px-6 py-3 font-medium transition-colors border-l-4",
                      isActive 
                        ? "border-secondary bg-orange-50 text-secondary" 
                        : "border-transparent text-gray-700 hover:bg-gray-50 hover:text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="px-6 py-4 mt-2 border-t flex flex-col gap-3">
                <a 
                  href="tel:0972833227" 
                  className="flex items-center justify-center gap-2 bg-secondary text-white font-bold py-3 rounded-md w-full shadow-md"
                >
                  <Phone size={18} />
                  <span>Gọi ngay: 0972 833 227</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
