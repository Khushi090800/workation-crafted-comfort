import { XCircle, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  "Neck and back pain from makeshift work setups",
  "Dropped calls and frozen video during important meetings",
  "Noisy cafes and distracting environments",
  "Hours spent researching WiFi reliability",
  "Isolation without a like-minded community",
];

const solutions = [
  "Ergonomic chairs and proper desk heights",
  "Enterprise-grade WiFi with backup connections",
  "Dedicated quiet workspaces optimized for calls",
  "Every property pre-tested and verified",
  "Built-in community of remote professionals",
];

const ProblemSection = () => {
  return (
    <section className="py-14 md:py-18 px-6 md:px-8 lg:px-12 bg-muted">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-sm font-medium text-accent uppercase tracking-wider mb-3 block">
              The Problem
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Beautiful places weren't built for real work
            </h2>
            <p className="text-lg text-muted-foreground">
              Most workations prioritize the view over your productivity. We think you deserve both.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {/* Problems Column */}
          <ScrollReveal delay={0.1}>
            <div className="bg-card rounded-3xl p-7 shadow-soft h-full">
              <h3 className="text-lg font-display font-semibold text-foreground mb-5 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-4 h-4 text-destructive" />
                </span>
                Typical Workation Problems
              </h3>
              <ul className="space-y-3">
                {problems.map((problem, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-sm"
                  >
                    <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Solutions Column */}
          <ScrollReveal delay={0.15}>
            <div className="bg-primary rounded-3xl p-7 shadow-soft h-full">
              <h3 className="text-lg font-display font-semibold text-primary-foreground mb-5 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-primary-foreground" />
                </span>
                The DeskAway Difference
              </h3>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-primary-foreground/90 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-primary-foreground flex-shrink-0 mt-0.5" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
