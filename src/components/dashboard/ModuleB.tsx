import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, Battery, Wifi, Monitor, Keyboard, 
  Armchair, Zap, CheckCircle2, Check
} from 'lucide-react';
import { 
  ResponsiveContainer, CartesianGrid, Area, AreaChart, XAxis, YAxis, Tooltip
} from 'recharts';
import { useDashboardState } from '@/hooks/useDashboardState';
import { toast } from 'sonner';
import ScrollReveal from '@/components/ScrollReveal';

// Generate initial heartbeat data
const generateHeartbeatData = () => 
  Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    ping: 18 + Math.sin(i / 3) * 2 + Math.random() * 2,
    speed: 145 + Math.sin(i / 4) * 5 + Math.random() * 5,
  }));

// Equipment marketplace
const equipmentItems = [
  {
    id: 1,
    name: '4K Monitor',
    price: '$20',
    duration: '14 days',
    icon: Monitor,
  },
  {
    id: 2,
    name: 'Mech Keyboard',
    price: '$15',
    duration: '14 days',
    icon: Keyboard,
  },
  {
    id: 3,
    name: 'Ergo Chair',
    price: '$30',
    duration: '14 days',
    icon: Armchair,
  },
];

const ModuleB = () => {
  const { reserveEquipment, isEquipmentReserved } = useDashboardState();
  const [heartbeatData, setHeartbeatData] = useState(generateHeartbeatData);
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [currentPing, setCurrentPing] = useState(20);

  // Auto-update chart data every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartbeatData(prev => {
        const newData = [...prev.slice(1)];
        const lastHour = parseInt(prev[prev.length - 1].hour);
        newData.push({
          hour: `${(lastHour + 1) % 24}:00`,
          ping: 18 + Math.sin((lastHour + 1) / 3) * 2 + Math.random() * 2,
          speed: 145 + Math.sin((lastHour + 1) / 4) * 5 + Math.random() * 5,
        });
        setCurrentPing(Math.round(newData[newData.length - 1].ping));
        return newData;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animate battery level
  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryLevel(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.min(100, Math.max(70, prev + change));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleReserveEquipment = (equipment: typeof equipmentItems[0]) => {
    if (isEquipmentReserved(equipment.id)) return;
    reserveEquipment(equipment.id);
    toast.success(`${equipment.name} reserved!`, {
      description: `${equipment.duration} rental • ${equipment.price}`,
    });
  };

  // Status indicators with animated battery
  const statusItems = [
    { label: 'Main Grid', status: 'OK', icon: Activity, isOk: true },
    { label: 'Battery', status: `${batteryLevel}%`, icon: Battery, isOk: batteryLevel > 50 },
    { label: 'ISP Speed', status: '150Mbps', icon: Wifi, isOk: true },
  ];

  return (
    <section className="max-w-5xl mx-auto">
      {/* Section Header - Landing style */}
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-3 block">
            Workplace Suite
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Workspace Excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade connectivity and premium equipment at your fingertips.
          </p>
        </div>
      </ScrollReveal>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-4 mb-10">
        {/* Left: Connectivity Pulse */}
        <ScrollReveal delay={0.1}>
          <div className="space-y-4">
            <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2 mb-4">
              <div className="icon-container-sm bg-primary/10">
                <Activity className="w-4 h-4 text-primary" />
              </div>
              Connectivity Pulse
            </h3>
            <div className="card-base card-padding-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-2xl font-display font-bold text-foreground transition-all duration-300">{currentPing}ms</p>
                  <p className="text-sm text-muted-foreground">Average Ping</p>
                </div>
                <Badge className="bg-accent/10 text-accent border-0 px-3 py-1 font-medium">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  99.9% Uptime
                </Badge>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={heartbeatData}>
                    <defs>
                      <linearGradient id="pingGradientB" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
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
                      domain={[15, 25]}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '12px',
                        fontSize: '12px',
                        boxShadow: 'var(--shadow-card)'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="ping" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      fill="url(#pingGradientB)"
                      name="Ping (ms)"
                      isAnimationActive={true}
                      animationDuration={500}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Status Badges */}
        <ScrollReveal delay={0.2}>
          <div className="space-y-4">
            <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2 mb-4">
              <div className="icon-container-sm bg-primary/10">
                <Wifi className="w-4 h-4 text-primary" />
              </div>
              System Status
            </h3>
            <div className="card-base card-padding-lg h-[calc(100%-2.5rem)] flex flex-col justify-center">
              <div className="space-y-3">
                {statusItems.map((item) => (
                  <div 
                    key={item.label}
                    className={`flex items-center justify-between p-4 rounded-xl bg-secondary border border-border transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`icon-container-sm ${item.isOk ? 'bg-primary' : 'bg-accent'}`}>
                        <item.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="font-medium text-foreground">{item.label}</span>
                    </div>
                    <span className={`font-bold ${item.isOk ? 'text-primary' : 'text-accent'}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Equipment Marketplace */}
      <ScrollReveal delay={0.3}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2 mb-4">
            <div className="icon-container-sm bg-primary/10">
              <Monitor className="w-4 h-4 text-primary" />
            </div>
            Equipment Marketplace
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipmentItems.map((item, index) => {
              const isReserved = isEquipmentReserved(item.id);
              return (
                <ScrollReveal key={item.id} delay={0.3 + index * 0.08}>
                  <div className="card-base card-hover card-padding-lg">
                    <div className={`icon-container bg-primary mb-4`}>
                      {isReserved ? (
                        <Check className="w-5 h-5 text-primary-foreground" />
                      ) : (
                        <item.icon className="w-5 h-5 text-primary-foreground" />
                      )}
                    </div>
                    <h4 className="font-display font-bold text-foreground text-base mb-1">{item.name}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{item.duration} rental</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-display font-bold text-foreground">{item.price}</span>
                      <Button 
                        onClick={() => handleReserveEquipment(item)}
                        disabled={isReserved}
                        variant={isReserved ? "default" : "hero"}
                        size="default"
                        className={isReserved ? 'bg-accent/20 text-accent hover:bg-accent/20 cursor-default' : ''}
                      >
                        {isReserved ? 'Reserved ✓' : 'Reserve'}
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ModuleB;
