import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from "./Hero.jsx";
import FeaturedEvents from "./FeaturedEvents.jsx";
import { X } from 'lucide-react';

const Notification = ({ message, type, onClose }) => {
  return (
    <div className={`fixed top-4 right-4 z-50 ${
      type === 'success' ? 'bg-primary-600' : 'bg-tertiary-600'
    } text-secondary-50 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in-down`}>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 hover:text-secondary-200 transition-colors"
      >
        <X size={18} />
      </button>
    </div>
  );
};

const Home = () => {
  const location = useLocation();
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state?.showNotification) {
      setNotification({
        message: location.state.message,
        type: location.state.type,
      });

      // Clear notification state after consuming it
      navigate(location.pathname, { replace: true });

      // Clear notification after 5 seconds
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <Hero />
      <FeaturedEvents />
    </div>
  );
};

export default Home;