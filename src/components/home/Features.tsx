
import React from 'react';
import { Shield, TrendingUp, Leaf, Users, MessageSquare, Truck, CreditCard, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Verified Farmers',
      description: 'All farmers are verified through Aadhaar and DigiLocker for complete authenticity and trust.',
      delay: 0
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: 'AI-Powered Insights',
      description: 'Get smart recommendations and forecasts powered by advanced AI algorithms.',
      delay: 0.1
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: 'Fresh & Organic',
      description: 'Farm fresh produce sourced directly from the fields to ensure maximum quality and freshness.',
      delay: 0.2
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Direct Connection',
      description: 'Connect directly with farmers, eliminating middlemen and ensuring fair prices for all.',
      delay: 0.3
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: 'Secure Payments',
      description: 'Multiple payment options with escrow protection to ensure safe transactions.',
      delay: 0.4
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: 'Doorstep Delivery',
      description: 'Get fresh produce delivered right to your doorstep with our efficient logistics network.',
      delay: 0.5
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: 'Live Chat Support',
      description: 'Chat directly with farmers or our support team for any queries or assistance.',
      delay: 0.6
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: 'Mobile Friendly',
      description: 'Access FarmSE from any device with our responsive and intuitive interface.',
      delay: 0.7
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Transforming <span className="text-primary">Farming</span> & <span className="text-secondary">Shopping</span> Experience
          </h2>
          <p className="text-gray-600">
            Our platform combines cutting-edge technology with traditional farming wisdom to create
            a sustainable ecosystem that benefits both farmers and consumers.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-scale border border-gray-100 hover:border-primary/20 h-full transition-all"
              style={{ animationDelay: `${feature.delay}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
