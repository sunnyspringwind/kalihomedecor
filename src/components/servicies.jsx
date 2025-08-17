import { Wrench, Home, Sofa, Paintbrush, Ruler, Boxes } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Modular Kitchen",
      icon: Wrench,
      description:
        "Custom-designed modular kitchens built with precision, durability, and style to match your home.",
    },
    {
      title: "Interior Design",
      icon: Home,
      description:
        "Transform your living or work space with creative and functional interior design solutions.",
    },
    {
      title: "Furniture Solutions",
      icon: Sofa,
      description:
        "From sofas to cabinets, we provide premium quality furniture tailored to your lifestyle.",
    },
    {
      title: "Wall Decor & Painting",
      icon: Paintbrush,
      description:
        "Enhance your interiors with wall art, painting, and elegant decorative accents.",
    },
    {
      title: "Space Planning",
      icon: Ruler,
      description:
        "Smart space utilization with professional planning for homes, offices, and commercial spaces.",
    },
    {
      title: "Custom Orders",
      icon: Boxes,
      description:
        "Personalized furniture and interior solutions crafted exclusively for your needs.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end interior and furniture solutions to help you
            create a functional, stylish, and personalized space.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="p-4 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
