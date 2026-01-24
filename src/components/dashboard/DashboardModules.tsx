import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, MessageSquare, Calendar, Headphones,
  Monitor, Wifi, FileText, Video,
  MapPin, Coffee, Compass, Heart
} from 'lucide-react';

interface ModuleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ModuleCard = ({ icon, title, description }: ModuleCardProps) => (
  <Card className="card-base card-hover h-full">
    <CardContent className="card-padding flex items-start gap-4">
      <div className="icon-container bg-secondary text-primary flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <h4 className="font-medium text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </CardContent>
  </Card>
);

interface ModuleSectionProps {
  title: string;
  subtitle: string;
  accentColor: 'primary' | 'accent' | 'secondary';
  items: { icon: React.ReactNode; title: string; description: string }[];
}

const ModuleSection = ({ title, subtitle, accentColor, items }: ModuleSectionProps) => {
  const accentStyles = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    accent: 'bg-accent/10 text-accent border-accent/20',
    secondary: 'bg-secondary text-foreground border-border',
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${accentStyles[accentColor]}`}>
          {subtitle}
        </div>
      </div>
      <h3 className="text-xl font-display text-foreground">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <ModuleCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const DashboardModules = () => {
  const moduleA = {
    title: 'Operations & Community',
    subtitle: 'Module A',
    accentColor: 'primary' as const,
    items: [
      {
        icon: <Users className="w-5 h-5" />,
        title: 'Community Hub',
        description: 'Connect with fellow remote workers and join local events.',
      },
      {
        icon: <MessageSquare className="w-5 h-5" />,
        title: 'Support Chat',
        description: '24/7 assistance for any questions or issues during your stay.',
      },
      {
        icon: <Calendar className="w-5 h-5" />,
        title: 'Booking Manager',
        description: 'View and manage your upcoming reservations and stays.',
      },
      {
        icon: <Headphones className="w-5 h-5" />,
        title: 'Concierge Services',
        description: 'Personal assistance for local arrangements and requests.',
      },
    ],
  };

  const moduleB = {
    title: 'Workplace Suite',
    subtitle: 'Module B',
    accentColor: 'accent' as const,
    items: [
      {
        icon: <Monitor className="w-5 h-5" />,
        title: 'Workspace Setup',
        description: 'Request equipment upgrades and customize your work environment.',
      },
      {
        icon: <Wifi className="w-5 h-5" />,
        title: 'Connectivity Status',
        description: 'Monitor internet speed and access backup connectivity options.',
      },
      {
        icon: <FileText className="w-5 h-5" />,
        title: 'Focus Tools',
        description: 'Access productivity templates, timers, and focus modes.',
      },
      {
        icon: <Video className="w-5 h-5" />,
        title: 'Meeting Rooms',
        description: 'Book private spaces for video calls and focused work sessions.',
      },
    ],
  };

  const moduleC = {
    title: 'Leisure & Discovery',
    subtitle: 'Module C',
    accentColor: 'secondary' as const,
    items: [
      {
        icon: <MapPin className="w-5 h-5" />,
        title: 'Local Guide',
        description: 'Curated recommendations for restaurants, cafés, and attractions.',
      },
      {
        icon: <Coffee className="w-5 h-5" />,
        title: 'Nearby Cafés',
        description: 'Work-friendly spots with great coffee and reliable WiFi.',
      },
      {
        icon: <Compass className="w-5 h-5" />,
        title: 'Experiences',
        description: 'Discover local tours, activities, and cultural experiences.',
      },
      {
        icon: <Heart className="w-5 h-5" />,
        title: 'Wellness',
        description: 'Find gyms, yoga studios, and wellness centers nearby.',
      },
    ],
  };

  return (
    <div className="space-y-10">
      <ModuleSection {...moduleA} />
      <ModuleSection {...moduleB} />
      <ModuleSection {...moduleC} />
    </div>
  );
};

export default DashboardModules;
