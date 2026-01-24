import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, Battery, Wifi, Monitor, Keyboard, 
  Armchair, Zap, CheckCircle2
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  CartesianGrid, Area, AreaChart
} from 'recharts';

// Mock heartbeat data - smooth ping between 18-22ms
const heartbeatData = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  ping: 18 + Math.sin(i / 3) * 2 + Math.random() * 2,
  speed: 145 + Math.sin(i / 4) * 5 + Math.random() * 5,
}));

// Status indicators
const statusItems = [
  { label: 'Main Grid', status: 'OK', icon: Activity, color: 'emerald' },
  { label: 'Battery', status: '85%', icon: Battery, color: 'amber' },
  { label: 'ISP Speed', status: '150Mbps', icon: Wifi, color: 'emerald' },
];

// Equipment marketplace
const equipmentItems = [
  {
    id: 1,
    name: '4K Monitor',
    price: '$20',
    duration: '14 days',
    icon: Monitor,
    gradient: 'from-violet-500 to-purple-600',
    bgGradient: 'from-violet-50 to-purple-50',
  },
  {
    id: 2,
    name: 'Mech Keyboard',
    price: '$15',
    duration: '14 days',
    icon: Keyboard,
    gradient: 'from-blue-500 to-indigo-600',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
  {
    id: 3,
    name: 'Ergo Chair',
    price: '$30',
    duration: '14 days',
    icon: Armchair,
    gradient: 'from-emerald-500 to-teal-600',
    bgGradient: 'from-emerald-50 to-teal-50',
  },
];

const ModuleB = () => {
  return (
    <section className="space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50">
          <Zap className="w-4 h-4 text-indigo-500" />
          <span className="text-sm font-medium text-indigo-700">Module B</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
          Workspace Excellence
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enterprise-grade connectivity and premium equipment at your fingertips
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Connectivity Pulse */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-500" />
            Connectivity Pulse
          </h3>
          <Card className="bg-white/80 backdrop-blur-sm border-white/50 rounded-3xl shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-2xl font-bold text-gray-900">20ms</p>
                  <p className="text-sm text-gray-500">Average Ping</p>
                </div>
                <Badge className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 border-0 px-3 py-1">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  99.9% Uptime
                </Badge>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={heartbeatData}>
                    <defs>
                      <linearGradient id="pingGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="hour" 
                      tick={{ fontSize: 10, fill: '#9ca3af' }}
                      tickLine={false}
                      axisLine={false}
                      interval={5}
                    />
                    <YAxis 
                      tick={{ fontSize: 10, fill: '#9ca3af' }}
                      tickLine={false}
                      axisLine={false}
                      domain={[15, 25]}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '12px',
                        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="ping" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      fill="url(#pingGradient)"
                      name="Ping (ms)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: Status Badges */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Wifi className="w-5 h-5 text-indigo-500" />
            System Status
          </h3>
          <Card className="bg-white/80 backdrop-blur-sm border-white/50 rounded-3xl shadow-xl h-[calc(100%-2rem)]">
            <CardContent className="p-6 flex flex-col justify-center h-full">
              <div className="space-y-4">
                {statusItems.map((item) => (
                  <div 
                    key={item.label}
                    className={`flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r ${
                      item.color === 'emerald' 
                        ? 'from-emerald-50 to-teal-50 border border-emerald-100' 
                        : 'from-amber-50 to-orange-50 border border-amber-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        item.color === 'emerald' 
                          ? 'bg-gradient-to-br from-emerald-500 to-teal-500' 
                          : 'bg-gradient-to-br from-amber-500 to-orange-500'
                      }`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-gray-800">{item.label}</span>
                    </div>
                    <span className={`font-bold ${
                      item.color === 'emerald' ? 'text-emerald-600' : 'text-amber-600'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Equipment Marketplace */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Monitor className="w-5 h-5 text-violet-500" />
          Equipment Marketplace
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentItems.map((item) => (
            <Card 
              key={item.id} 
              className="bg-white/80 backdrop-blur-sm border-white/50 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">{item.name}</h4>
                <p className="text-gray-500 text-sm mb-4">{item.duration} rental</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{item.price}</span>
                  <Button className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white rounded-xl px-5 shadow-lg shadow-indigo-500/25 transition-all duration-300">
                    Reserve
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleB;
