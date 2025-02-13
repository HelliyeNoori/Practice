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

const MockRow = () => {
    return (
        <Container>
            <MockCard />
            <MockRank />
            <MockPoint />
            
            
            
        </Container>
    );
};

export default MockRow;
