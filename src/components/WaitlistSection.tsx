import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, CheckCircle, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const destinations = [
  {
    id: "lombok",
    name: "Lombok",
    country: "Indonesia",
    status: "Available soon",
    descriptor: "Tropical, quiet, productivity-first",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&h=450&fit=crop&q=80",
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    status: "Coming next",
    descriptor: "Creative hub, vibrant community",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=450&fit=crop&q=80",
  },
  {
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    status: "Planned",
    descriptor: "European charm, mild climate",
    image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=600&h=450&fit=crop&q=80",
  },
  {
    id: "medellin",
    name: "Medellín",
    country: "Colombia",
    status: "Planned",
    descriptor: "Spring-like weather, growing scene",
    image: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=600&h=450&fit=crop&q=80",
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
    <section id="waitlist" className="py-16 md:py-20 px-6 md:px-8 lg:px-12 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Early Access
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Where will you work next?
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose your destination and be first to know when we launch.
            </p>
          </div>
        </ScrollReveal>

        {!submitted ? (
          <>
            {/* Destination Cards - Uniform grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {destinations.map((destination, index) => (
                <ScrollReveal key={destination.id} delay={index * 0.08}>
                  <button
                    onClick={() => setSelectedDestination(destination.id)}
                    className={`group relative rounded-xl overflow-hidden text-left w-full transition-shadow duration-300 ${
                      selectedDestination === destination.id
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-secondary shadow-card"
                        : "shadow-soft hover:shadow-card"
                    }`}
                  >
                    {/* Image - Fixed aspect ratio */}
                    <div className="aspect-destination overflow-hidden">
                      <img
                        src={destination.image}
                        alt={`${destination.name}, ${destination.country}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-lg bg-background/20 backdrop-blur-sm text-background">
                          {destination.status}
                        </span>
                        {selectedDestination === destination.id && (
                          <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary-foreground" />
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm sm:text-base font-display font-semibold text-background leading-tight">
                        {destination.name}, {destination.country}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-background/80 mt-0.5 leading-tight">
                        {destination.descriptor}
                      </p>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>

            {/* Waitlist Form */}
            <AnimatePresence>
              {selectedDestination && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  className="max-w-md mx-auto overflow-hidden"
                >
                  <div className="card-base card-padding-lg">
                    <div className="text-center mb-5">
                      <p className="text-sm text-muted-foreground mb-1">Selected destination</p>
                      <p className="font-display font-semibold text-foreground">
                        {selectedDest?.name}, {selectedDest?.country}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1.5">
                          Full Name
                        </label>
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Your full name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                          className="h-11 rounded-xl"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="h-11 rounded-xl"
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
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <ScrollReveal>
            <div className="max-w-md mx-auto card-base card-padding-lg text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                You're on the list!
              </h3>
              <p className="text-muted-foreground">
                We'll notify you when {selectedDest?.name || "your destination"} is ready. Welcome to DeskAway!
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default WaitlistSection;
