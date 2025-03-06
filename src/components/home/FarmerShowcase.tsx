
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Button from '@/components/ui/button';
import { Star, MapPin, ArrowRight, Shield } from 'lucide-react';

const FarmerShowcase = () => {
  const farmers = [
    {
      id: 1,
      name: 'Rajesh Patel',
      image: 'https://images.unsplash.com/photo-1595827432953-e83e2c7dd932?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      location: 'Ahmedabad, Gujarat',
      specialty: 'Organic Cotton & Groundnuts',
      rating: 4.8,
      reviewCount: 152,
      verified: true
    },
    {
      id: 2,
      name: 'Sunita Desai',
      image: 'https://images.unsplash.com/photo-1610917047732-7a4606dbd841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      location: 'Surat, Gujarat',
      specialty: 'Fresh Vegetables',
      rating: 4.7,
      reviewCount: 98,
      verified: true
    },
    {
      id: 3,
      name: 'Mohammad Ishaq',
      image: 'https://images.unsplash.com/photo-1605186530487-2a5fa5a1e3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      location: 'Vadodara, Gujarat',
      specialty: 'Mangoes & Bananas',
      rating: 4.9,
      reviewCount: 124,
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Meet Our <span className="text-primary">Verified</span> Farmers
            </h2>
            <p className="text-gray-600">
              Every farmer on our platform is verified through Aadhaar and DigiLocker APIs,
              ensuring authenticity and building trust between producers and consumers.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-6 md:mt-0"
            icon={<ArrowRight size={16} />}
            iconPosition="right"
          >
            View All Farmers
          </Button>
        </div>
        
        {/* Farmers Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {farmers.map((farmer) => (
            <Card 
              key={farmer.id} 
              className="overflow-hidden hover-scale border border-gray-100 hover:border-primary/20"
            >
              {/* Farmer Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={farmer.image} 
                  alt={farmer.name} 
                  className="w-full h-full object-cover object-center"
                />
                {farmer.verified && (
                  <div className="absolute top-4 right-4 bg-white rounded-full p-1.5 shadow-md">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                )}
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{farmer.name}</CardTitle>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {farmer.location}
                    </div>
                  </div>
                  <div className="flex items-center bg-primary/5 rounded-full px-2 py-1">
                    <Star className="h-4 w-4 text-secondary fill-current mr-1" />
                    <span className="font-medium">{farmer.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({farmer.reviewCount})</span>
                  </div>
                </div>
                <CardDescription className="mt-2">
                  Specializes in {farmer.specialty}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Organic', 'Chemical-Free', 'Fresh'].map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  fullWidth
                  className="border-primary/20 text-primary hover:bg-primary hover:text-white"
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-8">
              <h3 className="text-2xl font-serif font-semibold mb-2">
                DigiLocker & Aadhaar Verified
              </h3>
              <p className="text-gray-600 max-w-2xl">
                We take trust seriously. Every farmer on FarmSE is verified through government IDs,
                ensuring you're dealing with legitimate producers who take pride in their produce.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <img 
                src="https://www.digilocker.gov.in/assets/img/digilocker_logo.png" 
                alt="DigiLocker" 
                className="h-12 object-contain"
              />
              <img 
                src="https://uidai.gov.in/images/logo/aadhaar_english_logo.png" 
                alt="Aadhaar" 
                className="h-12 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmerShowcase;
