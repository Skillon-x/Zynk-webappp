import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Calendar, MapPin, Users, Star } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const responses = {
    "hello": "Hello! How can I assist you with events today?",
    "hi": "Hi there! Looking for events or hackathons?",
    "help": "I can help you with:\n- Finding events\n- Hackathon information\n- Registration process\n- Event categories\n\nWhat would you like to know?",
    "htmd conference": "HTMD Conference is happening on Dec 07, 2024, from 9:00 AM - 5:00 PM at Microsoft reactor-Lavelle Road, Bengaluru. The registration fee is $299 with 1200 attendees expected. Key topics include Technology, Innovation, and AI.",
    "unfold": "Unfold 24 is Asia's largest hackathon with $100K+ worth bounties and 500+ Web3 developers. It's taking place in Whitefield, Bengaluru at the Marriott Hotel.",
    "ai camp": "AI Camp is a meetup in Bengaluru focusing on AI, LLMs, ML, and Data. It's a free event with hands-on sessions.",
    "devops summit": "DevOps India Summit is scheduled for Dec 15, 2024, from 9:00 AM - 6:00 PM at Marriott Convention Center. Registration fee is $199 with topics covering DevOps, Cloud, and Infrastructure.",
    "web3 conference": "Web3 Conference is happening on Dec 20, 2024, at Sheraton Grand, focusing on Web3, Blockchain, and DeFi. The registration fee is $249.",
    "gen ai": "Gen AI hackathon is scheduled for Dec 6-8, 2024 at Thomson Reuters with 200 participants. Topics include AI, Machine Learning, and Gen AI.",
    "ethindia": "ETHINDIA is happening at KTPO, Bengaluru from Dec 6-8, 2024 with 800 participants. Prize pool of ₹35,000. Sponsored by Ethereum Foundation, Binance, and Polygon.",
    "cybersecurity hackathon": "CyberSecurity Hackathon is taking place at Pullman, Delhi from Dec 4-6, 2024. Prize pool of ₹4,50,000 with 600 participants. Sponsored by CrowdStrike, FireEye, and Cisco.",
    "ai events": "We have 86 AI & Machine Learning events covering Deep Learning, NLP, Computer Vision, and MLOps.",
    "cybersecurity events": "There are 64 Cybersecurity events including security conferences, CTFs, and ethical hacking competitions. Topics cover Network Security, Cloud Security, and Ethical Hacking.",
    "blockchain events": "We have 52 Blockchain & Web3 events focusing on Cryptocurrency, DeFi, and blockchain development. Topics include Smart Contracts, Crypto, and NFTs.",
    "cloud events": "73 Cloud Computing events covering AWS, Azure, GCP, and DevOps topics.",
    "full stack": "95 Full Stack Development events including web development, mobile, and cross-platform hackathons.",
    "iot events": "41 IoT & Hardware events covering Embedded Systems, Robotics, Smart Devices, and Arduino.",
    "upcoming events": "We have several exciting events coming up!\n\nFeatured Events:\n- HTMD Conference (Dec 7)\n- DevOps India Summit (Dec 15)\n- Web3 Conference (Dec 20)\n\nHackathons:\n- Gen AI Hackathon (Dec 6-8)\n- ETHINDIA (Dec 6-8)\n- CyberSecurity Hackathon (Dec 4-6)\n\nWhich type of event interests you?",
    "hackathons": "Current featured hackathons:\n- Gen AI Hackathon (Dec 6-8)\n- ETHINDIA (Dec 6-8, Prize: ₹35,000)\n- CyberSecurity Hackathon (Dec 4-6, Prize: ₹4,50,000)\n\nWould you like details about any specific hackathon?",
    "organize hackathon": "To organize a hackathon, you'll need to provide:\n- Basic Info (Name, Description)\n- Team & Domain details\n- Timeline\n- Location & Contact\n- Social Media presence\n- Prizes & Sponsors\n- Judges & Speakers\n\nWould you like to start organizing one?",
    "categories": "We offer events in these categories:\n- AI & Machine Learning (86 events)\n- Cybersecurity (64 events)\n- Blockchain & Web3 (52 events)\n- Cloud Computing (73 events)\n- Full Stack Development (95 events)\n- IoT & Hardware (41 events)\n\nWhich category interests you?",
    "default": "I'm not sure about that. Would you like to:\n- Browse upcoming events\n- Find hackathons\n- View event categories\n- Get registration help",
    "ctf": "Upcoming CTF event happening Dec 8-10, 2025. It's an offline event with 50 participants. Prize pool: ₹50000. Features: Capture the flag, Hack challenges, Network security.",
    "full stack dev": "Multiple Full Stack Development events available:\n- Web Development Bootcamp (Online, 50 participants)\n- React Dev Workshop (Online)\nPrize pools ranging from ₹1000-5000\nSponsored by Ethereum Foundation, Binance, Polygon, Godaddy",
 
   //social media
    "event highlights": "Check out our community's latest tech events and hackathons! Popular hashtags:\n#Hackathons #TechTalks #Workshops #Innovation #AI #WebDev #BlockchainTech #CloudComputing",
    "create post": "Share your event experience with the community! You can:\n- Post event photos\n- Share your achievements\n- Tag your team members\n- Add relevant hashtags\n- Engage with comments and likes",
    "success stories": "Recent highlight: Dhanushree and team won the Best Innovation award at #AIHackathon2024! Join our upcoming events to showcase your innovations."

};

  const commonSuggestions = {
    initial: ['View Upcoming Events', 'Find Hackathons', 'Browse Categories', 'Organize Event'],
    events: ['AI & ML Events', 'Blockchain Events', 'Technical Workshops', 'Free Events'],
    hackathons: ['View All Hackathons', 'Prize Details', 'Registration Process', 'Team Formation'],
    categories: ['AI & ML', 'Cybersecurity', 'Blockchain', 'Cloud Computing', 'Cybersecurity', 'CTF Events','Full Stack Dev', 'React Dev', 'WebDev','Create Post']
  };
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          type: 'bot',
          content: "Hi! 👋 I'm Zynk's virtual assistant. How can I help you discover amazing events today?",
          suggestions: commonSuggestions.initial
        }
      ]);
    }
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const getResponse = (userInput) => {
    const input = userInput.toLowerCase();
    let responseContent = responses.default;
    let suggestions = commonSuggestions.initial;

    for (const [key, value] of Object.entries(responses)) {
      if (input.includes(key)) {
        responseContent = value;
        if (input.includes('event')) suggestions = commonSuggestions.events;
        else if (input.includes('hackathon')) suggestions = commonSuggestions.hackathons;
        else if (input.includes('categor')) suggestions = commonSuggestions.categories;
        break;
      }
    }

    return { content: responseContent, suggestions };
  };

  const handleSendMessage = (message = inputMessage, isSuggestion = false) => {
    if (!message.trim()) return;

    const userMessage = {
      type: 'user',
      content: message
    };
    
    const botResponse = getResponse(message);
    const botMessage = {
      type: 'bot',
      content: botResponse.content,
      suggestions: botResponse.suggestions
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInputMessage('');
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 m-4 flex flex-col items-end">
      <button
        onClick={() => setIsOpen(true)}
        className={`p-4 bg-primary-700 hover:bg-primary-600 text-secondary-50 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl ${
          isOpen ? 'hidden' : 'flex'
        }`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="w-96 h-[600px] bg-secondary-50 rounded-2xl shadow-2xl flex flex-col border border-primary-200">
          <div className="p-4 bg-primary-700 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-secondary-50" />
              </div>
              <div>
                <h3 className="text-secondary-50 font-medium">Zynk Assistant</h3>
                <span className="text-primary-200 text-sm">Online</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-secondary-50 hover:text-secondary-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] ${
                    message.type === 'user' 
                      ? 'bg-primary-700 text-secondary-50 rounded-l-xl rounded-tr-xl' 
                      : 'bg-primary-100 text-primary-900 rounded-r-xl rounded-tl-xl'
                  } p-4 shadow-sm`}
                >
                  <p className="whitespace-pre-line">{message.content}</p>
                  {message.suggestions && (
                    <div className="mt-3 space-y-2">
                      {message.suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(suggestion, true)}
                          className="block w-full text-left px-3 py-2 rounded-lg bg-white hover:bg-primary-50 text-primary-700 text-sm transition-colors border border-primary-200"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-primary-100">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-xl border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                onClick={() => handleSendMessage()}
                className="p-2 bg-primary-700 text-secondary-50 rounded-xl hover:bg-primary-600 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;