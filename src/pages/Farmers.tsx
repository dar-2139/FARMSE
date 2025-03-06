
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '../components/ui/card';
import Button from '../components/ui/button';
import { ArrowRight, Check, Shield, Smartphone, Wallet, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Farmers = () => {
  useEffect(() => {
    // Set page title
    document.title = 'For Farmers - FarmSE';
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Grow Your Farming Business With Us
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Join thousands of farmers who sell directly to consumers and increase their profits by up to 40%.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="shadow-md">
                    Register as Farmer
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1595397361936-48ee025f9706?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Farmer in field" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center space-x-2">
                    <Shield className="text-primary h-6 w-6" />
                    <p className="font-medium">Verified Farmer Program</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">How It Works</h2>
              <p className="text-gray-700">
                Join FarmSE in just a few simple steps
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Sign Up & Verify",
                  description: "Register using your Aadhaar or DigiLocker for instant verification and trust badge.",
                  icon: <Shield className="h-10 w-10 text-primary" />
                },
                {
                  step: "02",
                  title: "List Your Produce",
                  description: "Add your products, set prices, and get AI-powered pricing suggestions based on market trends.",
                  icon: <Smartphone className="h-10 w-10 text-primary" />
                },
                {
                  step: "03",
                  title: "Sell & Earn",
                  description: "Receive orders, track deliveries, and get payments directly in your bank account.",
                  icon: <Wallet className="h-10 w-10 text-primary" />
                }
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {item.step}
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/farmers/register">
                <Button className="shadow-md">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Benefits of Joining FarmSE</h2>
              <p className="text-gray-700">
                We're committed to empowering farmers with technology and market access
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Direct Customer Access",
                  description: "Sell directly to consumers without middlemen and increase your profit margins significantly."
                },
                {
                  title: "Verified Farmer Badge",
                  description: "Get instant verification through DigiLocker to build consumer trust in your products."
                },
                {
                  title: "Advanced Analytics",
                  description: "Access insights on market trends, consumer preferences, and pricing strategies to grow your business."
                },
                {
                  title: "Secure Payments",
                  description: "Receive payments directly to your bank account with our escrow-based payment protection."
                },
                {
                  title: "AI-Powered Pricing",
                  description: "Get intelligent pricing suggestions based on real-time market data and demand forecasts."
                },
                {
                  title: "Weather Integration",
                  description: "Automatic crop listing updates based on local weather conditions to ensure accuracy."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Dashboard Preview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Powerful Farmer Dashboard</h2>
                <p className="text-gray-700 mb-6">
                  Track your sales, analyze trends, and make data-driven decisions with our comprehensive dashboard designed specifically for farmers.
                </p>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: <BarChart3 className="h-6 w-6 text-primary" />,
                      title: "Sales Analytics",
                      description: "Monitor your sales performance across different products and time periods."
                    },
                    {
                      icon: <Wallet className="h-6 w-6 text-primary" />,
                      title: "Earnings Tracker",
                      description: "Track your earnings, pending payments, and financial growth over time."
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mt-1">
                        {feature.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link to="/farmers/dashboard-demo" className="flex items-center text-primary mt-8 group">
                  <span className="font-medium">See dashboard demo</span>
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Farmer Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">What Farmers Say</h2>
              <p className="text-gray-700">
                Hear from farmers who have transformed their businesses with FarmSE
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh Kumar",
                  location: "Punjab",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
                  quote: "Since joining FarmSE, my income has increased by 35%. The direct connection with customers has transformed my business completely."
                },
                {
                  name: "Lakshmi Devi",
                  location: "Karnataka",
                  image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
                  quote: "The analytics dashboard helps me understand what crops are in demand. I can now plan my sowing accordingly and maximize profits."
                },
                {
                  name: "Mohan Singh",
                  location: "Uttar Pradesh",
                  image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
                  quote: "Getting verified through DigiLocker was quick and easy. Customers trust my products more because of the verified badge on my profile."
                }
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-6 text-white">Ready to Transform Your Farming Business?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join thousands of farmers who have increased their profits with FarmSE
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="shadow-lg"
              >
                Register as a Farmer
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Farmers;
