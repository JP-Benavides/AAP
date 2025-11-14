import { ResourceCard } from '../components/ResourceCard';
import { Book, Users, GraduationCap, FileText, Video, Lightbulb, Calendar, MessageCircle } from 'lucide-react';

export function ResourcesPage() {
  const academicResources = [
    {
      title: 'Study Guides',
      description: 'Comprehensive study materials and guides for various courses and subjects.',
      icon: Book,
      actionLabel: 'Access Guides',
      actionType: 'link' as const,
    },
    {
      title: 'Tutoring Services',
      description: 'Free peer tutoring sessions for math, science, writing, and more.',
      icon: Users,
      actionLabel: 'Book a Session',
      actionType: 'link' as const,
    },
    {
      title: 'Academic Advising',
      description: 'One-on-one guidance for course selection, major requirements, and academic planning.',
      icon: GraduationCap,
      actionLabel: 'Schedule Advising',
      actionType: 'link' as const,
    },
  ];

  const learningResources = [
    {
      title: 'Workshop Materials',
      description: 'Presentations, handouts, and recordings from past AAP workshops.',
      icon: FileText,
      actionLabel: 'Download Materials',
      actionType: 'download' as const,
    },
    {
      title: 'Video Library',
      description: 'Educational videos covering study skills, time management, and academic success.',
      icon: Video,
      actionLabel: 'Watch Videos',
      actionType: 'link' as const,
    },
    {
      title: 'Research Opportunities',
      description: 'Connect with faculty and explore undergraduate research programs.',
      icon: Lightbulb,
      actionLabel: 'Explore Research',
      actionType: 'link' as const,
    },
  ];

  const supportResources = [
    {
      title: 'Mentorship Program',
      description: 'Connect with upperclassmen mentors for guidance and support.',
      icon: MessageCircle,
      actionLabel: 'Find a Mentor',
      actionType: 'link' as const,
    },
    {
      title: 'Event Calendar',
      description: 'Stay updated on workshops, study sessions, and social events.',
      icon: Calendar,
      actionLabel: 'View Calendar',
      actionType: 'link' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#57068C] to-[#8B4FC4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">Resources</h1>
          <p className="text-xl text-white/90">
            Access academic support, learning materials, and student services
          </p>
        </div>
      </section>

      {/* Academic Resources */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="mb-2">Academic Support</h2>
            <p className="text-gray-600">
              Essential resources to help you succeed in your coursework
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicResources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Materials */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="mb-2">Learning Materials</h2>
            <p className="text-gray-600">
              Educational content and resources for continuous learning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningResources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Support & Community */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="mb-2">Support & Community</h2>
            <p className="text-gray-600">
              Connect with peers and access mentorship opportunities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportResources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="mb-2">Quick Links</h2>
            <p className="text-gray-600">
              Important resources and external services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'NYU Library', url: '#' },
              { title: 'Writing Center', url: '#' },
              { title: 'Career Services', url: '#' },
              { title: 'Health & Wellness', url: '#' },
              { title: 'Financial Aid', url: '#' },
              { title: 'Student Portal', url: '#' },
              { title: 'Course Catalog', url: '#' },
              { title: 'Academic Calendar', url: '#' },
            ].map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#57068C] hover:bg-white transition-all group"
              >
                <p className="group-hover:text-[#57068C] transition-colors">
                  {link.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gradient-to-br from-[#57068C] to-[#8B4FC4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Need Additional Help?</h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to support your academic journey. Reach out anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:aap@nyu.edu">
              <button className="px-6 py-3 bg-white text-[#57068C] rounded-xl hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </a>
            <a href="#faq">
              <button className="px-6 py-3 border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors">
                View FAQ
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
