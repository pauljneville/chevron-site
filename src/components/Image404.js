import styled from "@emotion/styled";

import img404_1 from '../assets/dog-404-1.png';
import img404_2 from '../assets/dog-404-2.png';

export const Image404 = styled.div`
    width: 256px;
    height: 256px;
    background: url(${img404_1}) no-repeat;
    background-size: contain;

    &:hover {
        background: url(${img404_2}) no-repeat;
        background-size: contain;
    }
`;