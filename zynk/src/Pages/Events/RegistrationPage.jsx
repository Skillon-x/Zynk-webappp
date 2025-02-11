import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    eventChoice: '',
    dietaryRestrictions: '',
    tShirtSize: '',
    referralSource: ''
  });

  const [progress, setProgress] = useState(650);
  const maxProgress = 1000;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setProgress(Math.min(progress + 100, maxProgress));
    alert('Registration Successful! Get ready for an amazing event!');
  };

  return (
    <div className="min-h-screen bg-purple-900 py-8 px-4">
      {/* Progress Section */}
      <div className="max-w-md mx-auto bg-purple-800 rounded-lg shadow p-6 mb-6">
        <h1 className="text-3xl font-bold mb-4 text-blue-200">Your Event Journey</h1>
        <p className="text-xl text-white mb-2">Level 1</p>
        <div className="bg-purple-950 rounded-full h-4 mb-2">
          <div 
            className="bg-gradient-to-r from-blue-400 to-purple-500 h-full rounded-full"
            style={{ width: `${(progress / maxProgress) * 100}%` }}
          />
        </div>
        <p className="text-white">{progress} / {maxProgress} XP</p>
      </div>

      {/* Main Form */}
      <div className="max-w-md mx-auto bg-purple-800 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6 text-white">Event Registration</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-200">Basic Information</h3>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded bg-purple-950 text-white border-purple-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded bg-purple-950 text-white border-purple-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded bg-purple-950 text-white border-purple-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                placeholder="+1 (234) 567-8901"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                Organization
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full p-2 border rounded bg-purple-950 text-white border-purple-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                placeholder="Your company or organization"
              />
            </div>
          </div>

          {/* Event Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-200">Event Details</h3>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                Select Your Event *
              </label>
              <select
                name="eventChoice"
                value={formData.eventChoice}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded bg-purple-950 text-white border-purple-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
              >
                <option value="">Choose an event</option>
                <option value="trivia">Event Trivia (50 coins)</option>
                <option value="race">Network Race (Explorer Badge)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                T-Shirt Size
              </label>
              <select
                name="tShirtSize"
                value={formData.tShirtSize}
                onChange={handleChange}
                className="w-full p-2 border rounded bg-purple-950 text-white border-purple-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
              >
                <option value="">Select size</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">X-Large</option>
                <option value="2XL">2X-Large</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                Dietary Restrictions
              </label>
              <textarea
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                className="w-full p-2 border rounded bg-purple-950 text-white border-purple-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                placeholder="Please list any dietary restrictions or allergies"
                rows="3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                How did you hear about us?
              </label>
              <select
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
                className="w-full p-2 border rounded bg-purple-950 text-white border-purple-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
              >
                <option value="">Select option</option>
                <option value="social">Social Media</option>
                <option value="friend">Friend/Colleague</option>
                <option value="email">Email Newsletter</option>
                <option value="search">Search Engine</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-purple-900 p-4 rounded-lg flex items-start space-x-3">
            <AlertCircle className="text-blue-300 w-5 h-5 mt-0.5" />
            <div className="text-sm text-blue-200">
              <p className="font-semibold">Important Information</p>
              <p>Registration grants you access to all event activities and includes:</p>
              <ul className="list-disc ml-4 mt-2">
                <li>Event swag bag with exclusive merchandise</li>
                <li>Access to networking sessions</li>
                <li>Participation in interactive games</li>
                <li>Chance to earn special badges and rewards</li>
              </ul>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-colors"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;