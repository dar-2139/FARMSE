
import React, { useState } from 'react';
import { 
  Eye, 
  MoreVertical, 
  Truck, 
  Clock, 
  CheckCircle, 
  ChevronRight, 
  FileText, 
  BarChart3, 
  CreditCard,
  Package,
  ArrowRight
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import { Card, CardContent } from '@/components/ui/card';
import Button from '@/components/ui/button';

const Orders = () => {
  const [activeTab, setActiveTab] = useState('incoming');
  
  const tabs = [
    { id: 'incoming', label: 'Incoming Orders' },
    { id: 'outgoing', label: 'Outgoing Orders' },
    { id: 'completed', label: 'Completed' },
    { id: 'cancelled', label: 'Cancelled' },
  ];
  
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        
        <main className="flex-1 p-6 pt-24 md:p-8 md:pt-24 lg:p-10 lg:pt-24">
          <div className="max-w-6xl mx-auto">
            {/* Header with breadcrumbs */}
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span>Dashboard</span>
              <span className="mx-2">›</span>
              <span className="font-medium text-gray-900">Orders</span>
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-serif font-bold">Orders</h1>
              <Button variant="primary" size="md" icon={<Package size={16} />}>
                Create Order
              </Button>
            </div>
            
            {/* Tabs */}
            <div className="mb-8 border-b border-gray-200">
              <div className="flex overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* New Orders */}
            <h2 className="text-xl font-semibold mb-6">New Orders</h2>
            
            <div className="overflow-x-auto bg-white rounded-lg shadow-sm mb-8">
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
                      Customer
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Received
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      View
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #ORD-2845
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Organic Rice - 500kg
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      ₹16,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Sunshine Foods
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2 hours ago
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button className="text-primary hover:text-primary/80">
                        <Eye className="h-5 w-5 mx-auto" />
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #ORD-2844
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Tomatoes - 200kg
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      ₹9,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Fresh Market
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      5 hours ago
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button className="text-primary hover:text-primary/80">
                        <Eye className="h-5 w-5 mx-auto" />
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #ORD-2843
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Red Wheat - 1 ton
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      ₹28,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Local Mills
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      1 day ago
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button className="text-primary hover:text-primary/80">
                        <Eye className="h-5 w-5 mx-auto" />
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Processing Orders */}
            <h2 className="text-xl font-semibold mb-6">Processing Orders</h2>
            
            <div className="overflow-x-auto bg-white rounded-lg shadow-sm mb-8">
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
                      Customer
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Track
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #ORD-2840
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Organic Rice - 2 tons
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      ₹64,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Green Grocers
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Payment Received
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button className="text-primary hover:text-primary/80">
                        <Truck className="h-5 w-5 mx-auto" />
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #ORD-2838
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Potatoes - 800kg
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      ₹14,400
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      City Market
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Packaging
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button className="text-primary hover:text-primary/80">
                        <Truck className="h-5 w-5 mx-auto" />
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* In Transit */}
            <h2 className="text-xl font-semibold mb-6">In Transit</h2>
            
            <div className="overflow-x-auto bg-white rounded-lg shadow-sm mb-8">
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
                      Customer
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ETA
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #ORD-2835
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Onions - 1 ton
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      ₹22,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Regional Distributor
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Truck className="h-4 w-4 text-blue-600 mr-1" />
                        <span className="text-sm text-gray-700">In Transit</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                      <div className="flex justify-center items-center">
                        <Clock className="h-4 w-4 text-blue-600 mr-1" />
                        <span>2 days</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #ORD-2832
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Tomatoes - 500kg
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      ₹22,500
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Hotel Chain
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Truck className="h-4 w-4 text-blue-600 mr-1" />
                        <span className="text-sm text-gray-700">In Transit</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                      <div className="flex justify-center items-center">
                        <Clock className="h-4 w-4 text-green-600 mr-1" />
                        <span>Today</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Order Management Tools */}
            <h2 className="text-xl font-semibold mb-6">Order Management Tools</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="p-2 bg-green-100 rounded-full w-fit mb-3">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Invoices</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Generate and manage invoices for all your orders
                  </p>
                  <Button variant="primary" size="sm">
                    Manage Invoices
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="p-2 bg-green-100 rounded-full w-fit mb-3">
                    <Truck className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Shipments</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Track and schedule deliveries for your orders
                  </p>
                  <Button variant="primary" size="sm">
                    View Shipments
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="p-2 bg-green-100 rounded-full w-fit mb-3">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Order Analytics</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    View sales trends and order statistics
                  </p>
                  <Button variant="primary" size="sm">
                    View Analytics
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Recent Updates */}
            <h2 className="text-xl font-semibold mb-6">Recent Updates</h2>
            
            <div className="space-y-4 mb-4">
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-green-100 mr-4 mt-1">
                        <CreditCard className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Payment Received</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Sunshine Foods - ₹16,000 for Organic Rice - 30 minutes ago
                        </p>
                      </div>
                    </div>
                    <button className="text-primary hover:text-primary/80">
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-green-100 mr-4 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Order Delivered</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Regional Distributor - Onions 500kg - 2 hours ago
                        </p>
                      </div>
                    </div>
                    <button className="text-primary hover:text-primary/80">
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-blue-100 mr-4 mt-1">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Delivery Scheduled</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Hotel Chain - Tomatoes 500kg - Today at 4:00 PM
                        </p>
                      </div>
                    </div>
                    <button className="text-primary hover:text-primary/80">
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Orders;
