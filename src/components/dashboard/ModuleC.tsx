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
  Palette, Utensils, Mountain, Compass, Check, Palmtree, Waves, MapPin
} from 'lucide-react';
import { useDashboardState } from '@/hooks/useDashboardState';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import kutaSurfImg from '@/assets/kuta-surf.jpg';

// Activity data
const activitiesData = [
  { id: 1, name: "Kuta Cabana", type: "Work/Eats", activity_type: "Work", best_time: ["Morning", "Afternoon"], duration_tag: "1-3hrs", work_vibe: "Deep Work", distance: 0.4, price: "Free", tagline: "Where WiFi meets waves" },
  { id: 2, name: "Selong Surf", type: "Physical", activity_type: "Physical", best_time: ["Morning"], duration_tag: "3hrs+", work_vibe: "No-WiFi", distance: 4.2, price: "Free", tagline: "Dawn patrol calls" },
  { id: 3, name: "Horizon View", type: "Wellness", activity_type: "Wellness", best_time: ["Evening"], duration_tag: "<1hr", work_vibe: "Social", distance: 1.8, price: "Free", tagline: "Sunset meditation spot" },
  { id: 4, name: "Local Pottery", type: "Art", activity_type: "Art", best_time: ["Afternoon"], duration_tag: "1-3hrs", work_vibe: "No-WiFi", distance: 0.9, price: "Free", tagline: "Get your hands dirty" },
  { id: 5, name: "Street Food Hub", type: "Eats", activity_type: "Eats", best_time: ["Night"], duration_tag: "<1hr", work_vibe: "Social", distance: 0.5, price: "Free", tagline: "Flavors that tell stories" },
  { id: 6, name: "Rinjani Trek", type: "Tour", activity_type: "Physical", best_time: ["Morning"], duration_tag: "3hrs+", work_vibe: "No-WiFi", distance: 45.0, price: "$", tagline: "Above the clouds" },
];

const typeFilters = ['Work', 'Physical', 'Wellness', 'Art', 'Eats'];
const distanceFilters = ['<1km', '1-5km', '>5km'];
const timeFilters = [
  { label: 'Quick Break', value: '<1hr' },
  { label: 'Half Day', value: '1-3hrs' },
  { label: 'Full Adventure', value: '3hrs+' },
];

const typeIcons: Record<string, React.ElementType> = {
  Work: Briefcase,
  Physical: Dumbbell,
  Wellness: Heart,
  Art: Palette,
  Eats: Utensils,
  Tour: Mountain,
};

const triggerVolcanoConfetti = () => {
  const colors = ['#0d9488', '#f59e0b', '#f97316', '#06b6d4'];
  confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors });
};

const ModuleC = () => {
  const [timeFilter, setTimeFilter] = useState<string>('all');
  const [activeTypeFilters, setActiveTypeFilters] = useState<string[]>([]);
  const [activeDistanceFilters, setActiveDistanceFilters] = useState<string[]>([]);
  
  const { bookActivity, isActivityBooked, bookVolcanoTrek, bookings } = useDashboardState();

  const toggleFilter = (filter: string, activeFilters: string[], setFilters: (f: string[]) => void) => {
    setFilters(activeFilters.includes(filter) 
      ? activeFilters.filter(f => f !== filter)
      : [...activeFilters, filter]
    );
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
    toast.success(`${activity.name} is on! 🌴`, { description: activity.tagline });
  };

  const handleBookVolcanoTrek = () => {
    if (bookings.volcanoTrekBooked) return;
    bookVolcanoTrek();
    triggerVolcanoConfetti();
    toast.success('Volcano adventure booked! 🌋', { description: 'Get ready for sunrise above the clouds' });
  };

  return (
    <section className="max-w-5xl mx-auto">
      {/* Section Header */}
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-4">
            <Compass className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Local Secrets</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Leisure & Lombok
          </h2>
          <p className="text-lg text-muted-foreground italic">
            "The locals' favorites, now yours to discover"
          </p>
        </div>
      </ScrollReveal>

      {/* Hero Image */}
      <ScrollReveal delay={0.1}>
        <div className="relative rounded-2xl overflow-hidden mb-10 group">
          <img 
            src={kutaSurfImg} 
            alt="Surfer at Kuta Lombok" 
            className="w-full h-56 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-background mb-2">
              Local Secrets Revealed
            </h3>
            <p className="text-background/80 italic max-w-md">
              "From hidden surf breaks to the best nasi campur—curated by nomads who stayed."
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Filters */}
      <ScrollReveal delay={0.15}>
        <div className="card-base card-padding-lg space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium text-foreground flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              Time:
            </span>
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-44 bg-background border-border rounded-xl">
                <SelectValue placeholder="How long?" />
              </SelectTrigger>
              <SelectContent className="bg-card border border-border rounded-xl shadow-elevated z-50">
                <SelectItem value="all">All adventures</SelectItem>
                {timeFilters.map(tf => (
                  <SelectItem key={tf.value} value={tf.value}>{tf.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-foreground">Vibe:</span>
            {typeFilters.map(filter => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter, activeTypeFilters, setActiveTypeFilters)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTypeFilters.includes(filter) 
                    ? 'bg-accent text-accent-foreground shadow-soft' 
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
            </span>
            {distanceFilters.map(filter => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter, activeDistanceFilters, setActiveDistanceFilters)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeDistanceFilters.includes(filter) 
                    ? 'bg-accent text-accent-foreground shadow-soft' 
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
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
            <ScrollReveal key={activity.id} delay={0.2 + index * 0.05}>
              <motion.div 
                className="card-base card-padding-lg h-full flex flex-col"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isBooked ? 'bg-accent/20' : 'bg-primary/10'
                  }`}>
                    {isBooked ? (
                      <Palmtree className="w-5 h-5 text-accent" />
                    ) : (
                      <IconComponent className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-foreground">{activity.name}</h4>
                    <p className="text-xs text-muted-foreground">{activity.type} • {activity.distance}km</p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground italic mb-3 flex-grow">"{activity.tagline}"</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className={`text-xs rounded-lg px-2 py-0.5 border-0 ${
                    activity.work_vibe === 'Deep Work' ? 'bg-primary/10 text-primary' :
                    activity.work_vibe === 'Social' ? 'bg-accent/10 text-accent' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {activity.work_vibe}
                  </Badge>
                  <Badge className="text-xs rounded-lg px-2 py-0.5 bg-secondary text-muted-foreground border-0">
                    {activity.duration_tag}
                  </Badge>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className={`font-bold ${activity.price === 'Free' ? 'text-primary' : 'text-foreground'}`}>
                    {activity.price}
                  </span>
                  <Button 
                    onClick={() => handleBookActivity(activity)}
                    disabled={isBooked}
                    variant={isBooked ? "default" : (activity.price === 'Free' ? 'heroOutline' : 'hero')}
                    size="sm"
                    className={isBooked ? 'bg-accent/20 text-accent hover:bg-accent/20' : ''}
                  >
                    {isBooked ? '✨ Done!' : activity.price === 'Free' ? 'Explore' : 'Book'}
                  </Button>
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Volcano Trek CTA */}
      <ScrollReveal delay={0.3}>
        <motion.div 
          className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
            bookings.volcanoTrekBooked ? 'bg-accent/10 border border-accent/30' : 'bg-primary'
          }`}
          whileHover={{ scale: 1.01 }}
        >
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  bookings.volcanoTrekBooked ? 'bg-accent/20' : 'bg-primary-foreground/20'
                }`}>
                  {bookings.volcanoTrekBooked ? (
                    <Palmtree className="w-7 h-7 text-accent" />
                  ) : (
                    <Mountain className="w-7 h-7 text-primary-foreground" />
                  )}
                </div>
                <div>
                  <span className={`text-sm font-medium mb-1 block ${
                    bookings.volcanoTrekBooked ? 'text-accent' : 'text-primary-foreground/80'
                  }`}>
                    {bookings.volcanoTrekBooked ? '🌋 Adventure Locked In!' : '✨ Bucket List Alert'}
                  </span>
                  <h4 className={`text-2xl font-display font-bold ${
                    bookings.volcanoTrekBooked ? 'text-foreground' : 'text-primary-foreground'
                  }`}>
                    Rinjani Volcano Trek
                  </h4>
                  <p className={`italic ${bookings.volcanoTrekBooked ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
                    {bookings.volcanoTrekBooked 
                      ? '"Your guide will reach out. Pack your sense of wonder!"'
                      : '"Sunrise above the clouds. Life-changing, they say."'
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
                  size="xl"
                  className={bookings.volcanoTrekBooked 
                    ? 'bg-accent/20 text-accent hover:bg-accent/20' 
                    : 'bg-accent text-accent-foreground hover:bg-accent/90'
                  }
                >
                  {bookings.volcanoTrekBooked ? '🌋 Booked!' : 'Book Adventure'}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </ScrollReveal>
    </section>
  );
};

export default ModuleC;
