import styled from "@emotion/styled";

export const NavLinks = styled.nav`
        background-color: #fff;
        font-weight: 600;
        padding: 0.5em 0.4em;
        display: flex;
        justify-content: space-around;
        align-content: flex-start;
        align-items: flex-start;
        box-shadow: 0px 1px 2px #bfbfbf;

    & a {
        text-decoration: none;
        color: #000;
        font-size: 0.9em;
        text-shadow: none;
    }
    & button {
        text-decoration: none;
        color: #000;
        background-color: #fff;
        border: none;
        font-size: 0.9em;
        font-weight: 700;
        padding: 0 0em;
        margin: 0 0.5em 0 0;
        text-shadow: none;
        cursor: pointer;
    }
    & button:last-child {
        margin: 0 0em 0em 0em;
    }
`;