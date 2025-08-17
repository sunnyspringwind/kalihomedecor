import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import { scrollToSection } from "./ScrollToSection"
import ServicesDropdown from '../components/services-dropdown'

export default function Header() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false) 

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "#facilities", label: "Facilities" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavigation = (link, closeMenu = false) => {
    if (closeMenu) {
      setIsMenuOpen(false);
    }

    if (link.href.startsWith('#')) {
      const sectionId = link.href.substring(1); // Remove the '#'
      
      if (window.location.pathname === '/') {
        // Already on home page, scroll to section
        scrollToSection(sectionId);
      } else {
        // Not on home page, navigate to home and store section to scroll to
        sessionStorage.setItem("scrollToSection", link.href);
        navigate('/');
      }
    } else {
      navigate(link.href);
    }
  }

  const handleServiceNavigation = (serviceId, closeMenu = false) => {
    if (closeMenu) {
      setIsMenuOpen(false);
    }

    if (window.location.pathname !== '/services') {
      navigate(`/services/${serviceId}`);
    } else {
      navigate(`${serviceId}`);
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Company Logo" className="pt-2 h-30 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              link.label === "Services" ? (
                <ServicesDropdown 
                  key={link.href}
                  onServiceClick={(serviceId) => handleServiceNavigation(serviceId)}
                />
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-red-600 transition-colors duration-200 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link);
                  }}
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-foreground hover:text-red-600 transition-colors duration-200 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link, true);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}