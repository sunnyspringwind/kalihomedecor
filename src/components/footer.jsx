import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { FiPhone, FiMail } from "react-icons/fi"
import { useNavigate, useLocation } from "react-router-dom"
import { scrollToSection } from "./ScrollToSection"

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleFooterNavigation = (href) => {
    if (href.startsWith('#')) {
      const sectionId = href.substring(1); // Remove the '#'
      
      if (location.pathname === '/') {
        // Already on home page, scroll to section
        scrollToSection(sectionId);
      } else {
        // Not on home page, navigate to home and store section to scroll to
        sessionStorage.setItem("scrollToSection", href);
        navigate('/');
      }
    } else {
      navigate(href);
    }
  };

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "#facilities", label: "Facilities" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer id="footer" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kali Home Decor</h3>
            <p className="mb-4 opacity-90">
              Your trusted partner for modular kitchens, furniture, and interior decoration solutions. 
              Transform your home, office, or hotel with our premium services.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/ModularKitchenAndUniqueInteriorDesign" target="_blank" rel="noreferrer">
                <FaFacebook className="h-5 w-5 hover:opacity-80 cursor-pointer" />
              </a>
              <FaInstagram className="h-5 w-5 hover:opacity-80 cursor-pointer" />
              <FaTwitter className="h-5 w-5 hover:opacity-80 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleFooterNavigation(link.href)}
                    className="hover:opacity-80 transition-opacity text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FiPhone className="h-4 w-4" />
                <a href="tel:+9779862178225">9862178225 /</a> <a href="tel:+9779804019095"> 9804019095</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaWhatsapp className="h-4 w-4" />
                <a href="https://wa.me/9779807082175">WhatsApp: 9807082175</a>
              </div>
              <div className="flex items-center space-x-2">
                <FiMail className="h-4 w-4" />
                <a href="mailto:info@modularkitcheninteriordesign.com">info@modularkitcheninteriordesign.com</a>
              </div>
              <div className="flex items-start space-x-2">
                <div className="mt-1">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>
                  Itahari, Dharan (Chatara Line), Biratnagar (Bargachhi), KTM Valley, Nepal
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="opacity-80">© 2024 Kali Home Decor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}