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
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden">
        {/* Property Image - Fixed height */}
        <div className="relative w-full h-48 flex-shrink-0">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-xl font-display font-semibold text-white">{property.title}</h2>
            <div className="flex items-center gap-1.5 text-white/90 text-sm mt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 overflow-y-auto max-h-[60vh]">
          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            Experience the perfect blend of work and paradise at {property.title}. 
            This carefully curated space is designed for remote professionals seeking 
            productivity without sacrificing the island lifestyle.
          </p>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-muted/50">
              <Wifi className="w-4 h-4 text-primary flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">WiFi</p>
                <p className="text-sm font-medium text-foreground truncate">{property.wifiSpeed}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-muted/50">
              <Monitor className="w-4 h-4 text-primary flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Desk</p>
                <p className="text-sm font-medium text-foreground truncate">{property.deskType}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-muted/50">
              <Armchair className="w-4 h-4 text-primary flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Chair</p>
                <p className="text-sm font-medium text-foreground truncate">{property.chairType}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-muted/50">
              <Volume2 className="w-4 h-4 text-primary flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Quiet</p>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
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
            <h4 className="text-xs font-medium text-foreground uppercase tracking-wide mb-2">Amenities</h4>
            <div className="flex flex-wrap gap-1.5">
              {["Air Conditioning", "Kitchen", "Fast WiFi", "Workspace", "Weekly Cleaning", "24/7 Support"].map((amenity) => (
                <span
                  key={amenity}
                  className="px-2.5 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground">Starting from</p>
              <p className="text-xl font-semibold text-foreground">
                {property.priceFrom}
                <span className="text-xs font-normal text-muted-foreground">/week</span>
              </p>
            </div>
            <Button onClick={handleJoinWaitlist}>
              Join Waitlist
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDetailsDialog;
