import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, Users, Bike, Plane, Phone, Shirt, 
  CheckCircle2, Clock
} from 'lucide-react';

// Weekly Events Data
const weeklyEvents = [
  {
    id: 1,
    title: 'Tuesday Nomad Dinner',
    date: 'Jan 27',
    icon: Users,
  },
  {
    id: 2,
    title: 'Friday Sunrise Surf',
    date: 'Jan 30',
    icon: Calendar,
  },
];

// Logistics Services
const logisticsServices = [
  { id: 1, label: 'Book Laundry', price: '$5', icon: Shirt },
  { id: 2, label: 'Rent Bike', price: '$10/day', icon: Bike },
  { id: 3, label: 'Airport Transfer', price: '$25', icon: Plane },
];

// Personal Schedule Timeline
const scheduleItems = [
  {
    id: 1,
    title: 'Nomad Dinner RSVP',
    status: 'confirmed',
    time: 'Jan 27, 7:00 PM',
  },
  {
    id: 2,
    title: 'Bike Rental',
    status: 'active',
    time: 'Jan 25 - Jan 28',
  },
];

const ModuleA = () => {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-full text-xs font-medium border bg-primary/10 text-primary border-primary/20">
            Module A
          </div>
        </div>
        <h3 className="text-xl font-display text-foreground">Operations & Community</h3>
      </div>

      {/* Weekly Included Events */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Weekly Included Events
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {weeklyEvents.map((event) => (
            <Card key={event.id} className="card-base card-hover">
              <CardContent className="card-padding">
                <div className="flex items-start gap-4">
                  <div className="icon-container bg-secondary text-primary">
                    <event.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium text-foreground mb-1">{event.title}</h5>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Confirm Attendance
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Logistics */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Logistics
        </h4>
        <div className="flex flex-wrap gap-3">
          {logisticsServices.map((service) => (
            <Button
              key={service.id}
              variant="outline"
              className="flex items-center gap-2"
            >
              <service.icon className="w-4 h-4" />
              {service.label} ({service.price})
            </Button>
          ))}
        </div>
      </div>

      {/* SIM Card */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Connectivity
        </h4>
        <Button variant="outline" className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          Purchase Local SIM ($15)
        </Button>
      </div>

      {/* Personal Schedule Timeline */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Personal Schedule
        </h4>
        <Card className="card-base">
          <CardContent className="card-padding">
            <div className="space-y-4">
              {scheduleItems.map((item, index) => (
                <div key={item.id} className="flex gap-4">
                  {/* Timeline Line */}
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${
                      item.status === 'confirmed' ? 'bg-emerald-500' : 'bg-primary'
                    }`} />
                    {index < scheduleItems.length - 1 && (
                      <div className="w-0.5 flex-1 bg-border mt-1" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-foreground">{item.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        item.status === 'confirmed' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {item.status === 'confirmed' ? 'Confirmed' : 'Active'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ModuleA;
