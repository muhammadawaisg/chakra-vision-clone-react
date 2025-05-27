
import { Home, BarChart3, CreditCard, User, Settings, LogOut, Rocket } from "lucide-react";

const menuItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: BarChart3, label: "Tables" },
  { icon: CreditCard, label: "Billing" },
  { icon: Rocket, label: "RTL" },
];

const accountItems = [
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
  { icon: LogOut, label: "Sign Out" },
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-black/20 backdrop-blur-xl border-r border-white/10 flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-xl">VISION UI</span>
        </div>
      </div>
      
      <div className="flex-1 px-6">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
                item.active
                  ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white border border-blue-500/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10">
          <h3 className="text-gray-400 text-sm font-semibold mb-4 uppercase tracking-wider">Account Pages</h3>
          <div className="space-y-2">
            {accountItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-all text-gray-400 hover:text-white hover:bg-white/5"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 text-center">
          <div className="w-12 h-12 bg-white/20 rounded-xl mx-auto mb-3 flex items-center justify-center">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-white font-bold mb-2">Need help?</h4>
          <p className="text-white/80 text-sm mb-3">Please check our docs</p>
          <button className="w-full bg-white text-blue-600 font-bold py-2 px-4 rounded-xl text-sm hover:bg-gray-100 transition-colors">
            DOCUMENTATION
          </button>
        </div>
      </div>
    </div>
  );
};
