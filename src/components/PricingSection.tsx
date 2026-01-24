import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Weekly Explorer",
    price: "$650",
    period: "per week",
    description: "Perfect for trying out the workation lifestyle",
    features: [
      "7 nights accommodation",
      "Dedicated workspace",
      "100+ Mbps WiFi",
      "Ergonomic chair & desk",
      "Community access",
      "Local orientation",
    ],
    cta: "Book Weekly Stay",
    popular: false,
  },
  {
    name: "Monthly Focus",
    price: "$2,200",
    period: "per month",
    description: "Our most popular option for serious remote work",
    features: [
      "30 nights accommodation",
      "Premium workspace setup",
      "150+ Mbps priority WiFi",
      "Herman Miller chair",
      "Full community membership",
      "Coworking space access",
      "Weekly community events",
      "Airport pickup included",
    ],
    cta: "Book Monthly Stay",
    popular: true,
  },
  {
    name: "Extended Stay",
    price: "$1,800",
    period: "per month",
    description: "Best value for long-term productivity",
    features: [
      "90+ nights commitment",
      "All Monthly Focus perks",
      "Dedicated private office",
      "Laundry service included",
      "Priority property selection",
      "Personal concierge",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees. No surprises. Just everything you need to work and thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 animate-fade-in-up ${
                plan.popular
                  ? "bg-primary text-primary-foreground shadow-elevated scale-105"
                  : "bg-card shadow-soft"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-display font-semibold mb-2 ${
                  plan.popular ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${
                  plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${
                  plan.popular ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-2 ${
                  plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${
                      plan.popular ? "text-primary-foreground" : "text-primary"
                    }`} />
                    <span className={`text-sm ${
                      plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "secondary" : "hero"}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
