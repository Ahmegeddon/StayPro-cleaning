import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Sparkles, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to={createPageUrl('Home')} className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69445f233d75f11624962bb9/90d488d30_StayProLogo.png" 
                  alt="StayPro Cleaning"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">StayPro Cleaning</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Professional Airbnb and short-term rental cleaning services. 
              Keeping your properties guest-ready, every time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', page: 'Home' },
                { name: 'Airbnb Cleaning', page: 'AirbnbCleaning' },
                { name: 'Full Management', page: 'AirbnbManagement' },
                { name: 'Other Services', page: 'OtherServices' },
                { name: 'Contact Us', page: 'Contact' },
              ].map((link) => (
                <li key={link.page}>
                  <Link 
                    to={createPageUrl(link.page)} 
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                'Airbnb Cleaning',
                'Full Property Management',
                'Deep Cleaning',
                'Move-In/Move-Out',
                'Office Cleaning',
              ].map((service) => (
                <li key={service}>
                  <span className="text-slate-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">Abu Dhabi, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <a href="tel:+971508695064" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  +971 50 869 5064
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <a href="mailto:hello@stayprocleaning.ae" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  hello@stayprocleaning.ae
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <a 
                  href="https://wa.me/971508695064" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} StayPro Cleaning. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-400 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}