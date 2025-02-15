import React from "react";
import styled from "styled-components";


const MockPoint = () => {
    return <Box> 
      <Title>
        امتیاز کسب شده شما تا کنون 
        </Title>
    <PointBox> 
    <Content>
    <p>  100  <br  />  اولین تراکنش</p>
    <p> 160   <br  />   اولین تراکنش  </p>
    <p>  300  <br  />  احراز هویت </p>
    </Content>
    <PointText>
        <p> 560  <br />  امتیاز </p>
    </PointText>
    

        <PointImg>
    <img src="/Ellipsse.png" alt="none" />
        </PointImg>
        </PointBox> 
        </Box>;

};

export default MockPoint;


    /*taghir dadam margin-top */

// hazfe Margin-Left // 
// ba margin left nashod too ye radif  gharar bedam///

const Box = styled.div`
    background-color: #101828;
    width: 489px;
    height: 205px;
    border-radius: 16px;
    border: 1px solid #E9E9E90D ;
    text-align: rtl;
    box-shadow: -2px 2px 15px -1px rgba(113, 113, 113, 0.12);


    @media (max-width: 768px) {
        width: 90%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        margin-top:200px;
    }
`;

const Title = styled.div`
    width: 194px;
    height: 23px;
    margin-top: 33px;
    margin-left: 233px;
    font-family: peyda;
    font-size: 18px;
    font-weight: 500;
    line-height: 22.5px;
    align: right;
    color: #FFFFFF;


     @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        margin-top: 10px;
        margin-right:40px;
    }
`;

const PointBox = styled.div`
     display: flex;
    direction: rtl;
    width: 376px; 
    height: 74px;
    margin-top: 60px;
    margin-left: 56.5px;
    gap: 27px;
    align-items: center;  
    
    @media (max-width: 768px) {
        flex-direction: column;
        width: 346px;
        margin-top: 30px;
        margin-left: 100px;
        gap: 12px; 
    }
`;

const Content = styled.div`
    display:flex;
    width: 207px;
    height: 43px;
    text-align: right;
    gap:18px;
    font-family: peyda;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;
    color: #E7E9E8;
    align: center:

    @media (max-width: 768px) {
        width: 207px;
        
        text-align: center;
        
    }
`;

const PointText = styled.div`
    display:flex;
    position: absolute;
    width: 142px;
    height: 74px;
    margin-right: 290px;   // dasti //
    font-family: peyda;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;
    color: #E7E9E8;

    @media (max-width: 768px) {
        margin-top:10px;
        text-align: center;
        margin-right: 450px;
    }
`;

const PointImg = styled.div`
    width: 160px; 
    margin-top: -30px;
    margin-left: -20px:
    border-radius: 2.25px;
    background-color: #101828;

    @media (max-width: 768px) {
        width: 107.26px;
        height: 58px;
        margin-right: 270px;
        margin-top: -80px;
    }
`;




