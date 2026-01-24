import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, MapPin, CheckCircle } from "lucide-react";

const upcomingLocations = [
  "Chiang Mai, Thailand",
  "Lisbon, Portugal",
  "Medellín, Colombia",
  "Cape Town, South Africa",
];

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-tight relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Beta Testing
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Be first in new locations
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            We're expanding! Join the waitlist to get early access, founding member discounts, and input on which locations we open next.
          </p>

          {/* Upcoming Locations */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {upcomingLocations.map((location) => (
              <span
                key={location}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm"
              >
                <MapPin className="w-4 h-4" />
                {location}
              </span>
            ))}
          </div>

          {/* Email Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-14 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-xl"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  size="xl"
                  className="group"
                >
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/60 mt-4">
                No spam. Just updates on new locations and exclusive early access.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-primary-foreground/10 rounded-2xl p-8">
              <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold text-primary-foreground mb-2">
                You're on the list!
              </h3>
              <p className="text-primary-foreground/80">
                We'll notify you when new locations open. Welcome to DeskAway!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
