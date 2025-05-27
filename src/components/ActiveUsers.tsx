
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', users: 450 },
  { name: 'Tue', users: 200 },
  { name: 'Wed', users: 300 },
  { name: 'Thu', users: 220 },
  { name: 'Fri', users: 500 },
  { name: 'Sat', users: 250 },
  { name: 'Sun', users: 400 },
];

export const ActiveUsers = () => {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
      <div className="mb-6">
        <h3 className="text-white text-xl font-bold mb-2">Active Users</h3>
        <p className="text-green-400 text-sm">
          <span className="font-semibold">+23%</span> than last week
        </p>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <Bar 
              dataKey="users" 
              fill="url(#gradient2)"
              radius={[4, 4, 0, 0]}
            />
            <defs>
              <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
