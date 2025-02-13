import React from "react";
import styled from "styled-components";


const MockRank = () => {
    return <Box>
    <UpperImage>
<img src="/Frame 1261153035.png" alt="none" />
    </UpperImage>
    <LowerImage>  
<img src="/Frame 1261153037.png" alt="none" />
    </LowerImage>
    </Box>;
};

export default MockRank;


const Box = styled.div`
    width: 327px;
    height: 205px;
    background-color: #101828;
    border-radius: 16px;
    border: 1px solid #E9E9E90D ;
    text-align: rtl;
    box-shadow: -2px 2px 15px -1px rgba(113, 113, 113, 0.12);
`;

const UpperImage = styled.div`
    width: 262px;
    height: 28px;
    margin-top: 35px;
    margin-left: 28px;
`;

const LowerImage = styled.div`
    width: 267px;
    height: 36px;
    margin-top: 60px;
    margin-left: 32px;
    border-radius: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
`;
