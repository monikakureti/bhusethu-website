

const reasons = [
    {
        number: "01",
        title: "LEGAL CLARITY",
        text: "We help you understand ownership, title, documents and property-related risks before an important decision is made."
    },
    {
        number: "02",
        title: "LOCAL EXPERTISE",
        text: "Our understanding of property matters across Telangana and Andhra Pradesh helps us navigate local records, processes and requirements."
    },
    {
        number: "03",
        title: "END-TO-END SUPPORT",
        text: "From verification and issue resolution to buying, selling and development, we support different stages of your property journey."
    }
];

function WhyChoose() {
    return (
        <section className="why-section" id="why-choose">
            <div className="why-background-text">TRUST</div>

            <div className="why-header">
                <div className="why-eyebrow">
                    <span></span>
                    WHY BHUSETHU
                </div>

                <div className="why-heading">
                    <h2>
                        PROPERTY DECISIONS
                        <br />
                        <em>NEED CLARITY.</em>
                    </h2>

                    <p>
                        Property is more than an asset. It involves documents,
                        ownership, legal processes, people and significant financial
                        decisions. Bhusethu brings these pieces together to help you
                        move forward with greater confidence.
                    </p>
                </div>
            </div>

            <div className="why-reasons">
                {reasons.map((reason) => (
                    <div className="why-reason" key={reason.number}>
                        <div className="why-reason-number">{reason.number}</div>

                        <div className="why-reason-main">
                            <div className="why-icon">
                                <i className="bi bi-arrow-up-right"></i>
                            </div>

                            <h3>{reason.title}</h3>

                            <p>{reason.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WhyChoose;