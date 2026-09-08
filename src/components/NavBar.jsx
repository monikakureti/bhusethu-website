function Navbar({ onConsult }) {
    return (
        <header className="bar">
            <div className="nav-logo">
                <span className="nav-span">BHUSETHU</span>
                <small className="nav-small">PROPERTY SOLUTIONS</small>
            </div>

            <nav>
                <a href="#hero">Home</a>
                <a href="#About">About</a>
                <a href="#properties">Property Services</a>
                <a href="#projects">Our Projects</a>
                <a href="#news">News & Blogs</a>
                <a href="#contact">Contact</a>
            </nav>

            <button className="navbar-button"  onClick={onConsult}>
                Free Consultation
            </button>
        </header>
    );
}

export default Navbar;