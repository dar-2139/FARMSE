
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import ErrorBoundary from "@/components/ErrorBoundary";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Marketplace from "./pages/Marketplace";
import Farmers from "./pages/Farmers";
import Dashboard from "./pages/Dashboard";
import FarmerProfile from "./pages/FarmerProfile";
import MyCrops from "./pages/MyCrops";
import Orders from "./pages/Orders";
import RepDashboard from "./pages/RepDashboard";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/farmers" element={<Farmers />} />
                
                {/* Protected Routes */}
                <Route 
                  path="/farmer-dashboard" 
                  element={
                    <ProtectedRoute userTypes={['farmer']}>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/rep-dashboard" 
                  element={
                    <ProtectedRoute userTypes={['rep']}>
                      <RepDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/farmer-profile" 
                  element={
                    <ProtectedRoute userTypes={['farmer']}>
                      <FarmerProfile />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/my-crops" 
                  element={
                    <ProtectedRoute userTypes={['farmer']}>
                      <MyCrops />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/orders" 
                  element={
                    <ProtectedRoute userTypes={['farmer', 'customer']}>
                      <Orders />
                    </ProtectedRoute>
                  } 
                />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
