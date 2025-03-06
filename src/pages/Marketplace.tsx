
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '../components/ui/card';
import Button from '../components/ui/button';
import { Search, Filter, ShoppingCart, Star, MapPin } from 'lucide-react';

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  useEffect(() => {
    // Set page title
    document.title = 'Marketplace - FarmSE';
  }, []);

  // Mock product data
  const products = [
    {
      id: 1,
      name: "Organic Tomatoes",
      price: 60,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1546233255-a2a568e864a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      farmer: "Ramesh Farms",
      location: "Karnataka",
      category: "vegetables",
      rating: 4.8,
      organic: true
    },
    {
      id: 2,
      name: "Fresh Apples",
      price: 120,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      farmer: "Himachal Orchards",
      location: "Himachal Pradesh",
      category: "fruits",
      rating: 4.6,
      organic: false
    },
    {
      id: 3,
      name: "Organic Rice",
      price: 95,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      farmer: "Green Harvest",
      location: "West Bengal",
      category: "grains",
      rating: 4.9,
      organic: true
    },
    {
      id: 4,
      name: "Yellow Bananas",
      price: 80,
      unit: "dozen",
      image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      farmer: "Kerala Farms",
      location: "Kerala",
      category: "fruits",
      rating: 4.7,
      organic: false
    },
    {
      id: 5,
      name: "Fresh Spinach",
      price: 40,
      unit: "bunch",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      farmer: "Green Leaf Farms",
      location: "Punjab",
      category: "vegetables",
      rating: 4.5,
      organic: true
    },
    {
      id: 6,
      name: "Organic Wheat Flour",
      price: 55,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      farmer: "Organic Mills",
      location: "Uttar Pradesh",
      category: "grains",
      rating: 4.8,
      organic: true
    }
  ];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'vegetables', name: 'Vegetables' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'grains', name: 'Grains & Pulses' },
    { id: 'dairy', name: 'Dairy' },
    { id: 'spices', name: 'Spices' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 bg-gray-50">
        {/* Hero Banner */}
        <section className="bg-primary/10 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Fresh From The Farm</h1>
              <p className="text-gray-700 mb-6">
                Discover fresh, locally grown produce directly from verified farmers across India
              </p>
              
              {/* Search Bar */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary"
                  placeholder="Search for vegetables, fruits, grains..."
                />
                <button 
                  type="submit" 
                  className="absolute right-2.5 bottom-2.5 bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/50 font-medium rounded-lg text-sm px-4 py-2 text-white"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar - Filters */}
              <div className="w-full md:w-64 md:flex-shrink-0">
                <div className="bg-white p-4 rounded-lg shadow mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Categories</h3>
                    <Filter size={18} />
                  </div>
                  
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                            selectedCategory === category.id 
                              ? 'bg-primary/10 text-primary font-medium' 
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-medium mb-4">Filter By</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Price Range</h4>
                      <div className="flex items-center space-x-2">
                        <input type="number" placeholder="Min" className="w-full p-2 text-sm border border-gray-300 rounded-md" />
                        <span>-</span>
                        <input type="number" placeholder="Max" className="w-full p-2 text-sm border border-gray-300 rounded-md" />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Certifications</h4>
                      <div className="space-y-2">
                        {["Organic", "Non-GMO", "Pesticide-Free"].map((cert) => (
                          <div key={cert} className="flex items-center">
                            <input
                              id={`cert-${cert}`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/50 mr-2"
                            />
                            <label htmlFor={`cert-${cert}`} className="text-sm text-gray-700">
                              {cert}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Farmer Rating</h4>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <Star 
                            key={rating} 
                            size={20} 
                            className="text-gray-300 hover:text-yellow-500 cursor-pointer" 
                          />
                        ))}
                        <span className="text-sm text-gray-700 ml-2">& Up</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" fullWidth className="mt-4">
                    Apply Filters
                  </Button>
                </div>
              </div>
              
              {/* Main Product Grid */}
              <div className="flex-1">
                <div className="bg-white p-4 rounded-lg shadow mb-6">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-700">
                      Showing <span className="font-medium">{filteredProducts.length}</span> products
                    </p>
                    <div className="flex items-center space-x-2">
                      <label htmlFor="sort" className="text-sm text-gray-700">Sort by:</label>
                      <select 
                        id="sort" 
                        className="text-sm border border-gray-300 rounded-md p-2"
                      >
                        <option>Relevance</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Rating</option>
                        <option>Recently Added</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden border-0 shadow-md">
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        {product.organic && (
                          <div className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            Organic
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <MapPin size={14} className="mr-1" />
                          {product.location}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          by <span className="text-primary font-medium">{product.farmer}</span>
                        </p>
                        <div className="flex items-center mb-3">
                          <div className="flex items-center text-yellow-500 mr-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                                className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600">({product.rating})</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-xl font-bold">₹{product.price}</span>
                            <span className="text-sm text-gray-600">/{product.unit}</span>
                          </div>
                          <Button size="sm" icon={<ShoppingCart size={16} />}>
                            Add
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Marketplace;
