import chair from "../assets/chair.png"
import tables from "../assets/tables.png"
import lamps from "../assets/lamps.avif"
import vases from "../assets/vases.jpg"
import wallpainting from "../assets/wallpainting.webp"
import cabinets from "../assets/cabinets.jpg"

export default function Products() {
    const productCategories = [
        {
            title: "Chairs",
            image: chair,
            description: "Comfortable seating solutions for every space",
        },
        {
            title: "Tables",
            image: tables,
            description: "Functional and stylish tables for all occasions",
        },
        {
            title: "Sofas",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop&crop=center",
            description: "Premium comfort for your living spaces",
        },
        {
            title: "Cabinets",
            image: cabinets,
            description: "Smart storage solutions with elegant design",
        },
        {
            title: "Lamps",
            image: lamps,
            description: "Illuminate your space with style",
        },
        {
            title: "Wall Art",
            image: wallpainting,
            description: "Beautiful artwork to enhance your walls",
        },
        {
            title: "Vases",
            image: vases,
            description: "Elegant decorative pieces for any room",
        },
        {
            title: "Custom Orders",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center",
            description: "Bespoke furniture tailored to your needs",
        },
    ]

    return (
        <section id="products" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our extensive collection of furniture and decorative items, carefully curated to meet your style
                        and functional needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {productCategories.map((product, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.title}
                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                                <p className="text-sm text-gray-600">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}