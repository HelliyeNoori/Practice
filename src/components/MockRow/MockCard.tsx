import React from "react";
import styled from "styled-components";

const MockCard = () => {
    return <Box>
<img src="/Frame 1261154210.png" alt="none" />

        </Box>;
};

export default MockCard;

// hazfe Margin-Left // 
// ba margin left nashod too ye radif  gharar bedam///

const Box = styled.div`
    width: 422px;
    height: 205px;
    border-radius: 16px;
    box-shadow: 0px 4.05px 4.05px 0px rgba(0, 0, 0, 0.25);

@media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-width: 350px;
     }
`;