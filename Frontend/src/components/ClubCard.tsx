import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ClubCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  memberCount?: number;
  image?: string;
}

export function ClubCard({ id, name, description, category, memberCount, image }: ClubCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-gray-200 rounded-2xl group">
      <div className="aspect-video bg-gradient-to-br from-[#57068C]/10 to-[#8B4FC4]/10 relative overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#57068C] to-[#8B4FC4] rounded-2xl flex items-center justify-center text-white">
              <span>{name.substring(0, 2).toUpperCase()}</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="group-hover:text-[#57068C] transition-colors">{name}</h3>
          <Badge className="bg-[#57068C]/10 text-[#57068C] hover:bg-[#57068C]/20 rounded-full">
            {category}
          </Badge>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        {memberCount && (
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Users size={16} className="mr-1" />
            <span>{memberCount} members</span>
          </div>
        )}
        <Link to={`/clubs/${id}`}>
          <Button
            variant="ghost"
            className="w-full group-hover:bg-[#57068C] group-hover:text-white transition-all rounded-xl"
          >
            Learn More
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
