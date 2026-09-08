import { useState } from "react";

const services = [
    {
        number: "01",
        short: "BUY PROPERTY",
        title: "Property Buying Assistance",
        headline: "Buy with confidence.",
        description:
            "Found a property you like? We help you understand its ownership, documents, title and potential risks before you make a major investment.",
        points: [
            "Property due diligence",
            "Title & document verification",
            "Relevant record checks",
            "Valuation & negotiation support"
        ],
        button: "EXPLORE BUYING ASSISTANCE"
    },
    {
        number: "02",
        short: "CHECK PROPERTY",
        title: "Property Due Diligence",
        headline: "Know what you're getting into.",
        description:
            "Before buying or investing, get a clearer understanding of the property's ownership, title, documents, records and potential risks.",
        points: [
            "Ownership verification",
            "Title & document review",
            "Property record assessment",
            "Risk identification"
        ],
        button: "CHECK MY PROPERTY"
    },
    {
        number: "03",
        short: "RESOLVE PROPERTY",
        title: "Property Issue Resolution",
        headline: "Something wrong with your property?",
        description:
            "Property issues can involve missing records, ownership concerns, title problems, encroachment or boundary disputes. We help you understand the issue and identify the appropriate path forward.",
        points: [
            "Title & ownership issues",
            "Missing property records",
            "Boundary & encroachment concerns",
            "Property issue assessment"
        ],
        button: "RESOLVE MY ISSUE"
    },
    {
        number: "04",
        short: "SELL PROPERTY",
        title: "Property Selling Assistance",
        headline: "Sell with a clearer plan.",
        description:
            "We help property owners prepare their documents, position their property, connect with potential buyers and coordinate the transaction process.",
        points: [
            "Document readiness",
            "Property positioning",
            "Buyer network & enquiries",
            "Negotiation & transaction support"
        ],
        button: "SELL MY PROPERTY"
    },
    {
        number: "05",
        short: "DEVELOP LAND",
        title: "Real Estate Development",
        headline: "Turn land into opportunity.",
        description:
            "Have land with development potential? We support the journey from planning and approvals to construction and project execution.",
        points: [
            "Development planning",
            "Project feasibility",
            "Approvals & compliance",
            "Construction & project management"
        ],
        button: "EXPLORE DEVELOPMENT"
        
    },
    {
        number: "06",
        short: "MARKET PROPERTY",
        title: "Property Marketing",
        headline: "Reach the right buyers.",
        description:
            "We help present and promote your property to potential buyers and investors through professional property marketing and digital reach.",
        points: [
            "Property presentation",
            "Digital promotion",
            "Buyer & investor reach",
            "Enquiry coordination"
        ],
        button: "LIST MY PROPERTY"
    }
];

function PropertyServices({ onConsult }) {
    const [active, setActive] = useState(0);

    const service = services[active];

    return (
        <section className="services-section" id="properties">

            <div className="services-explorer">
                <div className="services-list">
                    <div className="services-list-heading">
                        <span>WHAT ARE YOU LOOKING TO DO?</span>
                        {/* <small>HOVER TO EXPLORE</small> */}
                    </div>

                    <div className="service-items">
                        {services.map((item, index) => (
                            <button
                                className={`service-item ${active === index ? "active" : ""
                                    }`}
                                key={item.number}
                                onMouseEnter={() => setActive(index)}
                                onFocus={() => setActive(index)}
                                
                            >
                                <span className="service-number">{item.number}</span>

                                <span className="service-name">{item.short}</span>

                                <span className="service-arrow">
                                    <i className="bi bi-arrow-up-right"></i>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="service-display">
                    <div className="service-content">
                        {/* <span className="service-content-number">{service.number}</span> */}

                        <h3>{service.title}</h3>

                        <h4>{service.headline}</h4>

                        <p>{service.description}</p>

                        <div className="service-points">
                            {service.points.map((point) => (
                                <div className="service-point" key={point}>
                                    <i className="bi bi-check2"></i>
                                    <span>{point}</span>
                                </div>
                            ))}
                        </div>

                        <button className="service-cta"  onClick={onConsult}>
                            <span>{service.button}</span>
                            <i className="bi bi-arrow-up-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PropertyServices;