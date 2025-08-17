import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Home, Wrench, Camera, Zap, Palette, Droplets } from 'lucide-react';
import { NavLink } from 'react-router-dom';

// Services data with categories for better organization
const servicesData = [
  {
    category: "Construction & Design",
    icon: <Home size={16} />,
    services: [
      { id: "home-construction", title: "Home Construction", nepaliTitle: "घर निर्माण" },
      { id: "home-complete-solution", title: "Home Complete Solution", nepaliTitle: "घर सम्पूर्ण समाधान" },
      { id: "modular-kitchen", title: "Modular Kitchen", nepaliTitle: "मोड्युलर किचन" },
      { id: "modular-furniture", title: "Modular Furniture", nepaliTitle: "मोड्युलर फर्निचर" }
    ]
  },
  {
    category: "Interior & Finishing",
    icon: <Palette size={16} />,
    services: [
      { id: "flooring", title: "Parketing (Flooring)", nepaliTitle: "फ्लोरिङ्ग (पार्केट)" },
      { id: "tiles-marbles", title: "Tiles & Marbles", nepaliTitle: "टायल्स र मार्बल" },
      { id: "wallpaper", title: "Wallpaper", nepaliTitle: "वालपेपर" },
      { id: "painting-jibson", title: "Painting / Gypsum Design", nepaliTitle: "पेन्टिङ्ग / जिप्सम डिजाइन" },
      { id: "art-services", title: "2D, 3D & Wall Art Services", nepaliTitle: "२डी, ३डी र वाल आर्ट सेवा" }
    ]
  },
  {
    category: "Technical Services",
    icon: <Wrench size={16} />,
    services: [
      { id: "ac-cooler-heater", title: "A/C, Cooler & Heater", nepaliTitle: "ए/सी, कूलर र हीटर" },
      { id: "chimney-installation", title: "Chimney Installation", nepaliTitle: "चिम्नी इन्स्टलेशन" },
      { id: "electrician-plumber", title: "Electrician & Plumber", nepaliTitle: "इलेक्ट्रीसियन र प्लम्बर" }
    ]
  },
  {
    category: "Water & Security",
    icon: <Droplets size={16} />,
    services: [
      { id: "water-filter", title: "Water Filter & Deep Boring", nepaliTitle: "पानी फिल्टर र डीप बोरिङ्ग" },
      { id: "smart-water", title: "Smart Water Aqua Filter", nepaliTitle: "स्मार्ट वाटर अक्वा फिल्टर" },
      { id: "solar-water-heating", title: "Solar Water Heating", nepaliTitle: "सोलार वाटर हिटिङ्ग" },
      { id: "cctv-camera", title: "CCTV Camera Installation", nepaliTitle: "सिसिटिभी क्यामेरा इन्स्टलेशन" }
    ]
  }
];

export default function ServicesDropdown({ 
  className = "",
  buttonClassName = "flex items-center text-black hover:text-red-600 font-medium transition-colors",
  dropdownClassName = "absolute top-full overflow-y-auto -left-10 mt-2 w-80 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50",
  onServiceClick = (serviceId) => {
    // Default navigation - replace with your routing logic
    window.location.href = `/services/${serviceId}`;
  }
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServiceClick = (serviceId) => {
    setIsOpen(false);
    onServiceClick(serviceId);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Services Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClassName}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>Services</span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          ref={dropdownRef}
          className={dropdownClassName}
        >
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Our Services</h3>
              <p className="text-sm text-gray-600">Professional solutions for your home</p>
            </div>

            {/* Services Categories */}
            <div className="space-y-6">
              {servicesData.map((category, categoryIndex) => (
                <div  key={categoryIndex}>
                  {/* Category Header */}
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-red-600">{category.icon}</div>
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {category.category}
                    </h4>
                  </div>

                  {/* Services List */}
                  <div className="space-y-1 ml-6">
                    {category.services.map((service, serviceIndex) => (
                      <button
                        key={serviceIndex}
                        onClick={() => handleServiceClick(service.id)}
                        className="w-full text-left p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex flex-col">
                          <span className="text-gray-700 group-hover:text-red-600 font-medium text-sm transition-colors">
                            {service.title}
                          </span>
                          <span className="text-xs text-gray-500 group-hover:text-red-400 transition-colors">
                            {service.nepaliTitle}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-2 pt-4 border-t border-gray-100">
              <div className="text-center">
                <a 
                 
                  onClick={() => {
                    setIsOpen(false);
                   }}

                 href="/services" 
                  
                  className="text-red-600 hover:text-red-700 font-semibold text-sm transition-colors"
                >
                  View All Services →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Example usage in header component:
/*
<header className="bg-white shadow-sm">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <div className="text-xl font-bold text-red-600">Your Logo</div>
      </div>
      
      <nav className="flex items-center space-x-8">
        <a href="/" className="text-gray-700 hover:text-red-600">Home</a>
        <a href="/about" className="text-gray-700 hover:text-red-600">About</a>
        
        <ServicesDropdown 
          onServiceClick={(serviceId) => {
            // For React Router: navigate(`/services/${serviceId}`)
          }}
        />
        
        <a href="/contact" className="text-gray-700 hover:text-red-600">Contact</a>
      </nav>
    </div>
  </div>
</header>
*/