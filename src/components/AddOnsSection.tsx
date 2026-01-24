import { Monitor, Armchair, Keyboard, Headphones, Car, Sparkles, Smartphone, Utensils } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const workUpgrades = [
  {
    icon: Monitor,
    title: "External monitors",
    description: "Larger screens for focused work",
  },
  {
    icon: Armchair,
    title: "Premium chair upgrades",
    description: "Herman Miller & Steelcase options",
  },
  {
    icon: Keyboard,
    title: "Ergonomic peripherals",
    description: "Keyboards & mice for comfort",
  },
  {
    icon: Headphones,
    title: "Noise-cancelling headphones",
    description: "Focus without distractions",
  },
];

const comfortAddOns = [
  {
    icon: Car,
    title: "Airport pickup & drop",
    description: "Seamless transfers",
  },
  {
    icon: Sparkles,
    title: "Laundry & housekeeping",
    description: "Focus on work, not chores",
  },
  {
    icon: Smartphone,
    title: "Local SIM & connectivity",
    description: "Stay connected from day one",
  },
  {
    icon: Utensils,
    title: "Local experience recs",
    description: "Curated dining & activities",
  },
];

const AddOnsSection = () => {
  return (
    <section className="py-14 md:py-16 px-6 md:px-8 lg:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Work Setup Upgrades - Primary */}
        <ScrollReveal>
          <div className="mb-12">
            <div className="text-center mb-8">
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-2 block">
                Work Setup Upgrades
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                Upgrade your productivity
              </h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {workUpgrades.map((addon, index) => (
                <ScrollReveal key={addon.title} delay={index * 0.08}>
                  <div className="card-base card-hover card-padding h-full border border-primary/10">
                    <div className="icon-container bg-primary/10 mb-3">
                      <addon.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-medium text-foreground text-sm mb-1 leading-tight">
                      {addon.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {addon.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Comfort & Convenience - Secondary */}
        <ScrollReveal delay={0.2}>
          <div>
            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground mb-1">
                Comfort & Convenience
              </p>
              <p className="text-muted-foreground/80 text-xs">
                Available if you want them — not mandatory
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {comfortAddOns.map((addon, index) => (
                <ScrollReveal key={addon.title} delay={0.25 + index * 0.06}>
                  <div className="text-center p-4 rounded-xl bg-muted/50 h-full">
                    <div className="icon-container-sm bg-secondary mx-auto mb-2">
                      <addon.icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <h4 className="text-xs font-medium text-foreground mb-0.5 leading-tight">
                      {addon.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {addon.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AddOnsSection;
