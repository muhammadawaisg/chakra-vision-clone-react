
import { TrendingUp, Users, ShoppingCart, Globe } from "lucide-react";

const stats = [
  {
    title: "Today's Money",
    value: "$53,000",
    change: "+55%",
    icon: TrendingUp,
    gradient: "from-green-500 to-teal-400",
  },
  {
    title: "Today's Users",
    value: "2,300",
    change: "+3%",
    icon: Users,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "New Clients",
    value: "+3,462",
    change: "-2%",
    icon: ShoppingCart,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Total Sales",
    value: "$103,430",
    change: "+5%",
    icon: Globe,
    gradient: "from-pink-500 to-rose-500",
  },
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">{stat.title}</p>
              <h3 className="text-white text-2xl font-bold">{stat.value}</h3>
            </div>
          </div>
          <div className="flex items-center">
            <span className={`text-sm font-medium ${
              stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
            }`}>
              {stat.change}
            </span>
            <span className="text-gray-400 text-sm ml-2">since yesterday</span>
          </div>
        </div>
      ))}
    </div>
  );
};
