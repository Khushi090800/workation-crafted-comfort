import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FinalWaitlistSection = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [wantsUpdates, setWantsUpdates] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && fullName) {
      setSubmitted(true);
      setFullName("");
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-20 px-6 md:px-8 lg:px-12 bg-secondary">
      <div className="max-w-xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Where will you work next?
            </h2>
            <p className="text-muted-foreground">
              Join our waitlist to get early access to new locations, properties, and work-ready stays as we expand globally.
            </p>
          </div>
        </ScrollReveal>

        {!submitted ? (
          <ScrollReveal delay={0.1}>
            <div className="bg-card rounded-3xl p-8 shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="finalFullName" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="finalFullName"
                    type="text"
                    placeholder="Your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="finalEmail" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="finalEmail"
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
                    id="finalUpdates"
                    checked={wantsUpdates}
                    onCheckedChange={(checked) => setWantsUpdates(checked as boolean)}
                    className="mt-0.5"
                  />
                  <label htmlFor="finalUpdates" className="text-sm text-muted-foreground cursor-pointer">
                    Receive updates about new destinations, properties, and workation tips
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
                  No spam. Just updates when we launch in new locations.
                </p>
              </form>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            <div className="bg-card rounded-3xl p-10 shadow-soft text-center">
              <CheckCircle className="w-14 h-14 text-primary mx-auto mb-5" />
              <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
                You're on the list!
              </h3>
              <p className="text-muted-foreground">
                We'll notify you as we expand to new destinations. Welcome to DeskAway!
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default FinalWaitlistSection;
