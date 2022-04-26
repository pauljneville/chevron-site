import { ReactComponent as ChevronSVG } from "../assets/chevron_arch.svg";
import styled from "@emotion/styled";
import paw from "../assets/paw-print-white.svg";

const BannerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    & a {
        display: inline-block;
        font-size: 1em;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 500;
        margin-top: 10px;
        color: #111;
        letter-spacing: 2px;
        transition: 0.2s;
    }
    & .logo-bg{
        color: #fff;
        background-image: url(${paw});
        background-size: 0.46em;
        background-repeat: no-repeat;
        background-position: 45% 58%;
    }
    & h1
    {
        font-size: 1.2em;
        font-weight: 800;
        color: #fff;
        filter: brightness(${p => p.brightness}) sepia(1) hue-rotate(${p => p.hueRotate}) saturate(${p => p.saturate});
        text-transform: uppercase;
    }
    @media screen and (min-width: 330px) {
        & h1 {
            font-size: 1.4em;
            margin: 0.8em 0 0.7em 0;
        }
    }
    @media screen and (min-width: 500px) {
        & h1 {
            font-size: 1.7em;
            margin: 0.35em 0 0.33em 0;
        }
    }

    @media screen and (min-width: 650px) {
        & h1 {
            font-size: 2.4em;
        }
        & .logo-bg{
            background-size: 0.45em;
            background-position: 50% 58%;
        }
    }
    @media screen and (min-width: 800px) {
        & h1 {
            font-size: 3.0em;
        }
    }
`;

const Banner = ({ white, black }) => {
    const brightness = black ? 0 : 100;
    const saturate = white ? 0 : 100;
    const hueRotate = '240deg';

    return (
        <BannerLogo brightness={brightness} hueRotate={hueRotate} saturate={saturate}>
            <ChevronSVG className="header-chevron" />
            <h1>Chevr<span className="logo-bg">o</span>n Dog Training</h1>
        </BannerLogo>
    );
}

export default Banner;
