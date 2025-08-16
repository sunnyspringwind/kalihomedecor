import { Truck, Wrench, Package, Users } from "lucide-react"

export default function Services() {
    const services = [
        {
            icon: Package,
            title: "Quality Supply",
            description: "We source and supply premium furniture and décor items from trusted manufacturers.",
        },
        {
            icon: Users,
            title: "Custom Orders",
            description: "Bespoke furniture solutions tailored to your specific requirements and space.",
        },
        {
            icon: Truck,
            title: "Reliable Delivery",
            description: "Safe and timely delivery of your furniture to your doorstep across the region.",
        },
        {
            icon: Wrench,
            title: "Professional Installation",
            description: "Expert installation and setup services to ensure your furniture is perfectly placed.",
        },
    ]

    return (
        <section id="services" className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We provide comprehensive furniture solutions from selection to installation, ensuring a seamless experience
                        for our customers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="mb-6"></div>
                            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                                <service.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                        
                                <p className="text-muted-foreground">{service.description}</p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
    )
}
