import { Card } from './ui/card';
import { Mail, Linkedin } from 'lucide-react';

interface LeadershipCardProps {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  email?: string;
  linkedin?: string;
}

export function LeadershipCard({ name, role, bio, image, email, linkedin }: LeadershipCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl border-gray-200 hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-gradient-to-br from-[#57068C]/10 to-[#8B4FC4]/10 relative overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-[#57068C] to-[#8B4FC4] rounded-full flex items-center justify-center text-white">
              <span className="text-2xl">{name.substring(0, 1).toUpperCase()}</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3>{name}</h3>
        <p className="text-[#57068C] mb-2">{role}</p>
        {bio && <p className="text-sm text-gray-600 mb-4">{bio}</p>}
        <div className="flex space-x-2">
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-2 rounded-lg bg-gray-100 hover:bg-[#57068C] hover:text-white transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail size={18} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-100 hover:bg-[#57068C] hover:text-white transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
