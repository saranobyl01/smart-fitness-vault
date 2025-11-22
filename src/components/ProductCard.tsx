import { Product } from '@/contexts/CartContext';
import { Button } from './ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 h-full flex flex-col">
      <div className="relative overflow-hidden aspect-square p-6 bg-secondary/20">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium border border-border">
          {product.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50 gap-4">
          <span className="text-xl font-bold text-primary">
            ${product.price}
          </span>
          <Button 
            onClick={handleAddToCart}
            size="sm"
            className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
