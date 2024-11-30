import React, { useState } from 'react';
import { Calendar, MapPin, Star, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import image1 from "../../assets/FeaturedEvents/htmd.png"
import image2 from "../../assets/Conference/devops.png"
import image4 from "../../assets/Featuredevents/AIcamp.png"
import image3 from "../../assets/Conference/web3.png"
import image5 from "../../assets/Conference/blockchain.png"
import image6 from "../../assets/Conference/devops.png"
import image7 from "../../assets/Conference/datascience.png"
const EventCard = ({ event }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-secondary-200 hover:shadow-lg transition-all h-full">
    <div className="relative">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 left-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          event.type === 'Conference' 
            ? 'bg-primary-100 text-primary-700'
            : 'bg-tertiary-100 text-tertiary-700'
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
          <span
            key={tag}
            className="px-3 py-1 bg-secondary-100 text-primary-600 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
        <span className="text-2xl font-bold text-primary-700">
          {event.price}
        </span>
        <button className="px-6 py-2 bg-tertiary-600 text-white rounded-lg hover:bg-tertiary-700 transition-colors">
          Register Now
        </button>
      </div>
    </div>
  </div>
);

const EventCarousel = ({ events, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalGroups = Math.ceil(events.length / 3);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalGroups);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalGroups) % totalGroups);
  };

  const getCurrentEvents = () => {
    const startIdx = currentIndex * 3;
    return events.slice(startIdx, startIdx + 3);
  };

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

const Conference = () => {
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
        id: 2,
        title: "DevOps India Summit",
        date: "Dec 15, 2024",
        time: "9:00 AM - 6:00 PM",
        location: "Whitefield, Bengaluru",
        venue: "Marriott Convention Center",
        rating: 4.7,
        attendees: 800,
        price: "$199",
        type: "Conference",
        image: image2,
        tags: ["DevOps", "Cloud", "Infrastructure"]
      },
      {
        id: 3,
        title: "Web3 Conference",
        date: "Dec 20, 2024",
        time: "9:00 AM - 6:00 PM",
        location: "Whitefield, Bengaluru",
        venue: "Sheraton Grand",
        rating: 4.9,
        attendees: 600,
        price: "$249",
        type: "Conference",
        image: image3,
        tags: ["Web3", "Blockchain", "DeFi"]
      },
      {
        id: 6,
        title: "Cloud Summit",
        date: "Dec 22, 2024",
        time: "9:00 AM - 6:00 PM",
        location: "Electronic City, Bengaluru",
        venue: "Tech Park Convention Center",
        rating: 4.8,
        attendees: 900,
        price: "$279",
        type: "Conference",
        image: image4,
        tags: ["Cloud", "AWS", "Azure"]
      }
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
        title: "Blockchain Workshop",
        date: "Dec 10, 2024",
        time: "2:00 PM - 6:00 PM",
        location: "Indiranagar, Bengaluru",
        venue: "Tech Hub",
        rating: 4.9,
        attendees: 150,
        price: "$49",
        type: "Workshop",
        image: image5,
        tags: ["Blockchain", "Web3", "DApps"]
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
      },
      {
        id: 7,
        title: "Data Science Workshop",
        date: "Dec 14, 2024",
        time: "9:00 AM - 5:00 PM",
        location: "HSR Layout, Bengaluru",
        venue: "Analytics Hub",
        rating: 4.6,
        attendees: 250,
        price: "$69",
        type: "Workshop",
        image: image7,
        tags: ["Data Science", "Python", "Analytics"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-800 mb-4">
            Tech Events & Learning Opportunities
          </h1>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Whether you're looking for in-depth conferences or hands-on workshops, 
            find the perfect learning experience to boost your tech career.
          </p>
        </div>

        <EventCarousel events={events.conferences} title="Featured Conferences" />
        <EventCarousel events={events.workshops} title="Technical Workshops" />
      </div>
    </div>
  );
};

export default Conference;