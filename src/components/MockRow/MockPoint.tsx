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
    <img src="/EllipseE.png" alt="none" />
        </PointImg>
        <ChartImg>
    <img src="/Ellipse.png" alt="none" />
        </ChartImg>
        </PointBox> 
        </Box>;

};

export default MockPoint;


    /*taghir dadam margin-top */

const Box = styled.div`
    background-color: #101828;
    width: 489px;
    height: 205px;
    border-radius: 16px;
    border: 1px solid #E9E9E90D ;
    text-align: rtl;
    box-shadow: -2px 2px 15px -1px rgba(113, 113, 113, 0.12);
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
`;

const PointBox = styled.div`
    display: flex;
    direction: rtl;
    width: 376px; 
    height: 74px;
    margin-top: 50px;
    margin-left: 30px;
    gap: 27px;
    align: center:
`;

const Content = styled.div`
    display:flex;
    width: 207px;
    height: 43px;
    gap:18px;
    font-family: peyda;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;
    color: #E7E9E8;
    align: center:
`;

const PointText = styled.div`
    display:flex;
    position: absolute;
    width: 142px;
    height: 74px;
    margin-right: 305px;   // dasti //
    font-family: peyda;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;
    color: #E7E9E8;
`;

const PointImg = styled.div`
    width: 142px; 
    height: 74px;
    margin-top: -15px;
    margin-left: -10px:
    border-radius: 2.25px;
    object-fit: cover;
`;
const ChartImg = styled.div`
    position: absolute;
    margin-top: -15px;
    margin-left: -10px;
    border-radius: 2.25px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    left: -553.4px;  // dasti//// charte abi rooye sefid //
`;



