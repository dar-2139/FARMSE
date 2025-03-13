
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Leaf, 
  PackageCheck, 
  Users, 
  CloudRain, 
  TrendingUp, 
  Lightbulb,
  Phone,
  HelpCircle,
  LogOut,
  User
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import ThemeToggle from '../ui/ThemeToggle';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon, label, active }) => {
  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
        active
          ? 'bg-primary/10 text-primary'
          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      <span className="mr-3">{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  // Determine if user is a farmer or representative
  const userType = profile?.user_type;
  
  const mainLinks = [
    { to: userType === 'farmer' ? '/farmer-dashboard' : '/rep-dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/marketplace', icon: <ShoppingCart size={20} />, label: 'Marketplace' },
  ];
  
  // Add conditional links based on user type
  if (userType === 'farmer') {
    mainLinks.push(
      { to: '/my-crops', icon: <Leaf size={20} />, label: 'My Crops' },
      { to: '/orders', icon: <PackageCheck size={20} />, label: 'Orders' },
      { to: '/community', icon: <Users size={20} />, label: 'Community' }
    );
  } else if (userType === 'representative') {
    mainLinks.push(
      { to: '/farmers-list', icon: <Users size={20} />, label: 'Farmers' },
      { to: '/verification', icon: <PackageCheck size={20} />, label: 'Verifications' },
      { to: '/support-requests', icon: <HelpCircle size={20} />, label: 'Support Requests' }
    );
  }

  const toolLinks = userType === 'farmer' ? [
    { to: '/weather', icon: <CloudRain size={20} />, label: 'Weather Alerts' },
    { to: '/price-trends', icon: <TrendingUp size={20} />, label: 'Price Trends' },
    { to: '/farming-tips', icon: <Lightbulb size={20} />, label: 'Farming Tips' },
  ] : [
    { to: '/analytics', icon: <TrendingUp size={20} />, label: 'Analytics' },
    { to: '/reports', icon: <Lightbulb size={20} />, label: 'Reports' },
  ];

  const supportLinks = [
    { to: '/contact', icon: <Phone size={20} />, label: 'Contact' },
    { to: '/help', icon: <HelpCircle size={20} />, label: 'Help Center' },
  ];

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col h-screen sticky top-0 dark:bg-gray-800 dark:border-gray-700">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-white"></div>
          </div>
          <span className="text-xl font-serif font-semibold dark:text-white">FarmSE</span>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-3">
        <nav className="space-y-1">
          {mainLinks.map((link) => (
            <SidebarLink
              key={link.to}
              to={link.to}
              icon={link.icon}
              label={link.label}
              active={pathname === link.to}
            />
          ))}
        </nav>

        <div className="mt-8">
          <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">
            TOOLS
          </h3>
          <nav className="mt-2 space-y-1">
            {toolLinks.map((link) => (
              <SidebarLink
                key={link.to}
                to={link.to}
                icon={link.icon}
                label={link.label}
                active={pathname === link.to}
              />
            ))}
          </nav>
        </div>

        <div className="mt-8">
          <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">
            SUPPORT
          </h3>
          <nav className="mt-2 space-y-1">
            {supportLinks.map((link) => (
              <SidebarLink
                key={link.to}
                to={link.to}
                icon={link.icon}
                label={link.label}
                active={pathname === link.to}
              />
            ))}
          </nav>
        </div>
      </div>

      {/* User profile */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden border-2 border-primary dark:bg-gray-700">
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${profile?.first_name || 'User'}`}
              alt="User Avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium dark:text-white">{profile?.first_name} {profile?.last_name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {userType === 'farmer' 
                ? 'Verified Farmer' 
                : userType === 'representative' 
                  ? 'FarmSE Representative' 
                  : 'Consumer'}
            </p>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <ThemeToggle />
            <button 
              className="text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
              onClick={handleLogout}
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
