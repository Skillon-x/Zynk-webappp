import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, Clock, Globe, 
  Linkedin, Twitter, Facebook, MessageCircle,
  Building2, Users, Award
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    inquiryType: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/contact/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      setStatus({
        type: 'success',
        message: data.message
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to submit form. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Animated Background */}
        <div className="relative text-center mb-16 p-8 rounded-2xl bg-purple-800/30 backdrop-blur-sm border border-purple-700">
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transform rotate-12"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          </div>
          
          <div className="relative">
            <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Have questions about Zynk? We're here to help you discover, connect, and grow through innovative tech events.
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
              {[
                { icon: Users, label: 'Active Users', value: '50K+' },
                { icon: Building2, label: 'Global Partners', value: '100+' },
                { icon: Award, label: 'Event Success Rate', value: '99%' }
              ].map((stat, index) => (
                <div key={index} className="bg-purple-800/50 p-4 rounded-xl border border-purple-600/50 backdrop-blur-sm">
                  <stat.icon className="h-8 w-8 text-purple-300 mx-auto mb-2" />
                  <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                  <p className="text-purple-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {[
              {
                icon: <Mail className="h-6 w-6 text-purple-300" />,
                title: 'Email Us',
                lines: ['support@zynk.com', 'partnerships@zynk.com'],
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: <Phone className="h-6 w-6 text-blue-300" />,
                title: 'Call Us',
                lines: ['Main: +1 (555) 123-4567', 'Support: +1 (555) 987-6543'],
                gradient: 'from-blue-500 to-purple-500'
              },
              {
                icon: <MapPin className="h-6 w-6 text-pink-300" />,
                title: 'Visit Us',
                lines: ['123 Tech Hub Street', 'Innovation City, IC 12345'],
                gradient: 'from-pink-500 to-purple-500'
              },
              {
                icon: <Clock className="h-6 w-6 text-indigo-300" />,
                title: 'Business Hours',
                lines: ['Monday - Friday: 9AM - 6PM', 'Weekend: 10AM - 4PM'],
                gradient: 'from-indigo-500 to-purple-500'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-r ${item.gradient} p-1 rounded-lg transform transition-all hover:scale-105`}
              >
                <div className="bg-purple-900 p-5 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-800/50 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-purple-200">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-purple-800/30 backdrop-blur-sm rounded-lg border border-purple-700 p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="h-8 w-8 text-purple-300" />
              <div>
                <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                <p className="text-purple-200">We'll get back to you as soon as possible.</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Form fields remain the same, just updated styling */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-purple-900/50 border border-purple-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-400"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-purple-900/50 border border-purple-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-400"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-purple-200 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 bg-purple-900/50 border border-purple-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-400"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-purple-200 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 bg-purple-900/50 border border-purple-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-400"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-purple-200 mb-2">
                  Type of Inquiry *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  className="w-full px-4 py-2 bg-purple-900/50 border border-purple-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-400"
                  value={formData.inquiryType}
                  onChange={handleChange}
                >
                  <option value="">Select inquiry type</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="event">Event Organization</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-200 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 bg-purple-900/50 border border-purple-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-400"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide detailed information about your inquiry..."
                />
              </div>

              {status.message && (
                <div className={`p-4 rounded-md ${
                  status.type === 'success' 
                    ? 'bg-green-900/50 text-green-200 border border-green-500' 
                    : 'bg-red-900/50 text-red-200 border border-red-500'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-4 rounded-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-16">
          {[
            { icon: Linkedin, label: 'LinkedIn', color: 'from-blue-500 to-blue-600' },
            { icon: Twitter, label: 'Twitter', color: 'from-purple-500 to-pink-500' },
            { icon: Facebook, label: 'Facebook', color: 'from-indigo-500 to-blue-500' }
          ].map((social, index) => (
            <button
              key={index}
              className={`px-6 py-3 bg-gradient-to-r ${social.color} rounded-lg flex items-center gap-2 hover:scale-105 transition-transform`}
            >
              <social.icon className="h-5 w-5 text-white" />
              <span className="text-white">{social.label}</span>
            </button>
          ))}
        </div>

        {/* Global Reach Section */}
        <div className="text-center bg-purple-800/30 backdrop-blur-sm rounded-lg border border-purple-700 p-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Globe className="h-8 w-8 text-purple-300" />
            <h2 className="text-2xl font-bold text-white">Global Reach</h2>
          </div>
          <p className="text-purple-200 max-w-2xl mx-auto">
            With offices and partners worldwide, Zynk is committed to supporting tech communities across the globe.
            Our platform connects event organizers and attendees from over 50 countries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;