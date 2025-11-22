import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Orders = () => {
  const [expandedOrder, setExpandedOrder] = useState<number | null>(null);

  const orders = [
    {
      id: '#ORD-12345',
      date: 'January 15, 2024',
      status: 'Delivered',
      total: '$279.99',
      items: [
        { name: 'Semaglutide 10mg', quantity: 1, price: '$279.99' },
      ],
    },
    {
      id: '#ORD-12346',
      date: 'January 10, 2024',
      status: 'In Transit',
      total: '$149.99',
      items: [
        { name: 'Semaglutide 5mg', quantity: 1, price: '$149.99' },
      ],
    },
    {
      id: '#ORD-12347',
      date: 'January 5, 2024',
      status: 'Processing',
      total: '$329.99',
      items: [
        { name: 'Retatrutide 10mg', quantity: 1, price: '$329.99' },
      ],
    },
    {
      id: '#ORD-12348',
      date: 'December 28, 2023',
      status: 'Delivered',
      total: '$189.99',
      items: [
        { name: 'Tirzepatide 10mg', quantity: 1, price: '$189.99' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold mb-12 fade-in">My Orders</h1>

          <div className="space-y-4">
            {orders.map((order, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden slide-up"
              >
                <div
                  className="p-6 cursor-pointer hover:bg-card/80 transition-colors"
                  onClick={() => setExpandedOrder(expandedOrder === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-bold mb-1">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{order.total}</p>
                        <p className="text-sm text-primary">{order.status}</p>
                      </div>
                      {expandedOrder === index ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </div>

                {expandedOrder === index && (
                  <div className="border-t border-border p-6 bg-background">
                    <h3 className="font-semibold mb-4">Order Details</h3>
                    <div className="space-y-3">
                      {order.items.map((item, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                          </div>
                          <p className="font-semibold">{item.price}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-border">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-primary">{order.total}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Orders;
