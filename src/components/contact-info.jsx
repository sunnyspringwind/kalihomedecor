import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Itahari, Dharan (Chatara Line)",
        "Biratnagar (Bargachhi)",
        "KTM Valley, Nepal",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["9862178225", "9804019095", "WhatsApp: 9807082175"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@modularkitcheninteriordesign.com"],
    },
    {
      icon: Globe,
      title: "Website",
      details: ["www.modularkitcheninteriordesign.com"],
    },
  ];

  return (
    <div id="contact" className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
      {/* Contact Card */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Contact Information
          </h2>
          <p className="text-gray-600">
            Visit our showrooms or get in touch through any of these channels.
          </p>
        </div>
        <div className="space-y-6">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <item.icon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="h-96 lg:h-full bg-gray-100 rounded-lg overflow-hidden shadow-lg mr-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114086.44439751566!2d87.18262568094673!3d26.674040932570634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6c66e80fbfa9%3A0x38094d1a7c974283!2sItahari!5e0!3m2!1sen!2snp!4v1755441306749!5m2!1sen!2snp"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
