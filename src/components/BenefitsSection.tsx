import { Zap, Armchair, Compass, Users } from "lucide-react";

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
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            Benefits
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Everything you need to thrive
          </h2>
          <p className="text-lg text-muted-foreground">
            DeskAway is designed around the four pillars of remote work success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-card rounded-3xl p-8 shadow-soft card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
