import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-b from-secondary-100 to-secondary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary-700 mb-4">Get in Touch</h1>
          <p className="text-xl text-tertiary-700 max-w-3xl mx-auto mb-8">
            Have questions about Zynk? We're here to help you discover, connect, and grow through innovative tech events.
            Our dedicated team is ready to assist you with any inquiries.
          </p>
          <div className="flex justify-center space-x-4">
            {['linkedin', 'twitter', 'facebook'].map((social) => (
              <button
                key={social}
                className="px-4 py-2 border border-primary-200 rounded-md flex items-center gap-2 hover:bg-primary-50 transition-colors text-primary-700"
              >
                {social === 'linkedin' && <Linkedin className="h-5 w-5" />}
                {social === 'twitter' && <Twitter className="h-5 w-5" />}
                {social === 'facebook' && <Facebook className="h-5 w-5" />}
                {social.charAt(0).toUpperCase() + social.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {[
              {
                icon: <Mail className="h-6 w-6 text-primary-700" />,
                title: 'Email Us',
                lines: ['support@zynk.com', 'partnerships@zynk.com']
              },
              {
                icon: <Phone className="h-6 w-6 text-primary-700" />,
                title: 'Call Us',
                lines: ['Main: +1 (555) 123-4567', 'Support: +1 (555) 987-6543']
              },
              {
                icon: <MapPin className="h-6 w-6 text-primary-700" />,
                title: 'Visit Us',
                lines: ['123 Tech Hub Street', 'Innovation City, IC 12345']
              },
              {
                icon: <Clock className="h-6 w-6 text-primary-700" />,
                title: 'Business Hours',
                lines: ['Monday - Friday: 9AM - 6PM', 'Weekend: 10AM - 4PM']
              }
            ].map((item, index) => (
              <div key={index} className="bg-secondary rounded-lg shadow-md p-6 transform transition-all hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary-700">{item.title}</h3>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-tertiary-700">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-secondary rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary-700 mb-2">Send us a Message</h2>
            <p className="text-tertiary-700 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-primary-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-primary-700 mb-2">
                  Type of Inquiry *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  className="w-full px-4 py-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide detailed information about your inquiry..."
                />
              </div>

              {status.message && (
                <div className={`p-4 rounded-md ${status.type === 'success' ? 'bg-primary-100 text-primary-700' : 'bg-red-50 text-red-800'}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-700 hover:bg-primary-800 text-secondary font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-secondary mr-2"></div>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Global Reach Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Globe className="h-6 w-6 text-primary-700" />
            <h2 className="text-2xl font-bold text-primary-700">Global Reach</h2>
          </div>
          <p className="text-tertiary-700 max-w-2xl mx-auto">
            With offices and partners worldwide, Zynk is committed to supporting tech communities across the globe.
            Our platform connects event organizers and attendees from over 50 countries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;