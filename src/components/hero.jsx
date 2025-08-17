export default function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/236764675.jpg?k=e95b3c0eba869f1b727ecc197cf3f08a8a5bc0fff0203e2ef646e6faa18c9765&o=&hp=1')`,
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Quality Furniture & Home Décor
                    <span className="block text-3xl md:text-5xl mt-2">Delivered to You</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                    Transform your space with our premium collection of furniture and decorative items. Quality craftsmanship
                    meets modern design.
                </p>
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 text-lg rounded-md transition-colors duration-200"
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                    Browse Services
                </button>
            </div>
        </section>
    )
}
