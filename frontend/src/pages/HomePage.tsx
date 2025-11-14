import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ClubCard } from '../components/ClubCard';
import { EventCard } from '../components/EventCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export function HomePage() {
  const featuredClubs = [
    {
      id: 'stem-scholars',
      name: 'STEM Scholars Society',
      description: 'Connecting students passionate about science, technology, engineering, and mathematics.',
      category: 'Academic',
      memberCount: 150,
    },
    {
      id: 'cultural-exchange',
      name: 'Cultural Exchange Club',
      description: 'Celebrating diversity through cultural events and discussions.',
      category: 'Cultural',
      memberCount: 200,
    },
    {
      id: 'debate-union',
      name: 'Debate Union',
      description: 'Developing critical thinking and public speaking skills through competitive debate.',
      category: 'Professional',
      memberCount: 85,
    },
  ];

  const featuredEvents = [
    {
      title: 'Annual AAP Summit 2024',
      date: 'November 20, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Kimmel Center',
      type: 'Conference',
      featured: true,
    },
    {
      title: 'Study Skills Workshop',
      date: 'November 18, 2024',
      time: '3:00 PM - 5:00 PM',
      location: 'Bobst Library',
      type: 'Workshop',
    },
  ];

  const testimonials = [
    {
      quote: 'AAP has been instrumental in my academic journey. The community support and resources have helped me excel in ways I never thought possible.',
      author: 'Sarah Chen',
      role: 'Computer Science, Class of 2025',
    },
    {
      quote: 'The connections I made through AAP clubs have opened doors to amazing opportunities. This program truly transforms the student experience.',
      author: 'Michael Torres',
      role: 'Business Administration, Class of 2024',
    },
    {
      quote: 'Being part of AAP leadership taught me valuable skills in organization and community building that I use every day.',
      author: 'Emily Johnson',
      role: 'Psychology, Class of 2025',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#57068C] via-[#7208B8] to-[#8B4FC4] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Academic Achievement Program
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              A community uplifting academic excellence and student success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/clubs">
                <Button size="lg" className="bg-white text-[#57068C] hover:bg-gray-100 rounded-xl w-full sm:w-auto">
                  Explore Clubs
                </Button>
              </Link>
              <Link to="/events">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-xl w-full sm:w-auto">
                  Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'Fostering academic excellence through community support',
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Over 2,000 active members across 50+ clubs',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Recognized for outstanding student achievement',
              },
              {
                icon: TrendingUp,
                title: 'Growth',
                description: 'Continuous development and learning opportunities',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#57068C] to-[#8B4FC4] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="mb-2">Featured Events</h2>
              <p className="text-gray-600">Don't miss out on these upcoming opportunities</p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="rounded-xl hidden sm:flex">
                View All Events
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
          <Link to="/events" className="block sm:hidden mt-6">
            <Button variant="outline" className="rounded-xl w-full">
              View All Events
            </Button>
          </Link>
        </div>
      </section>

      {/* Spotlight Clubs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="mb-2">Spotlight Clubs</h2>
              <p className="text-gray-600">Discover communities that match your interests</p>
            </div>
            <Link to="/clubs">
              <Button variant="outline" className="rounded-xl hidden sm:flex">
                All Clubs
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredClubs.map((club) => (
              <ClubCard key={club.id} {...club} />
            ))}
          </div>
          <Link to="/clubs" className="block sm:hidden mt-6">
            <Button variant="outline" className="rounded-xl w-full">
              All Clubs
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-2">Student Success Stories</h2>
            <p className="text-gray-600">Hear from our thriving community members</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#57068C] to-[#8B4FC4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Join AAP?</h2>
          <p className="text-xl text-white/90 mb-8">
            Become part of a community dedicated to academic excellence and student success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#57068C] hover:bg-gray-100 rounded-xl w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-xl w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
