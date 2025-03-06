import React, { useEffect, useRef } from 'react';
import Button from '../ui/button';
import { Search, ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const heroElement = heroRef.current;
      
      // Parallax effect
      const translateY = scrollY * 0.3;
      heroElement.style.backgroundPositionY = `${translateY}px`;
      
      // Fade effect for content
      const content = heroElement.querySelector('.hero-content') as HTMLElement;
      if (content) {
        const opacity = 1 - (scrollY * 1.5) / window.innerHeight;
        content.style.opacity = Math.max(0, opacity).toString();
        content.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute w-full h-full overflow-hidden">
        <div className="absolute top-1/3 left-5 md:left-20 w-32 h-32 rounded-full bg-primary/5 animate-float"></div>
        <div className="absolute top-1/4 right-10 md:right-32 w-48 h-48 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-farmse-wheat/10 animate-float" style={{ animationDelay: '2.2s' }}></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 z-10">
        <div className="hero-content max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
              Direct From Farms • Fresh Produce • Transparent Pricing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-gray-900">
              Fresh from <span className="text-primary">Farm</span> to Your <span className="text-secondary">Table</span>
            </h1>
            <p className="text-lg text-gray-600 md:pr-12">
              Connect directly with verified farmers, shop premium quality produce, and support sustainable farming practices. Powered by AI for best recommendations.
            </p>
            
            {/* Search Bar */}
            <div className="relative w-full max-w-xl bg-white rounded-full shadow-lg p-1 border border-gray-100 flex">
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Search for fresh vegetables, fruits..." 
                  className="w-full px-6 py-3 rounded-full text-gray-700 focus:outline-none"
                />
              </div>
              <Button 
                className="rounded-full sm:px-6"
                icon={<Search className="hidden sm:block" size={18} />}
              >
                <span>Search</span>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span>100% Verified Farmers</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span>Quality Guarantee</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main Image */}
              <div className="relative z-10 rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
                <img 
                  src="https://images.unsplash.com/photo-1595855759920-86582492dade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Fresh produce from farm" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Premium Organic</h3>
                      <p className="text-sm text-gray-600">Direct from farmers</p>
                    </div>
                    <Button 
                      size="sm" 
                      className="rounded-full" 
                      icon={<ArrowRight size={16} />}
                      iconPosition="right"
                    >
                      View All
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-farmse-leaf/10 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full bg-secondary/10 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
