
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User, ShoppingCart } from 'lucide-react';
import Button from '../ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'For Farmers', href: '#', hasDropdown: true },
    { name: 'Marketplace', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-farmse-leaf flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-white"></div>
              </div>
              <span className="text-xl font-serif font-semibold">FarmSE</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.href}
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {link.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform -translate-y-2 group-hover:translate-y-0">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary" role="menuitem">Sell Your Crops</Link>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary" role="menuitem">Farmer Dashboard</Link>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary" role="menuitem">Resources</Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Button variant="ghost" size="sm" icon={<User size={18} />}>
              Login
            </Button>
            <Button variant="primary" size="sm" icon={<ShoppingCart size={18} />}>
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white shadow-lg px-4 pt-2 pb-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-md px-3"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <Button fullWidth variant="outline" size="md" icon={<User size={18} />}>
              Login
            </Button>
            <Button fullWidth variant="primary" size="md" icon={<ShoppingCart size={18} />}>
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
