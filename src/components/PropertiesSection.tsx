import PropertyCard from "./PropertyCard";
import ScrollReveal from "./ScrollReveal";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1,
    title: "Oceanview Villa",
    location: "Senggigi, Lombok",
    wifiSpeed: "150 Mbps",
    deskType: "Standing Desk",
    chairType: "Herman Miller",
    quietRating: 5,
    priceFrom: "$890",
  },
  {
    image: property2,
    title: "Garden Studio",
    location: "Kuta, Lombok",
    wifiSpeed: "120 Mbps",
    deskType: "L-Shaped Desk",
    chairType: "Ergonomic Pro",
    quietRating: 4,
    priceFrom: "$650",
  },
  {
    image: property3,
    title: "Co-Living Hub",
    location: "Mataram, Lombok",
    wifiSpeed: "200 Mbps",
    deskType: "Hot Desk",
    chairType: "Steelcase Leap",
    quietRating: 4,
    priceFrom: "$420",
  },
];

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-14 md:py-18 px-6 md:px-8 lg:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-sm font-medium text-accent uppercase tracking-wider mb-3 block">
              Featured Properties
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Work-Ready Stays in Lombok
            </h2>
            <p className="text-lg text-muted-foreground">
              Every property is vetted for productivity. High-speed WiFi, ergonomic setups, and quiet workspaces — guaranteed.
            </p>
          </div>
        </ScrollReveal>

        {/* Properties Grid - Uniform cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property, index) => (
            <ScrollReveal key={property.title} delay={index * 0.08}>
              <PropertyCard {...property} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
