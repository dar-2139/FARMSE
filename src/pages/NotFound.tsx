import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Set page title
    document.title = 'Page Not Found - FarmSE';
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-md mx-auto">
            <div className="text-9xl font-serif font-bold text-gray-200 mb-4">404</div>
            <h1 className="text-3xl font-serif font-bold mb-4">Oops! Page Not Found</h1>
            <p className="text-gray-600 mb-8">
              The page you are looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                icon={<Home size={18} />}
                className="shadow-md"
                onClick={() => window.location.href = '/'}
              >
                Back to Home
              </Button>
              
              <Button 
                variant="outline" 
                icon={<ArrowLeft size={18} />}
                onClick={() => window.history.back()}
              >
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
