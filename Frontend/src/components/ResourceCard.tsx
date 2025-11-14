import { Card } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  actionLabel?: string;
  actionType?: 'link' | 'download';
  actionUrl?: string;
}

export function ResourceCard({ 
  title, 
  description, 
  icon: Icon, 
  actionLabel = 'Learn More',
  actionType = 'link',
  actionUrl = '#'
}: ResourceCardProps) {
  return (
    <Card className="p-6 rounded-2xl border-gray-200 hover:shadow-lg transition-all group">
      <div className="w-12 h-12 bg-gradient-to-br from-[#57068C] to-[#8B4FC4] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button
        variant="ghost"
        className="w-full justify-between group-hover:bg-[#57068C] group-hover:text-white transition-all rounded-xl"
        onClick={() => actionUrl && window.open(actionUrl, '_blank')}
      >
        {actionLabel}
        {actionType === 'download' ? (
          <Download size={16} className="ml-2" />
        ) : (
          <ArrowRight size={16} className="ml-2" />
        )}
      </Button>
    </Card>
  );
}
