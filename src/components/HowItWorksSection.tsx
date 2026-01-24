import { MapPin, Calendar, Briefcase, Coffee, Compass } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Choose your destination",
    description: "Browse our curated locations, each optimized for productivity and adventure.",
  },
  {
    icon: Calendar,
    title: "Book a productivity-ready stay",
    description: "Select your dates and property. Everything work-related is already taken care of.",
  },
  {
    icon: Briefcase,
    title: "Arrive to a fully set-up workspace",
    description: "Fast WiFi, ergonomic chair, proper desk. Just open your laptop and start.",
  },
  {
    icon: Coffee,
    title: "Work comfortably, without friction",
    description: "Take calls with confidence. Meet deadlines. Feel great doing it.",
  },
  {
    icon: Compass,
    title: "Explore and connect beyond work hours",
    description: "Discover paradise with the community. Balance achieved.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            From booking to bliss — in 5 simple steps
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-16">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative flex items-start gap-8 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Icon with Number */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
