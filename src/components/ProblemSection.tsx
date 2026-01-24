import { XCircle, CheckCircle } from "lucide-react";

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
    <section className="section-padding bg-muted">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Beautiful places weren't built for real work
          </h2>
          <p className="text-lg text-muted-foreground">
            Most workations prioritize the view over your productivity. We think you deserve both.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems Column */}
          <div className="bg-card rounded-3xl p-8 shadow-soft">
            <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-destructive" />
              </span>
              Typical Workation Problems
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="bg-primary rounded-3xl p-8 shadow-soft">
            <h3 className="text-xl font-display font-semibold text-primary-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-primary-foreground" />
              </span>
              The DeskAway Difference
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-primary-foreground/90"
                >
                  <CheckCircle className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-0.5" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
