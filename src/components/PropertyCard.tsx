import { Wifi, Monitor, Volume2, Armchair } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  wifiSpeed: string;
  deskType: string;
  chairType: string;
  quietRating: number;
  priceFrom: string;
}

const PropertyCard = ({
  image,
  title,
  location,
  wifiSpeed,
  deskType,
  chairType,
  quietRating,
  priceFrom,
}: PropertyCardProps) => {
  return (
    <div className="card-base card-hover overflow-hidden group h-full flex flex-col">
      {/* Image - Fixed aspect ratio */}
      <div className="aspect-property overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-card/90 backdrop-blur-sm rounded-lg text-xs font-medium text-foreground">
            {location}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="card-padding flex-1 flex flex-col">
        <h3 className="text-lg font-display font-semibold text-foreground mb-3">{title}</h3>

        {/* Specs Grid - Uniform spacing */}
        <div className="grid grid-cols-2 gap-2.5 mb-4 flex-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Wifi className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="truncate">{wifiSpeed}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Monitor className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="truncate">{deskType}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Armchair className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="truncate">{chairType}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Volume2 className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Quiet: {quietRating}/5</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-border mt-auto">
          <div>
            <p className="text-xs text-muted-foreground">From</p>
            <p className="text-base font-semibold text-foreground">{priceFrom}<span className="text-xs font-normal text-muted-foreground">/week</span></p>
          </div>
          <Button variant="default" size="sm" className="text-xs">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
