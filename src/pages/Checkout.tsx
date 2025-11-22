import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle2, CreditCard, Truck, MapPin } from 'lucide-react';

const US_STATES = [
  { value: 'AL', label: 'Alabama' }, { value: 'AK', label: 'Alaska' }, { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' }, { value: 'CA', label: 'California' }, { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' }, { value: 'DE', label: 'Delaware' }, { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' }, { value: 'HI', label: 'Hawaii' }, { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' }, { value: 'IN', label: 'Indiana' }, { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' }, { value: 'KY', label: 'Kentucky' }, { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' }, { value: 'MD', label: 'Maryland' }, { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' }, { value: 'MN', label: 'Minnesota' }, { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' }, { value: 'MT', label: 'Montana' }, { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' }, { value: 'NH', label: 'New Hampshire' }, { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' }, { value: 'NY', label: 'New York' }, { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' }, { value: 'OH', label: 'Ohio' }, { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' }, { value: 'PA', label: 'Pennsylvania' }, { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' }, { value: 'SD', label: 'South Dakota' }, { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' }, { value: 'UT', label: 'Utah' }, { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' }, { value: 'WA', label: 'Washington' }, { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' }, { value: 'WY', label: 'Wyoming' }
];

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  // Form State
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'USA'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateShipping = () => {
    const newErrors: Record<string, string> = {};
    
    if (!shippingInfo.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!shippingInfo.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!shippingInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(shippingInfo.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!shippingInfo.address.trim()) newErrors.address = 'Address is required';
    if (!shippingInfo.city.trim()) newErrors.city = 'City is required';
    if (!shippingInfo.state) newErrors.state = 'State is required';
    if (!shippingInfo.zip.trim()) {
      newErrors.zip = 'ZIP code is required';
    } else if (!/^\d{5}(-\d{4})?$/.test(shippingInfo.zip)) {
      newErrors.zip = 'Invalid ZIP code (e.g., 12345)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinueToShipping = () => {
    if (validateShipping()) {
      setStep(2);
    }
  };

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
                      <Input 
                        name="firstName" 
                        value={shippingInfo.firstName} 
                        onChange={handleInputChange} 
                        placeholder="John" 
                        className={errors.firstName ? 'border-destructive' : ''}
                      />
                      {errors.firstName && <p className="text-xs text-destructive mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <Label>Last Name</Label>
                      <Input 
                        name="lastName" 
                        value={shippingInfo.lastName} 
                        onChange={handleInputChange} 
                        placeholder="Doe" 
                        className={errors.lastName ? 'border-destructive' : ''}
                      />
                      {errors.lastName && <p className="text-xs text-destructive mt-1">{errors.lastName}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <Label>Email</Label>
                      <Input 
                        name="email" 
                        type="email" 
                        value={shippingInfo.email} 
                        onChange={handleInputChange} 
                        placeholder="john@example.com" 
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <Label>Address</Label>
                      <Input 
                        name="address" 
                        value={shippingInfo.address} 
                        onChange={handleInputChange} 
                        placeholder="123 Main St" 
                        className={errors.address ? 'border-destructive' : ''}
                      />
                      {errors.address && <p className="text-xs text-destructive mt-1">{errors.address}</p>}
                    </div>
                    <div>
                      <Label>City</Label>
                      <Input 
                        name="city" 
                        value={shippingInfo.city} 
                        onChange={handleInputChange} 
                        placeholder="New York" 
                        className={errors.city ? 'border-destructive' : ''}
                      />
                      {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <Label>State</Label>
                      <select
                        name="state"
                        value={shippingInfo.state}
                        onChange={handleInputChange}
                        className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.state ? 'border-destructive' : ''}`}
                      >
                        <option value="">Select State</option>
                        {US_STATES.map((state) => (
                          <option key={state.value} value={state.value}>
                            {state.label}
                          </option>
                        ))}
                      </select>
                      {errors.state && <p className="text-xs text-destructive mt-1">{errors.state}</p>}
                    </div>
                    <div>
                      <Label>ZIP Code</Label>
                      <Input 
                        name="zip" 
                        value={shippingInfo.zip} 
                        onChange={handleInputChange} 
                        placeholder="10001" 
                        maxLength={10}
                        className={errors.zip ? 'border-destructive' : ''}
                      />
                      {errors.zip && <p className="text-xs text-destructive mt-1">{errors.zip}</p>}
                    </div>
                    <div>
                      <Label>Country</Label>
                      <Input value="USA" disabled />
                    </div>
                  </div>
                  <Button
                    onClick={handleContinueToShipping}
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

                  <div className="flex gap-4 mb-6">
                    <button
                      onClick={() => setPaymentMethod('card')}
                      className={`flex-1 py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                        paymentMethod === 'card'
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      Credit Card
                    </button>
                    <button
                      onClick={() => setPaymentMethod('zelle')}
                      className={`flex-1 py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                        paymentMethod === 'zelle'
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      Zelle
                    </button>
                    <button
                      onClick={() => setPaymentMethod('cashapp')}
                      className={`flex-1 py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                        paymentMethod === 'cashapp'
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      CashApp
                    </button>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4 fade-in">
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
                  )}

                  {paymentMethod === 'zelle' && (
                    <div className="space-y-4 fade-in">
                      <div className="bg-secondary/50 p-4 rounded-lg border border-border">
                        <p className="text-sm text-muted-foreground mb-2">Please send payment to:</p>
                        <p className="text-lg font-bold text-primary">payments@smartfitnessbulk.com</p>
                      </div>
                      <div>
                        <Label>Zelle Name / Phone Number</Label>
                        <Input placeholder="Enter the name or number used for payment" />
                        <p className="text-xs text-muted-foreground mt-1">
                          We need this to match your payment to your order.
                        </p>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'cashapp' && (
                    <div className="space-y-4 fade-in">
                      <div className="bg-secondary/50 p-4 rounded-lg border border-border">
                        <p className="text-sm text-muted-foreground mb-2">Please send payment to:</p>
                        <p className="text-lg font-bold text-primary">$SmartFitnessBulk</p>
                      </div>
                      <div>
                        <Label>Your CashTag</Label>
                        <Input placeholder="$YourCashTag" />
                        <p className="text-xs text-muted-foreground mt-1">
                          We need this to match your payment to your order.
                        </p>
                      </div>
                    </div>
                  )}

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
