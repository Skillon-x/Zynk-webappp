import React from 'react';
import { Search, ArrowRight, Sparkles } from 'lucide-react';
import HeroImage from "../../assets/BackgroundImage.jpeg"; 
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleEvents = () => {
    navigate('events/all');

    

  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary-800 via-primary-700 to-tertiary-700 overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tertiary-500 rounded-full filter blur-[120px] opacity-20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full filter blur-[120px] opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Header Section */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600/20 rounded-full backdrop-blur-sm border border-primary-300/20">
                <Sparkles className="w-4 h-4 text-primary-200" />
                <span className="text-sm text-primary-100">Discover Amazing Events</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-secondary-50 leading-tight">
                Connect, Learn & 
                <span className="text-tertiary-200"> Grow Together</span>
              </h1>
              
              <p className="text-xl text-primary-100 max-w-xl">
                Join events that match your interests and connect with professionals who share your passion.
              </p>
            </div>

            {/* Explore Events Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button  
                onClick={handleEvents} 
                className="px-8 py-4 bg-tertiary-600 hover:bg-tertiary-500 text-secondary-50 rounded-xl font-medium transition-all flex items-center gap-2 group"
              >
                Explore Events
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: "10K+", label: "Events" },
                { number: "50K+", label: "Users" },
                { number: "100+", label: "Cities" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-secondary-50">{stat.number}</div>
                  <div className="text-primary-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-primary-600/30 to-tertiary-600/30 backdrop-blur-md border border-primary-300/20">
                <img src={HeroImage} alt="Hero" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-tertiary-600 rounded-full filter blur-[80px] opacity-20" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-400 rounded-full filter blur-[60px] opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
