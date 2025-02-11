import React, { useState, useEffect } from 'react';
import { Star, Trophy, Award, Target, Users, Zap, Gift, Crown, Flame, Shield, Book, Heart,  Map, Sparkles, Gamepad, Compass, MessageCircle, Share2 } from 'lucide-react';

const GamifiedZynk = () => {
  const [userLevel, setUserLevel] = useState(1);
  const [experience, setExperience] = useState(650);
  const [streak, setStreak] = useState(4);
  const [coins, setCoins] = useState(500);
  const [showAchievement, setShowAchievement] = useState(true);
  const [currentQuest, setCurrentQuest] = useState(0);
  const [showMiniGame, setShowMiniGame] = useState(false);

  // Virtual Trophies and Achievements
  const trophies = [
    { name: 'Network Master', description: 'Connected with 100+ professionals', icon: <Users />, progress: 75 },
    { name: 'Event Pioneer', description: 'First to join 5 new event categories', icon: <Compass />, progress: 40 },
    { name: 'Community Leader', description: 'Started 10 meaningful discussions', icon: <MessageCircle />, progress: 90 }
  ];

  // Networking Bingo Card
  const bingoTasks = [
    'Meet someone from another country',
    'Share your business card',
    'Join a group discussion',
    'Take a selfie with a speaker',
    'Exchange LinkedIn profiles'
  ];

  // Mini-Games
  const miniGames = [
    { name: 'Event Trivia', reward: '50 coins' },
    { name: 'Network Race', reward: 'Explorer Badge' },
    { name: 'Knowledge Quest', reward: '100 XP' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 text-white p-8">
      {/* Gaming Hub Section */}
      <div className="mb-12 bg-gradient-to-r from-purple-800/30 to-fuchsia-800/30 p-6 rounded-2xl backdrop-blur-lg border border-purple-500/20">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center animate-pulse">
                <Gamepad className="text-white w-8 h-8" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full px-3 py-1 text-sm text-white font-bold">
                PRO
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                Gaming Center
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse mr-1"></div>
                  <span className="text-yellow-200">{coins} Coins</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-200">Level {userLevel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-800/20 to-fuchsia-800/20 p-6 rounded-2xl backdrop-blur-lg border border-purple-500/30 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-purple-200 flex items-center">
            <Gift className="mr-2 text-pink-400" />
            Daily Rewards
          </h2>
          <div className="flex items-center">
            <Sparkles className="text-yellow-400 mr-2" />
            <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300">
              Streak Bonus: +{Math.floor(streak/7)*10}% XP
            </span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-4">
          {[...Array(7)].map((_, index) => (
            <div 
              key={index}
              className={`relative h-28 rounded-xl flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 ${
                index < streak 
                  ? 'bg-gradient-to-br from-purple-600/50 to-pink-600/50 border-2 border-purple-400/50' 
                  : 'bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30 border border-purple-700/30'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                index < streak 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
                  : 'bg-gradient-to-r from-purple-800 to-purple-700'
              }`}>
                <Star className={index < streak ? 'text-white' : 'text-purple-500'} fill={index < streak ? "white" : "none"} />
              </div>
              <div className={`text-sm mt-3 font-medium ${index < streak ? 'text-purple-200' : 'text-purple-400'}`}>
                Day {index + 1}
              </div>
              {index === streak && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
       {/* Animated Top Banner */}
       <div className="relative overflow-hidden mb-12 bg-gradient-to-r from-purple-800/30 to-fuchsia-800/30 p-6 rounded-2xl backdrop-blur-lg border border-purple-500/20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-shimmer"></div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center animate-pulse">
                <Crown className="text-white w-8 h-8" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full px-3 py-1 text-sm text-white font-bold">
                Lvl {userLevel}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                Event Master
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse mr-1"></div>
                  <span className="text-yellow-200">{coins} Coins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Level Progress */}
      <div className="mb-12 text-center bg-gradient-to-br from-purple-800/20 to-fuchsia-800/20 p-8 rounded-2xl backdrop-blur-lg border border-purple-500/30">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
          Your Event Journey
        </h1>
        
        <div className="relative mb-8">
          <div className="text-3xl font-bold mb-4 text-purple-200">Level {userLevel}</div>
          <div className="w-full h-8 bg-gradient-to-r from-purple-950/50 to-fuchsia-950/50 rounded-full p-1">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 relative group"
              style={{ width: `${(experience / 1000) * 100}%` }}
            >
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full 
                             shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-lg text-purple-200">
            <span className="font-bold text-pink-300">{experience}</span>
            <span className="mx-2">/</span>
            <span className="text-purple-300">1000 XP</span>
          </div>
        </div>
      </div>

        {/* Mini-Games Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {miniGames.map((game, index) => (
            <div key={index} className="relative bg-gradient-to-br from-purple-700/30 to-fuchsia-700/30 p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 cursor-pointer group">
              <div className="absolute top-2 right-2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-xs rounded-full px-2 py-1">
                  {game.reward}
                </div>
              </div>
              <h4 className="text-lg font-bold text-purple-200 mb-2">{game.name}</h4>
              <button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:from-purple-400 hover:to-pink-400 transition-all duration-300">
                Play Now
              </button>
            </div>
          ))}
        </div>

        {/* Networking Bingo */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-purple-200 mb-4 flex items-center gap-2">
            <Target className="text-purple-300" />
            Networking Bingo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {bingoTasks.map((task, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-800/20 to-fuchsia-800/20 p-4 rounded-xl border border-purple-500/30 text-center">
                <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-purple-700/50 flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="text-sm text-purple-200">{task}</p>
                <button className="mt-2 bg-purple-600/30 text-purple-200 px-3 py-1 rounded-lg text-xs hover:bg-purple-500/30 transition-all">
                  Complete
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Trophies and Achievements */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-purple-200 mb-4 flex items-center gap-2">
            <Trophy className="text-yellow-400" />
            Trophy Cabinet
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trophies.map((trophy, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-800/20 to-fuchsia-800/20 p-4 rounded-xl border border-purple-500/30">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 flex items-center justify-center">
                    {trophy.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-200">{trophy.name}</h4>
                    <p className="text-xs text-purple-300">{trophy.description}</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-purple-900/50 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-500"
                    style={{ width: `${trophy.progress}%` }}
                  />
                </div>
                <div className="text-right mt-1 text-xs text-purple-300">{trophy.progress}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Referral System */}
        <div className="bg-gradient-to-br from-purple-800/20 to-fuchsia-800/20 p-4 rounded-xl border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-purple-200 mb-2 flex items-center gap-2">
                <Share2 className="text-purple-300" />
                Invite Friends
              </h3>
              <p className="text-sm text-purple-300">Earn 100 coins for each friend who joins!</p>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300">
              Share Now
            </button>
          </div>
        </div>
      </div>

      {/* Achievement Popup */}
      {showAchievement && (
        <div className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-800/90 to-fuchsia-800/90 p-6 rounded-xl backdrop-blur-lg border border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.3)] animate-slideIn">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center animate-spin-slow">
              <Trophy className="text-white w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                Achievement Unlocked!
              </div>
              <div className="text-sm text-purple-200">Network Master: Connected with 50+ people!</div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes slideIn {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default GamifiedZynk;