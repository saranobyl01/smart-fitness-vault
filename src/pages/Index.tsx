import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';
import heroBg from '@/assets/hero-bg.png';

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section 
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 15, 30, 0.9), rgba(10, 15, 30, 0.95)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            Premium Research Peptides
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-8 max-w-3xl mx-auto fade-in">
            Advanced pharmaceutical-grade compounds for fat loss and peak performance optimization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <Link to="/products">
              <Button size="lg" className="btn-glow bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Shop Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lab Tested</h3>
              <p className="text-muted-foreground">
                Third-party verified purity and potency for guaranteed quality
              </p>
            </div>
            <div className="text-center slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Results</h3>
              <p className="text-muted-foreground">
                Research-grade peptides engineered for optimal effectiveness
              </p>
            </div>
            <div className="text-center slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Grade</h3>
              <p className="text-muted-foreground">
                Pharmaceutical standards with strict quality control protocols
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Featured Products</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Our most popular research peptides
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="btn-glow bg-primary hover:bg-primary/90">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Researchers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-8 rounded-xl border border-border slide-up">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Outstanding purity and consistency. Lab results confirmed 99.8% purity on the Semaglutide batch."
              </p>
              <p className="font-semibold">Dr. Sarah Mitchell</p>
              <p className="text-sm text-muted-foreground">Research Scientist</p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Fast shipping and excellent customer service. The Tirzepatide exceeded expectations in our trials."
              </p>
              <p className="font-semibold">Prof. James Chen</p>
              <p className="text-sm text-muted-foreground">Clinical Researcher</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
