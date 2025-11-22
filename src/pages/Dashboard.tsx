import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Package, User, LogOut, ShoppingBag } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-5xl font-bold fade-in">Dashboard</h1>
            <Button variant="outline" onClick={handleLogout} className="gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-xl border border-border p-6 slide-up hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 slide-up hover:border-primary/50 transition-colors" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">In Transit</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 slide-up hover:border-primary/50 transition-colors" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Member Since</p>
                  <p className="text-2xl font-bold">2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/products">
                <Button variant="outline" size="lg" className="w-full justify-start gap-3">
                  <ShoppingBag className="h-5 w-5" />
                  Browse Products
                </Button>
              </Link>
              <Link to="/orders">
                <Button variant="outline" size="lg" className="w-full justify-start gap-3">
                  <Package className="h-5 w-5" />
                  View Orders
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
            <div className="space-y-4">
              {[
                { id: '#ORD-12345', date: 'Jan 15, 2024', status: 'Delivered', total: '$279.99' },
                { id: '#ORD-12346', date: 'Jan 10, 2024', status: 'In Transit', total: '$149.99' },
                { id: '#ORD-12347', date: 'Jan 5, 2024', status: 'Processing', total: '$329.99' },
              ].map((order, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-background rounded-lg border border-border"
                >
                  <div>
                    <p className="font-semibold">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{order.total}</p>
                    <p className="text-sm text-primary">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/orders">
              <Button variant="outline" className="w-full mt-6">
                View All Orders
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
