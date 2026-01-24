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
  Palette, Utensils, Mountain, Compass
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
const workVibeFilters = ['Deep Work', 'Social', 'No-WiFi'];
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

const ModuleC = () => {
  const [timeFilter, setTimeFilter] = useState<string>('all');
  const [activeTypeFilters, setActiveTypeFilters] = useState<string[]>([]);
  const [activeVibeFilters, setActiveVibeFilters] = useState<string[]>([]);
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
      // Time filter
      if (timeFilter !== 'all' && activity.duration_tag !== timeFilter) {
        return false;
      }

      // Type filter
      if (activeTypeFilters.length > 0 && !activeTypeFilters.includes(activity.activity_type)) {
        return false;
      }

      // Work vibe filter
      if (activeVibeFilters.length > 0 && !activeVibeFilters.includes(activity.work_vibe)) {
        return false;
      }

      // Distance filter
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
  }, [timeFilter, activeTypeFilters, activeVibeFilters, activeDistanceFilters]);

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-full text-xs font-medium border bg-secondary text-foreground border-border">
            Module C
          </div>
        </div>
        <h3 className="text-xl font-display text-foreground">Leisure & Discovery</h3>
      </div>

      {/* Time Filter Dropdown */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Time Available
        </h4>
        <Select value={timeFilter} onValueChange={setTimeFilter}>
          <SelectTrigger className="w-48 bg-card">
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent className="bg-card border border-border z-50">
            <SelectItem value="all">All Durations</SelectItem>
            {timeFilters.map(tf => (
              <SelectItem key={tf.value} value={tf.value}>{tf.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Filter Chips */}
      <div className="space-y-4">
        {/* Type Filters */}
        <div className="space-y-2">
          <span className="text-xs font-medium text-muted-foreground">Type</span>
          <div className="flex flex-wrap gap-2">
            {typeFilters.map(filter => (
              <Badge
                key={filter}
                variant={activeTypeFilters.includes(filter) ? 'default' : 'outline'}
                className={`cursor-pointer transition-colors ${
                  activeTypeFilters.includes(filter) 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-secondary'
                }`}
                onClick={() => toggleFilter(filter, activeTypeFilters, setActiveTypeFilters)}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>

        {/* Work Vibe Filters */}
        <div className="space-y-2">
          <span className="text-xs font-medium text-muted-foreground">Work Suitability</span>
          <div className="flex flex-wrap gap-2">
            {workVibeFilters.map(filter => (
              <Badge
                key={filter}
                variant={activeVibeFilters.includes(filter) ? 'default' : 'outline'}
                className={`cursor-pointer transition-colors ${
                  activeVibeFilters.includes(filter) 
                    ? 'bg-accent text-accent-foreground' 
                    : 'hover:bg-secondary'
                }`}
                onClick={() => toggleFilter(filter, activeVibeFilters, setActiveVibeFilters)}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>

        {/* Distance Filters */}
        <div className="space-y-2">
          <span className="text-xs font-medium text-muted-foreground">Distance</span>
          <div className="flex flex-wrap gap-2">
            {distanceFilters.map(filter => (
              <Badge
                key={filter}
                variant={activeDistanceFilters.includes(filter) ? 'default' : 'outline'}
                className={`cursor-pointer transition-colors ${
                  activeDistanceFilters.includes(filter) 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-secondary'
                }`}
                onClick={() => toggleFilter(filter, activeDistanceFilters, setActiveDistanceFilters)}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Nearby Activities ({filteredActivities.length})
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredActivities.map(activity => {
            const IconComponent = typeIcons[activity.activity_type] || Compass;
            return (
              <Card key={activity.id} className="card-base card-hover">
                <CardContent className="card-padding">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="icon-container-sm bg-secondary text-primary">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-medium text-foreground">{activity.name}</h5>
                      <p className="text-xs text-muted-foreground">{activity.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      <MapPin className="w-3 h-3 mr-1" />
                      {activity.distance}km
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {activity.duration_tag}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        activity.work_vibe === 'Deep Work' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                        activity.work_vibe === 'Social' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        'bg-orange-50 text-orange-700 border-orange-200'
                      }`}
                    >
                      {activity.work_vibe}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${
                      activity.price === 'Free' ? 'text-emerald-600' : 'text-foreground'
                    }`}>
                      {activity.price}
                    </span>
                    {activity.price !== 'Free' && (
                      <Button size="sm" variant="outline">
                        Book Now
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Marketplace - Special Tour */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Featured Experience
        </h4>
        <Card className="card-elevated overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-video md:aspect-auto relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=600&h=400&fit=crop"
                alt="Mount Rinjani Volcano Trek"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="card-padding-lg flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <Mountain className="w-5 h-5 text-accent" />
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                  Premium Experience
                </Badge>
              </div>
              <h5 className="text-lg font-display font-semibold text-foreground mb-2">
                Volcano Trek
              </h5>
              <p className="text-sm text-muted-foreground mb-4">
                Full-day guided trek to Mount Rinjani. Includes transport, guide, and lunch.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-foreground">$50</span>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Book Experience
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ModuleC;
