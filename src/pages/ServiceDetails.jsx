import { Phone, CheckCircle, ArrowLeft, Star } from "lucide-react";
import { services } from "../data/serviceData";
import Header from "../components/header";
import Footer from "../components/footer";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const location = useLocation();
  const service = services.find(s => s.id === serviceId);

  // Scroll to top when component mounts or serviceId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId, location.pathname]);

  if (!service) {
    return (
      <>
        <Header/>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-gray-600">The requested service could not be found.</p>
            <NavLink 
              to="/services"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mt-4 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Services
            </NavLink>
          </div>
        </div>
        <Footer/>
      </>
    );
  }

  return (
    <>
      <Header/>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="relative bg-gradient-to-r from-emerald-500 to-green-600 text-white">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-6xl mx-auto px-6 py-16">
            <NavLink 
              to="/services"
              className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Services
            </NavLink>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {service.title}
              </h1>
              <h2 className="text-2xl md:text-3xl text-green-100 mb-6 font-medium">
                {service.nepaliTitle}
              </h2>
          
              {/* Call Button - Prominent */}
              <a
                href={`tel:${service.phone}`}
                className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone size={24} />
                Call Now: {service.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Image Gallery */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {service.images.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={image} 
                  alt={`${service.title} ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Service Description */}
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  Service Overview
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-lg text-gray-800 font-medium leading-relaxed bg-gray-50 p-4 rounded-xl">
                      {service.nepaliDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Sidebar */}
            <div className="space-y-6">
              {/* Key Features */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="text-yellow-500" size={20} />
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-3xl p-6 shadow-lg">
                <h4 className="text-xl font-bold mb-4">Ready to Get Started?</h4>
                <p className="text-red-100 mb-6 leading-relaxed">
                  Contact us now for professional consultation and competitive pricing.
                </p>
                
                <a
                  href={`tel:${service.phone}`}
                  className="block w-full bg-white text-red-600 text-center py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  📞 {service.phone}
                </a>
                
                <div className="mt-4 text-center">
                  <p className="text-red-100 text-sm">
                    Available 7 Days a Week
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">Why Choose Our Services?</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-xl font-semibold">Quality Assured</h4>
                <p className="text-gray-300">Premium materials and expert craftsmanship</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                  <Phone size={32} />
                </div>
                <h4 className="text-xl font-semibold">24/7 Support</h4>
                <p className="text-gray-300">Round-the-clock customer assistance</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                  <Star size={32} />
                </div>
                <h4 className="text-xl font-semibold">Expert Team</h4>
                <p className="text-gray-300">Certified professionals with years of experience</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-xl font-semibold">Timely Delivery</h4>
                <p className="text-gray-300">Projects completed on time, every time</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts today for a free consultation and personalized quote.
            </p>
            
            <a
              href={`tel:${service.phone}`}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone size={28} />
              Call {service.phone} Now
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}