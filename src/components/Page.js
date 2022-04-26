import styled from "@emotion/styled";

export const Page = styled.div`
    margin: 0px 0 40px 0;
    display: flex;
    background-color: #fff;
    min-height: 500px;
    height: calc(100vh - 120px);
    flex-direction: column;

    @media screen and (min-width: 760px) {
        margin: 0px 0 40px 0;
        display: flex;
        background-color: #fff;
        min-height: 500px;
        height: calc(100vh - 120px);
        flex-direction: column;
        align-content: center;
    }
`;