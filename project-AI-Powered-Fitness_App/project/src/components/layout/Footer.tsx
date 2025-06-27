import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Heart } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Logo color="white" />
              <span className="text-xl font-bold">AuraFit AI</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Your AI-powered fitness coach that adapts to your body, goals, and limitations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/exercise" className="text-neutral-300 hover:text-white transition-colors">Exercise Form</Link></li>
              <li><Link to="/workout" className="text-neutral-300 hover:text-white transition-colors">Workout Plans</Link></li>
              <li><Link to="/nutrition" className="text-neutral-300 hover:text-white transition-colors">Nutrition</Link></li>
              <li><Link to="/progress" className="text-neutral-300 hover:text-white transition-colors">Progress</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-neutral-300 mb-4">Subscribe to our newsletter for the latest updates and tips.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-neutral-800 border border-neutral-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button 
                type="submit" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AuraFit AI. All rights reserved.
          </p>
          <p className="text-neutral-400 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-error-500" /> for a healthier world
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;