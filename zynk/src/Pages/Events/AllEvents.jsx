import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Code2, Shield, Brain, Cpu, Globe, Blocks, Server, Cloud, 
         Smartphone, TrendingUp, Users, Calendar, MapPin, Star, ChevronRight, 
         Rocket, ChevronDown, ChevronLeft, Clock } from 'lucide-react';
import mapimage from "../../assets/Map/map.jpg";
import image1 from "../../assets/FeaturedEvents/htmd.png";
import image2 from "../../assets/Conference/devops.png";
import image3 from "../../assets/Conference/web3.png";
import image4 from "../../assets/FeaturedEvents/AIcamp.png";
import image5 from "../../assets/Conference/blockchain.png";
import image6 from "../../assets/Conference/devops.png";

const DateFilterButton = ({ label, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg text-sm font-medium flex items-center justify-between
      transition-all duration-300 hover:bg-secondary-50/20
      ${isActive ? 'bg-secondary-50/20 text-secondary-50' : 'bg-secondary-50/10 text-primary-200'}`}
  >
    {label}
    <ChevronRight className="w-4 h-4 ml-2" />
  </button>
);

const LocationDropdown = ({ selectedLocation, setSelectedLocation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const locations = ["All Locations", "Bengaluru", "Mumbai", "Delhi NCR", "Hyderabad", "Chennai", "Pune"];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 rounded-lg bg-secondary-50/10 text-secondary-50 flex items-center justify-between hover:bg-secondary-50/20 transition-all"
      >
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          {selectedLocation}
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute mt-2 w-full z-50 bg-primary-800 border border-primary-700 rounded-lg shadow-xl">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => {
                setSelectedLocation(location);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-primary-100 hover:bg-primary-700 first:rounded-t-lg last:rounded-b-lg transition-colors"
            >
              {location}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
    
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-secondary-200 hover:shadow-lg transition-all h-full">
      <div className="relative">
        <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            event.type === 'Conference' ? 'bg-primary-100 text-primary-700' : 'bg-tertiary-100 text-tertiary-700'
          }`}>
            {event.type}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex items-center bg-white rounded-full px-2 py-1 shadow-md">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="ml-1 text-sm font-medium">{event.rating}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-900 mb-2">{event.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-primary-600">
            <Calendar className="w-4 h-4 mr-2" />
            {event.date}
          </div>
          <div className="flex items-center text-primary-600">
            <Clock className="w-4 h-4 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center text-primary-600">
            <MapPin className="w-4 h-4 mr-2" />
            {event.venue}
          </div>
          <div className="flex items-center text-primary-600">
            <Users className="w-4 h-4 mr-2" />
            {event.attendees} attending
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-secondary-100 text-primary-600 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
          <span className="text-2xl font-bold text-primary-700">{event.price}</span>
          <button 
            onClick={handleRegister}
            className="px-6 py-2 bg-tertiary-600 text-white rounded-lg hover:bg-tertiary-700 transition-colors"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

const EventCarousel = ({ events, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalGroups = Math.ceil(events.length / 3);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalGroups);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  const getCurrentEvents = () => events.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <div className="relative mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary-800">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white border border-secondary-200 hover:bg-primary-50 transition-colors"
            disabled={totalGroups <= 1}
          >
            <ChevronLeft className="w-5 h-5 text-primary-600" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white border border-secondary-200 hover:bg-primary-50 transition-colors"
            disabled={totalGroups <= 1}
          >
            <ChevronRight className="w-5 h-5 text-primary-600" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentEvents().map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      {totalGroups > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary-600' : 'bg-secondary-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const AllEvents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  const categories = [
    {
      id: 'ai-ml',
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Deep learning, NLP, computer vision, and AI engineering events',
      color: 'from-purple-500 to-indigo-600',
      count: 86,
      subcategories: ['Deep Learning', 'NLP', 'Computer Vision', 'MLOps']
    },
    // ... other categories
  ];

  const events = {
    conferences: [
      {
        id: 1,
        title: "HTMD Conference",
        date: "Dec 07, 2024",
        time: "9:00 AM - 5:00 PM",
        location: "Lavelle Road, Bengaluru",
        venue: "Microsoft reactor-Lavelle Road",
        rating: 4.8,
        attendees: 1200,
        price: "$299",
        type: "Conference",
        image: image1,
        tags: ["Technology", "Innovation", "AI"]
      },
      {
        id: 3,
        title: "HTMD Conference",
        date: "Dec 07, 2024",
        time: "9:00 AM - 5:00 PM",
        location: "Lavelle Road, Bengaluru",
        venue: "Microsoft reactor-Lavelle Road",
        rating: 4.8,
        attendees: 1200,
        price: "$299",
        type: "Conference",
        image: image3,
        tags: ["Technology", "Innovation", "AI"]
      },
      {
        id: 4,
        title: "HTMD Conference",
        date: "Dec 07, 2024",
        time: "9:00 AM - 5:00 PM",
        location: "Lavelle Road, Bengaluru",
        venue: "Microsoft reactor-Lavelle Road",
        rating: 4.8,
        attendees: 1200,
        price: "$299",
        type: "Conference",
        image: image4,
        tags: ["Technology", "Innovation", "AI"]
      },

      // ... other conferences
    ],
    workshops: [
      {
        id: 4,
        title: "AI Camp",
        date: "Dec 07, 2024",
        time: "10:00 AM - 1:00 PM",
        location: "Benagaluru",
        venue: "Yuvapatha",
        rating: 4.7,
        attendees: 300,
        price: "Free",
        type: "Workshop",
        image: image4,
        tags: ["AI", "ML", "Hands-on"]
      },
      {
        id: 5,
        title: "AI Camp",
        date: "Dec 07, 2024",
        time: "10:00 AM - 1:00 PM",
        location: "Benagaluru",
        venue: "Yuvapatha",
        rating: 4.7,
        attendees: 300,
        price: "Free",
        type: "Workshop",
        image: image5,
        tags: ["AI", "ML", "Hands-on"]
      },
      {
              id: 6,
              title: "DevOps Masterclass",
              date: "Dec 12, 2024",
              time: "10:00 AM - 4:00 PM",
              location: "Koramangala, Bengaluru",
              venue: "Tech Center",
              rating: 4.8,
              attendees: 200,
              price: "$79",
              type: "Workshop",
              image: image6,
              tags: ["DevOps", "Docker", "Kubernetes"]
            }
      // ... other workshops
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-secondary-50">
      <section className="relative bg-primary-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero section content */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-tertiary-900 opacity-90" />
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          {/* Search and filters */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-700/40 rounded-full backdrop-blur-sm border border-primary-600/20 mb-8">
            <Rocket className="w-4 h-4 text-tertiary-300" />
            <span className="text-sm text-primary-100">Tech Events & Hackathons</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-secondary-50 mb-6">
            Discover Tech Events by Category
          </h1>

          <div className="max-w-2xl mx-auto mb-12 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400" />
              <input
                type="text"
                placeholder="Search events by technology, stack, or platform..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-secondary-50/10 backdrop-blur-md border border-primary-700/30 text-secondary-50 placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-tertiary-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <LocationDropdown 
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </div>

          {/* Map Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img src={mapimage} alt="Event locations map" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 right-4 px-4 py-2 bg-primary-900/90 text-secondary-50 rounded-lg backdrop-blur-sm cursor-pointer hover:bg-primary-800/90 transition-colors">
                View full map
              </div>
            </div>
          </div>

          {/* Date Filters */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl font-semibold text-secondary-50 mb-6">
              Discover events by date
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Today', 'Tomorrow', 'This weekend', 'Next weekend', 'Choose date', 'All upcoming'].map(date => (
                <DateFilterButton 
                  key={date}
                  label={date} 
                  onClick={() => setSelectedDate(date.toLowerCase().replace(' ', '-'))}
                  isActive={selectedDate === date.toLowerCase().replace(' ', '-')}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Sections */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EventCarousel events={events.conferences} title="Featured Conferences" />
          <EventCarousel events={events.workshops} title="Technical Workshops" />
        </div>
      </section>
    </div>
  );
};

export default AllEvents;