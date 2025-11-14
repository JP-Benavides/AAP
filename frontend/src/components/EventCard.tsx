import { Calendar, MapPin, Clock } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  image?: string;
  featured?: boolean;
}

export function EventCard({ title, date, time, location, type, image, featured }: EventCardProps) {
  return (
    <Card
      className={`overflow-hidden hover:shadow-lg transition-all duration-300 rounded-2xl group ${featured ? "border-[#57068C] border-2" : "border-gray-200"}`}
    >
      <div className="aspect-video bg-gradient-to-br from-[#57068C]/10 to-[#8B4FC4]/10 relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#57068C] to-[#8B4FC4]" />
        )}
        {featured && (
          <Badge className="absolute top-4 right-4 bg-white text-[#57068C] hover:bg-white rounded-full">
            Featured
          </Badge>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="flex-1 group-hover:text-[#57068C] transition-colors">{title}</h3>
          <Badge className="bg-[#57068C]/10 text-[#57068C] hover:bg-[#57068C]/20 rounded-full ml-2">
            {type}
          </Badge>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2 text-[#57068C]" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-2 text-[#57068C]" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin size={16} className="mr-2 text-[#57068C]" />
            <span>{location}</span>
          </div>
        </div>
        <Button className="w-full bg-[#57068C] hover:bg-[#7208B8] rounded-xl">RSVP</Button>
      </div>
    </Card>
  );
}
