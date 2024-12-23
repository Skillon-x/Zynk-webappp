import React, { useState } from 'react';
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  X,
  ChevronRight
} from 'lucide-react';

const EventRegistrationModal = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    experience: '',
    dietaryRestrictions: '',
    acceptTerms: false,
    receiveUpdates: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name) => {
    setFormData(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      onClose();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900 rounded-lg shadow-xl">
        <div className="relative border-b border-blue-700/30 p-6">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-blue-200 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                event.type === 'Conference' 
                  ? 'bg-blue-700/40 text-blue-100'
                  : 'bg-indigo-700/40 text-indigo-100'
              }`}>
                {event.type}
              </span>
              <div className="flex items-center bg-white/10 rounded-full px-2 py-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="ml-1 text-sm font-medium text-white">{event.rating}</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white">{event.title}</h2>
            
            <div className="grid grid-cols-2 gap-4 text-blue-100">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {event.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {event.time}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {event.venue}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {event.attendees} attending
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-700/40 text-blue-100 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-blue-100">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-blue-800/50 border border-blue-700/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-blue-100">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-blue-800/50 border border-blue-700/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-blue-100">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-blue-800/50 border border-blue-700/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="experience" className="block text-sm font-medium text-blue-100">
                  Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-blue-800/50 border border-blue-700/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-blue-100">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-blue-800/50 border border-blue-700/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your company name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="jobTitle" className="block text-sm font-medium text-blue-100">
                  Job Title
                </label>
                <input
                  id="jobTitle"
                  name="jobTitle"
                  type="text"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-blue-800/50 border border-blue-700/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your job title"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={() => handleCheckboxChange('acceptTerms')}
                  className="w-4 h-4 rounded border-blue-700/30 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="acceptTerms" className="text-sm text-blue-100">
                  I agree to the terms and conditions
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="receiveUpdates"
                  checked={formData.receiveUpdates}
                  onChange={() => handleCheckboxChange('receiveUpdates')}
                  className="w-4 h-4 rounded border-blue-700/30 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="receiveUpdates" className="text-sm text-blue-100">
                  Keep me updated about future events
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-blue-700/30">
              <span className="text-2xl font-bold text-white">
                {event.price}
              </span>
              <button 
                type="submit" 
                className="px-8 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting || !formData.acceptTerms}
              >
                {isSubmitting ? 'Processing...' : 'Complete Registration'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventRegistrationModal;