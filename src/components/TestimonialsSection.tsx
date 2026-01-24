import { Star, Quote } from "lucide-react";

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
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            Social Proof
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Trusted by remote professionals
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of remote workers who've found their perfect work-life balance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-3xl p-8 shadow-soft card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-1 w-8 h-8 text-muted/50" />
                <p className="text-foreground leading-relaxed pl-6">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Professionals from these companies have stayed with us
          </p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {companies.map((company) => (
              <span
                key={company}
                className="text-xl font-display font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <p className="text-4xl font-display font-bold text-foreground mb-2">98%</p>
            <p className="text-sm text-muted-foreground">Meeting success rate</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-display font-bold text-foreground mb-2">0h</p>
            <p className="text-sm text-muted-foreground">WiFi downtime</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-display font-bold text-foreground mb-2">150+</p>
            <p className="text-sm text-muted-foreground">Happy guests</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-display font-bold text-foreground mb-2">4.9★</p>
            <p className="text-sm text-muted-foreground">Average rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
