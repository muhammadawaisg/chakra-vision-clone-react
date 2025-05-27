
import { TrendingUp, ShoppingBag, CreditCard, Key } from "lucide-react";

const orders = [
  {
    icon: TrendingUp,
    title: "$2400, Design changes",
    time: "22 DEC 7:20 PM",
    color: "text-green-400",
  },
  {
    icon: ShoppingBag,
    title: "New order #4219423",
    time: "21 DEC 11:21 PM",
    color: "text-red-400",
  },
  {
    icon: CreditCard,
    title: "Server Payments for April",
    time: "21 DEC 9:28 PM",
    color: "text-blue-400",
  },
  {
    icon: Key,
    title: "New card added for order #3210145",
    time: "20 DEC 3:52 PM",
    color: "text-orange-400",
  },
];

export const OrdersOverview = () => {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
      <div className="mb-6">
        <h3 className="text-white text-xl font-bold mb-2">Orders Overview</h3>
        <p className="text-green-400 text-sm">
          <span className="font-semibold">+30%</span> this month
        </p>
      </div>
      
      <div className="space-y-6">
        {orders.map((order, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 ${order.color}`}>
              <order.icon className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium text-sm">{order.title}</p>
              <p className="text-gray-400 text-xs mt-1">{order.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
