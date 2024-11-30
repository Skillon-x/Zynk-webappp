import React, { useState } from 'react';
import { Code, Globe, Users, Calendar, Trophy, Link, Award } from 'lucide-react';

const OrganizeEvent = () => {
  const tabs = [
    { id: 'basic', label: 'Basic Info', icon: Code },
    { id: 'team', label: 'Team & Domain', icon: Users },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'location', label: 'Location & Contact', icon: Globe },
    { id: 'social', label: 'Social Media', icon: Link },
    { id: 'prizes', label: 'Prizes & Sponsors', icon: Trophy },
    { id: 'judges', label: 'Judges & Speakers', icon: Award }
  ];

  const [activeTab, setActiveTab] = useState('basic');
  const [formData, setFormData] = useState({
    // Basic Details
    name: '',
    tagline: '',
    description: '',
    format: 'online',
    university: '',
    participationFee: '',
    expectedParticipants: '',
    
    // Team & Domain
    minTeamSize: '',
    maxTeamSize: '',
    domains: [],
    
    // Timeline
    applicationStart: '',
    applicationEnd: '',
    hackathonStart: '',
    hackathonEnd: '',
    resultsDate: '',
    
    // Location & Contact
    venue: '',
    city: '',
    organizerPhone: '',
    organizerEmail: '',
    websiteUrl: '',
    
    // Social Media
    twitter: '',
    linkedin: '',
    discord: '',
    instagram: '',
    
    // Prizes & Sponsorship
    prizes: {
      first: '',
      second: '',
      third: '',
      special: ''
    },
    sponsors: [''],
    partners: [''],
    
    // Judges & Speakers
    judges: [{
      name: '',
      designation: '',
      organization: '',
      linkedinProfile: ''
    }],
    speakers: [{
      name: '',
      topic: '',
      organization: '',
      linkedinProfile: ''
    }]
  });

  const TabButton = ({ tab, isActive }) => (
    <button
      onClick={() => setActiveTab(tab.id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        isActive 
          ? 'bg-primary-700 text-white' 
          : 'text-primary-600 hover:bg-primary-50'
      }`}
    >
      <tab.icon className="w-5 h-5" />
      <span>{tab.label}</span>
    </button>
  );

  // Rest of the component remains the same...
  const renderBasicInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            Hackathon Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500"
            placeholder="Enter hackathon name"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            Tagline
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500"
            placeholder="Enter a catchy tagline"
            value={formData.tagline}
            onChange={e => setFormData({...formData, tagline: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            Description
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500"
            placeholder="Enter description of Hackathon"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            Name of the Organizing Institution
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500"
            placeholder="Enter your organization"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
           Theme(e.g., AI, Fintech, Healthcare, etc.)
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500"
            placeholder="Enter the theme"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
          Participation Fee
          </label>
          <input
            type="number"
            min="1"
            className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500"
            value={formData.participationFee}
            onChange={e => setFormData({...formData, maxTeamSize: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            Expected Participants
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500"
            placeholder="Enter expected number"
            value={formData.expectedParticipants}
            onChange={e => setFormData({...formData, expectedParticipants: e.target.value})}
          />
        </div>
        
        
      </div>
    </div>
  );

  const renderTeamDomain = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            Minimum Team Size
          </label>
          <input
            type="number"
            min="1"
            className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500"
            value={formData.minTeamSize}
            onChange={e => setFormData({...formData, minTeamSize: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            Maximum Team Size
          </label>
          <input
            type="number"
            min="1"
            className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500"
            value={formData.maxTeamSize}
            onChange={e => setFormData({...formData, maxTeamSize: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary-700 mb-1">
            Domain (AI,Cybersecurity,Blockchain,Frontend etc)
          </label>
          <input
            type="number"
            min="1"
            className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500"
            value={formData.maxTeamSize}
            onChange={e => setFormData({...formData, maxTeamSize: e.target.value})}
          />
        </div>
       
        

      </div>
    </div>
  );

  const renderTimeline = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {label: 'Application Start', key: 'applicationStart'},
          {label: 'Application End', key: 'applicationEnd'},
          {label: 'Hackathon Start', key: 'hackathonStart'},
          {label: 'Hackathon End', key: 'hackathonEnd'},
          {label: 'Results Date', key: 'resultsDate'}
        ].map(({label, key}) => (
          <div key={key}>
            <label className="block text-sm font-medium text-primary-700 mb-1">
              {label}
            </label>
            <input
              type="datetime-local"
              className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500"
              value={formData[key]}
              onChange={e => setFormData({...formData, [key]: e.target.value})}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderLocationContact = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {label: 'Venue', key: 'venue', type: 'text'},
          {label: 'City', key: 'city', type: 'text'},
          {label: 'Organizer Phone', key: 'organizerPhone', type: 'tel'},
          {label: 'Organizer Email', key: 'organizerEmail', type: 'email'},
          {label: 'Website URL', key: 'websiteUrl', type: 'url'}
        ].map(({label, key, type}) => (
          <div key={key}>
            <label className="block text-sm font-medium text-primary-700 mb-1">
              {label}
            </label>
            <input
              type={type}
              className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500"
              value={formData[key]}
              onChange={e => setFormData({...formData, [key]: e.target.value})}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderSocialMedia = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {label: 'Twitter/X Profile', key: 'twitter'},
          {label: 'LinkedIn Page', key: 'linkedin'},
          {label: 'Discord Server', key: 'discord'},
          {label: 'Instagram Profile', key: 'instagram'}
        ].map(({label, key}) => (
          <div key={key}>
            <label className="block text-sm font-medium text-primary-700 mb-1">
              {label}
            </label>
            <input
              type="url"
              className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500"
              value={formData[key]}
              onChange={e => setFormData({...formData, [key]: e.target.value})}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderPrizesSponsors = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {['first', 'second', 'third', 'special'].map((prize) => (
          <div key={prize}>
            <label className="block text-sm font-medium text-primary-700 mb-1">
              {prize.charAt(0).toUpperCase() + prize.slice(1)} Prize
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500"
              value={formData.prizes[prize]}
              onChange={e => setFormData({
                ...formData,
                prizes: {...formData.prizes, [prize]: e.target.value}
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-secondary-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary-800 mb-8">
          Organize a Hackathon
        </h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex overflow-x-auto border-b border-primary-100">
            <div className="flex space-x-2 p-4">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  tab={tab}
                  isActive={activeTab === tab.id}
                />
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'basic' && renderBasicInfo()}
            {activeTab === 'team' && renderTeamDomain()}
            {activeTab === 'timeline' && renderTimeline()}
            {activeTab === 'location' && renderLocationContact()}
            {activeTab === 'social' && renderSocialMedia()}
            {activeTab === 'prizes' && renderPrizesSponsors()}
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-primary-100 flex justify-between">
            <button
              type="button"
              className="px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg"
            >
              Save Draft
            </button>
            <button
              type="submit" 
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizeEvent;