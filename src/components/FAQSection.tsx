import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How reliable is the WiFi really?",
    answer: "Every DeskAway property has enterprise-grade internet with a minimum of 100 Mbps download speed. We also provide backup 4G/5G connections and power backup systems. Before listing any property, we run 7 days of continuous speed tests and video call simulations. If WiFi ever drops below our standards, we'll move you to another property or refund you.",
  },
  {
    question: "What does the work setup include?",
    answer: "Every property includes: a proper desk (standing desks available at premium properties), an ergonomic chair (Herman Miller, Steelcase, or equivalent), external monitor (27\" minimum), and good lighting. We've designed each workspace based on ergonomics research to prevent the strain that comes from working on beds or wobbly cafe tables.",
  },
  {
    question: "How does the community work?",
    answer: "When you book, you automatically join our DeskAway Slack community. We host optional weekly events: co-working sessions, Friday sundowner drinks, weekend excursions, and skill-share workshops. It's completely opt-in — some guests love the social aspect, others prefer solitude. We respect both.",
  },
  {
    question: "Who is DeskAway for?",
    answer: "DeskAway is perfect for: remote employees who need reliable work setups, freelancers who can work from anywhere, entrepreneurs looking for focused productivity, and anyone who values both travel and doing great work. We're NOT for: vacation-first travelers who'll rarely work, large groups or families with young children, or anyone looking for party hostels.",
  },
  {
    question: "What's included in the price?",
    answer: "All prices include: accommodation, dedicated workspace, high-speed WiFi, utilities, weekly cleaning, community access, and basic concierge support. Some properties include additional perks like pools, gyms, or coworking space access. Prices don't include: flights, food, personal excursions, or travel insurance. We're transparent — no hidden fees or surprise charges.",
  },
  {
    question: "Can I extend my stay?",
    answer: "Absolutely! Many guests extend once they experience the DeskAway difference. Subject to availability, you can extend your booking at any time. Long-term stays (3+ months) get preferential rates. Just reach out to our team, and we'll make it happen.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-muted">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Common questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working from DeskAway.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 shadow-soft border-none"
              >
                <AccordionTrigger className="text-left text-lg font-display font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
