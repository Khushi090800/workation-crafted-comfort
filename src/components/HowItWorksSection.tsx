import { Search, Plane, Plug, Briefcase, Compass } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse & Book",
    description: "Explore our curated properties with transparent work setup details and pricing.",
  },
  {
    icon: Plane,
    title: "Arrive Relaxed",
    description: "We handle the logistics. Just show up with your laptop and start working.",
  },
  {
    icon: Plug,
    title: "Plug In & Work",
    description: "Everything's ready — fast WiFi, ergonomic chair, proper desk. Zero setup time.",
  },
  {
    icon: Briefcase,
    title: "Stay Productive",
    description: "Take calls with confidence, meet deadlines, and feel great doing it.",
  },
  {
    icon: Compass,
    title: "Explore & Enjoy",
    description: "After work hours, discover paradise with our community.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            From booking to bliss in 5 simple steps
          </h2>
          <p className="text-lg text-muted-foreground">
            We've eliminated the friction so you can focus on what matters.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="relative z-10 mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
