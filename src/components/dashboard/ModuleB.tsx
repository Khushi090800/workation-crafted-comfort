import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, Battery, Wifi, Monitor, Keyboard, 
  Armchair, CheckCircle2
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  CartesianGrid 
} from 'recharts';

// Mock heartbeat data for the last 24 hours
const heartbeatData = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  ping: Math.floor(Math.random() * 15) + 5,
  speed: Math.floor(Math.random() * 50) + 120,
}));

// Status indicators
const statusItems = [
  { label: 'Main Grid', status: 'OK', icon: Activity },
  { label: 'Battery', status: '85%', icon: Battery },
  { label: 'ISP', status: '150Mbps', icon: Wifi },
];

// Equipment marketplace
const equipmentItems = [
  {
    id: 1,
    name: '4K Monitor',
    price: '$20',
    duration: '14 days',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop',
    icon: Monitor,
  },
  {
    id: 2,
    name: 'Mech Keyboard',
    price: '$15',
    duration: '14 days',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=300&fit=crop',
    icon: Keyboard,
  },
  {
    id: 3,
    name: 'Ergo Chair',
    price: '$30',
    duration: '14 days',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=300&fit=crop',
    icon: Armchair,
  },
];

const ModuleB = () => {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-full text-xs font-medium border bg-accent/10 text-accent border-accent/20">
            Module B
          </div>
        </div>
        <h3 className="text-xl font-display text-foreground">Workplace Suite</h3>
      </div>

      {/* Connectivity Heartbeat Chart */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Connectivity Heartbeat
          </h4>
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Uptime 99%
          </Badge>
        </div>
        <Card className="card-base">
          <CardContent className="card-padding">
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={heartbeatData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="hour" 
                    tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                    tickLine={false}
                    axisLine={false}
                    interval={5}
                  />
                  <YAxis 
                    tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="ping" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={false}
                    name="Ping (ms)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="speed" 
                    stroke="hsl(142 76% 36%)" 
                    strokeWidth={2}
                    dot={false}
                    name="Speed (Mbps)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex gap-4 mt-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-primary rounded" />
                <span className="text-muted-foreground">Ping (ms)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-emerald-500 rounded" />
                <span className="text-muted-foreground">Speed (Mbps)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Status Badges */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          System Status
        </h4>
        <div className="flex flex-wrap gap-3">
          {statusItems.map((item) => (
            <Badge 
              key={item.label}
              variant="outline" 
              className="px-3 py-2 flex items-center gap-2 bg-card"
            >
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium">{item.label}:</span>
              <span className="text-emerald-600">{item.status}</span>
            </Badge>
          ))}
        </div>
      </div>

      {/* Equipment Marketplace */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Equipment Marketplace
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {equipmentItems.map((item) => (
            <Card key={item.id} className="card-base card-hover overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="card-padding">
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-4 h-4 text-primary" />
                  <h5 className="font-medium text-foreground">{item.name}</h5>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.price} / {item.duration}
                </p>
                <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Rent Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModuleB;
