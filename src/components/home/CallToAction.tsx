import React from 'react';
import Button from '../ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white font-medium text-sm mb-6">
            Join thousands of farmers and customers on FarmSE
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Ready to Transform Your Farming & Shopping Experience?
          </h2>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Whether you're a farmer looking to expand your market or a customer seeking fresh produce,
            FarmSE offers a platform that connects and empowers both sides.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              className="shadow-lg"
            >
              I'm a Farmer
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              I'm a Customer
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>+91 98765 43210</span>
            </div>
            <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
            <a href="mailto:support@farmse.com" className="hover:text-white transition-colors">
              support@farmse.com
            </a>
            <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
            <a href="#" className="hover:text-white transition-colors">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
