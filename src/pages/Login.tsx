
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Phone, ArrowRight, Check, Briefcase, Store, UserCheck } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from '@/hooks/use-toast';

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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Set page title
    document.title = 'Login / Register - FarmSE';
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      console.log('Login attempt:', { email, password });
      toast({
        title: 'Login successful!',
        description: 'Welcome back to FarmSE',
      });
      setIsLoading(false);
      // Redirect based on user type
      if (email.includes('farmer')) {
        navigate('/farmer-dashboard');
      } else if (email.includes('rep')) {
        navigate('/rep-dashboard');
      } else {
        navigate('/marketplace');
      }
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userType) {
      toast({
        title: 'Please select a user type',
        description: 'Select whether you are a farmer, consumer, or representative',
        variant: 'destructive',
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      console.log('Register attempt:', { name, email, phone, password, userType });
      toast({
        title: 'Registration successful!',
        description: userType === 'farmer' 
          ? 'Please complete your profile to start selling crops' 
          : 'Welcome to FarmSE! You can now browse and shop for fresh produce',
      });
      setIsLoading(false);
      
      // Redirect based on user type
      if (userType === 'farmer') {
        navigate('/farmer-dashboard');
      } else if (userType === 'representative') {
        navigate('/rep-dashboard');
      } else {
        navigate('/marketplace');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="space-y-1">
                <div className="flex space-x-4 border-b">
                  <button
                    className={`pb-4 text-lg font-medium flex-1 ${
                      activeTab === 'login' 
                      ? 'border-b-2 border-primary text-primary' 
                      : 'text-gray-500'
                    }`}
                    onClick={() => setActiveTab('login')}
                  >
                    Login
                  </button>
                  <button
                    className={`pb-4 text-lg font-medium flex-1 ${
                      activeTab === 'register' 
                      ? 'border-b-2 border-primary text-primary' 
                      : 'text-gray-500'
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
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                          <Mail size={18} />
                        </div>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label htmlFor="password" className="text-sm font-medium">Password</label>
                        <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                          <Lock size={18} />
                        </div>
                        <input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      fullWidth 
                      disabled={isLoading}
                      className="mt-6"
                    >
                      {isLoading ? 'Logging in...' : 'Log in'}
                    </Button>
                  </form>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    {/* User Type Selection */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">I am a</label>
                      <div className="grid grid-cols-1 gap-3">
                        {userTypes.map((type) => (
                          <div
                            key={type.id}
                            className={`flex items-center p-3 rounded-md border cursor-pointer transition-all ${
                              userType === type.id 
                                ? 'border-primary bg-primary/5' 
                                : 'border-gray-200 hover:border-primary/50'
                            }`}
                            onClick={() => setUserType(type.id)}
                          >
                            <div className={`p-2 rounded-full ${userType === type.id ? 'bg-primary/20' : 'bg-gray-100'}`}>
                              {type.icon}
                            </div>
                            <div className="ml-3">
                              <p className="font-medium">{type.name}</p>
                              <p className="text-sm text-gray-500">{type.description}</p>
                            </div>
                            {userType === type.id && (
                              <Check size={20} className="ml-auto text-primary" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                          <User size={18} />
                        </div>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="registerEmail" className="text-sm font-medium">Email</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                          <Mail size={18} />
                        </div>
                        <input
                          id="registerEmail"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                          <Phone size={18} />
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="registerPassword" className="text-sm font-medium">Password</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                          <Lock size={18} />
                        </div>
                        <input
                          id="registerPassword"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </div>
                    
                    {userType === 'farmer' && (
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                        <p className="text-sm text-yellow-800">As a farmer, you'll need to verify your identity using Aadhaar via DigiLocker after registration.</p>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-2 mt-4">
                      <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/50"
                        required
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                      </label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      fullWidth 
                      disabled={isLoading}
                      className="mt-6"
                    >
                      {isLoading ? 'Creating account...' : 'Register'}
                    </Button>
                  </form>
                )}
              </CardContent>
              <CardFooter className="flex flex-col space-y-4 pt-0">
                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 w-full">
                  <button className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
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
                    <span className="text-sm font-medium">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 48 48">
                      <g fill="none">
                        <rect width="48" height="48" fill="#3B5998" rx="6" />
                        <path fill="#fff" d="M32.5 25.14h-4.74v17.39h-7.17V25.14h-3.41V18.9h3.41v-4.01c0-2.83 1.34-7.25 7.24-7.25l5.32.02v5.93h-3.86c-.64 0-1.52.32-1.52 1.67v3.65h5.4l-.67 6.23Z" />
                      </g>
                    </svg>
                    <span className="text-sm font-medium">Facebook</span>
                  </button>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center justify-center p-2 border border-primary/10 bg-primary/5 rounded-md">
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
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
