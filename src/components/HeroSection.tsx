import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Monitor, Users } from "lucide-react";
import heroImage from "@/assets/hero-lombok.jpg";
import workspaceImage from "@/assets/workspace-interior.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful Lombok beach with palm trees and Mount Rinjani"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-foreground">Now open in Lombok, Indonesia</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Work anywhere.
              <br />
              <span className="text-primary">Stay productive.</span>
              <br />
              Enjoy the journey.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Curated workation stays with guaranteed fast WiFi, ergonomic setups, and a community of remote professionals. Because your productivity shouldn't take a vacation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" className="group">
                Explore Properties
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Join the Waitlist
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-primary" />
                <span>100+ Mbps guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-primary" />
                <span>Ergonomic setups</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>Remote community</span>
              </div>
            </div>
          </div>

          {/* Right Column - Workspace Image */}
          <div className="hidden lg:block">
            <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={workspaceImage}
                  alt="Premium workspace with ocean view"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
