
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  UserCheck, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Search,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Button from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';

const RepDashboard = () => {
  const { profile } = useAuth();
  const [pendingFarmers, setPendingFarmers] = useState(0);
  const [totalFarmers, setTotalFarmers] = useState(0);
  const [recentFarmers, setRecentFarmers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Representative Dashboard - FarmSE Gujarat';
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Count total farmers
      const { count: farmersCount, error: countError } = await supabase
        .from('profiles')
        .select('id', { count: 'exact' })
        .eq('user_type', 'farmer');
      
      if (countError) throw countError;
      
      // Get recent farmers (for demonstration purpose)
      const { data: farmers, error: farmersError } = await supabase
        .from('profiles')
        .select(`
          id,
          first_name,
          last_name,
          phone,
          created_at
        `)
        .eq('user_type', 'farmer')
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (farmersError) throw farmersError;
      
      setTotalFarmers(farmersCount || 0);
      setPendingFarmers(Math.floor(Math.random() * 10)); // Random number for demo
      setRecentFarmers(farmers || []);
      
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

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
                      <Users className="h-5 w-5 text-primary mr-2" />
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Farmers</p>
                    </div>
                    <h2 className="text-3xl font-bold mb-3 dark:text-white">{totalFarmers}</h2>
                    <Button size="sm" className="mt-2 w-full sm:w-auto">
                      View All Farmers
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending Verifications</p>
                    </div>
                    <h2 className="text-3xl font-bold mb-3 dark:text-white">{pendingFarmers}</h2>
                    <Button size="sm" className="mt-2 w-full sm:w-auto">
                      View Pending
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-5 w-5 text-primary mr-2" />
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">New Registrations (Week)</p>
                    </div>
                    <h2 className="text-3xl font-bold mb-3 dark:text-white">15</h2>
                    <Button size="sm" className="mt-2 w-full sm:w-auto">
                      View Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Pending Verification Requests */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-serif font-semibold dark:text-white">Pending Verification Requests</h2>
                <Link to="/verification" className="text-primary text-sm font-medium hover:underline">
                  View All
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                {pendingFarmers > 0 ? (
                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {[...Array(Math.min(3, pendingFarmers))].map((_, index) => (
                      <div key={index} className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden dark:bg-gray-700">
                              <img
                                src={`https://api.dicebear.com/7.x/initials/svg?seed=Farmer${index}`}
                                alt="Farmer Avatar"
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium dark:text-white">Farmer {index + 1}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Requested {index + 1} day{index > 0 ? 's' : ''} ago</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" icon={<XCircle size={16} />}>
                              Reject
                            </Button>
                            <Button size="sm" icon={<CheckCircle2 size={16} />}>
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <ShieldCheck className="h-12 w-12 mx-auto text-green-500 mb-4" />
                    <h3 className="text-lg font-medium dark:text-white">No Pending Verifications</h3>
                    <p className="text-gray-500 mt-2 dark:text-gray-400">All farmer verification requests have been processed</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Recent Farmers */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-serif font-semibold dark:text-white">Recent Farmers</h2>
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text"
                    placeholder="Search farmers..."
                    className="pl-9 py-2 pr-4 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-900">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                          Farmer
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                          Contact
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                          Joined
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {recentFarmers.length > 0 ? (
                        recentFarmers.map((farmer, index) => (
                          <tr key={farmer.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden dark:bg-gray-700">
                                  <img
                                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${farmer.first_name}`}
                                    alt="Farmer Avatar"
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                                    {farmer.first_name} {farmer.last_name}
                                  </div>
                                  <div className="text-sm text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center space-x-1">
                                      <MapPin size={12} />
                                      <span>Gujarat, India</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900 dark:text-white">
                                <div className="flex items-center space-x-1">
                                  <Phone size={12} />
                                  <span>{farmer.phone || 'N/A'}</span>
                                </div>
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center space-x-1">
                                  <Mail size={12} />
                                  <span>farmer{index + 1}@example.com</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900 dark:text-white">
                                {new Date(farmer.created_at).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                <UserCheck size={12} className="mr-1" /> Verified
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Button size="sm" variant="outline">View Profile</Button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                            No farmers found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* Support Requests */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-serif font-semibold dark:text-white">Recent Support Requests</h2>
                <Link to="/support-requests" className="text-primary text-sm font-medium hover:underline">
                  View All
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  <div className="p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden dark:bg-gray-700">
                          <img
                            src="https://api.dicebear.com/7.x/initials/svg?seed=RN"
                            alt="User Avatar"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium dark:text-white">Rajesh Nagar</h3>
                          <span className="text-xs text-gray-500 dark:text-gray-400">5 hours ago</span>
                        </div>
                        <p className="text-sm text-gray-800 mt-1 dark:text-gray-300">
                          I'm having difficulty updating my crop information. The save button doesn't seem to work.
                        </p>
                        <div className="mt-2 flex space-x-2">
                          <Button size="sm" variant="outline">
                            Respond
                          </Button>
                          <Button size="sm">
                            Call Farmer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden dark:bg-gray-700">
                          <img
                            src="https://api.dicebear.com/7.x/initials/svg?seed=SP"
                            alt="User Avatar"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium dark:text-white">Suresh Patel</h3>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Yesterday</span>
                        </div>
                        <p className="text-sm text-gray-800 mt-1 dark:text-gray-300">
                          Need assistance with payment processing. The buyer has confirmed but I haven't received the payment yet.
                        </p>
                        <div className="mt-2 flex space-x-2">
                          <Button size="sm" variant="outline">
                            Respond
                          </Button>
                          <Button size="sm">
                            Call Farmer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-center dark:bg-gray-700 dark:border-gray-600">
                  <Button variant="outline" size="sm">
                    Load More
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

export default RepDashboard;
