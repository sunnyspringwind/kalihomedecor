import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { FiPhone, FiMail } from "react-icons/fi"

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kali Home Decor</h3>
            <p className="mb-4 opacity-90">
              Your trusted partner for quality furniture and home décor solutions. Transform your space with our premium
              collection.
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="h-5 w-5 hover:opacity-80 cursor-pointer" />
              <FaInstagram className="h-5 w-5 hover:opacity-80 cursoreact-icons" />
              <FaTwitter className="h-5 w-5 hover:opacity-80 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:opacity-80 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:opacity-80 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:opacity-80 transition-opacity">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-80 transition-opacity">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-80 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FiPhone className="h-4 w-4" />
                <span>+977 98XXXXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMail className="h-4 w-4" />
                <span>info@kalihomedecor.com</span>
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
                <span>Bhanumarga-15, Dharan, Nepal</span>
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
