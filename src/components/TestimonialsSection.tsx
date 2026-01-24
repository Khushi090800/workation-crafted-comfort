import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote: "Finally, a workation that understands remote work. The WiFi was flawless, the chair was better than my home office, and I actually got MORE done than usual.",
    name: "Sarah Chen",
    role: "Senior Product Designer",
    company: "Figma",
    rating: 5,
  },
  {
    quote: "I was skeptical about working from Indonesia, but DeskAway exceeded every expectation. Zero dropped calls in 3 weeks. My team didn't even know I wasn't at home.",
    name: "Marcus Johnson",
    role: "Software Engineer",
    company: "Stripe",
    rating: 5,
  },
  {
    quote: "The community aspect was unexpected but incredible. Met my now business partner at DeskAway. Plus, my back has never felt better.",
    name: "Elena Rodriguez",
    role: "Freelance UX Consultant",
    company: "Self-employed",
    rating: 5,
  },
];

const companies = [
  "Shopify",
  "Notion",
  "Linear",
  "Vercel",
  "Figma",
  "Stripe",
];

const TestimonialsSection = () => {
  return (
    <section className="py-14 md:py-18 px-6 md:px-8 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-sm font-medium text-accent uppercase tracking-wider mb-3 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Trusted by remote professionals
            </h2>
            <p className="text-lg text-muted-foreground">
              Join hundreds of remote workers who've found their perfect work-life balance.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.08}>
              <div className="bg-card rounded-2xl p-6 shadow-soft card-hover h-full flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-5 flex-grow">
                  <Quote className="absolute -top-1 -left-1 w-6 h-6 text-muted/40" />
                  <p className="text-foreground leading-relaxed pl-5 text-sm">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Company Logos */}
        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Professionals from these companies have stayed with us
            </p>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
              {companies.map((company) => (
                <span
                  key={company}
                  className="text-lg font-display font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
