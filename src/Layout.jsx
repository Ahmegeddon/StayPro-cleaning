import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/common/Footer';

const navLinks = [
  { name: 'Home', page: 'Home' },
  { name: 'Full Management', page: 'AirbnbManagement' },
  { name: 'STR Cleaning', page: 'AirbnbCleaning' },
  { name: 'All Services', page: 'OtherServices' },
  { name: 'Contact', page: 'Contact' },
];

export default function Layout({ children, currentPageName }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 hidden sm:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <span className="text-slate-400">Airbnb & Short-Term Rental Management — Abu Dhabi</span>
          <a href="tel:+971508695064" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Phone className="w-4 h-4" />
            +971 50 869 5064
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69445f233d75f11624962bb9/90d488d30_StayProLogo.png" 
                  alt="StayPro Cleaning"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-slate-900">StayPro</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`
                    font-medium transition-colors relative py-2
                    ${currentPageName === link.page 
                      ? 'text-cyan-600' 
                      : 'text-slate-700 hover:text-cyan-600'
                    }
                  `}
                >
                  {link.name}
                  {currentPageName === link.page && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-cyan-600 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg px-6">
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-slate-100"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      block py-3 px-4 rounded-lg font-medium transition-colors
                      ${currentPageName === link.page 
                        ? 'bg-cyan-50 text-cyan-600' 
                        : 'text-slate-700 hover:bg-slate-50'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to={createPageUrl('Contact')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}