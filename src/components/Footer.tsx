import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="SmartFitnessBulk" className="h-28 mb-4" />
            <p className="text-sm text-muted-foreground">
              Premium research-grade peptides for advanced fat loss and performance optimization.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/products?category=GLP-1" className="hover:text-primary transition-colors">GLP-1 Peptides</Link></li>
              <li><Link to="/products?category=Fat Loss" className="hover:text-primary transition-colors">Fat Loss</Link></li>
              <li><Link to="/products?category=Growth Hormone" className="hover:text-primary transition-colors">Growth Hormone</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Research Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lab Testing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Get updates on new products and research.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-3 py-2 bg-background border border-border rounded-md text-sm"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>© 2024 SmartFitnessBulk. All rights reserved. For research purposes only.</p>
        </div>
      </div>
    </footer>
  );
};
