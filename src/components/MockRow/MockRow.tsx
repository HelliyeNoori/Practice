import React from "react";
import styled from "styled-components";
import MockRank from "../MockRow/MockRank";
import MockPoint from "../MockRow/MockPoint";
import MockCard from "../MockRow/MockCard";


const Container = styled.div`
    display: flex;
    gap: 30px;
    justify-content: space-between;
    justify-content: flex-start;
    width: 100%;
    margin-left: 45px;
    margin-top: 20px;


    /* Mobile */
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const MockPointWrapper = styled.div`
  @media (max-width: 768px) {
    order: -1; /* tartibe namayesh 1*/
    }
`;

// استایل برای MockCard
const  MockRankWrapper = styled.div`
@media (max-width: 768px) {
    order: 0; 
  }
`;

// استایل برای MockRank
const MockCardWrapper = styled.div`
    @media (max-width: 768px) {
    order: 1;
  }
`;

const MockRow = () => {
    return (
        <Container>
            <MockCardWrapper>
                <MockCard />
            </MockCardWrapper>
            <MockRankWrapper>
                <MockRank />
            </MockRankWrapper>
            <MockPointWrapper>
                <MockPoint />
            </MockPointWrapper>
        </Container>
    );
};

export default MockRow;
