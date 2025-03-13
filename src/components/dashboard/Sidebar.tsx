
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  LogOut
} from 'lucide-react';

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
          : 'text-gray-700 hover:bg-gray-100'
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

  const mainLinks = [
    { to: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/marketplace', icon: <ShoppingCart size={20} />, label: 'Marketplace' },
    { to: '/my-crops', icon: <Leaf size={20} />, label: 'My Crops' },
    { to: '/orders', icon: <PackageCheck size={20} />, label: 'Orders' },
    { to: '/community', icon: <Users size={20} />, label: 'Community' },
  ];

  const toolLinks = [
    { to: '/weather', icon: <CloudRain size={20} />, label: 'Weather Alerts' },
    { to: '/price-trends', icon: <TrendingUp size={20} />, label: 'Price Trends' },
    { to: '/farming-tips', icon: <Lightbulb size={20} />, label: 'Farming Tips' },
  ];

  const supportLinks = [
    { to: '/contact', icon: <Phone size={20} />, label: 'Contact Rep' },
    { to: '/help', icon: <HelpCircle size={20} />, label: 'Help Center' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-white"></div>
          </div>
          <span className="text-xl font-serif font-semibold">FarmSE</span>
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
          <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
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
          <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
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
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden border-2 border-primary">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User Avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">Rajesh Kumar</p>
            <p className="text-xs text-gray-500">Verified Farmer</p>
          </div>
          <button className="ml-auto text-gray-400 hover:text-gray-500">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
