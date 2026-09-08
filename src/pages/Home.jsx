import { useState } from "react";

const slides = [
    {
        number: "01",
        category: "BHUSETHU",
        title: "Property",
        italic: "with clarity.",
        description:
            "A smarter way to buy, sell, resolve and develop property across Telangana and Andhra Pradesh.",
        button: "Explore Bhusethu",
        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90"
    },
    {
        number: "02",
        category: "BUY PROPERTY",
        title: "Buy",
        italic: "with confidence.",
        description:
            "Discover opportunities backed by thorough due diligence, document verification and expert property guidance.",
        button: "Explore Properties",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90"
    },
    {
        number: "03",
        category: "PROPERTY RESOLUTION",
        title: "Resolve",
        italic: "with expertise.",
        description:
            "From title verification to documentation challenges, get expert support for complex property matters.",
        button: "Resolve an Issue",
        image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=90"
    },
    {
        number: "04",
        category: "DEVELOPMENT",
        title: "Develop",
        italic: "with certainty.",
        description:
            "Build your vision with support across approvals, compliance, construction and project management.",
        button: "Explore Development",
        image:
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=90"
    }
];

function Hero({ onConsult }) {
    const [active, setActive] = useState(0);

    const current = slides[active];

    return (
        <section id="hero">

            <div className="hero-layout">

                <div className="hero-left">

                    <div className="hero-text">

                        <p className="eyebrow">
                            {current.category}
                        </p>

                        <h1>
                            {current.title}
                            <br />
                            <em>{current.italic}</em>
                        </h1>

                        <p className="description">
                            {current.description}
                        </p>

                        <button className="hero-button" onClick={onConsult}>
                            {current.button}
                        </button>

                    </div>

                </div>

                <div className="hero-right">

                    <div className="image-gallery">

                        {slides.map((slide, index) => (

                            <div
                                key={slide.number}
                                className={`image-slide ${active === index ? "active" : ""
                                    }`}
                                onMouseEnter={() => setActive(index)}
                            >

                                <img
                                    src={slide.image}
                                    alt={slide.category}
                                />

                                <div className="image-dark"></div>


                                {active === index && (
                                    <div className="slide-label">
                                        <span>{slide.category}</span>
                                    </div>
                                )}

                            </div>

                        ))}

                    </div>

                    <div className="gallery-bottom">

                        <div className="gallery-hint">
                            <span>MOVE TO EXPLORE</span>
                            <div className="hint-arrow">→</div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;