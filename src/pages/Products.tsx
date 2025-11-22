import { useState, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory === 'All' 
      ? products 
      : products.filter((p) => p.category === selectedCategory);

    return filtered.sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return a.name.localeCompare(b.name);
    });
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4 fade-in">Research Peptides</h1>
          <p className="text-xl text-muted-foreground mb-12 fade-in">
            Browse our complete collection of pharmaceutical-grade peptides
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(cat)}
                    className={selectedCategory === cat ? 'btn-glow bg-primary' : ''}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
            <div className="md:w-48">
              <label className="text-sm font-medium mb-2 block">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 bg-card border border-border rounded-md"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
