import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { LeadershipCard } from '../components/LeadershipCard';
import { EventCard } from '../components/EventCard';
import { Calendar, MapPin, Clock, Users, Mail, ArrowLeft } from 'lucide-react';
import { Card } from '../components/ui/card';

export function ClubDetailPage() {
  const { id } = useParams<{ id: string }>();

  // Mock club data - in a real app, this would be fetched based on the id
  const clubData: { [key: string]: any } = {
    'stem-scholars': {
      name: 'STEM Scholars Society',
      tagline: 'Advancing Science, Technology, Engineering, and Mathematics',
      description: 'The STEM Scholars Society is dedicated to fostering a community of students passionate about science, technology, engineering, and mathematics. We provide opportunities for research collaboration, skill development, and networking with industry professionals. Our members participate in cutting-edge projects, attend workshops led by experts, and compete in national STEM competitions.',
      category: 'Academic',
      memberCount: 150,
      founded: '2018',
      contactEmail: 'stemscholars@nyu.edu',
      leadership: [
        {
          name: 'Alex Rivera',
          role: 'President',
          bio: 'Computer Science senior passionate about AI and machine learning',
          email: 'alex.r@nyu.edu',
        },
        {
          name: 'Maya Patel',
          role: 'Vice President',
          bio: 'Biomedical Engineering student focused on healthcare innovation',
          email: 'maya.p@nyu.edu',
        },
        {
          name: 'Jordan Lee',
          role: 'Events Coordinator',
          bio: 'Mathematics major organizing workshops and competitions',
          email: 'jordan.l@nyu.edu',
        },
      ],
      meetings: {
        regular: 'Every Wednesday, 6:00 PM - 7:30 PM',
        location: 'Kimmel Center, Room 305',
        officeHours: 'Thursdays, 3:00 PM - 5:00 PM',
      },
      upcomingEvents: [
        {
          title: 'AI Workshop Series',
          date: 'November 22, 2024',
          time: '6:00 PM - 8:00 PM',
          location: 'Warren Weaver Hall',
          type: 'Workshop',
        },
        {
          title: 'Industry Panel Discussion',
          date: 'December 1, 2024',
          time: '5:30 PM - 7:00 PM',
          location: 'Kimmel Center',
          type: 'Panel',
        },
      ],
    },
    'cultural-exchange': {
      name: 'Cultural Exchange Club',
      tagline: 'Celebrating Diversity and Global Understanding',
      description: 'The Cultural Exchange Club brings together students from all backgrounds to celebrate diversity and promote cultural understanding. Through food festivals, language exchange programs, traditional performances, and cultural workshops, we create a welcoming space for students to share their heritage and learn about others.',
      category: 'Cultural',
      memberCount: 200,
      founded: '2016',
      contactEmail: 'culturalexchange@nyu.edu',
      leadership: [
        {
          name: 'Sofia Martinez',
          role: 'President',
          bio: 'International Relations major from Spain',
          email: 'sofia.m@nyu.edu',
        },
        {
          name: 'Yuki Tanaka',
          role: 'Vice President',
          bio: 'Organizing cultural events and language exchanges',
          email: 'yuki.t@nyu.edu',
        },
      ],
      meetings: {
        regular: 'Every Tuesday, 5:00 PM - 6:30 PM',
        location: 'Kimmel Center, Room 202',
        officeHours: 'Wednesdays, 2:00 PM - 4:00 PM',
      },
      upcomingEvents: [
        {
          title: 'International Food Festival',
          date: 'November 25, 2024',
          time: '12:00 PM - 4:00 PM',
          location: 'Kimmel Center Plaza',
          type: 'Festival',
        },
      ],
    },
  };

  const club = clubData[id || ''] || clubData['stem-scholars'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#57068C] to-[#8B4FC4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/clubs" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Clubs
          </Link>
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="flex-1 mb-6 md:mb-0">
              <h1 className="mb-2">{club.name}</h1>
              <p className="text-xl text-white/90 mb-4">{club.tagline}</p>
              <div className="flex flex-wrap gap-4 text-white/80">
                <div className="flex items-center">
                  <Users size={20} className="mr-2" />
                  <span>{club.memberCount} members</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={20} className="mr-2" />
                  <span>Founded {club.founded}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button size="lg" className="bg-white text-[#57068C] hover:bg-gray-100 rounded-xl">
                Join Club
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-xl"
              >
                <Mail size={20} className="mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="p-8 rounded-2xl border-gray-200 mb-8">
                <h2 className="mb-4">About Us</h2>
                <p className="text-gray-700 leading-relaxed">{club.description}</p>
              </Card>

              {/* Leadership Team */}
              <div>
                <h2 className="mb-6">Leadership Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {club.leadership.map((leader: any, index: number) => (
                    <LeadershipCard key={index} {...leader} />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Meeting Info */}
              <Card className="p-6 rounded-2xl border-gray-200">
                <h3 className="mb-4">Meeting Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock size={20} className="text-[#57068C] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Regular Meetings</p>
                      <p>{club.meetings.regular}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin size={20} className="text-[#57068C] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p>{club.meetings.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar size={20} className="text-[#57068C] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Office Hours</p>
                      <p>{club.meetings.officeHours}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Contact */}
              <Card className="p-6 rounded-2xl border-gray-200">
                <h3 className="mb-4">Contact</h3>
                <a
                  href={`mailto:${club.contactEmail}`}
                  className="flex items-center text-[#57068C] hover:underline"
                >
                  <Mail size={20} className="mr-2" />
                  {club.contactEmail}
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {club.upcomingEvents && club.upcomingEvents.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {club.upcomingEvents.map((event: any, index: number) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#57068C] to-[#8B4FC4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Ready to Join {club.name}?</h2>
          <p className="text-xl text-white/90 mb-8">
            Connect with like-minded students and make the most of your college experience.
          </p>
          <Button size="lg" className="bg-white text-[#57068C] hover:bg-gray-100 rounded-xl">
            Join Now
          </Button>
        </div>
      </section>
    </div>
  );
}
