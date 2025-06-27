import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell, Activity } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Exercise Form', path: '/exercise' },
    { title: 'Workout Plans', path: '/workout' },
    { title: 'Nutrition', path: '/nutrition' },
    { title: 'Progress', path: '/progress' },
    { title: 'Profile', path: '/profile' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Logo />
          <span className="text-xl font-bold text-primary-700">AuraFit AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-primary-600'
                  : 'text-neutral-700 hover:text-primary-500'
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button 
            variant="primary"
            className="flex items-center"
          >
            <Activity size={18} className="mr-2" />
            Start Workout
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-neutral-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-16">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg py-4 border-b border-neutral-100 ${
                  location.pathname === link.path
                    ? 'text-primary-600 font-medium'
                    : 'text-neutral-700'
                }`}
                onClick={toggleMenu}
              >
                {link.title}
              </Link>
            ))}
            <div className="mt-6">
              <Button 
                variant="primary" 
                className="w-full flex items-center justify-center"
                onClick={toggleMenu}
              >
                <Dumbbell size={18} className="mr-2" />
                Start Workout
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;