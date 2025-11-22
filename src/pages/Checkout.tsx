import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle2, CreditCard, Truck, MapPin } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => {
      navigate('/dashboard');
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <CheckCircle2 className="h-24 w-24 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your order. Redirecting to dashboard...
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold mb-8 fade-in">Checkout</h1>

          <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    step >= s ? 'bg-primary text-primary-foreground' : 'bg-card border border-border'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && <div className={`w-16 h-1 mx-2 ${step > s ? 'bg-primary' : 'bg-border'}`} />}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {step === 1 && (
                <div className="bg-card rounded-xl border border-border p-8 slide-up">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Shipping Information</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>First Name</Label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <Label>Last Name</Label>
                      <Input placeholder="Doe" />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Email</Label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Address</Label>
                      <Input placeholder="123 Main St" />
                    </div>
                    <div>
                      <Label>City</Label>
                      <Input placeholder="New York" />
                    </div>
                    <div>
                      <Label>State</Label>
                      <Input placeholder="NY" />
                    </div>
                    <div>
                      <Label>ZIP Code</Label>
                      <Input placeholder="10001" />
                    </div>
                    <div>
                      <Label>Country</Label>
                      <Input placeholder="USA" />
                    </div>
                  </div>
                  <Button
                    onClick={() => setStep(2)}
                    className="mt-6 btn-glow bg-primary hover:bg-primary/90 w-full md:w-auto"
                  >
                    Continue to Shipping
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="bg-card rounded-xl border border-border p-8 slide-up">
                  <div className="flex items-center gap-3 mb-6">
                    <Truck className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Shipping Method</h2>
                  </div>
                  <div className="space-y-3">
                    {['Standard Shipping (5-7 days) - $9.99', 'Express Shipping (2-3 days) - $19.99', 'Overnight Shipping - $39.99'].map((method, i) => (
                      <label
                        key={i}
                        className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary cursor-pointer transition-colors"
                      >
                        <input type="radio" name="shipping" defaultChecked={i === 0} className="accent-primary" />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      className="btn-glow bg-primary hover:bg-primary/90"
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="bg-card rounded-xl border border-border p-8 slide-up">
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Payment Information</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label>Card Number</Label>
                      <Input placeholder="4242 4242 4242 4242" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Expiry Date</Label>
                        <Input placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label>CVV</Label>
                        <Input placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <Label>Cardholder Name</Label>
                      <Input placeholder="John Doe" />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      Back
                    </Button>
                    <Button
                      onClick={handlePlaceOrder}
                      className="btn-glow bg-primary hover:bg-primary/90"
                    >
                      Place Order
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.name} x{item.quantity}</span>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">$9.99</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-2">
                    <span>Total</span>
                    <span className="text-primary">${(cartTotal + 9.99).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
