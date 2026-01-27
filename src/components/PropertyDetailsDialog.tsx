import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Wifi, Monitor, Volume2, Armchair, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  property: {
    image: string;
    title: string;
    location: string;
    wifiSpeed: string;
    deskType: string;
    chairType: string;
    quietRating: number;
    priceFrom: string;
  };
}

const PropertyDetailsDialog = ({ open, onOpenChange, property }: PropertyDetailsDialogProps) => {
  const handleJoinWaitlist = () => {
    onOpenChange(false);
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-display">{property.title}</DialogTitle>
        </DialogHeader>
        
        {/* Property Image */}
        <div className="aspect-video overflow-hidden rounded-lg">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{property.location}</span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          Experience the perfect blend of work and paradise at {property.title}. 
          This carefully curated space is designed for remote professionals seeking 
          productivity without sacrificing the island lifestyle. Every detail has been 
          considered to ensure you can focus on what matters.
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-4 py-4 border-y border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Wifi className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">WiFi Speed</p>
              <p className="font-medium text-foreground">{property.wifiSpeed}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Monitor className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Desk Setup</p>
              <p className="font-medium text-foreground">{property.deskType}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Armchair className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Chair</p>
              <p className="font-medium text-foreground">{property.chairType}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Volume2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Quiet Rating</p>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < property.quietRating
                        ? "text-primary fill-primary"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div>
          <h4 className="font-medium text-foreground mb-2">Included Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {["Air Conditioning", "Kitchen", "Fast WiFi", "Workspace", "Weekly Cleaning", "24/7 Support"].map((amenity) => (
              <span
                key={amenity}
                className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4">
          <div>
            <p className="text-sm text-muted-foreground">Starting from</p>
            <p className="text-2xl font-semibold text-foreground">
              {property.priceFrom}
              <span className="text-sm font-normal text-muted-foreground">/week</span>
            </p>
          </div>
          <Button onClick={handleJoinWaitlist} size="lg">
            Join Waitlist
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDetailsDialog;
