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
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 slide-up h-full flex flex-col">
      <div className="aspect-square overflow-hidden bg-background">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs font-medium text-primary mb-2">{product.category}</span>
        <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50 gap-4">
          <span className="text-2xl font-bold text-primary">${product.price}</span>
          <Button
            onClick={handleAddToCart}
            className="btn-glow bg-primary hover:bg-primary/90 gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
