import { MapPin, Calendar, Briefcase, Coffee, Compass } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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
    <section id="how-it-works" className="py-14 md:py-18 px-6 md:px-8 lg:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-accent uppercase tracking-wider mb-3 block">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              From booking to bliss — in 5 simple steps
            </h2>
          </div>
        </ScrollReveal>

        {/* Vertical Timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-10">
              {steps.map((step, index) => (
                <ScrollReveal key={step.title} delay={index * 0.1}>
                  <div className="relative flex items-start gap-6">
                    {/* Icon with Number */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
