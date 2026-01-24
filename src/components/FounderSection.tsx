const FounderSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            Built by remote workers, for remote workers
          </h2>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft text-left">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                "I spent three years as a remote software engineer, chasing the dream of working from beautiful places. The reality? Constant back pain from sitting on wicker chairs, dropped video calls during crucial presentations, and hours wasted searching for cafes with decent WiFi.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                After one particularly painful month in Bali — where a flaky connection cost me a client and a terrible chair cost me a physiotherapy bill — I realized the 'digital nomad dream' was broken. Beautiful destinations weren't built for serious work.
              </p>
              <p className="text-lg text-foreground leading-relaxed font-medium">
                So I built DeskAway: curated stays where productivity comes first, without sacrificing the adventure. Because you shouldn't have to choose between loving where you work and doing great work."
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold">
                JK
              </div>
              <div>
                <p className="font-semibold text-foreground">James Kim</p>
                <p className="text-sm text-muted-foreground">Founder & CEO, DeskAway</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
