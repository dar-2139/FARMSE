
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '../components/ui/card';
import Button from '../components/ui/button';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Contact Us - FarmSE';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Get In Touch</h1>
              <p className="text-xl text-gray-700">
                We're here to help and answer any questions you might have
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form & Info */}
        <section className="py-12 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="md:col-span-1">
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
                  
                  <Card className="border-0 shadow-md overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-primary mt-1 mr-4" />
                        <div>
                          <h3 className="font-medium mb-1">Our Location</h3>
                          <p className="text-gray-600 text-sm">
                            123 Farming Street<br />
                            Green Fields, Agriculture City<br />
                            123456
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-md overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
                        <div>
                          <h3 className="font-medium mb-1">Email Us</h3>
                          <p className="text-gray-600 text-sm">
                            General Inquiries:<br />
                            <a href="mailto:info@farmse.com" className="text-primary hover:underline">
                              info@farmse.com
                            </a>
                          </p>
                          <p className="text-gray-600 text-sm mt-2">
                            Support:<br />
                            <a href="mailto:support@farmse.com" className="text-primary hover:underline">
                              support@farmse.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-md overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <Phone className="h-6 w-6 text-primary mt-1 mr-4" />
                        <div>
                          <h3 className="font-medium mb-1">Call Us</h3>
                          <p className="text-gray-600 text-sm">
                            Customer Service:<br />
                            <a href="tel:+919876543210" className="text-primary hover:underline">
                              +91 98765 43210
                            </a>
                          </p>
                          <p className="text-gray-600 text-sm mt-2">
                            Farmer Support:<br />
                            <a href="tel:+919876543211" className="text-primary hover:underline">
                              +91 98765 43211
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-md overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <MessageSquare className="h-6 w-6 text-primary mt-1 mr-4" />
                        <div>
                          <h3 className="font-medium mb-1">Live Chat</h3>
                          <p className="text-gray-600 text-sm">
                            Our live chat service is available<br />
                            Monday - Saturday<br />
                            9:00 AM - 6:00 PM IST
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-2">
                <Card className="border-0 shadow-lg overflow-hidden h-full">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">
                            First Name
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">
                            Last Name
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          required
                        ></textarea>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          id="consent"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/50"
                          required
                        />
                        <label htmlFor="consent" className="text-sm text-gray-600">
                          I agree to the processing of my personal data according to the <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                        </label>
                      </div>
                      
                      <div>
                        <Button type="submit" icon={<Send size={18} />} className="w-full sm:w-auto">
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Find Us</h2>
              <p className="text-gray-700">
                Visit our office to meet the team and learn more about what we do
              </p>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              {/* Placeholder for Google Maps */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-600">Google Maps would be embedded here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
