import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, FOOTER_SERVICES, Logo } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
             <Link to="/" className="flex items-center space-x-3 text-brand-lime mb-4">
                <Logo className="h-8 w-8" />
                <span className="text-2xl font-bold text-slate-100 tracking-tight">Synergy</span>
            </Link>
            <p className="text-slate-400">Driving growth through strategic innovation and expert consultation.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-200 tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-slate-400 hover:text-brand-lime transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-200 tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-2">
              {FOOTER_SERVICES.map(service => (
                <li key={service}>
                  <Link to="/#services" className="text-slate-400 hover:text-brand-lime transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-200 tracking-wider uppercase mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-brand-lime transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.28C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-lime transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3M8.5,18H6.5V9H8.5V18M7.5,8.2C6.67,8.2 6,7.53 6,6.7C6,5.87 6.67,5.2 7.5,5.2C8.33,5.2 9,5.87 9,6.7C9,7.53 8.33,8.2 7.5,8.2M18,18H16V13.37C16,12.05 15.26,11.33 14.31,11.33C13.26,11.33 12.5,12.11 12.5,13.37V18H10.5V9H12.5V10.26C13.06,9.4 14.03,8.75 15.34,8.75C17.4,8.75 18,10.08 18,12.75V18Z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Synergy Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
