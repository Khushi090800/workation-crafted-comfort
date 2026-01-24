import { Button } from '@/components/ui/button';
import { 
  Calendar, Users, Bike, Plane, Phone, Shirt, 
  CheckCircle2, Clock, Check, Palmtree, Waves
} from 'lucide-react';
import { useDashboardState } from '@/hooks/useDashboardState';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import beachDinnerImg from '@/assets/beach-dinner.jpg';
import scooterFieldsImg from '@/assets/scooter-fields.jpg';

// Weekly Events Data
const weeklyEvents = [
  {
    id: 1,
    title: 'Sunset Feast with the Tribe',
    subtitle: 'Tuesday Nomad Dinner',
    date: 'Jan 27',
    time: '7:00 PM',
    tagline: 'Stories, seafood & new friends under the stars',
  },
  {
    id: 2,
    title: 'Dawn Patrol',
    subtitle: 'Friday Sunrise Surf',
    date: 'Jan 30',
    time: '6:00 AM',
    tagline: 'Catch waves before your first call',
  },
];

// Logistics Services
const logisticsServices = [
  { id: 1, label: 'Laundry', price: '$5', tagline: 'Fresh & folded by sunset', icon: Shirt },
  { id: 2, label: 'Island Wheels', price: '$10/day', tagline: 'Freedom awaits', icon: Bike },
  { id: 3, label: 'Airport Magic', price: '$25', tagline: 'Seamless arrivals', icon: Plane },
  { id: 4, label: 'Stay Connected', price: '$15', tagline: 'Local SIM, sorted', icon: Phone },
];

const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#0d9488', '#f59e0b', '#f97316', '#06b6d4', '#fbbf24'],
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
    toast.success(`You're in! 🌴`, {
      description: `See you ${event.date} at ${event.time}`,
    });
  };

  const handleBookLogistic = (service: typeof logisticsServices[0]) => {
    if (isLogisticBooked(service.id)) return;
    bookLogistic(service.id);
    toast.success(`${service.label} sorted! 🛵`, {
      description: service.tagline,
    });
  };

  const timelineItems = getTimelineItems();

  return (
    <section className="max-w-5xl mx-auto">
      {/* Section Header - Tropical vibe */}
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
            <Palmtree className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Island Life</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Crafted Experiences
          </h2>
          <p className="text-lg text-muted-foreground italic">
            "The best stories start with 'Remember that night in Lombok...'"
          </p>
        </div>
      </ScrollReveal>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        {/* Left: Events with Beach Dinner Background */}
        <ScrollReveal delay={0.1}>
          <div className="relative rounded-2xl overflow-hidden group">
            {/* Background Image */}
            <img 
              src={beachDinnerImg} 
              alt="Beach dinner setting" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/30" />
            
            {/* Content */}
            <div className="relative z-10 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-background">Sunset Gatherings</h3>
                  <p className="text-sm text-background/70">Where nomads become family</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {weeklyEvents.map((event) => {
                  const isConfirmed = isEventConfirmed(event.id);
                  return (
                    <motion.div 
                      key={event.id}
                      className="bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-elevated"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-display font-semibold text-foreground">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">{event.date} • {event.time}</p>
                        </div>
                        {isConfirmed && (
                          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                            <Palmtree className="w-4 h-4 text-accent" />
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground italic mb-3">"{event.tagline}"</p>
                      <Button 
                        onClick={() => handleConfirmEvent(event)}
                        disabled={isConfirmed}
                        variant={isConfirmed ? "default" : "hero"}
                        size="default"
                        className={`w-full ${isConfirmed ? 'bg-accent/20 text-accent hover:bg-accent/20' : ''}`}
                      >
                        {isConfirmed ? (
                          <>
                            <Palmtree className="w-4 h-4 mr-2" />
                            I'm in! See you there ✨
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            Count me in
                          </>
                        )}
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Logistics with Scooter Background */}
        <ScrollReveal delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden group">
            {/* Background Image */}
            <img 
              src={scooterFieldsImg} 
              alt="Scooter on rice fields" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/30" />
            
            {/* Content */}
            <div className="relative z-10 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <Bike className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-background">Island Essentials</h3>
                  <p className="text-sm text-background/70">Life, simplified</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {logisticsServices.map((service) => {
                  const isBooked = isLogisticBooked(service.id);
                  return (
                    <motion.button
                      key={service.id}
                      onClick={() => handleBookLogistic(service)}
                      disabled={isBooked}
                      className={`bg-background/90 backdrop-blur-sm rounded-xl p-4 text-left transition-all ${
                        isBooked ? 'opacity-90' : 'hover:bg-background hover:shadow-elevated'
                      }`}
                      whileHover={{ scale: isBooked ? 1 : 1.03 }}
                      whileTap={{ scale: isBooked ? 1 : 0.98 }}
                    >
                      <div className={`w-10 h-10 rounded-xl mb-3 flex items-center justify-center ${
                        isBooked ? 'bg-accent/20' : 'bg-primary'
                      }`}>
                        {isBooked ? (
                          <Palmtree className="w-5 h-5 text-accent" />
                        ) : (
                          <service.icon className="w-5 h-5 text-primary-foreground" />
                        )}
                      </div>
                      <p className={`font-medium text-sm ${isBooked ? 'text-accent' : 'text-foreground'}`}>
                        {isBooked ? 'Sorted! ✨' : service.label}
                      </p>
                      <p className="text-xs text-muted-foreground">{service.price}</p>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Timeline: Your Journey */}
      <ScrollReveal delay={0.3}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Waves className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground">Your Island Story</h3>
              <p className="text-sm text-muted-foreground italic">"Every adventure starts with a yes"</p>
            </div>
          </div>
          
          <div className="card-base card-padding-lg relative overflow-hidden">
            {/* Decorative palm shadow */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <Palmtree className="w-full h-full text-foreground" />
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/30 rounded-full" />
              
              <div className="space-y-5">
                {timelineItems.map((item) => (
                  <div key={item.id} className="flex gap-5 relative animate-fade-in">
                    <div className="relative z-10">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-lg ${
                        item.status === 'confirmed' 
                          ? 'bg-accent' 
                          : 'bg-primary'
                      }`}>
                        <Palmtree className="w-3 h-3 text-background" />
                      </div>
                    </div>
                    
                    <div className="flex-1 pb-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-display font-semibold text-foreground">{item.title}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-lg font-medium ${
                          item.status === 'confirmed' 
                            ? 'bg-accent/10 text-accent' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {item.status === 'confirmed' ? '✨ Confirmed' : '🌴 Active'}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                      <p className="text-sm text-muted-foreground italic">"{item.description}"</p>
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
