import { MapPin, Phone, Mail, Clock } from "lucide-react"
import InteractiveMap from "./location-map"
export default function ContactInfo() {
    const contactDetails = [
        {
            icon: MapPin,
            title: "Address",
            details: ["Bhanumarga-15", "Dharan, Nepal"],
        },
        {
            icon: Phone,
            title: "Phone",
            details: ["+977 98XXXXXXXX", "+977 25XXXXXX"],
        },
        {
            icon: Mail,
            title: "Email",
            details: ["info@kalihomedecor.com", "sales@kalihomedecor.com"],
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
        },
    ]

    return (
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                    <p className="text-gray-600">Visit our showroom or get in touch through any of these channels.</p>
                </div>
                <div className="space-y-6">
                    {contactDetails.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <item.icon className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
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
                    title="Prasad Info Tech Location"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.532378205862!2d87.28402803566543!3d26.80606663545544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef416d98cd8897%3A0xe152341436b7b92d!2sBhanumarga!5e0!3m2!1sen!2snp!4v1755370318703!5m2!1sen!2snp"                    width="100%"
                    height="100%"
                    className="border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    )
}


