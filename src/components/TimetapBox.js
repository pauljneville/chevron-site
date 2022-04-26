import styled from "@emotion/styled";

export const TimetapBox = styled.div`
    margin-top: 0px;
    overflow:hidden;
    height: calc(100vh - 120px);
    min-height: 600px;
    position: relative;
    width: 100%;
    max-width: 800px;

    & iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
`;