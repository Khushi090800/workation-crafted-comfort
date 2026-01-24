import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Clock, Briefcase, Dumbbell, Heart, 
  Palette, Utensils, Mountain, Compass, Check
} from 'lucide-react';
import { useDashboardState } from '@/hooks/useDashboardState';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';
import ScrollReveal from '@/components/ScrollReveal';

// Activity data from the provided JSON
const activitiesData = [
  { id: 1, name: "Kuta Cabana", type: "Work/Eats", activity_type: "Work", best_time: ["Morning", "Afternoon"], duration_tag: "1-3hrs", work_vibe: "Deep Work", distance: 0.4, price: "Free" },
  { id: 2, name: "Selong Surf", type: "Physical", activity_type: "Physical", best_time: ["Morning"], duration_tag: "3hrs+", work_vibe: "No-WiFi", distance: 4.2, price: "Free" },
  { id: 3, name: "Horizon View", type: "Wellness", activity_type: "Wellness", best_time: ["Evening"], duration_tag: "<1hr", work_vibe: "Social", distance: 1.8, price: "Free" },
  { id: 4, name: "Local Pottery", type: "Art", activity_type: "Art", best_time: ["Afternoon"], duration_tag: "1-3hrs", work_vibe: "No-WiFi", distance: 0.9, price: "Free" },
  { id: 5, name: "Street Food Hub", type: "Eats", activity_type: "Eats", best_time: ["Night"], duration_tag: "<1hr", work_vibe: "Social", distance: 0.5, price: "Free" },
  { id: 6, name: "Rinjani Trek", type: "Tour", activity_type: "Physical", best_time: ["Morning"], duration_tag: "3hrs+", work_vibe: "No-WiFi", distance: 45.0, price: "$" },
];

// Filter options
const typeFilters = ['Work', 'Physical', 'Wellness', 'Art', 'Eats'];
const distanceFilters = ['<1km', '1-5km', '>5km'];
const timeFilters = [
  { label: '1 Hour', value: '<1hr' },
  { label: '3 Hours', value: '1-3hrs' },
  { label: 'Full Day', value: '3hrs+' },
];

// Icon mapping
const typeIcons: Record<string, React.ElementType> = {
  Work: Briefcase,
  Physical: Dumbbell,
  Wellness: Heart,
  Art: Palette,
  Eats: Utensils,
  Tour: Mountain,
};

const triggerVolcanoConfetti = () => {
  const duration = 2000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['hsl(18, 70%, 55%)', 'hsl(35, 65%, 60%)', 'hsl(192, 65%, 25%)'],
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['hsl(18, 70%, 55%)', 'hsl(35, 65%, 60%)', 'hsl(192, 65%, 25%)'],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();
};

const ModuleC = () => {
  const [timeFilter, setTimeFilter] = useState<string>('all');
  const [activeTypeFilters, setActiveTypeFilters] = useState<string[]>([]);
  const [activeDistanceFilters, setActiveDistanceFilters] = useState<string[]>([]);
  
  const { 
    bookActivity, 
    isActivityBooked, 
    bookVolcanoTrek, 
    bookings 
  } = useDashboardState();

  const toggleFilter = (filter: string, activeFilters: string[], setFilters: (f: string[]) => void) => {
    if (activeFilters.includes(filter)) {
      setFilters(activeFilters.filter(f => f !== filter));
    } else {
      setFilters([...activeFilters, filter]);
    }
  };

  const filteredActivities = useMemo(() => {
    return activitiesData.filter(activity => {
      if (timeFilter !== 'all' && activity.duration_tag !== timeFilter) return false;
      if (activeTypeFilters.length > 0 && !activeTypeFilters.includes(activity.activity_type)) return false;
      if (activeDistanceFilters.length > 0) {
        const matchesDistance = activeDistanceFilters.some(df => {
          if (df === '<1km') return activity.distance < 1;
          if (df === '1-5km') return activity.distance >= 1 && activity.distance <= 5;
          if (df === '>5km') return activity.distance > 5;
          return false;
        });
        if (!matchesDistance) return false;
      }
      return true;
    });
  }, [timeFilter, activeTypeFilters, activeDistanceFilters]);

  const handleBookActivity = (activity: typeof activitiesData[0]) => {
    if (isActivityBooked(activity.id)) return;
    bookActivity(activity.id);
    toast.success(`${activity.name} booked!`, {
      description: activity.price === 'Free' ? 'Free experience' : `Price: ${activity.price}`,
    });
  };

  const handleBookVolcanoTrek = () => {
    if (bookings.volcanoTrekBooked) return;
    bookVolcanoTrek();
    triggerVolcanoConfetti();
    toast.success('Volcano Trek booked!', {
      description: 'Full-day adventure to Mount Rinjani • $50',
    });
  };

  return (
    <section className="max-w-5xl mx-auto">
      {/* Section Header - Landing style */}
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-3 block">
            Leisure & Discovery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Leisure & Lombok
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore curated experiences that blend adventure with tranquility.
          </p>
        </div>
      </ScrollReveal>

      {/* Filters */}
      <ScrollReveal delay={0.1}>
        <div className="card-base card-padding-lg space-y-4 mb-10">
          {/* Time Dropdown */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium text-foreground">Time Available:</span>
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-40 bg-background border-border rounded-xl">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent className="bg-card border border-border rounded-xl shadow-elevated z-50">
                <SelectItem value="all">All Durations</SelectItem>
                {timeFilters.map(tf => (
                  <SelectItem key={tf.value} value={tf.value}>{tf.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Type Chips */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-foreground">Type:</span>
            {typeFilters.map(filter => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter, activeTypeFilters, setActiveTypeFilters)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTypeFilters.includes(filter) 
                    ? 'bg-accent text-accent-foreground shadow-soft' 
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Distance Chips */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-foreground">Distance:</span>
            {distanceFilters.map(filter => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter, activeDistanceFilters, setActiveDistanceFilters)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeDistanceFilters.includes(filter) 
                    ? 'bg-accent text-accent-foreground shadow-soft' 
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Activities Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {filteredActivities.map((activity, index) => {
          const IconComponent = typeIcons[activity.activity_type] || Compass;
          const isBooked = isActivityBooked(activity.id);
          
          return (
            <ScrollReveal key={activity.id} delay={0.15 + index * 0.05}>
              <div className="card-base card-hover card-padding-lg h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`icon-container ${isBooked ? 'bg-accent/20' : 'bg-primary/10'}`}>
                    {isBooked ? (
                      <Check className="w-5 h-5 text-accent" />
                    ) : (
                      <IconComponent className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-foreground text-base">{activity.name}</h4>
                    <p className="text-sm text-muted-foreground">{activity.type} • {activity.distance}km</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className={`text-xs rounded-lg px-2 py-0.5 border-0 ${
                    activity.work_vibe === 'Deep Work' ? 'bg-primary/10 text-primary' :
                    activity.work_vibe === 'Social' ? 'bg-accent/10 text-accent' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {activity.work_vibe}
                  </Badge>
                  <Badge className="text-xs rounded-lg px-2 py-0.5 bg-secondary text-muted-foreground border-0">
                    <Clock className="w-3 h-3 mr-1" />
                    {activity.duration_tag}
                  </Badge>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className={`font-bold ${
                    activity.price === 'Free' ? 'text-primary' : 'text-foreground'
                  }`}>
                    {activity.price}
                  </span>
                  <Button 
                    onClick={() => handleBookActivity(activity)}
                    disabled={isBooked}
                    variant={isBooked ? "default" : (activity.price === 'Free' ? 'heroOutline' : 'hero')}
                    size="sm"
                    className={isBooked ? 'bg-accent/20 text-accent hover:bg-accent/20 cursor-default' : ''}
                  >
                    {isBooked ? 'Booked ✓' : activity.price === 'Free' ? 'Explore' : 'Book Now'}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Marketplace Hero - Volcano Trek */}
      <ScrollReveal delay={0.3}>
        <div className={`card-elevated rounded-2xl p-8 md:p-10 transition-all duration-300 ${
          bookings.volcanoTrekBooked 
            ? 'bg-accent/10 border border-accent/30'
            : 'bg-primary'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className={`icon-container ${
                bookings.volcanoTrekBooked ? 'bg-accent/20' : 'bg-primary-foreground/20'
              }`}>
                {bookings.volcanoTrekBooked ? (
                  <Check className="w-6 h-6 text-accent" />
                ) : (
                  <Mountain className="w-6 h-6 text-primary-foreground" />
                )}
              </div>
              <div>
                <span className={`text-sm font-medium mb-1 block ${
                  bookings.volcanoTrekBooked ? 'text-accent' : 'text-primary-foreground/80'
                }`}>
                  {bookings.volcanoTrekBooked ? 'Adventure Confirmed!' : 'Premium Experience'}
                </span>
                <h4 className={`text-2xl font-display font-bold ${
                  bookings.volcanoTrekBooked ? 'text-foreground' : 'text-primary-foreground'
                }`}>
                  Volcano Trek Adventure
                </h4>
                <p className={bookings.volcanoTrekBooked ? 'text-muted-foreground' : 'text-primary-foreground/70'}>
                  {bookings.volcanoTrekBooked 
                    ? 'Your guide will contact you with details'
                    : 'Full-day guided trek to Mount Rinjani with stunning views'
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-3xl font-display font-bold ${
                bookings.volcanoTrekBooked ? 'text-foreground' : 'text-primary-foreground'
              }`}>
                $50
              </span>
              <Button 
                onClick={handleBookVolcanoTrek}
                disabled={bookings.volcanoTrekBooked}
                variant={bookings.volcanoTrekBooked ? "default" : "accent"}
                size="xl"
                className={bookings.volcanoTrekBooked 
                  ? 'bg-accent/20 text-accent hover:bg-accent/20 cursor-default' 
                  : 'bg-accent-foreground text-accent hover:bg-accent-foreground/90'
                }
              >
                {bookings.volcanoTrekBooked ? 'Booked ✓' : 'Book Volcano Trek'}
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ModuleC;
