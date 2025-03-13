
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Phone, Check, Store, UserCheck } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { useAuth } from '@/context/AuthContext';

const userTypes = [
  { id: 'farmer', name: 'Farmer', icon: <Store size={24} />, description: 'List your crops and connect with buyers' },
  { id: 'consumer', name: 'Consumer', icon: <User size={24} />, description: 'Buy fresh produce directly from farmers' },
  { id: 'representative', name: 'FarmSE Representative', icon: <UserCheck size={24} />, description: 'Verify farmers and assist in onboarding' }
];

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('');
  const { signIn, signUp, loading } = useAuth();
  
  useEffect(() => {
    document.title = 'Login / Register - FarmSE';
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(email, password);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userType) {
      return;
    }
    
    // Split name into first and last name
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');
    
    // User metadata to store in the auth user
    const userData = {
      first_name: firstName,
      last_name: lastName || '',
      phone,
      user_type: userType
    };
    
    await signUp(email, password, userData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="space-y-1">
                <div className="flex space-x-4 border-b dark:border-gray-700">
                  <button
                    className={`pb-4 text-lg font-medium flex-1 ${
                      activeTab === 'login' 
                      ? 'border-b-2 border-primary text-primary dark:text-primary' 
                      : 'text-gray-500 dark:text-gray-400'
                    }`}
                    onClick={() => setActiveTab('login')}
                  >
                    Login
                  </button>
                  <button
                    className={`pb-4 text-lg font-medium flex-1 ${
                      activeTab === 'register' 
                      ? 'border-b-2 border-primary text-primary dark:text-primary' 
                      : 'text-gray-500 dark:text-gray-400'
                    }`}
                    onClick={() => setActiveTab('register')}
                  >
                    Register
                  </button>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {activeTab === 'login' ? (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium dark:text-gray-300">Email</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400">
                          <Mail size={18} />
                        </div>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 w-full rounded-md border border-gray-300 dark:border-gray-600 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label htmlFor="password" className="text-sm font-medium dark:text-gray-300">Password</label>
                        <Link to="/forgot-password" className="text-sm text-primary hover:underline dark:text-primary">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400">
                          <Lock size={18} />
                        </div>
                        <input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 w-full rounded-md border border-gray-300 dark:border-gray-600 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      fullWidth 
                      disabled={loading}
                      className="mt-6"
                    >
                      {loading ? 'Logging in...' : 'Log in'}
                    </Button>
                  </form>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    {/* User Type Selection */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium dark:text-gray-300">I am a</label>
                      <div className="grid grid-cols-1 gap-3">
                        {userTypes.map((type) => (
                          <div
                            key={type.id}
                            className={`flex items-center p-3 rounded-md border cursor-pointer transition-all dark:border-gray-600 ${
                              userType === type.id 
                                ? 'border-primary bg-primary/5 dark:bg-primary/10' 
                                : 'border-gray-200 hover:border-primary/50 dark:hover:border-primary/50'
                            }`}
                            onClick={() => setUserType(type.id)}
                          >
                            <div className={`p-2 rounded-full ${userType === type.id ? 'bg-primary/20' : 'bg-gray-100 dark:bg-gray-700'}`}>
                              {type.icon}
                            </div>
                            <div className="ml-3">
                              <p className="font-medium dark:text-white">{type.name}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{type.description}</p>
                            </div>
                            {userType === type.id && (
                              <Check size={20} className="ml-auto text-primary" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium dark:text-gray-300">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400">
                          <User size={18} />
                        </div>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="pl-10 w-full rounded-md border border-gray-300 dark:border-gray-600 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="registerEmail" className="text-sm font-medium dark:text-gray-300">Email</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400">
                          <Mail size={18} />
                        </div>
                        <input
                          id="registerEmail"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 w-full rounded-md border border-gray-300 dark:border-gray-600 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium dark:text-gray-300">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400">
                          <Phone size={18} />
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="pl-10 w-full rounded-md border border-gray-300 dark:border-gray-600 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="registerPassword" className="text-sm font-medium dark:text-gray-300">Password</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400">
                          <Lock size={18} />
                        </div>
                        <input
                          id="registerPassword"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 w-full rounded-md border border-gray-300 dark:border-gray-600 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </div>
                    
                    {userType === 'farmer' && (
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md dark:bg-yellow-900/30 dark:border-yellow-800">
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">As a farmer, you'll need to verify your identity using Aadhaar via DigiLocker after registration.</p>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-2 mt-4">
                      <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/50 dark:border-gray-600 dark:bg-gray-700"
                        required
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-300">
                        I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                      </label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      fullWidth 
                      disabled={loading}
                      className="mt-6"
                    >
                      {loading ? 'Creating account...' : 'Register'}
                    </Button>
                  </form>
                )}
              </CardContent>
              <CardFooter className="flex flex-col space-y-4 pt-0">
                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500 dark:bg-gray-800 dark:text-gray-400">Or continue with</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 w-full">
                  <button className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors dark:border-gray-600 dark:hover:bg-gray-700">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                      <path d="M1 1h22v22H1z" fill="none" />
                    </svg>
                    <span className="text-sm font-medium dark:text-white">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors dark:border-gray-600 dark:hover:bg-gray-700">
                    <svg className="w-5 h-5" viewBox="0 0 48 48">
                      <g fill="none">
                        <rect width="48" height="48" fill="#3B5998" rx="6" />
                        <path fill="#fff" d="M32.5 25.14h-4.74v17.39h-7.17V25.14h-3.41V18.9h3.41v-4.01c0-2.83 1.34-7.25 7.24-7.25l5.32.02v5.93h-3.86c-.64 0-1.52.32-1.52 1.67v3.65h5.4l-.67 6.23Z" />
                      </g>
                    </svg>
                    <span className="text-sm font-medium dark:text-white">Facebook</span>
                  </button>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center justify-center p-2 border border-primary/10 bg-primary/5 rounded-md dark:bg-primary/10 dark:border-primary/20">
                    <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                      <Check className="h-5 w-5 text-primary" />
                      <span>
                        <span className="font-medium">Verified Farmer?</span> Use{" "}
                        <Link to="/aadhaar-login" className="text-primary hover:underline">
                          DigiLocker Login
                        </Link>{" "}
                        for instant verification
                      </span>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
