
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Check, Users, Heart, Target } from 'lucide-react';
import Button from '../components/ui/button';

const About = () => {
  useEffect(() => {
    // Set page title
    document.title = 'About Us - FarmSE';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Mission</h1>
              <p className="text-xl text-gray-700 mb-8">
                Empowering farmers with technology and connecting them directly with consumers for a sustainable future.
              </p>
              <div className="flex justify-center">
                <div className="h-1 w-20 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  FarmSE was born out of a simple yet powerful idea: to create a platform that empowers farmers while providing consumers with access to fresh, sustainably grown produce.
                </p>
                <p className="text-gray-700 mb-4">
                  Founded in 2023, our journey began when our founders witnessed firsthand the challenges faced by small-scale farmers in accessing fair markets and the growing consumer demand for transparency in food sourcing.
                </p>
                <p className="text-gray-700">
                  Today, FarmSE stands as a bridge between producers and consumers, leveraging technology to create a more equitable and sustainable food system for all.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80" 
                    alt="Farmers working in field" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <p className="font-serif italic text-primary">"Connecting fields to families"</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Our Values</h2>
              <p className="text-gray-700">
                The principles that guide everything we do at FarmSE
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Check className="h-10 w-10 text-primary" />,
                  title: "Transparency",
                  description: "We believe in complete transparency across our platform, from farm practices to pricing."
                },
                {
                  icon: <Users className="h-10 w-10 text-primary" />,
                  title: "Community",
                  description: "Building strong communities of farmers and consumers through meaningful connections."
                },
                {
                  icon: <Heart className="h-10 w-10 text-primary" />,
                  title: "Sustainability",
                  description: "Promoting environmentally responsible farming practices for a healthier planet."
                },
                {
                  icon: <Target className="h-10 w-10 text-primary" />,
                  title: "Innovation",
                  description: "Continuously exploring new technologies to improve farmer livelihoods and consumer experience."
                }
              ].map((value, index) => (
                <Card key={index} className="border-0 shadow-md h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Our Team</h2>
              <p className="text-gray-700">
                Meet the passionate people behind FarmSE
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Rajesh Kumar",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                },
                {
                  name: "Priya Singh",
                  role: "Co-Founder & COO",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                },
                {
                  name: "Ankit Sharma",
                  role: "CTO",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                },
                {
                  name: "Meera Patel",
                  role: "Head of Farmer Relations",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                }
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Join Our Mission</h2>
              <p className="text-gray-700 mb-8">
                Be part of our journey to transform agriculture and food systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Join as a Farmer
                </Button>
                <Button variant="outline" size="lg">
                  Shop from Farmers
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
