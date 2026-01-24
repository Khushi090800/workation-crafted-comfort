import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, Battery, Wifi, Monitor, Keyboard, 
  Armchair, Zap, CheckCircle2, Check, Palmtree, Sun
} from 'lucide-react';
import { 
  ResponsiveContainer, CartesianGrid, Area, AreaChart, XAxis, YAxis, Tooltip
} from 'recharts';
import { useDashboardState } from '@/hooks/useDashboardState';
import { toast } from 'sonner';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import workspaceOceanImg from '@/assets/workspace-ocean.jpg';

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
    name: '4K Display',
    price: '$20',
    duration: '14 days',
    tagline: 'Crystal clear ocean views & spreadsheets',
    icon: Monitor,
  },
  {
    id: 2,
    name: 'Clicky Keys',
    price: '$15',
    duration: '14 days',
    tagline: 'Mechanical magic for your magnum opus',
    icon: Keyboard,
  },
  {
    id: 3,
    name: 'Comfort Throne',
    price: '$30',
    duration: '14 days',
    tagline: 'Because your back deserves paradise too',
    icon: Armchair,
  },
];

const ModuleB = () => {
  const { reserveEquipment, isEquipmentReserved } = useDashboardState();
  const [heartbeatData, setHeartbeatData] = useState(generateHeartbeatData);
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [currentPing, setCurrentPing] = useState(20);

  // Auto-update chart
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

  // Animate battery
  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryLevel(prev => Math.min(100, Math.max(70, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleReserveEquipment = (equipment: typeof equipmentItems[0]) => {
    if (isEquipmentReserved(equipment.id)) return;
    reserveEquipment(equipment.id);
    toast.success(`${equipment.name} is yours! 💻`, {
      description: equipment.tagline,
    });
  };

  const statusItems = [
    { label: 'Island Grid', status: 'Solid ⚡', icon: Activity, isOk: true },
    { label: 'Backup Power', status: `${batteryLevel}%`, icon: Battery, isOk: batteryLevel > 50 },
    { label: 'Fiber Speed', status: '150Mbps 🚀', icon: Wifi, isOk: true },
  ];

  return (
    <section className="max-w-5xl mx-auto">
      {/* Section Header */}
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
            <Sun className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Productivity Paradise</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Workspace Excellence
          </h2>
          <p className="text-lg text-muted-foreground italic">
            "Work hard, surf harder—but only with solid WiFi"
          </p>
        </div>
      </ScrollReveal>

      {/* Hero Card with Workspace Ocean View */}
      <ScrollReveal delay={0.1}>
        <div className="relative rounded-2xl overflow-hidden mb-10 group">
          <img 
            src={workspaceOceanImg} 
            alt="Laptop workspace with ocean view" 
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
          
          <div className="absolute inset-0 flex items-center p-8 md:p-12">
            <div className="max-w-md">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-background mb-2">
                Laptop Life, Perfected
              </h3>
              <p className="text-background/80 mb-4 italic">
                "Enterprise WiFi meets ocean breezes. Your video calls just got a better backdrop."
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-background/20 backdrop-blur-sm text-background border-0 px-3 py-1">
                  <Zap className="w-3 h-3 mr-1" />
                  {currentPing}ms ping
                </Badge>
                <Badge className="bg-background/20 backdrop-blur-sm text-background border-0 px-3 py-1">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  99.9% uptime
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Two Column: Chart + Status */}
      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        {/* Connectivity Chart */}
        <ScrollReveal delay={0.15}>
          <div className="card-base card-padding-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">Island Heartbeat</h3>
                <p className="text-sm text-muted-foreground">24hr connectivity pulse</p>
              </div>
            </div>
            
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={heartbeatData}>
                  <defs>
                    <linearGradient id="pingGradientTropical" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
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
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="ping" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    fill="url(#pingGradientTropical)"
                    name="Ping (ms)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </ScrollReveal>

        {/* Status */}
        <ScrollReveal delay={0.2}>
          <div className="card-base card-padding-lg h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Wifi className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">System Vitals</h3>
                <p className="text-sm text-muted-foreground">Everything's running smooth</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {statusItems.map((item) => (
                <motion.div 
                  key={item.label}
                  className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-border"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      item.isOk ? 'bg-primary' : 'bg-accent'
                    }`}>
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-medium text-foreground">{item.label}</span>
                  </div>
                  <span className={`font-bold ${item.isOk ? 'text-primary' : 'text-accent'}`}>
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Equipment Marketplace */}
      <ScrollReveal delay={0.25}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Monitor className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">Gear Up</h3>
              <p className="text-sm text-muted-foreground italic">"Level up your setup, island style"</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipmentItems.map((item, index) => {
              const isReserved = isEquipmentReserved(item.id);
              return (
                <ScrollReveal key={item.id} delay={0.25 + index * 0.08}>
                  <motion.div 
                    className="card-base card-padding-lg h-full flex flex-col"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                      isReserved ? 'bg-accent/20' : 'bg-primary'
                    }`}>
                      {isReserved ? (
                        <Palmtree className="w-6 h-6 text-accent" />
                      ) : (
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      )}
                    </div>
                    
                    <h4 className="font-display font-bold text-foreground text-lg mb-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground italic mb-4 flex-grow">"{item.tagline}"</p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-xl font-display font-bold text-foreground">{item.price}</span>
                        <span className="text-xs text-muted-foreground ml-1">/ {item.duration}</span>
                      </div>
                      <Button 
                        onClick={() => handleReserveEquipment(item)}
                        disabled={isReserved}
                        variant={isReserved ? "default" : "hero"}
                        size="sm"
                        className={isReserved ? 'bg-accent/20 text-accent hover:bg-accent/20' : ''}
                      >
                        {isReserved ? '✨ Yours!' : 'Reserve'}
                      </Button>
                    </div>
                  </motion.div>
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
