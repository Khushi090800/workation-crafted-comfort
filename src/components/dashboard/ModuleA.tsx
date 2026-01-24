import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, Users, Bike, Plane, Phone, Shirt, 
  CheckCircle2, Clock, Check
} from 'lucide-react';
import { useDashboardState } from '@/hooks/useDashboardState';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';
import ScrollReveal from '@/components/ScrollReveal';

// Weekly Events Data
const weeklyEvents = [
  {
    id: 1,
    title: 'Tuesday Nomad Dinner',
    date: 'Jan 27',
    time: '7:00 PM',
    icon: Users,
  },
  {
    id: 2,
    title: 'Friday Sunrise Surf',
    date: 'Jan 30',
    time: '6:00 AM',
    icon: Calendar,
  },
];

// Logistics Services
const logisticsServices = [
  { id: 1, label: 'Laundry', price: '$5', icon: Shirt },
  { id: 2, label: 'Bike Rental', price: '$10/day', icon: Bike },
  { id: 3, label: 'Airport Transfer', price: '$25', icon: Plane },
  { id: 4, label: 'Local SIM', price: '$15', icon: Phone },
];

const triggerConfetti = () => {
  confetti({
    particleCount: 80,
    spread: 60,
    origin: { y: 0.7 },
    colors: ['#10b981', '#34d399', '#6ee7b7', '#fbbf24', '#f59e0b'],
  });
};

const ModuleA = () => {
  const { 
    confirmEvent, 
    bookLogistic, 
    isEventConfirmed, 
    isLogisticBooked,
    getTimelineItems,
  } = useDashboardState();

  const handleConfirmEvent = (event: typeof weeklyEvents[0]) => {
    if (isEventConfirmed(event.id)) return;
    confirmEvent(event.id);
    triggerConfetti();
    toast.success(`Attendance confirmed for ${event.title}!`, {
      description: `See you on ${event.date} at ${event.time}`,
    });
  };

  const handleBookLogistic = (service: typeof logisticsServices[0]) => {
    if (isLogisticBooked(service.id)) return;
    bookLogistic(service.id);
    toast.success(`${service.label} booked successfully!`, {
      description: `Charge: ${service.price}`,
    });
  };

  const timelineItems = getTimelineItems();

  return (
    <section className="max-w-5xl mx-auto">
      {/* Section Header - Landing style */}
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-3 block">
            Operations & Community
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Crafted Experiences
          </h2>
          <p className="text-lg text-muted-foreground">
            Curated gatherings and seamless logistics for your workation journey.
          </p>
        </div>
      </ScrollReveal>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-4 mb-10">
        {/* Left: Intentional Gatherings */}
        <div className="space-y-4">
          <ScrollReveal delay={0.1}>
            <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2 mb-4">
              <div className="icon-container-sm bg-primary/10">
                <Users className="w-4 h-4 text-primary" />
              </div>
              Intentional Gatherings
            </h3>
          </ScrollReveal>
          <div className="space-y-4">
            {weeklyEvents.map((event, index) => {
              const isConfirmed = isEventConfirmed(event.id);
              return (
                <ScrollReveal key={event.id} delay={0.1 + index * 0.08}>
                  <div className="card-base card-hover card-padding-lg">
                    <div className="flex items-start gap-4">
                      <div className="icon-container bg-primary/10">
                        <event.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-semibold text-foreground text-base">{event.title}</h4>
                        <p className="text-muted-foreground text-sm">{event.date} • {event.time}</p>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleConfirmEvent(event)}
                      disabled={isConfirmed}
                      variant={isConfirmed ? "default" : "hero"}
                      size="lg"
                      className={`w-full mt-5 ${
                        isConfirmed 
                          ? 'bg-accent/20 text-accent hover:bg-accent/20 cursor-default' 
                          : ''
                      }`}
                    >
                      {isConfirmed ? (
                        <>
                          <Check className="w-5 h-5 mr-2" />
                          Attending ✓
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-5 h-5 mr-2" />
                          Confirm Attendance
                        </>
                      )}
                    </Button>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Right: Logistics */}
        <div className="space-y-4">
          <ScrollReveal delay={0.2}>
            <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2 mb-4">
              <div className="icon-container-sm bg-primary/10">
                <Bike className="w-4 h-4 text-primary" />
              </div>
              Seamless Logistics
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="card-base card-padding-lg">
              <div className="grid grid-cols-2 gap-3">
                {logisticsServices.map((service) => {
                  const isBooked = isLogisticBooked(service.id);
                  return (
                    <Button
                      key={service.id}
                      variant="outline"
                      onClick={() => handleBookLogistic(service)}
                      disabled={isBooked}
                      className={`h-auto py-4 px-4 flex flex-col items-center gap-3 rounded-xl transition-all duration-200 ${
                        isBooked
                          ? 'bg-accent/10 border-accent/30 cursor-default'
                          : 'bg-secondary border-border hover:bg-secondary/80 hover:-translate-y-0.5 hover:shadow-card'
                      }`}
                    >
                      <div className={`icon-container-sm ${
                        isBooked ? 'bg-accent/20' : 'bg-primary'
                      }`}>
                        {isBooked ? (
                          <Check className="w-4 h-4 text-accent" />
                        ) : (
                          <service.icon className="w-4 h-4 text-primary-foreground" />
                        )}
                      </div>
                      <div className="text-center">
                        <span className={`block font-medium text-sm ${isBooked ? 'text-accent' : 'text-foreground'}`}>
                          {isBooked ? 'Booked ✓' : service.label}
                        </span>
                        <span className={`text-xs font-semibold ${isBooked ? 'text-accent/70' : 'text-primary'}`}>
                          {service.price}
                        </span>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Timeline: Your Journey */}
      <ScrollReveal delay={0.3}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-base font-display font-semibold text-foreground flex items-center gap-2 mb-4">
            <div className="icon-container-sm bg-accent/10">
              <Clock className="w-4 h-4 text-accent" />
            </div>
            Your Journey
          </h3>
          <div className="card-base card-padding-lg">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-accent/30 rounded-full" />
              
              <div className="space-y-5">
                {timelineItems.map((item) => (
                  <div key={item.id} className="flex gap-5 relative animate-fade-in">
                    {/* Dot */}
                    <div className="relative z-10">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        item.status === 'confirmed' 
                          ? 'bg-accent' 
                          : 'bg-primary'
                      }`}>
                        <div className="w-2 h-2 bg-background rounded-full" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-display font-semibold text-foreground">{item.title}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-lg font-medium ${
                          item.status === 'confirmed' 
                            ? 'bg-accent/10 text-accent' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {item.status === 'confirmed' ? 'Confirmed' : 'Active'}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-0.5">{item.time}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ModuleA;
