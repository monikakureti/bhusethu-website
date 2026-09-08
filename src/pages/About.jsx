import img from "../assets/ChatGPT Image Sep 6, 2026, 06_25_32 PM.png"

function About() {
    return (
        <section id="About" className="about-section">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <div className="about-images">

                            <div className="main-image">
                                <img
                                    src= {img} alt="Property"
                                />
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content">

                            <p className="about-label">MORE ABOUT US</p>

                            <h2>
                                Your Trusted Partner in
                                <br />
                                <span>AP & TG Property Solutions</span>
                            </h2>

                            <p className="about-description">
                                We are a dedicated firm specializing in comprehensive
                                Property Due Diligence, land dispute resolution across
                                Telangana and Andhra Pradesh, and end-to-end Real Estate
                                Development. Our expertise ensures your investments are
                                secure, verified, and ready for maximum return.
                            </p>

                            <div className="about-points">
                                <p>
                                    <i className="bi bi-check-circle-fill"></i>
                                    100% Legal & Title Verification
                                </p>

                                <p>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Expertise in Telangana & AP Revenue Records
                                </p>

                                <p>
                                    <i className="bi bi-check-circle-fill"></i>
                                    Verified Buyers & Sellers Network
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;