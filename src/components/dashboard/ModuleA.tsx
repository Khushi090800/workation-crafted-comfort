import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, Users, Bike, Plane, Phone, Shirt, 
  CheckCircle2, Clock, Sparkles, Check
} from 'lucide-react';
import { useDashboardState } from '@/hooks/useDashboardState';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

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
    <section className="space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200/50">
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium text-orange-700">Operations & Community</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
          Crafted Experiences
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Curated gatherings and seamless logistics for your workation journey
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Intentional Gatherings */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Users className="w-5 h-5 text-orange-500" />
            Intentional Gatherings
          </h3>
          <div className="space-y-4">
            {weeklyEvents.map((event) => {
              const isConfirmed = isEventConfirmed(event.id);
              return (
                <Card 
                  key={event.id} 
                  className="bg-white/80 backdrop-blur-sm border-white/50 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center flex-shrink-0">
                        <event.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-lg">{event.title}</h4>
                        <p className="text-gray-500 text-sm">{event.date} • {event.time}</p>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleConfirmEvent(event)}
                      disabled={isConfirmed}
                      className={`w-full mt-5 rounded-2xl h-12 font-medium shadow-lg transition-all duration-300 active:scale-95 ${
                        isConfirmed 
                          ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white shadow-emerald-400/40 cursor-default ring-2 ring-emerald-300 ring-offset-2' 
                          : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-emerald-500/25 hover:shadow-xl hover:-translate-y-0.5'
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
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Right: Logistics */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Bike className="w-5 h-5 text-indigo-500" />
            Seamless Logistics
          </h3>
          <Card className="bg-white/80 backdrop-blur-sm border-white/50 rounded-3xl shadow-xl">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {logisticsServices.map((service) => {
                  const isBooked = isLogisticBooked(service.id);
                  return (
                    <Button
                      key={service.id}
                      variant="outline"
                      onClick={() => handleBookLogistic(service)}
                      disabled={isBooked}
                      className={`h-auto py-4 px-4 flex flex-col items-center gap-3 rounded-2xl transition-all duration-300 active:scale-95 ${
                        isBooked
                          ? 'bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-200 cursor-default ring-1 ring-teal-200'
                          : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-indigo-100 hover:from-blue-100 hover:to-indigo-100 hover:-translate-y-1 hover:shadow-lg'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isBooked
                          ? 'bg-gradient-to-br from-teal-500 to-emerald-500'
                          : 'bg-gradient-to-br from-blue-500 to-indigo-500'
                      }`}>
                        {isBooked ? (
                          <Check className="w-5 h-5 text-white" />
                        ) : (
                          <service.icon className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div className="text-center">
                        <span className={`block font-medium ${isBooked ? 'text-teal-700' : 'text-gray-800'}`}>
                          {isBooked ? 'Booked ✓' : service.label}
                        </span>
                        <span className={`text-sm font-semibold ${isBooked ? 'text-teal-600' : 'text-indigo-600'}`}>
                          {service.price}
                        </span>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Timeline: Your Journey */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Clock className="w-5 h-5 text-orange-500" />
          Your Journey
        </h3>
        <Card className="bg-white/80 backdrop-blur-sm border-white/50 rounded-3xl shadow-xl overflow-hidden">
          <CardContent className="p-6">
            <div className="relative">
              {/* Gradient Timeline Line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-orange-400 via-amber-400 to-orange-300 rounded-full" />
              
              <div className="space-y-6">
                {timelineItems.map((item) => (
                  <div key={item.id} className="flex gap-6 relative animate-fade-in">
                    {/* Golden Dot */}
                    <div className="relative z-10">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        item.status === 'confirmed' 
                          ? 'bg-gradient-to-br from-amber-400 to-orange-500' 
                          : 'bg-gradient-to-br from-orange-400 to-rose-400'
                      } shadow-lg`}>
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-semibold text-gray-900">{item.title}</span>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                          item.status === 'confirmed' 
                            ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700' 
                            : 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700'
                        }`}>
                          {item.status === 'confirmed' ? 'Confirmed' : 'Active'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">{item.time}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ModuleA;
