import { Zap, Armchair, Compass, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  {
    icon: Zap,
    title: "Productivity-first workspaces",
    description: "Enterprise-grade WiFi, proper lighting, and distraction-free environments ensure you deliver your best work.",
  },
  {
    icon: Armchair,
    title: "Physical wellbeing",
    description: "Ergonomic chairs and adjustable desks prevent the aches that come from improvised setups.",
  },
  {
    icon: Compass,
    title: "Curated travel experiences",
    description: "Thoughtfully selected destinations and local partnerships help you explore with purpose, not stress.",
  },
  {
    icon: Users,
    title: "Built-in remote work community",
    description: "Connect with like-minded professionals. Network, collaborate, or just grab dinner together.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-14 md:py-18 px-6 md:px-8 lg:px-12 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-sm font-medium text-accent uppercase tracking-wider mb-3 block">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Everything you need to thrive
            </h2>
            <p className="text-lg text-muted-foreground">
              DeskAway is designed around the four pillars of remote work success.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 0.08}>
              <div className="card-base card-hover card-padding-lg h-full">
                <div className="flex items-start gap-4">
                  <div className="icon-container bg-primary/10">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-display font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
