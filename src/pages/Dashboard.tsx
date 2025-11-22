import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Package, User, LogOut, ShoppingBag, TrendingUp, Clock, CreditCard, ChevronRight } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';

const Dashboard = () => {
  const navigate = useNavigate();
  const { cart, cartTotal: contextCartTotal } = useCart();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const mockOrders = [
    { 
      id: '#ORD-12345', 
      date: 'Jan 15, 2024', 
      status: 'Delivered', 
      total: 279.99,
      items: ['Semaglutide 10mg', 'Tirzepatide 10mg']
    },
    { 
      id: '#ORD-12346', 
      date: 'Jan 10, 2024', 
      status: 'In Transit', 
      total: 149.99,
      items: ['AOD-9604 5mg']
    },
    { 
      id: '#ORD-12347', 
      date: 'Jan 5, 2024', 
      status: 'Processing', 
      total: 329.99,
      items: ['Tirzepatide 15mg', 'Tesamorelin 5mg']
    },
    { 
      id: '#ORD-12348', 
      date: 'Dec 28, 2023', 
      status: 'Delivered', 
      total: 189.99,
      items: ['Retatrutide 10mg']
    },
  ];

  const totalOrders = mockOrders.length;
  const inTransit = mockOrders.filter(o => o.status === 'In Transit').length;
  const totalSpent = mockOrders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h1 className="text-5xl font-bold fade-in mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, manage your research orders</p>
            </div>
            <Button variant="outline" onClick={handleLogout} className="gap-2 border-border hover:bg-card">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border p-6 slide-up hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Total Orders</p>
              <p className="text-3xl font-bold">{totalOrders}</p>
            </div>

            <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border p-6 slide-up hover:border-primary/50 transition-all" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">In Transit</p>
              <p className="text-3xl font-bold">{inTransit}</p>
            </div>

            <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border p-6 slide-up hover:border-primary/50 transition-all" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Total Spent</p>
              <p className="text-3xl font-bold">${totalSpent.toFixed(2)}</p>
            </div>

            <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border p-6 slide-up hover:border-primary/50 transition-all" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <User className="h-6 w-6 text-primary" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">Member Since</p>
              <p className="text-3xl font-bold">2024</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {/* Current Cart */}
            <div className="lg:col-span-1 bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Cart Items</h2>
                <Link to="/cart">
                  <Button variant="ghost" size="sm" className="gap-1">
                    View <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                  <p className="text-muted-foreground">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                  {cart.length > 3 && (
                    <p className="text-sm text-muted-foreground text-center">+{cart.length - 3} more items</p>
                  )}
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">Total</span>
                      <span className="text-2xl font-bold text-primary">${contextCartTotal.toFixed(2)}</span>
                    </div>
                    <Link to="/checkout">
                      <Button className="w-full btn-glow bg-primary hover:bg-primary/90">
                        Proceed to Checkout
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Recent Orders */}
            <div className="lg:col-span-2 bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Recent Orders</h2>
                <Link to="/orders">
                  <Button variant="ghost" size="sm" className="gap-1">
                    View All <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                {mockOrders.map((order, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-background rounded-xl border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/20 rounded-lg">
                        <Package className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold mb-1">{order.id}</p>
                        <p className="text-sm text-muted-foreground mb-1">{order.date}</p>
                        <p className="text-xs text-muted-foreground">{order.items.join(', ')}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-bold text-lg">${order.total.toFixed(2)}</p>
                        <p className={`text-sm font-medium ${
                          order.status === 'Delivered' ? 'text-primary' :
                          order.status === 'In Transit' ? 'text-accent' :
                          'text-muted-foreground'
                        }`}>
                          {order.status}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/products">
                <Button variant="outline" size="lg" className="w-full justify-start gap-3 h-auto py-4">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">Browse Products</p>
                    <p className="text-xs text-muted-foreground">Explore catalog</p>
                  </div>
                </Button>
              </Link>
              <Link to="/orders">
                <Button variant="outline" size="lg" className="w-full justify-start gap-3 h-auto py-4">
                  <Package className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">View Orders</p>
                    <p className="text-xs text-muted-foreground">Track shipments</p>
                  </div>
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="outline" size="lg" className="w-full justify-start gap-3 h-auto py-4">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">View Cart</p>
                    <p className="text-xs text-muted-foreground">{cart.length} items</p>
                  </div>
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full justify-start gap-3 h-auto py-4">
                <User className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-semibold">Account Settings</p>
                  <p className="text-xs text-muted-foreground">Manage profile</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
