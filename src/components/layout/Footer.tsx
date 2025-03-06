
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-farmse-leaf flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-white"></div>
              </div>
              <span className="text-xl font-serif font-semibold">FarmSE</span>
            </div>
            <p className="text-gray-600 text-sm md:pr-8">
              Empowering farmers and customers through technology, bringing fresh produce directly from farms to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-farmse-leaf transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-farmse-leaf transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-farmse-leaf transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-farmse-leaf transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-base font-medium mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'How It Works', 'Marketplace', 'For Farmers', 'Blog'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-600 hover:text-primary text-sm flex items-center">
                    <span className="leaf-dot mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              {['FAQs', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Shipping Policy', 'Careers'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-600 hover:text-primary text-sm flex items-center">
                    <span className="leaf-dot mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mt-0.5 mr-3" />
                <span className="text-sm text-gray-600">
                  123 Farming Street, Green Fields, Agriculture City, 123456
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <span className="text-sm text-gray-600">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <span className="text-sm text-gray-600">support@farmse.com</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-primary/5 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Working Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} FarmSE. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="#" className="text-sm text-gray-500 hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm text-gray-500 hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm text-gray-500 hover:text-primary">
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
