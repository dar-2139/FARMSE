
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, ShoppingCart, LogOut } from 'lucide-react';
import Button from '../ui/button';
import ThemeToggle from '../ui/ThemeToggle';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, profile, signOut } = useAuth();

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Base navigation links
  const baseNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Conditional navigation links based on user type
  let navLinks = [...baseNavLinks];
  
  if (profile) {
    if (profile.user_type === 'farmer') {
      navLinks = [
        ...baseNavLinks,
        { name: 'My Dashboard', href: '/farmer-dashboard', hasDropdown: true },
      ];
    } else if (profile.user_type === 'representative') {
      navLinks = [
        ...baseNavLinks,
        { name: 'Rep Dashboard', href: '/rep-dashboard' },
      ];
    } else if (profile.user_type === 'consumer') {
      navLinks = [
        ...baseNavLinks,
        { name: 'My Orders', href: '/orders' },
      ];
    }
  } else {
    navLinks = [
      ...baseNavLinks,
      { name: 'For Farmers', href: '/farmers', hasDropdown: true },
    ];
  }

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
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
              <span className="text-xl font-serif font-semibold dark:text-white">FarmSE</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.href}
                  className={`flex items-center text-sm font-medium transition-colors duration-300 ${
                    isActive(link.href) ? 'text-primary' : 'text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {link.hasDropdown && profile?.user_type === 'farmer' && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform -translate-y-2 group-hover:translate-y-0">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link to="/farmer-dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary dark:text-gray-200 dark:hover:bg-primary/10 dark:hover:text-primary" role="menuitem">Dashboard</Link>
                      <Link to="/my-crops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary dark:text-gray-200 dark:hover:bg-primary/10 dark:hover:text-primary" role="menuitem">My Crops</Link>
                      <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary dark:text-gray-200 dark:hover:bg-primary/10 dark:hover:text-primary" role="menuitem">Orders</Link>
                      <Link to="/farmer-profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary dark:text-gray-200 dark:hover:bg-primary/10 dark:hover:text-primary" role="menuitem">My Profile</Link>
                    </div>
                  </div>
                )}
                {link.hasDropdown && !profile && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform -translate-y-2 group-hover:translate-y-0">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link to="/farmers/sell-crops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary dark:text-gray-200 dark:hover:bg-primary/10 dark:hover:text-primary" role="menuitem">Sell Your Crops</Link>
                      <Link to="/farmer-dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary dark:text-gray-200 dark:hover:bg-primary/10 dark:hover:text-primary" role="menuitem">Farmer Dashboard</Link>
                      <Link to="/farmers/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary dark:text-gray-200 dark:hover:bg-primary/10 dark:hover:text-primary" role="menuitem">Resources</Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <ThemeToggle />
            
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden border-2 border-primary dark:bg-gray-700">
                    <img
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${profile?.first_name || 'User'}`}
                      alt="User Avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium dark:text-white">{profile?.first_name}</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  icon={<LogOut size={18} />}
                  onClick={signOut}
                >
                  Logout
                </Button>
                
                <Button 
                  variant="primary" 
                  size="sm" 
                  icon={<ShoppingCart size={18} />}
                  onClick={() => navigate('/marketplace')}
                >
                  Shop Now
                </Button>
              </div>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  icon={<User size={18} />}
                  onClick={() => navigate('/login')}
                >
                  Login
                </Button>
                <Button 
                  variant="primary" 
                  size="sm" 
                  icon={<ShoppingCart size={18} />}
                  onClick={() => navigate('/marketplace')}
                >
                  Shop Now
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-4">
            <ThemeToggle />
            
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors dark:text-gray-200"
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
        <div className="bg-white shadow-lg px-4 pt-2 pb-4 dark:bg-gray-800">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block py-2 text-base font-medium rounded-md px-3 ${
                  isActive(link.href) 
                  ? 'text-primary bg-primary/5' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary/5 dark:text-gray-200 dark:hover:bg-primary/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Profile and Logout for mobile */}
            {user && (
              <>
                <div className="flex items-center gap-2 p-3">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden border-2 border-primary dark:bg-gray-700">
                    <img
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${profile?.first_name || 'User'}`}
                      alt="User Avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium dark:text-white">{profile?.first_name}</span>
                </div>
                
                <button
                  onClick={signOut}
                  className="flex items-center w-full py-2 text-base font-medium rounded-md px-3 text-gray-700 hover:text-primary hover:bg-primary/5 dark:text-gray-200 dark:hover:bg-primary/10"
                >
                  <LogOut size={18} className="mr-2" />
                  Logout
                </button>
              </>
            )}
          </div>

          {!user && (
            <div className="mt-6 flex flex-col gap-2">
              <Button 
                fullWidth 
                variant="outline" 
                size="md" 
                icon={<User size={18} />}
                onClick={() => {
                  navigate('/login');
                }}
              >
                Login
              </Button>
              <Button 
                fullWidth 
                variant="primary" 
                size="md" 
                icon={<ShoppingCart size={18} />}
                onClick={() => {
                  navigate('/marketplace');
                }}
              >
                Shop Now
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
