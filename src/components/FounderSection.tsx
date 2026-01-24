import ScrollReveal from "./ScrollReveal";

const FounderSection = () => {
  return (
    <section className="py-14 md:py-18 px-6 md:px-8 lg:px-12 bg-muted">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-accent uppercase tracking-wider mb-3 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Built by remote workers, for remote workers
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto bg-card rounded-3xl p-7 md:p-10 shadow-soft text-left">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                "I spent three years as a remote software engineer, chasing the dream of working from beautiful places. The reality? Constant back pain from sitting on wicker chairs, dropped video calls during crucial presentations, and hours wasted searching for cafes with decent WiFi.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                After one particularly painful month in Bali — where a flaky connection cost me a client and a terrible chair cost me a physiotherapy bill — I realized the 'digital nomad dream' was broken. Beautiful destinations weren't built for serious work.
              </p>
              <p className="text-foreground leading-relaxed font-medium">
                So I built DeskAway: curated stays where productivity comes first, without sacrificing the adventure. Because you shouldn't have to choose between loving where you work and doing great work."
              </p>
            </div>

            <div className="flex items-center gap-4 mt-6 pt-5 border-t border-border">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-lg font-bold">
                JK
              </div>
              <div>
                <p className="font-semibold text-foreground">James Kim</p>
                <p className="text-sm text-muted-foreground">Founder & CEO, DeskAway</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FounderSection;
