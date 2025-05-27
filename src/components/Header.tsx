
import { Search, Bell, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-black/20 backdrop-blur-xl border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-gray-400 text-sm">
            Pages / <span className="text-white">Dashboard</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Type here..."
              className="bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-64"
            />
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="p-2 hover:bg-white/10 rounded-xl transition-colors">
              <Bell className="w-5 h-5 text-gray-400" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-medium">Mark Johnson</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
