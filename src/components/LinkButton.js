import { Link } from "react-router-dom";

const LinkButton = ({ url, children }) => {
    return (
        <div className="static-call-button">
            <Link to={url} className="static-button-link">{children}</Link>
        </div>
    );
}

export default LinkButton;