import { Card } from "./ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <Card className="p-6 rounded-2xl border-gray-200 hover:shadow-lg transition-shadow">
      <Quote className="text-[#57068C] mb-4" size={32} />
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#57068C] to-[#8B4FC4] flex items-center justify-center text-white mr-3">
          {image ? (
            <img src={image} alt={author} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span>{author.substring(0, 1).toUpperCase()}</span>
          )}
        </div>
        <div>
          <p>{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </Card>
  );
}
