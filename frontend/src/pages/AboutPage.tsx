import { LeadershipCard } from '../components/LeadershipCard';
import { Card } from '../components/ui/card';
import { Target, Heart, Lightbulb, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function AboutPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const leadership = [
    {
      name: 'Dr. Sarah Williams',
      role: 'Faculty Advisor',
      bio: 'Professor of Education with 15 years of experience in student development',
      email: 's.williams@nyu.edu',
    },
    {
      name: 'Marcus Johnson',
      role: 'AAP Director',
      bio: 'Senior passionate about creating inclusive academic communities',
      email: 'marcus.j@nyu.edu',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Operations Manager',
      bio: 'Managing day-to-day operations and student engagement initiatives',
      email: 'emma.r@nyu.edu',
    },
    {
      name: 'David Kim',
      role: 'Events Coordinator',
      bio: 'Organizing workshops, seminars, and community-building events',
      email: 'david.k@nyu.edu',
    },
  ];

  const faqs = [
    {
      question: 'What is the Academic Achievement Program (AAP)?',
      answer: 'AAP is a comprehensive program at NYU designed to support student academic success through clubs, resources, mentorship, and community-building activities. We provide a platform for students to connect, learn, and grow together.',
    },
    {
      question: 'How can I join AAP?',
      answer: 'Joining AAP is easy! You can sign up through our website, attend our welcome events at the beginning of each semester, or contact us directly at aap@nyu.edu. Membership is open to all NYU students.',
    },
    {
      question: 'Are there any membership fees?',
      answer: 'No, AAP membership is completely free for all NYU students. We believe academic support and community should be accessible to everyone.',
    },
    {
      question: 'Can I start my own club within AAP?',
      answer: 'Yes! We encourage students to create clubs that align with their interests and the AAP mission. Contact our leadership team to learn about the club formation process and requirements.',
    },
    {
      question: 'What types of events does AAP organize?',
      answer: 'AAP hosts a variety of events including academic workshops, networking sessions, social gatherings, guest speaker panels, study groups, and our annual AAP Summit. Check our Events page for upcoming activities.',
    },
    {
      question: 'How can I access tutoring services?',
      answer: 'AAP offers free peer tutoring for various subjects. You can book tutoring sessions through our Resources page or by contacting us directly. Sessions are available both in-person and virtually.',
    },
    {
      question: 'Can graduate students participate in AAP?',
      answer: 'While AAP primarily serves undergraduate students, we welcome graduate students to participate in select events and programs. Contact us for specific opportunities available to graduate students.',
    },
    {
      question: 'How can I get involved in AAP leadership?',
      answer: 'We hold leadership elections each spring semester. Students interested in leadership positions can apply through our website. We also offer committee positions and volunteer opportunities year-round.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#57068C] to-[#8B4FC4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">About AAP</h1>
          <p className="text-xl text-white/90">
            Learn about our mission, history, and the team behind AAP
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Academic Achievement Program (AAP) is dedicated to fostering a supportive community that promotes academic excellence, personal growth, and student success at NYU. Through student-run clubs, comprehensive resources, and engaging events, we create opportunities for students to connect, learn, and thrive.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that every student deserves access to the tools, resources, and community support necessary to achieve their academic goals. AAP serves as a central hub where students can find mentorship, develop leadership skills, and build lasting connections.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Target,
                  title: 'Excellence',
                  description: 'Striving for academic and personal excellence',
                },
                {
                  icon: Heart,
                  title: 'Community',
                  description: 'Building a supportive and inclusive environment',
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation',
                  description: 'Encouraging creative thinking and new ideas',
                },
                {
                  icon: TrendingUp,
                  title: 'Growth',
                  description: 'Supporting continuous learning and development',
                },
              ].map((value, index) => (
                <Card key={index} className="p-6 rounded-2xl border-gray-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#57068C] to-[#8B4FC4] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <value.icon className="text-white" size={24} />
                  </div>
                  <h4 className="mb-1">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-center">Our Story</h2>
            <Card className="p-8 rounded-2xl border-gray-200">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-[#57068C] rounded-full mr-3"></div>
                    <h3>2015 - Founded</h3>
                  </div>
                  <p className="text-gray-700 ml-6">
                    AAP was established by a group of students who recognized the need for a comprehensive academic support system at NYU.
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-[#57068C] rounded-full mr-3"></div>
                    <h3>2017 - Expansion</h3>
                  </div>
                  <p className="text-gray-700 ml-6">
                    Grew to include 20+ student clubs and launched our peer tutoring program, serving over 500 students annually.
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-[#57068C] rounded-full mr-3"></div>
                    <h3>2020 - Digital Transformation</h3>
                  </div>
                  <p className="text-gray-700 ml-6">
                    Adapted to remote learning by creating virtual study groups, online workshops, and digital resource libraries.
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-[#57068C] rounded-full mr-3"></div>
                    <h3>2024 - Present</h3>
                  </div>
                  <p className="text-gray-700 ml-6">
                    Now supporting 2,000+ students across 50+ clubs with comprehensive resources, mentorship programs, and community events.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How AAP Supports Students */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">How We Support Students</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              AAP provides comprehensive support through multiple channels to ensure every student can succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Academic Resources',
                description: 'Free tutoring, study materials, academic advising, and workshops to enhance learning.',
                items: ['Peer Tutoring', 'Study Guides', 'Academic Advising', 'Skill Workshops'],
              },
              {
                title: 'Community & Clubs',
                description: 'Student-run clubs fostering connections, leadership, and shared interests.',
                items: ['50+ Active Clubs', 'Leadership Opportunities', 'Networking Events', 'Social Activities'],
              },
              {
                title: 'Mentorship & Growth',
                description: 'Guidance from peers and faculty to support personal and professional development.',
                items: ['Peer Mentorship', 'Faculty Advisors', 'Career Guidance', 'Leadership Training'],
              },
            ].map((pillar, index) => (
              <Card key={index} className="p-6 rounded-2xl border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="mb-3">{pillar.title}</h3>
                <p className="text-gray-600 mb-4">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#57068C] rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Leadership Team</h2>
            <p className="text-gray-600">
              Meet the dedicated team guiding AAP's mission and operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <LeadershipCard key={index} {...leader} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about AAP
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="rounded-2xl border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <h4 className="pr-8">{faq.question}</h4>
                  {openFAQ === index ? (
                    <ChevronUp className="text-[#57068C] flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-[#57068C] to-[#8B4FC4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Still Have Questions?</h2>
          <p className="text-xl text-white/90 mb-8">
            We're here to help! Reach out to our team anytime.
          </p>
          <a href="mailto:aap@nyu.edu">
            <button className="px-8 py-3 bg-white text-[#57068C] rounded-xl hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
