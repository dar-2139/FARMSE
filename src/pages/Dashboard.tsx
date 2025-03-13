
import React, { useEffect, useState } from 'react';
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
  MessageSquare,
  Plus
} from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Button from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const Dashboard = () => {
  const { profile } = useAuth();
  const [crops, setCrops] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [stats, setStats] = useState({
    earnings: 0,
    activeOrders: 0,
    listedCrops: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Farmer Dashboard - FarmSE Gujarat';
    if (profile) {
      fetchDashboardData();
    }
  }, [profile]);

  const fetchDashboardData = async () => {
    if (!profile) return;
    
    try {
      setLoading(true);
      
      // Fetch farmer's crops
      const { data: cropData, error: cropError } = await supabase
        .from('crops')
        .select('*')
        .eq('farmer_id', profile.id)
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (cropError) throw cropError;
      
      // Fetch farmer's orders
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .select('*')
        .eq('farmer_id', profile.id)
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (orderError) throw orderError;
      
      // Calculate total earnings from orders
      const totalEarnings = orderData ? orderData.reduce((sum: number, order: any) => sum + Number(order.total_amount), 0) : 0;
      
      // Set dashboard data
      setCrops(cropData || []);
      setOrders(orderData || []);
      setStats({
        earnings: totalEarnings,
        activeOrders: orderData ? orderData.filter((order: any) => order.status !== 'completed').length : 0,
        listedCrops: cropData ? cropData.length : 0
      });
      
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast({
        title: 'Error',
        description: 'Failed to load dashboard data',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  // Demo crops data if no real data exists
  const demoCrops = [
    { id: 1, name: 'Tomatoes', maturity_percent: 95, status: 'Ready for harvest' },
    { id: 2, name: 'Potatoes', maturity_percent: 100, status: 'Harvested' },
    { id: 3, name: 'Onions', maturity_percent: 65, status: 'Growing' }
  ];

  // Demo orders data if no real data exists
  const demoOrders = [
    { id: 'Order #1089', product: 'Tomatoes (10kg)', amount: '₹1,200', status: 'Delivery: Tomorrow', status_color: 'yellow' },
    { id: 'Order #1088', product: 'Potatoes (25kg)', amount: '₹1,750', status: 'Delivery: Today', status_color: 'green' },
    { id: 'Order #1087', product: 'Onions (15kg)', amount: '₹900', status: 'Delivered Yesterday', status_color: 'blue' }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Use real data if available, otherwise use demo data
  const displayCrops = crops.length > 0 ? crops : demoCrops;
  const displayOrders = orders.length > 0 ? orders : demoOrders;

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 pt-24 md:p-8 md:pt-24 lg:p-10 lg:pt-24">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-serif font-bold mb-8 dark:text-white">Welcome, {profile?.first_name}</h1>
            
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-5 w-5 text-primary mr-2" />
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Earnings This Month</p>
                    </div>
                    <h2 className="text-3xl font-bold mb-3 dark:text-white">
                      ₹{stats.earnings > 0 ? stats.earnings.toLocaleString('en-IN') : '24,560'}
                    </h2>
                    <Button size="sm" className="mt-2 w-full sm:w-auto">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <ShoppingCart className="h-5 w-5 text-primary mr-2" />
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Orders</p>
                    </div>
                    <h2 className="text-3xl font-bold mb-3 dark:text-white">
                      {stats.activeOrders > 0 ? stats.activeOrders : '12'}
                    </h2>
                    <Button size="sm" className="mt-2 w-full sm:w-auto">
                      Manage Orders
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <Leaf className="h-5 w-5 text-primary mr-2" />
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Listed Crops</p>
                    </div>
                    <h2 className="text-3xl font-bold mb-3 dark:text-white">
                      {stats.listedCrops > 0 ? stats.listedCrops : '8'}
                    </h2>
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
                <h2 className="text-xl font-serif font-semibold dark:text-white">Recent Orders</h2>
                <Link to="/orders" className="text-primary text-sm font-medium hover:underline">
                  View All
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                        Order ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {displayOrders.map((order, index) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                          {order.order_number || order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {order.product || `Product ${index + 1}`}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {order.amount || `₹${order.total_amount}`}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            order.status_color === 'yellow' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200' :
                            order.status_color === 'green' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' :
                            order.status_color === 'blue' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' :
                            'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-primary hover:text-primary/80">
                            <Eye className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-center dark:bg-gray-700 dark:border-gray-600">
                  <Button variant="outline" size="sm">
                    View All Orders
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Crop Status */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-serif font-semibold dark:text-white">Crop Status</h2>
                <Link to="/my-crops" className="text-primary text-sm font-medium hover:underline">
                  Manage Crops
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {displayCrops.map((crop) => (
                  <Card key={crop.id} className="bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-lg dark:text-white">{crop.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {crop.status || (crop.maturity_percent >= 100 
                              ? 'Harvested • 100% available' 
                              : crop.maturity_percent >= 90 
                                ? 'Ready for harvest • ' + crop.maturity_percent + '% maturity' 
                                : 'Growing • ' + crop.maturity_percent + '% maturity')}
                          </p>
                        </div>
                        <div className="bg-green-100 p-2 rounded-full dark:bg-green-900/30">
                          <Leaf className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <button className="p-1.5 bg-primary/10 rounded-md text-primary mr-2 dark:bg-primary/20">
                          <Edit className="h-4 w-4" />
                        </button>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${crop.maturity_percent}%` }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Button variant="primary" size="sm" icon={<Plus size={16} />}>
                  Add New Crop
                </Button>
              </div>
            </div>
            
            {/* Weather Forecast */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-serif font-semibold dark:text-white">Weather Forecast</h2>
                <Link to="/weather" className="text-primary text-sm font-medium hover:underline">
                  View Details
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-lg dark:text-white">Today</h3>
                      <SunMedium className="h-8 w-8 text-yellow-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold mb-1 dark:text-white">32°C • Sunny</span>
                      <p className="text-sm text-green-600 dark:text-green-400">Ideal for harvesting</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Details
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-lg dark:text-white">Tomorrow</h3>
                      <Cloud className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold mb-1 dark:text-white">28°C • Partly Cloudy</span>
                      <p className="text-sm text-blue-600 dark:text-blue-400">Good for fieldwork</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Details
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-lg dark:text-white">Day After</h3>
                      <Droplets className="h-8 w-8 text-blue-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold mb-1 dark:text-white">26°C • Light Rain</span>
                      <p className="text-sm text-orange-600 dark:text-orange-400">Plan indoor activities</p>
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
                <h2 className="text-xl font-serif font-semibold dark:text-white">Recent Community Activity</h2>
                <Link to="/community" className="text-primary text-sm font-medium hover:underline">
                  View All
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4 dark:bg-green-900/30">
                        <MessageSquare className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white">Water Supply Issue</h3>
                        <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">Posted by you • 15 upvotes • Govt. responded</p>
                      </div>
                      <button className="text-primary hover:text-primary/80 ml-4">
                        <Eye className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4 dark:bg-green-900/30">
                        <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white">Organic Farming Workshop</h3>
                        <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">Event next week • 28 attending</p>
                      </div>
                      <button className="text-primary hover:text-primary/80 ml-4">
                        <Eye className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-center dark:bg-gray-700 dark:border-gray-600">
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
