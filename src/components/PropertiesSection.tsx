import PropertyCard from "./PropertyCard";
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
    <section id="properties" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            Featured Properties
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Work-Ready Stays in Lombok
          </h2>
          <p className="text-lg text-muted-foreground">
            Every property is vetted for productivity. High-speed WiFi, ergonomic setups, and quiet workspaces — guaranteed.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
