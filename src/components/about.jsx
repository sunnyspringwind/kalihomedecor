export default function About() {
    return (
        <section id="about" className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About Kali Home Decor</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                With years of experience in the furniture and home décor industry, Kali Home Decor has
                                established itself as a trusted name in quality furniture solutions.
                            </p>
                            <p>
                                We are committed to providing our customers with premium furniture pieces and decorative items that
                                combine functionality with aesthetic appeal. Our extensive collection ranges from classic to
                                contemporary designs, ensuring there's something perfect for every home and office.
                            </p>
                            <p>
                                Located in the heart of Dharan, we serve customers across the region with reliable delivery services and
                                professional installation support.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="rounded-lg shadow-lg overflow-hidden">
                            <img
                                src="https://nepalisearchengine.com/storage/files/np/926/d3fbd7f239d68df87a41dd4bb564bd2d.jpeg"
                                alt="Kali Home Decor"
                                className="w-full h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
