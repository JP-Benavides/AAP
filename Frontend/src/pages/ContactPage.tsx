import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { MapPin, Mail, Clock, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#57068C] to-[#8B4FC4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-xl text-white/90">
            Get in touch with the AAP team - we're here to help!
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 rounded-2xl border-gray-200">
                <h2 className="mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-gray-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@nyu.edu"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-gray-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="rounded-xl border-gray-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="rounded-xl border-gray-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-[#57068C] hover:bg-[#7208B8] rounded-xl"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Office Info */}
              <Card className="p-6 rounded-2xl border-gray-200">
                <h3 className="mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="text-[#57068C] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:aap@nyu.edu" className="text-[#57068C] hover:underline">
                        aap@nyu.edu
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-[#57068C] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href="tel:+12129980123" className="hover:text-[#57068C]">
                        (212) 998-0123
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-[#57068C] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p>Kimmel Center for University Life</p>
                      <p>60 Washington Square South</p>
                      <p>New York, NY 10012</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Office Hours */}
              <Card className="p-6 rounded-2xl border-gray-200">
                <h3 className="mb-4">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Clock className="text-[#57068C] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span>Monday - Thursday</span>
                      </div>
                      <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-[#57068C] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span>Friday</span>
                      </div>
                      <p className="text-gray-600">9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-[#57068C] mr-3 mt-1 flex-shrink-0" size={20} />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span>Saturday - Sunday</span>
                      </div>
                      <p className="text-gray-600">Closed</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6 rounded-2xl border-gray-200">
                <h3 className="mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-[#57068C] to-[#8B4FC4] rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-[#57068C] to-[#8B4FC4] rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-[#57068C] to-[#8B4FC4] rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Visit Us</h2>
          <Card className="overflow-hidden rounded-2xl border-gray-200">
            <div className="aspect-video bg-gradient-to-br from-[#57068C]/10 to-[#8B4FC4]/10 relative">
              {/* Placeholder for map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#57068C] mx-auto mb-4" />
                  <h3 className="mb-2">Kimmel Center for University Life</h3>
                  <p className="text-gray-600">60 Washington Square South, New York, NY 10012</p>
                  <a
                    href="https://maps.google.com/?q=60+Washington+Square+South+New+York+NY+10012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4"
                  >
                    <Button className="bg-[#57068C] hover:bg-[#7208B8] rounded-xl">
                      Open in Google Maps
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Join AAP', description: 'Become a member today' },
              { title: 'Explore Clubs', description: 'Find your community' },
              { title: 'View Events', description: 'See what\'s happening' },
              { title: 'Resources', description: 'Access academic support' },
            ].map((link, index) => (
              <Card key={index} className="p-6 rounded-2xl border-gray-200 hover:shadow-lg transition-all cursor-pointer group">
                <h4 className="mb-1 group-hover:text-[#57068C] transition-colors">{link.title}</h4>
                <p className="text-sm text-gray-600">{link.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
