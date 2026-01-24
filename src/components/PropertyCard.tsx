import { Wifi, Monitor, Volume2, Users } from "lucide-react";
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
    <div className="card-elevated card-hover overflow-hidden group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
            {location}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold text-foreground mb-4">{title}</h3>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Wifi className="w-4 h-4 text-primary" />
            <span>{wifiSpeed}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Monitor className="w-4 h-4 text-primary" />
            <span>{deskType}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4 text-primary" />
            <span>{chairType}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Volume2 className="w-4 h-4 text-primary" />
            <span>Quiet: {quietRating}/5</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-sm text-muted-foreground">From</p>
            <p className="text-lg font-semibold text-foreground">{priceFrom}<span className="text-sm font-normal text-muted-foreground">/week</span></p>
          </div>
          <Button variant="default" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
