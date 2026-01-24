import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
  MapPin, Clock, Briefcase, Dumbbell, Heart, 
  Palette, Utensils, Mountain, Compass, Sparkles
} from 'lucide-react';

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

const typeColors: Record<string, string> = {
  Work: 'from-blue-500 to-indigo-500',
  Physical: 'from-emerald-500 to-teal-500',
  Wellness: 'from-rose-500 to-pink-500',
  Art: 'from-violet-500 to-purple-500',
  Eats: 'from-orange-500 to-amber-500',
  Tour: 'from-cyan-500 to-blue-500',
};

const ModuleC = () => {
  const [timeFilter, setTimeFilter] = useState<string>('all');
  const [activeTypeFilters, setActiveTypeFilters] = useState<string[]>([]);
  const [activeDistanceFilters, setActiveDistanceFilters] = useState<string[]>([]);

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

  return (
    <section className="space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-100 to-orange-100 border border-rose-200/50">
          <Compass className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium text-orange-700">Module C</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
          Leisure & Discovery
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore curated experiences that blend adventure with tranquility
        </p>
      </div>

      {/* Filters */}
      <Card className="bg-white/80 backdrop-blur-sm border-white/50 rounded-3xl shadow-xl">
        <CardContent className="p-6 space-y-5">
          {/* Time Dropdown */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Time Available:</span>
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-40 bg-white border-gray-200 rounded-xl">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-xl z-50">
                <SelectItem value="all">All Durations</SelectItem>
                {timeFilters.map(tf => (
                  <SelectItem key={tf.value} value={tf.value}>{tf.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Type Chips */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Type:</span>
            {typeFilters.map(filter => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter, activeTypeFilters, setActiveTypeFilters)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTypeFilters.includes(filter) 
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Distance Chips */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Distance:</span>
            {distanceFilters.map(filter => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter, activeDistanceFilters, setActiveDistanceFilters)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeDistanceFilters.includes(filter) 
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activities Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.map(activity => {
          const IconComponent = typeIcons[activity.activity_type] || Compass;
          const gradientColor = typeColors[activity.activity_type] || 'from-gray-500 to-gray-600';
          
          return (
            <Card 
              key={activity.id} 
              className="bg-white/80 backdrop-blur-sm border-white/50 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradientColor} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-lg">{activity.name}</h4>
                    <p className="text-sm text-gray-500">{activity.type} • {activity.distance}km</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  <Badge className={`text-xs rounded-full px-3 py-1 ${
                    activity.work_vibe === 'Deep Work' ? 'bg-emerald-100 text-emerald-700' :
                    activity.work_vibe === 'Social' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {activity.work_vibe}
                  </Badge>
                  <Badge className="text-xs rounded-full px-3 py-1 bg-gray-100 text-gray-600">
                    <Clock className="w-3 h-3 mr-1" />
                    {activity.duration_tag}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`font-bold ${
                    activity.price === 'Free' ? 'text-emerald-600' : 'text-gray-900'
                  }`}>
                    {activity.price}
                  </span>
                  <Button 
                    variant={activity.price === 'Free' ? 'outline' : 'default'}
                    className={activity.price === 'Free' 
                      ? 'rounded-xl border-orange-200 text-orange-600 hover:bg-orange-50' 
                      : 'rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/25'
                    }
                  >
                    {activity.price === 'Free' ? 'Explore' : 'Book Now'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Marketplace Hero - Volcano Trek */}
      <Card className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden">
        <CardContent className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span className="text-sm text-purple-200 font-medium">Premium Experience</span>
                </div>
                <h4 className="text-2xl font-display font-bold text-white">Volcano Trek Adventure</h4>
                <p className="text-purple-200">Full-day guided trek to Mount Rinjani with stunning views</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-white">$50</span>
              <Button className="bg-white text-purple-600 hover:bg-purple-50 rounded-xl px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1">
                Book Volcano Trek
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ModuleC;
