import { useState } from "react";
import { EventCard } from "../components/EventCard";
import { Calendar as CalendarIcon, List, Filter } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";

export function EventsPage() {
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("All");

  const eventTypes = [
    "All",
    "Workshop",
    "Conference",
    "Social",
    "Panel",
    "Festival",
    "Competition",
  ];
  const months = ["All", "November", "December", "January"];

  const events = [
    {
      title: "Annual AAP Summit 2024",
      date: "November 20, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Kimmel Center",
      type: "Conference",
      featured: true,
    },
    {
      title: "Study Skills Workshop",
      date: "November 18, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Bobst Library",
      type: "Workshop",
    },
    {
      title: "AI Workshop Series",
      date: "November 22, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Warren Weaver Hall",
      type: "Workshop",
    },
    {
      title: "International Food Festival",
      date: "November 25, 2024",
      time: "12:00 PM - 4:00 PM",
      location: "Kimmel Center Plaza",
      type: "Festival",
      featured: true,
    },
    {
      title: "Industry Panel Discussion",
      date: "December 1, 2024",
      time: "5:30 PM - 7:00 PM",
      location: "Kimmel Center",
      type: "Panel",
    },
    {
      title: "Winter Networking Social",
      date: "December 5, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Rosenthal Pavilion",
      type: "Social",
    },
    {
      title: "Research Symposium",
      date: "December 10, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Kimmel Center",
      type: "Conference",
    },
    {
      title: "Case Competition Finals",
      date: "December 15, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Stern School of Business",
      type: "Competition",
    },
    {
      title: "New Year Planning Session",
      date: "January 10, 2025",
      time: "5:00 PM - 7:00 PM",
      location: "Kimmel Center",
      type: "Workshop",
    },
    {
      title: "Leadership Development Workshop",
      date: "January 15, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Bobst Library",
      type: "Workshop",
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesType = selectedType === "All" || event.type === selectedType;
    const eventMonth = event.date.split(" ")[0];
    const matchesMonth = selectedMonth === "All" || eventMonth === selectedMonth;
    return matchesType && matchesMonth;
  });

  const featuredEvents = filteredEvents.filter((event) => event.featured);
  const regularEvents = filteredEvents.filter((event) => !event.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#57068C] to-[#8B4FC4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">Events</h1>
          <p className="text-xl text-white/90">
            Discover upcoming events, workshops, and activities
          </p>
        </div>
      </section>

      {/* Filters and View Toggle */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div>
                <p className="text-sm text-gray-500 mb-2">Event Type</p>
                <div className="flex flex-wrap gap-2">
                  {eventTypes.map((type) => (
                    <Badge
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`cursor-pointer rounded-full px-3 py-1 transition-all text-sm ${
                        selectedType === type
                          ? "bg-[#57068C] text-white hover:bg-[#7208B8]"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Month</p>
                <div className="flex flex-wrap gap-2">
                  {months.map((month) => (
                    <Badge
                      key={month}
                      onClick={() => setSelectedMonth(month)}
                      className={`cursor-pointer rounded-full px-3 py-1 transition-all text-sm ${
                        selectedMonth === month
                          ? "bg-[#57068C] text-white hover:bg-[#7208B8]"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {month}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                onClick={() => setViewMode("list")}
                className={`rounded-xl ${viewMode === "list" ? "bg-[#57068C] hover:bg-[#7208B8]" : ""}`}
              >
                <List size={20} className="mr-2" />
                List
              </Button>
              <Button
                variant={viewMode === "calendar" ? "default" : "outline"}
                onClick={() => setViewMode("calendar")}
                className={`rounded-xl ${viewMode === "calendar" ? "bg-[#57068C] hover:bg-[#7208B8]" : ""}`}
              >
                <CalendarIcon size={20} className="mr-2" />
                Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === "list" ? (
            <>
              {/* Featured Events */}
              {featuredEvents.length > 0 && (
                <div className="mb-12">
                  <h2 className="mb-6">Featured Events</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredEvents.map((event, index) => (
                      <EventCard key={index} {...event} />
                    ))}
                  </div>
                </div>
              )}

              {/* All Events */}
              <div>
                <h2 className="mb-6">
                  {featuredEvents.length > 0 ? "All Events" : "Upcoming Events"}
                </h2>
                {regularEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularEvents.map((event, index) => (
                      <EventCard key={index} {...event} />
                    ))}
                  </div>
                ) : (
                  <Card className="p-12 rounded-2xl border-gray-200 text-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Filter className="text-gray-400" size={32} />
                    </div>
                    <h3 className="mb-2">No events found</h3>
                    <p className="text-gray-600">Try adjusting your filters to see more events</p>
                  </Card>
                )}
              </div>
            </>
          ) : (
            /* Calendar View */
            <Card className="p-8 rounded-2xl border-gray-200">
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-[#57068C] to-[#8B4FC4] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CalendarIcon className="text-white" size={32} />
                </div>
                <h3 className="mb-2">Calendar View</h3>
                <p className="text-gray-600 mb-8">
                  Interactive calendar view coming soon. Use list view to see all events.
                </p>
                <Button
                  onClick={() => setViewMode("list")}
                  className="bg-[#57068C] hover:bg-[#7208B8] rounded-xl"
                >
                  Switch to List View
                </Button>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Don't Miss Out</h2>
          <p className="text-xl text-gray-600 mb-8">
            Stay updated on all AAP events and activities. Join our community today!
          </p>
          <Button size="lg" className="bg-[#57068C] hover:bg-[#7208B8] rounded-xl">
            Subscribe to Updates
          </Button>
        </div>
      </section>
    </div>
  );
}
