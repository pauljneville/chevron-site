import ToTopArrow from "../assets/to-top-arrow.svg";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [buttonOpacity, setButtonOpacity] = useState(0);

    const listenToScroll = () => {
        if (window.scrollY > 200) {
            setButtonOpacity(1);
        } else {
            setButtonOpacity(0);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <button onClick={() => { window.scrollTo(0, 0); }}
            className="button-style"
            style={{
                opacity: buttonOpacity,
                pointerEvents: buttonOpacity ? "auto" : "none",
            }}
        >
            <img src={ToTopArrow} alt="scroll to top" />
        </button>
    );
}

export default ScrollToTop;
