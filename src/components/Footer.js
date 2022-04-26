
import { ReactComponent as ChevronSVG } from "../assets/chevron-arch-brown.svg";
import { siteLinks } from "../constants/url-constants";

import { Link } from "react-router-dom";

const Footer = () => {
    const style = { textDecoration: 'none' }

    return (
        <div className="footer">
            <div className="footer-main">
                <Link to={siteLinks.home.url} style={style}>
                    <div className="footer-logo">
                        <div className="footer-logo-text"><h1>CHEVR</h1><h1 className="footer-logo-bg">O</h1><h1>N</h1></div>
                        <div className="footer-logo-text"><h2>DOG TRAINING</h2></div>
                        <ChevronSVG className="footer-logo-arch" />
                    </div>
                </Link>
                <div className="footer-section">
                    <h3>Bookings</h3>
                    <div className="footer-links">
                        <div className="footer-link">
                            <ChevronSVG className="logo-arch" />
                            <Link to={siteLinks.discovery.url} className="footer-link">Book a Call</Link>
                        </div>
                        <div className="footer-link">
                            <ChevronSVG className="logo-arch" />
                            <Link to={siteLinks.booking.url} className="footer-link">Login / Register</Link>
                        </div>
                        <div className="footer-link">
                            <ChevronSVG className="logo-arch" />
                            <Link to={siteLinks.training.url} className="footer-link">Book Training</Link>
                        </div>
                        <div className="footer-link">
                            <ChevronSVG className="logo-arch" />
                            <Link to={siteLinks.walking.url} className="footer-link">Book Walking</Link>
                        </div>
                        {/* <div className="footer-link">
                            <ChevronSVG className="logo-arch" />
                            <Link to={siteLinks.petsit.url} className="footer-link">Pet Sitting</Link>
                        </div> */}
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Follow</h3>
                    <div className="footer-links">
                        <div className="footer-link">
                            <ChevronSVG className="logo-arch" />
                            <a href="https://www.facebook.com/chevrondogtraining"
                                target="_blank"
                                rel="noopener noreferrer">Facebook</a>
                        </div>
                        <div className="footer-link">
                            <ChevronSVG className="logo-arch" />
                            <a href="https://www.instagram.com/chevrondogtraining"
                                target="_blank"
                                rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </div>
                {/* <div className="footer-section">
                <h3>FAQ</h3>
                <Link to={siteLinks.policies.url} className="footer-link">Policies</Link>
            </div> */}
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2022 Chevron Dog Training | All Rights Reserved | ABN 64 150 833 706</p>
            </div>
        </div >
    );
}

export default Footer;