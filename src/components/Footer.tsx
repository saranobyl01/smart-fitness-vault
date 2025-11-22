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
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
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
