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
      <div className="max-w-5xl mx-auto">
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

        {/* Testimonials Grid - Uniform cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.08}>
              <div className="card-base card-hover card-padding-lg h-full flex flex-col">
                {/* Rating */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-4 flex-grow">
                  <Quote className="absolute -top-1 -left-1 w-5 h-5 text-muted/30" />
                  <p className="text-foreground leading-relaxed pl-5 text-sm">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-border mt-auto">
                  <div className="icon-container-sm bg-primary/10 text-primary font-semibold text-xs">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm truncate">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{testimonial.role}</p>
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
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {companies.map((company) => (
                <span
                  key={company}
                  className="text-base font-display font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
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
