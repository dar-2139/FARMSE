
import React, { useState } from 'react';
import { 
  Map, 
  QrCode, 
  Share, 
  Camera, 
  FileCheck, 
  Leaf, 
  Briefcase, 
  Truck, 
  ChevronRight 
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import { Card, CardContent } from '@/components/ui/card';
import Button from '@/components/ui/button';

const FarmerProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        
        <main className="flex-1 p-6 pt-24 md:p-8 md:pt-24 lg:p-10 lg:pt-24">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span>Dashboard</span>
              <span className="mx-2">›</span>
              <span>Profile</span>
              <span className="mx-2">›</span>
              <span className="text-gray-900 font-medium">Setup</span>
            </div>
            
            <h1 className="text-3xl font-serif font-bold mb-6">Complete Your Farmer Profile</h1>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Verify your identity and showcase your farm to buyers across the marketplace
            </p>
            
            {/* Farmer ID Card */}
            <Card className="mb-8 bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <QrCode className="h-6 w-6 text-primary mr-2" />
                      <h2 className="text-xl font-medium">Your Unique Farmer ID</h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      This QR code uniquely identifies you in the FarmSE marketplace and verifies your produce
                    </p>
                    <div className="flex space-x-3">
                      <Button variant="primary" size="sm" icon={<QrCode size={16} />}>
                        Download QR
                      </Button>
                      <Button variant="outline" size="sm" icon={<Share size={16} />}>
                        Share
                      </Button>
                    </div>
                  </div>
                  <div className="w-32 h-32 bg-white p-2 border border-gray-200 rounded-lg">
                    <div className="bg-gray-100 h-full w-full flex items-center justify-center">
                      <QrCode className="h-16 w-16 text-gray-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Profile Information */}
            <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Camera className="h-5 w-5 text-primary mr-2" />
                        <h3 className="text-lg font-medium">Profile Photo</h3>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm">
                        Add a clear photo of yourself for buyers to recognize you
                      </p>
                      <Button variant="primary" size="sm">
                        Upload Photo
                      </Button>
                    </div>
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-200">
                      <Camera className="h-10 w-10 text-gray-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <FileCheck className="h-5 w-5 text-primary mr-2" />
                        <h3 className="text-lg font-medium">Certification</h3>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm">
                        Upload your farming certification documents for verification
                      </p>
                      <Button variant="primary" size="sm">
                        Upload Documents
                      </Button>
                    </div>
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-gray-200">
                      <FileCheck className="h-10 w-10 text-gray-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Basic Details */}
            <h2 className="text-xl font-semibold mb-6">Basic Details</h2>
            
            <Card className="bg-white shadow-sm mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Rajesh Kumar"
                      defaultValue="Rajesh Kumar"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="farmName" className="block text-sm font-medium text-gray-700 mb-1">
                      Farm Name
                    </label>
                    <input
                      type="text"
                      id="farmName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Name of your farm or business"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="location"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 pr-10"
                        placeholder="Village, District, State"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Map size={16} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="contactNumber"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 pr-10"
                        placeholder="Your mobile number"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Farm Details */}
            <h2 className="text-xl font-semibold mb-6">Farm Details</h2>
            
            <Card className="bg-white shadow-sm mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="farmSize" className="block text-sm font-medium text-gray-700 mb-1">
                      Farm Size (Acres)
                    </label>
                    <input
                      type="text"
                      id="farmSize"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Total land area under cultivation"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="primaryCrops" className="block text-sm font-medium text-gray-700 mb-1">
                      Primary Crops
                    </label>
                    <input
                      type="text"
                      id="primaryCrops"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Main crops you cultivate (e.g., Rice, Wheat, Vegetables)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="farmingMethods" className="block text-sm font-medium text-gray-700 mb-1">
                      Farming Methods
                    </label>
                    <input
                      type="text"
                      id="farmingMethods"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Organic, Traditional, Mixed, etc."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="aboutFarm" className="block text-sm font-medium text-gray-700 mb-1">
                      About Your Farm
                    </label>
                    <textarea
                      id="aboutFarm"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Tell buyers about your farming practices, history, and specialties..."
                    ></textarea>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Crop Management */}
            <h2 className="text-xl font-semibold mb-6">Crop Management</h2>
            
            <div className="space-y-4 mb-8">
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-primary/10 mr-4">
                        <Leaf className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Add New Crop Listing</h3>
                        <p className="text-sm text-gray-500">
                          Create listings for crops you're currently growing
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-primary/10 mr-4">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Set Pricing Preferences</h3>
                        <p className="text-sm text-gray-500">
                          Configure your pricing and negotiation settings
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-primary/10 mr-4">
                        <Truck className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Order Management Setup</h3>
                        <p className="text-sm text-gray-500">
                          Set your order handling and delivery preferences
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Form Actions */}
            <div className="flex justify-end space-x-4">
              <Button variant="outline" size="md">
                Save as Draft
              </Button>
              <Button variant="primary" size="md">
                Complete Profile
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FarmerProfile;
