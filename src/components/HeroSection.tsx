import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Monitor, Users } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import heroImage from "@/assets/hero-lombok.jpg";
import workspaceImage from "@/assets/workspace-interior.jpg";

const HeroSection = () => {
  const handleExploreClick = () => {
    const propertiesSection = document.getElementById("properties");
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWaitlistClick = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background Video with Image Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImage}
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column - Text */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-foreground">Now open in Lombok, Indonesia</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-5"
            >
              Work anywhere.
              <br />
              <span className="text-primary">Stay productive.</span>
              <br />
              Enjoy the journey.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-7 max-w-lg"
            >
              Curated workation stays with guaranteed fast WiFi, ergonomic setups, and a community of remote professionals. Because your productivity shouldn't take a vacation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <Button 
                variant="hero" 
                size="xl" 
                onClick={handleExploreClick}
                className="group transition-all duration-300 active:scale-95"
              >
                Explore Properties
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl"
                onClick={handleWaitlistClick}
                className="transition-all duration-300 active:scale-95"
              >
                Join the Waitlist
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-wrap gap-5 text-sm text-muted-foreground"
            >
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
            </motion.div>
          </div>

          {/* Right Column - Workspace Image */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-1 border border-white/20 shadow-2xl">
                <img
                  src={workspaceImage}
                  alt="Premium workspace with ocean view"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
