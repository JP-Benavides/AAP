import { useState } from 'react';
import { ClubCard } from '../components/ClubCard';
import { Input } from '../components/ui/input';
import { Search } from 'lucide-react';
import { Badge } from '../components/ui/badge';

export function ClubsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Academic', 'Cultural', 'Social', 'Professional', 'Arts'];

  const clubs = [
    {
      id: 'stem-scholars',
      name: 'STEM Scholars Society',
      description: 'Connecting students passionate about science, technology, engineering, and mathematics through research, workshops, and networking events.',
      category: 'Academic',
      memberCount: 150,
    },
    {
      id: 'cultural-exchange',
      name: 'Cultural Exchange Club',
      description: 'Celebrating diversity through cultural events, language exchange, and international student support programs.',
      category: 'Cultural',
      memberCount: 200,
    },
    {
      id: 'debate-union',
      name: 'Debate Union',
      description: 'Developing critical thinking and public speaking skills through competitive debate tournaments and weekly practice sessions.',
      category: 'Professional',
      memberCount: 85,
    },
    {
      id: 'creative-writers',
      name: 'Creative Writers Circle',
      description: 'A supportive community for aspiring writers to share work, receive feedback, and improve their craft.',
      category: 'Arts',
      memberCount: 120,
    },
    {
      id: 'business-network',
      name: 'Business Leaders Network',
      description: 'Preparing future business leaders through case competitions, workshops, and industry networking opportunities.',
      category: 'Professional',
      memberCount: 180,
    },
    {
      id: 'environmental-action',
      name: 'Environmental Action Group',
      description: 'Promoting sustainability and environmental awareness through campus initiatives and community outreach.',
      category: 'Social',
      memberCount: 95,
    },
    {
      id: 'math-circle',
      name: 'Mathematics Circle',
      description: 'Exploring advanced mathematical concepts, problem-solving, and preparing for math competitions.',
      category: 'Academic',
      memberCount: 75,
    },
    {
      id: 'performing-arts',
      name: 'Performing Arts Collective',
      description: 'Showcasing student talent through theater productions, dance performances, and musical events.',
      category: 'Arts',
      memberCount: 160,
    },
    {
      id: 'pre-med-society',
      name: 'Pre-Medical Society',
      description: 'Supporting aspiring healthcare professionals with mentorship, MCAT prep, and clinical exposure opportunities.',
      category: 'Academic',
      memberCount: 220,
    },
    {
      id: 'social-impact',
      name: 'Social Impact Initiative',
      description: 'Organizing volunteer projects and community service activities to make a positive difference.',
      category: 'Social',
      memberCount: 140,
    },
    {
      id: 'tech-innovators',
      name: 'Tech Innovators Lab',
      description: 'Building innovative tech projects, hosting hackathons, and learning cutting-edge technologies together.',
      category: 'Academic',
      memberCount: 190,
    },
    {
      id: 'global-cultures',
      name: 'Global Cultures Forum',
      description: 'Facilitating cross-cultural dialogue and understanding through discussions, food festivals, and cultural showcases.',
      category: 'Cultural',
      memberCount: 175,
    },
  ];

  const filteredClubs = clubs.filter((club) => {
    const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || club.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#57068C] to-[#8B4FC4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">Clubs Directory</h1>
          <p className="text-xl text-white/90">
            Discover and join student-run clubs that match your interests
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search clubs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl border-gray-300"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer rounded-full px-4 py-2 transition-all ${
                    selectedCategory === category
                      ? 'bg-[#57068C] text-white hover:bg-[#7208B8]'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredClubs.length} {filteredClubs.length === 1 ? 'club' : 'clubs'}
            </p>
          </div>
          {filteredClubs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClubs.map((club) => (
                <ClubCard key={club.id} {...club} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-gray-400" size={32} />
              </div>
              <h3 className="mb-2">No clubs found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
