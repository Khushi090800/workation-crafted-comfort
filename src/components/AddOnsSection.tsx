import { Car, Sparkles, Smartphone, Utensils } from "lucide-react";

const addOns = [
  {
    icon: Car,
    title: "Airport pickup & drop",
    description: "Arrive relaxed with seamless transfers",
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
    title: "Meal partnerships",
    description: "Curated local dining recommendations",
  },
];

const AddOnsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3">
            Designed to remove friction
          </h3>
          <p className="text-muted-foreground">
            Optional add-ons, if you want them
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {addOns.map((addon, index) => (
            <div
              key={addon.title}
              className="text-center p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <addon.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-medium text-foreground mb-2">
                {addon.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {addon.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOnsSection;
