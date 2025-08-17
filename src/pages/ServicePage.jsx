import { services } from "../data/serviceData";
import Header from "../components/header";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";
export default function ServicePage() {

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            {/* Service Image */} 
            {service.images && (
              <img
                src={service.images[0]}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
            )}

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h1 className="text-2xl font-bold text-gray-900">{service.title}</h1>
              {/* NavLink Button */}
              <div className="mt-4">
                <NavLink
                  to={`/services/${service.id}`} // dynamic route
                  className="inline-block px-5 py-2 bg-[#FFB300] text-white rounded-lg font-semibold hover:bg-[#FFA000] transition-colors text-center w-full"
                >
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
