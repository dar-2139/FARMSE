
import React, { useState } from 'react';
import { 
  Leaf, 
  AlertTriangle, 
  Droplet, 
  ChevronRight, 
  Edit, 
  MoreVertical, 
  TrendingUp, 
  ShoppingCart, 
  Calendar, 
  BarChart3,
  Clipboard,
  Sprout
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import { Card, CardContent } from '@/components/ui/card';
import Button from '@/components/ui/button';

const MyCrops = () => {
  const [activeTab, setActiveTab] = useState('active');
  
  const tabs = [
    { id: 'active', label: 'Active Crops' },
    { id: 'seasonal', label: 'Seasonal Planning' },
    { id: 'history', label: 'Harvest History' },
    { id: 'analytics', label: 'Crop Analytics' },
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
              <span className="font-medium text-gray-900">My Crops</span>
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-serif font-bold">My Crops</h1>
              <Button variant="primary" size="md" icon={<Leaf size={16} />}>
                Add New Crop
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
            
            {/* Current Crops */}
            <h2 className="text-xl font-semibold mb-6">Current Crops</h2>
            
            <div className="overflow-x-auto bg-white rounded-lg shadow-sm mb-8">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Crop
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Area
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estimated Yield
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Harvest Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="p-1.5 bg-green-100 rounded-full mr-3">
                          <Leaf className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="text-sm font-medium text-gray-900">Organic Rice</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      5 acres
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                        <span className="text-xs font-medium">80% mature</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Est. yield: 2.5 tons
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Harvest in 3 weeks
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-primary hover:text-primary/80 mr-3">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="p-1.5 bg-green-100 rounded-full mr-3">
                          <Leaf className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="text-sm font-medium text-gray-900">Tomatoes</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2 acres
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <span className="text-xs font-medium">65% mature</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Est. yield: 800kg
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Harvest in 5 weeks
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-primary hover:text-primary/80 mr-3">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="p-1.5 bg-green-100 rounded-full mr-3">
                          <Leaf className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="text-sm font-medium text-gray-900">Red Wheat</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      8 acres
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        <span className="text-xs font-medium">90% mature</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Est. yield: 4 tons
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Harvest in 1 week
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-primary hover:text-primary/80 mr-3">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="p-1.5 bg-green-100 rounded-full mr-3">
                          <Leaf className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="text-sm font-medium text-gray-900">Potatoes</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      3 acres
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                        <span className="text-xs font-medium">40% mature</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Est. yield: 1.2 tons
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Harvest in 8 weeks
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-primary hover:text-primary/80 mr-3">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Crop Health Alerts */}
            <h2 className="text-xl font-semibold mb-6">Crop Health Alerts</h2>
            
            <div className="space-y-4 mb-8">
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-yellow-100 mr-4 mt-1">
                        <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-red-500">Pest Alert: Tomatoes</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Aphid infestation detected - Treatment recommended
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-blue-100 mr-4 mt-1">
                        <Droplet className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-blue-500">Water Stress: Wheat</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Field 3 showing signs of drought stress
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Market Opportunities */}
            <h2 className="text-xl font-semibold mb-6">Market Opportunities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="p-2 bg-green-100 rounded-full w-fit mb-3">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Rice Demand</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Current market price is 15% above average. Good time to list.
                  </p>
                  <Button variant="primary" size="sm">
                    List Now
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="p-2 bg-green-100 rounded-full w-fit mb-3">
                    <ShoppingCart className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Bulk Order</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Regional distributor seeking 2 tons of organic rice
                  </p>
                  <Button variant="primary" size="sm">
                    View Details
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="p-2 bg-green-100 rounded-full w-fit mb-3">
                    <Clipboard className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Farmers Market</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Local market event next month. Register your produce.
                  </p>
                  <Button variant="primary" size="sm">
                    Register
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Crop Management Tools */}
            <h2 className="text-xl font-semibold mb-6">Crop Management Tools</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="p-2 bg-green-100 rounded-full w-fit mb-3">
                    <Calendar className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Crop Calendar</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Plan your planting and harvesting schedule
                  </p>
                  <Button variant="primary" size="sm">
                    Open Calendar
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="p-2 bg-green-100 rounded-full w-fit mb-3">
                    <Clipboard className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Inventory</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Track seeds, fertilizers and other supplies
                  </p>
                  <Button variant="primary" size="sm">
                    Manage Inventory
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="p-2 bg-green-100 rounded-full w-fit mb-3">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Yield Tracker</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Compare actual vs. estimated crop yields
                  </p>
                  <Button variant="primary" size="sm">
                    View Reports
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Recent Activities */}
            <h2 className="text-xl font-semibold mb-6">Recent Activities</h2>
            
            <div className="space-y-4 mb-4">
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-green-100 mr-4 mt-1">
                        <Clipboard className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Fertilizer Applied</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Organic Rice - Field 2 - Yesterday
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-blue-100 mr-4 mt-1">
                        <Droplet className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Irrigation Completed</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Tomatoes - All fields - 2 days ago
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-yellow-100 mr-4 mt-1">
                        <Sprout className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Crop Inspection</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          All crops - Weekly report generated
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
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

export default MyCrops;
