
import { useNavigate } from "react-router";
import { siteLinks } from "../constants/url-constants";

import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Banner from "./Banner";

const Navbar = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const style = { textDecoration: 'none' }

    return (
        <>
            <Link to={siteLinks.home.url} style={style}>
                <Banner black />
            </Link>

            <div className="navbar">
                {auth.user ? <button onClick={() => { auth.logout(); navigate('/'); }}>Logout</button> : <p></p>}
            </div>
            {/* // </div > */}
        </>
    );
}

export default Navbar;