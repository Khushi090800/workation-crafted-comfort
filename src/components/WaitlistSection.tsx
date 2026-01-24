import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, CheckCircle, Check } from "lucide-react";

const destinations = [
  {
    id: "lombok",
    name: "Lombok",
    country: "Indonesia",
    status: "Available soon",
    descriptor: "Tropical, quiet, productivity-first",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=300&fit=crop",
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    status: "Coming next",
    descriptor: "Creative hub, vibrant community",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop",
  },
  {
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    status: "Planned",
    descriptor: "European charm, mild climate",
    image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=400&h=300&fit=crop",
  },
  {
    id: "medellin",
    name: "Medellín",
    country: "Colombia",
    status: "Planned",
    descriptor: "Spring-like weather, growing scene",
    image: "https://images.unsplash.com/photo-1599347431968-8e8b7d2f8d48?w=400&h=300&fit=crop",
  },
];

const WaitlistSection = () => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [wantsUpdates, setWantsUpdates] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && fullName && selectedDestination) {
      setSubmitted(true);
      setFullName("");
      setEmail("");
      setSelectedDestination(null);
    }
  };

  const selectedDest = destinations.find(d => d.id === selectedDestination);

  return (
    <section id="waitlist" className="section-padding bg-secondary">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Beta Testing
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Where will you work next?
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose your destination and be first to know when we launch.
          </p>
        </div>

        {!submitted ? (
          <>
            {/* Destination Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {destinations.map((destination) => (
                <button
                  key={destination.id}
                  onClick={() => setSelectedDestination(destination.id)}
                  className={`group relative rounded-2xl overflow-hidden text-left transition-all duration-300 ${
                    selectedDestination === destination.id
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-secondary scale-[1.02]"
                      : "hover:scale-[1.01]"
                  }`}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={destination.image}
                      alt={`${destination.name}, ${destination.country}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-background/20 backdrop-blur-sm text-background">
                        {destination.status}
                      </span>
                      {selectedDestination === destination.id && (
                        <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-display font-semibold text-background mb-1">
                      {destination.name}, {destination.country}
                    </h3>
                    <p className="text-sm text-background/80">
                      {destination.descriptor}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Waitlist Form - Appears after selection */}
            {selectedDestination && (
              <div className="max-w-lg mx-auto animate-fade-in-up">
                <div className="bg-card rounded-3xl p-8 shadow-soft">
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Selected destination</p>
                    <p className="font-display font-semibold text-foreground">
                      {selectedDest?.name}, {selectedDest?.country}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="updates"
                        checked={wantsUpdates}
                        onCheckedChange={(checked) => setWantsUpdates(checked as boolean)}
                        className="mt-0.5"
                      />
                      <label htmlFor="updates" className="text-sm text-muted-foreground cursor-pointer">
                        Keep me updated on new destinations and community news
                      </label>
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="xl"
                      className="w-full group"
                    >
                      Join the Waitlist
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      No spam. Just updates on your selected destination.
                    </p>
                  </form>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="max-w-md mx-auto bg-card rounded-3xl p-10 shadow-soft text-center">
            <CheckCircle className="w-14 h-14 text-primary mx-auto mb-5" />
            <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
              You're on the list!
            </h3>
            <p className="text-muted-foreground">
              We'll notify you when {selectedDest?.name || "your destination"} is ready. Welcome to DeskAway!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WaitlistSection;
