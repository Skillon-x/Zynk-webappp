import React, { useState, useEffect } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie,
  Cell, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, AreaChart, Area,
  RadialBarChart, RadialBar
} from 'recharts';
import { 
  Users, Video, PersonStanding, Terminal, Shield, 
  Database, Globe, Calendar, TrendingUp, Filter,
  Award, Trophy, Target, Zap, Crown, Star
} from 'lucide-react';

const EventAnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const attendanceData = {
    total: 12458,
    online: 8245,
    offline: 4213,
    domains: {
      'AI/ML': 4532,
      'Blockchain': 2845,
      'Cybersecurity': 2956,
      'Web Development': 2125
    },
    eventTypes: {
      'Hackathons': 5245,
      'Workshops': 3568,
      'Conferences': 2456,
      'Meetups': 1189
    },
    achievements: [
      { name: 'Event Master', value: 85, fill: '#9333EA' },
      { name: 'Network Pro', value: 75, fill: '#A855F7' },
      { name: 'Knowledge Seeker', value: 92, fill: '#7C3AED' },
      { name: 'Community Builder', value: 88, fill: '#8B5CF6' }
    ],
    trendData: [
      { month: 'Jan', attendees: 980, online: 650, offline: 330, engagement: 78 },
      { month: 'Feb', attendees: 1200, online: 820, offline: 380, engagement: 82 },
      { month: 'Mar', attendees: 1100, online: 750, offline: 350, engagement: 85 },
      { month: 'Apr', attendees: 1400, online: 950, offline: 450, engagement: 88 },
      { month: 'May', attendees: 1300, online: 880, offline: 420, engagement: 92 },
      { month: 'Jun', attendees: 1500, online: 1020, offline: 480, engagement: 95 }
    ]
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-purple-900 flex items-center justify-center">
        <div className="space-y-4 flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-purple-200 animate-pulse">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Event Analytics</h1>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-purple-200">Live Dashboard</p>
            </div>
          </div>
          <div className="flex gap-4">
            <select
              className="bg-purple-700 text-white px-4 py-2 rounded-lg border border-purple-500 shadow-lg"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
            <button className="bg-purple-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-400 transition-colors shadow-lg">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: 'Total Attendees',
              value: attendanceData.total,
              icon: Users,
              change: '+12.5%',
              gradient: 'from-purple-500 to-pink-500'
            },
            {
              title: 'Online Participants',
              value: attendanceData.online,
              icon: Video,
              change: '+8.2%',
              gradient: 'from-blue-500 to-purple-500'
            },
            {
              title: 'Offline Participants',
              value: attendanceData.offline,
              icon: PersonStanding,
              change: '+5.3%',
              gradient: 'from-green-500 to-teal-500'
            },
            {
              title: 'Achievement Rate',
              value: '91.25%',
              icon: Trophy,
              change: '+3.2%',
              gradient: 'from-orange-500 to-yellow-500'
            }
          ].map((stat, index) => (
            <div key={index} className={`bg-gradient-to-br ${stat.gradient} p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white/80 mb-1">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-white">
                    {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                  </h3>
                </div>
                <stat.icon className="w-8 h-8 text-white/80" />
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-white" />
                  <span className="text-sm text-white">{stat.change} from last period</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Engagement Trend */}
          <div className="bg-purple-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-purple-700">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Engagement Metrics
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={attendanceData.trendData}>
                  <defs>
                    <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9333EA" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#9333EA" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                  <XAxis dataKey="month" stroke="#E5E7EB" />
                  <YAxis stroke="#E5E7EB" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#E5E7EB'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="engagement"
                    stroke="#9333EA"
                    fillOpacity={1}
                    fill="url(#colorEngagement)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Achievement Progress */}
          <div className="bg-purple-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-purple-700">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Crown className="w-5 h-5" />
              Achievement Progress
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="20%"
                  outerRadius="90%"
                  data={attendanceData.achievements}
                  startAngle={180}
                  endAngle={0}
                >
                  <RadialBar
                    minAngle={15}
                    background
                    clockWise={true}
                    dataKey="value"
                    cornerRadius={10}
                  />
                  <Legend
                    iconSize={10}
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                    wrapperStyle={{ color: '#E5E7EB' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#E5E7EB'
                    }}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Domain Distribution */}
          <div className="bg-purple-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-purple-700">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Domain Distribution
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={Object.entries(attendanceData.domains).map(([name, value]) => ({
                      name,
                      value
                    }))}
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {Object.entries(attendanceData.domains).map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={['#9333EA', '#A855F7', '#7C3AED', '#8B5CF6'][index]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#E5E7EB'
                    }}
                  />
                  <Legend wrapperStyle={{ color: '#E5E7EB' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Event Success Metrics */}
          <div className="bg-purple-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-purple-700">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Star className="w-5 h-5" />
              Event Success Metrics
            </h3>
            <div className="space-y-6">
              {Object.entries(attendanceData.eventTypes).map(([type, value], index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-200">{type}</span>
                    <span className="text-white font-medium">{value.toLocaleString()} attendees</span>
                  </div>
                  <div className="w-full bg-purple-900/50 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${(value / Math.max(...Object.values(attendanceData.eventTypes))) * 100}%` 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Terminal, label: 'AI/ML Master', value: '4.5k', color: 'from-purple-500 to-pink-500' },
            { icon: Database, label: 'Blockchain Expert', value: '2.8k', color: 'from-blue-500 to-purple-500' },
            { icon: Shield, label: 'Security Guru', value: '3.0k', color: 'from-indigo-500 to-purple-500' },
            { icon: Zap, label: 'Web Wizard', value: '2.1k', color: 'from-pink-500 to-purple-500' }
          ].map((achievement, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${achievement.color} p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform cursor-pointer ${activeIndex === index ? 'ring-2 ring-white/50' : ''}`}
            >
              <achievement.icon className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white font-medium">{achievement.label}</h4>
              <p className="text-white/80 text-sm mt-1">{achievement.value} achievers</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventAnalyticsDashboard;