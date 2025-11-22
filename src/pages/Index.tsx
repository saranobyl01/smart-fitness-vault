import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { ArrowRight, Sparkles, FlaskConical, TrendingUp, Target, ShieldCheck, Clock, Users } from 'lucide-react';
import heroBg from '@/assets/hero-bg.png';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Index = () => {
  const featuredProducts = products.slice(0, 6);
  useIntersectionObserver();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Modern Split Design */}
      <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary font-medium">Premium Research Grade</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Advanced
                <span className="block text-primary mt-2">Peptide Research</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Pharmaceutical-grade compounds engineered for cutting-edge research in metabolic optimization and performance enhancement.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" className="btn-glow bg-primary hover:bg-primary/90 text-lg px-8 h-14 transition-transform hover:scale-105">
                    Explore Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-border hover:bg-card transition-transform hover:scale-105">
                    Start Research
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-4 md:flex md:items-center md:gap-8 mt-12 reveal">
                <div className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-primary">99.8%</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Purity Grade</p>
                </div>
                <div className="hidden md:block h-12 w-px bg-border" />
                <div className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-primary">10K+</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Researchers</p>
                </div>
                <div className="hidden md:block h-12 w-px bg-border" />
                <div className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-primary">24/7</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
            
            <div className="relative slide-up">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <div className="relative grid grid-cols-2 gap-4">
                {products.slice(0, 4).map((product, i) => (
                  <div
                    key={product.id}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <img src={product.image} alt={product.name} className="w-full h-32 object-contain mb-4" />
                    <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                    <p className="text-primary font-bold">${product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 px-4 bg-card/30 border-y border-border reveal">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center hover:transform hover:scale-105 transition-transform duration-300">
              <FlaskConical className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold mb-1">Lab Tested</p>
              <p className="text-sm text-muted-foreground">Third-party verified</p>
            </div>
            <div className="text-center hover:transform hover:scale-105 transition-transform duration-300">
              <ShieldCheck className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold mb-1">Guaranteed</p>
              <p className="text-sm text-muted-foreground">Quality assured</p>
            </div>
            <div className="text-center hover:transform hover:scale-105 transition-transform duration-300">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold mb-1">Fast Shipping</p>
              <p className="text-sm text-muted-foreground">2-3 day delivery</p>
            </div>
            <div className="text-center hover:transform hover:scale-105 transition-transform duration-300">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold mb-1">Support</p>
              <p className="text-sm text-muted-foreground">24/7 assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Masonry Style */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-5xl font-bold mb-4">Research Peptides</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium compounds for advanced metabolic and performance research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProducts.map((product, i) => (
              <div key={product.id} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center reveal">
            <Link to="/products">
              <Button size="lg" className="btn-glow bg-primary hover:bg-primary/90 text-lg px-10 h-14 transition-transform hover:scale-105">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-4 bg-card/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 reveal">
            <h2 className="text-5xl font-bold mb-4">Why Researchers Choose Us</h2>
            <p className="text-xl text-muted-foreground">Uncompromising standards for scientific excellence</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 reveal hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">99.8% Purity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every batch undergoes rigorous third-party testing with full HPLC analysis and certificates of authenticity.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-8 reveal hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10" style={{ transitionDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Research-Grade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pharmaceutical-grade peptides manufactured in FDA-registered facilities with strict quality control protocols.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-8 reveal hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10" style={{ transitionDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Guaranteed Safety</h3>
              <p className="text-muted-foreground leading-relaxed">
                Secure packaging, discreet shipping, and temperature-controlled delivery to ensure product integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Card Style */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-16 reveal">Trusted by Researchers</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8 reveal hover:scale-[1.02] transition-transform duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "Outstanding purity verified by independent lab testing. The Semaglutide batch showed 99.8% purity with excellent reconstitution properties. Professional packaging and fast delivery."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">SM</span>
                </div>
                <div>
                  <p className="font-bold">Dr. Sarah Mitchell</p>
                  <p className="text-sm text-muted-foreground">Research Scientist</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8 reveal hover:scale-[1.02] transition-transform duration-300" style={{ transitionDelay: '0.1s' }}>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "Exceptional quality and customer service. The Tirzepatide exceeded expectations in our clinical trials. Reliable supplier with consistent product quality and transparent documentation."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">JC</span>
                </div>
                <div>
                  <p className="font-bold">Prof. James Chen</p>
                  <p className="text-sm text-muted-foreground">Clinical Researcher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
