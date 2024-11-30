import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from "lucide-react";
import image1 from "../../assets/FeaturedHackathons/GenAI.png"
import image2 from "../../assets/FeaturedHackathons/Ethindia.jpeg"
import image3 from "../../assets/FeaturedHackathons/GenAI.png"
import image4 from "../../assets/FeaturedHackathons/GenAI.png"
import image5 from "../../assets/FeaturedHackathons/GenAI.png"
import image6 from "../../assets/FeaturedHackathons/GenAI.png"
import image7 from "../../assets/FeaturedHackathons/GenAI.png"
import image8 from "../../assets/FeaturedHackathons/GenAI.png"
import image9 from "../../assets/FeaturedHackathons/GenAI.png"
import image10 from "../../assets/FeaturedHackathons/GenAI.png"

const Hackathon = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'aiml', label: 'AI & ML' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const hackathons = [
    {
      id: 1,
      title: 'Gen AI',
      category: 'aiml',
      image: image1,
      date: 'Dec 6-8, 2024',
      location: 'Thomson Reuters',
      participants: '200 participating',
      tags: ['AI', 'Machine Learning', 'Gen AI'],
      sponsors: ['Thomson Reuters'],
      prizePool: 'TBA',
      isHot: true
    },
    {
      id: 2,
      title: 'ETHINDIA',
      category: 'blockchain',
      image: image2,
      date: 'Dec 6-8, 2024',
      location: 'KTPO,Bengaluru',
      participants: '800 participating',
      tags: ['Web3', 'DeFi', 'Blockchain'],
      sponsors: ['Ethereum Foundation', 'Binance', 'Polygon'],
      prizePool: '35,000',
      isHot: true
    },
    {
      id: 3,
      title: 'CyberSecurity Hackathon',
      category: 'cybersecurity',
      image: image3,
      date: 'Dec 4-6, 2024',
      location: 'Pullman,Delhi',
      participants: '600 participating',
      tags: ['Security', 'CTF', 'Network'],
      sponsors: ['CrowdStrike', 'FireEye', 'Cisco'],
      prizePool: '4,50,000',
      isHot: false
    },
    {
      id: 4,
      title: 'Defy25',
      category: 'blockchain',
      image: image4,
      date: 'Dec 8-10,2025',
      location: 'Online',
      participants: '800 participating',
      tags: ['Web3', 'DeFi', 'Blockchain'],
      sponsors: ['Ethereum Foundation', 'Binance', 'Polygon'],
      prizePool: '$550',
      isHot: true
    },
    {
      id: 5,
      title: 'GenAI Mixer',
      category: 'aiml',
      image: image5,
      date: 'Dec 14,2025',
      location: 'Elastic technologies pvt ltd',
      participants: '200 participating',
      tags: ['AI', 'GenAI'],
      sponsors: ['Ethereum Foundation', 'Binance', 'Polygon'],
      prizePool: '35,000',
      isHot: true
    },
    {
      id: 6,
      title: 'Defy25',
      category: 'Code Kshetra',
      image: image6,
      date: 'Feb 21-22,2025',
      location: 'New Delhi',
      participants: '200 participating',
      tags: ['Web3', 'DeFi', 'Blockchain'],
      sponsors: ['Ethereum Foundation', 'Binance', 'Polygon'],
      prizePool: '$550',
      isHot: true
    },
    {
      id: 7,
      title: 'Full stack dev',
      category: 'fullstack',
      image: '/images/ethereum-hackathon.jpg',
      date: 'image7',
      location: 'Online',
      participants: '50 participating',
      tags: ['Webdev', 'Full Stack', 'React'],
      sponsors: ['Ethereum Foundation', 'Binance', 'Polygon'],
      prizePool: '5000',
      isHot: true
    },
    {
      id: 8,
      title: 'CTF',
      category: 'cybersecurity',
      image: image8,
      date: 'Dec 8-10,2025',
      location: 'Offline',
      participants: '50 participating',
      tags: ['CTF', 'Hack', 'Capture the flag'],
      sponsors: ['TBA'],
      prizePool: '50000',
      isHot: true
    }, 
    {
      id: 9,
      title: 'Full stack dev',
      category: 'fullstack',
      image: image9,
      date: 'Dec 8-10,2025',
      location: 'Online',
      participants: '50 participating',
      tags: ['Webdev', 'Full Stack', 'React'],
      sponsors: ['Ethereum Foundation', 'Binance', 'Polygon'],
      prizePool: '1000',
      isHot: true
    },
    {
      id: 10,
      title: 'React Dev',
      category: 'fullstack',
      image: '/images/ethereum-hackathon.jpg',
      date: image10,
      location: 'Online',
      participants: '50 participating',
      tags: ['Webdev', 'Full Stack', 'React'],
      sponsors: ['Godaddy', 'XYZ', 'Polygon'],
      prizePool: '2000',
      isHot: false
    },
  
  ];

  const filteredHackathons = activeCategory === 'all' 
    ? hackathons 
    : hackathons.filter(hack => hack.category === activeCategory);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === Math.ceil(filteredHackathons.length / 3) - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(filteredHackathons.length / 3) - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-700 mb-4">
          Join the most exciting tech challenges and competitions
        </h1>
        <p className="text-gray-600 text-lg">
          Discover hackathons that match your interests and skills
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              setCurrentSlide(0);
            }}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === category.id
                ? 'bg-primary-700 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Hackathon Cards Carousel */}
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {filteredHackathons.map((hackathon) => (
                <div key={hackathon.id} className="w-full min-w-[33.333%] px-4">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Card Image */}
                    <div className="relative h-48 bg-gray-200">
                      <img
                        src="/api/placeholder/400/320"
                        alt={hackathon.title}
                        className="w-full h-full object-cover"
                      />
                      {hackathon.isHot && (
                        <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                          Hot
                        </span>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{hackathon.title}</h3>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hackathon.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          {hackathon.date}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {hackathon.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          {hackathon.participants}
                        </div>
                      </div>

                      {/* Sponsors */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {hackathon.sponsors.map((sponsor) => (
                            <span
                              key={sponsor}
                              className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm"
                            >
                              {sponsor}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Prize Pool & Register Button */}
                      <div className="flex items-center justify-between mt-4">
                        <div>
                          <p className="text-sm text-gray-600">Prize Pool</p>
                          <p className="text-xl font-bold text-primary-700">
                            ₹{hackathon.prizePool}
                          </p>
                        </div>
                        <button className="bg-primary-700 text-white px-6 py-2 rounded-lg hover:bg-primary-800 transition-colors">
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;