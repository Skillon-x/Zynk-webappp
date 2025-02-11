import React, { useState } from 'react';
import ProfileImage from "../../assets/Avatar/Dhanushree.png"
import { 
  Bell, Lock, User, Globe, Moon, Key, LogOut, Shield, HelpCircle,
  Calendar, Briefcase, BookOpen, Tag, Share2, CreditCard, Activity,
  Map, Mail, Camera, Trash2, Download, Users, Terminal, Edit
} from 'lucide-react';

const Settings = () => {
  const [preferences, setPreferences] = useState({
    notifications: {
      emailNotifs: true,
      eventReminders: true,
      mentionNotifs: true,
      newsletterSub: false
    },
    privacy: {
      profileVisibility: 'public',
      showAttendance: true,
      allowTagging: true
    },
    theme: 'light'
  });

  const Section = ({ title, children, icon: Icon }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-primary-100">
      <div className="flex items-center gap-2 mb-4">
        {Icon && <Icon className="w-5 h-5 text-primary-700" />}
        <h2 className="text-xl font-semibold text-primary-700">{title}</h2>
      </div>
      {children}
    </div>
  );

  const ToggleSwitch = ({ label, checked, onChange }) => (
    <div className="flex items-center justify-between py-2">
      <span className="text-gray-700">{label}</span>
      <button
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
          ${checked ? 'bg-primary-700' : 'bg-gray-300'}`}
      >
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
          ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-primary-50/30">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary-700">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account preferences and settings</p>
        </div>

        {/* Profile Section */}
        <Section title="Profile" icon={User}>
          <div className="flex items-center gap-6 mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-primary-100 overflow-hidden">
                <img 
                  src={ProfileImage} 
                  alt="Profile"
                  className="w-full h-full object-cover" 
                />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md hover:bg-primary-50 transition-colors">
                <Camera className="w-4 h-4 text-primary-700" />
              </button>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-semibold text-primary-800">John Doe</h3>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-700">
                  Pro
                </span>
              </div>
              <p className="text-primary-600">john.doe@example.com</p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  defaultValue="John Doe"
                  className="w-full p-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-700 mb-1">Username</label>
                <input 
                  type="text" 
                  defaultValue="johndoe"
                  className="w-full p-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-1">Bio</label>
              <textarea 
                rows="3"
                defaultValue="Tech enthusiast and developer passionate about hackathons and innovative projects."
                className="w-full p-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
              />
            </div>
          </div>
        </Section>

        {/* Notifications */}
        <Section title="Notifications" icon={Bell}>
          <div className="space-y-2">
            <ToggleSwitch
              label="Email Notifications"
              checked={preferences.notifications.emailNotifs}
              onChange={() => setPreferences(prev => ({
                ...prev,
                notifications: {
                  ...prev.notifications,
                  emailNotifs: !prev.notifications.emailNotifs
                }
              }))}
            />
            <ToggleSwitch
              label="Event Reminders"
              checked={preferences.notifications.eventReminders}
              onChange={() => setPreferences(prev => ({
                ...prev,
                notifications: {
                  ...prev.notifications,
                  eventReminders: !prev.notifications.eventReminders
                }
              }))}
            />
            <ToggleSwitch
              label="Mentions & Replies"
              checked={preferences.notifications.mentionNotifs}
              onChange={() => setPreferences(prev => ({
                ...prev,
                notifications: {
                  ...prev.notifications,
                  mentionNotifs: !prev.notifications.mentionNotifs
                }
              }))}
            />
          </div>
        </Section>

        {/* Privacy */}
        <Section title="Privacy" icon={Lock}>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Profile Visibility</span>
              <select 
                value={preferences.privacy.profileVisibility}
                onChange={(e) => setPreferences(prev => ({
                  ...prev,
                  privacy: { ...prev.privacy, profileVisibility: e.target.value }
                }))}
                className="border border-primary-200 rounded-lg p-2 text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="connections">Connections Only</option>
              </select>
            </div>
            <ToggleSwitch
              label="Show Event Attendance"
              checked={preferences.privacy.showAttendance}
              onChange={() => setPreferences(prev => ({
                ...prev,
                privacy: { ...prev.privacy, showAttendance: !prev.privacy.showAttendance }
              }))}
            />
            <ToggleSwitch
              label="Allow Tagging"
              checked={preferences.privacy.allowTagging}
              onChange={() => setPreferences(prev => ({
                ...prev,
                privacy: { ...prev.privacy, allowTagging: !prev.privacy.allowTagging }
              }))}
            />
          </div>
        </Section>

        {/* Security */}
        <Section title="Security" icon={Shield}>
          <div className="space-y-4">
            <button className="flex items-center justify-between w-full p-3 text-left hover:bg-primary-50 rounded-lg group transition-colors">
              <div className="flex items-center gap-3">
                <Key className="w-5 h-5 text-primary-700" />
                <div>
                  <div className="font-medium text-primary-800">Password</div>
                  <div className="text-sm text-primary-600">Last changed 3 months ago</div>
                </div>
              </div>
              <Edit className="w-5 h-5 text-primary-400 group-hover:text-primary-700" />
            </button>
            <button className="flex items-center justify-between w-full p-3 text-left hover:bg-primary-50 rounded-lg group transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary-700" />
                <div>
                  <div className="font-medium text-primary-800">Two-Factor Authentication</div>
                  <div className="text-sm text-primary-600">Not enabled</div>
                </div>
              </div>
              <Edit className="w-5 h-5 text-primary-400 group-hover:text-primary-700" />
            </button>
          </div>
        </Section>

        {/* Account */}
        <Section title="Account" icon={User}>
          <div className="space-y-4">
            <button className="flex items-center justify-between w-full p-3 text-left hover:bg-primary-50 rounded-lg group transition-colors">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-primary-700" />
                <div className="font-medium text-primary-800">Download Your Data</div>
              </div>
              <Edit className="w-5 h-5 text-primary-400 group-hover:text-primary-700" />
            </button>
            <button className="flex items-center gap-3 w-full p-3 text-left text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <Trash2 className="w-5 h-5" />
              <span className="font-medium">Delete Account</span>
            </button>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Settings;