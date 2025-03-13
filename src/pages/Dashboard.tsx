
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Leaf, 
  Users, 
  ShoppingCart, 
  Edit, 
  Eye, 
  SunMedium, 
  Cloud, 
  Droplets, 
  MessageSquare
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Button from '@/components/ui/button';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Farmer Dashboard - FarmSE Gujarat';
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        
        <main className="flex-1 p-6 pt-24 md:p-8 md:pt-24 lg:p-10 lg:pt-24">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-serif font-bold mb-8">Welcome, Rajesh Kumar</h1>
            
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-5 w-5 text-primary mr-2" />
                      <p className="text-sm font-medium text-gray-500">Total Earnings This Month</p>
                    </div>
                    <h2 className="text-3xl font-bold mb-3">₹24,560</h2>
                    <Button size="sm" className="mt-2 w-full sm:w-auto">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <ShoppingCart className="h-5 w-5 text-primary mr-2" />
                      <p className="text-sm font-medium text-gray-500">Active Orders</p>
                    </div>
                    <h2 className="text-3xl font-bold mb-3">12</h2>
                    <Button size="sm" className="mt-2 w-full sm:w-auto">
                      Manage Orders
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <Leaf className="h-5 w-5 text-primary mr-2" />
                      <p className="text-sm font-medium text-gray-500">Listed Crops</p>
                    </div>
                    <h2 className="text-3xl font-bold mb-3">8</h2>
                    <Button size="sm" className="mt-2 w-full sm:w-auto">
                      View Crops
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Recent Orders */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-serif font-semibold">Recent Orders</h2>
                <Link to="/orders" className="text-primary text-sm font-medium hover:underline">
                  View All
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Order #1089
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Tomatoes (10kg)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹1,200
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Delivery: Tomorrow
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-primary hover:text-primary/80">
                          <Eye className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Order #1088
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Potatoes (25kg)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹1,750
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Delivery: Today
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-primary hover:text-primary/80">
                          <Eye className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Order #1087
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Onions (15kg)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹900
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Delivered Yesterday
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-primary hover:text-primary/80">
                          <Eye className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-center">
                  <Button variant="outline" size="sm">
                    View All Orders
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Crop Status */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-serif font-semibold">Crop Status</h2>
                <Link to="/my-crops" className="text-primary text-sm font-medium hover:underline">
                  Manage Crops
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">Tomatoes</h3>
                        <p className="text-sm text-gray-500">Ready for harvest • 95% maturity</p>
                      </div>
                      <div className="bg-green-100 p-2 rounded-full">
                        <Leaf className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <button className="p-1.5 bg-primary/10 rounded-md text-primary mr-2">
                        <Edit className="h-4 w-4" />
                      </button>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">Potatoes</h3>
                        <p className="text-sm text-gray-500">Harvested • 100% available</p>
                      </div>
                      <div className="bg-green-100 p-2 rounded-full">
                        <Leaf className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <button className="p-1.5 bg-primary/10 rounded-md text-primary mr-2">
                        <Edit className="h-4 w-4" />
                      </button>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">Onions</h3>
                        <p className="text-sm text-gray-500">Growing • 65% maturity</p>
                      </div>
                      <div className="bg-green-100 p-2 rounded-full">
                        <Leaf className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <button className="p-1.5 bg-primary/10 rounded-md text-primary mr-2">
                        <Edit className="h-4 w-4" />
                      </button>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-4 text-center">
                <Button variant="primary" size="sm">
                  Add New Crop
                </Button>
              </div>
            </div>
            
            {/* Weather Forecast */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-serif font-semibold">Weather Forecast</h2>
                <Link to="/weather" className="text-primary text-sm font-medium hover:underline">
                  View Details
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-lg">Today</h3>
                      <SunMedium className="h-8 w-8 text-yellow-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold mb-1">32°C • Sunny</span>
                      <p className="text-sm text-green-600">Ideal for harvesting</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Details
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-lg">Tomorrow</h3>
                      <Cloud className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold mb-1">28°C • Partly Cloudy</span>
                      <p className="text-sm text-blue-600">Good for fieldwork</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Details
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-lg">Day After</h3>
                      <Droplets className="h-8 w-8 text-blue-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold mb-1">26°C • Light Rain</span>
                      <p className="text-sm text-orange-600">Plan indoor activities</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Details
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Community Activity */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-serif font-semibold">Recent Community Activity</h2>
                <Link to="/community" className="text-primary text-sm font-medium hover:underline">
                  View All
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-200">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4">
                        <MessageSquare className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">Water Supply Issue</h3>
                        <p className="text-sm text-gray-500 mt-1">Posted by you • 15 upvotes • Govt. responded</p>
                      </div>
                      <button className="text-primary hover:text-primary/80 ml-4">
                        <Eye className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4">
                        <Users className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">Organic Farming Workshop</h3>
                        <p className="text-sm text-gray-500 mt-1">Event next week • 28 attending</p>
                      </div>
                      <button className="text-primary hover:text-primary/80 ml-4">
                        <Eye className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-center">
                  <Button variant="outline" size="sm">
                    View Community Feed
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
