import styled from "styled-components";

export const ImageContainer = styled.div`
@media (min-width: 320px) and (max-width: 480px) {
  overflow: hidden;
  width: 100%;
}

@media (min-width: 481px) and (max-width: 1024px) {
  width: 100%;
  overflow: hidden;
  max-height: 500px;
}

@media (min-width: 1025px){ 
}
`;


export const Image = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
@media (min-width: 320px) and (max-width: 480px) {
  max-height: 300px;
}
`;

export const ClosingIn = styled.div`
height: 60px;
position: relative;
bottom: 60px;
flex-direction: row;
display: flex;
margin-bottom: -60px;
@media (min-width: 320px) and (max-width: 480px) {
  bottom: 0px;
  margin: 0;
}
`;

export const ClosingInTitle = styled.div`
background: rgba(0, 0, 0, 0.2);
color: white;
height: 100%;
width: 30%;
text-align: right;
line-height: 4;
padding-right: 10px;
`

export const ClosingInDays = styled.div`
background: rgba(255,255,255,0.5);
height: 100%;
width: 70%;
text-align: left;
line-height: 2;
padding-left: 20px;
color: gray;
font-weight: bold;
font-size: 31px;
`

export const Comments = styled.div`
background: rgba(0, 0, 0, 0.2);
color: white;
@media (min-width: 320px) and (max-width: 480px) {
  padding: 10px;
}

@media (min-width: 481px) and (max-width: 1024px) {
  
}

@media (min-width: 1025px){ 
  height: 340px;
  width: 490px;
  position: absolute;
  top: 150px;
  padding: 40px;
}
`;

export const HeroSliderContainer = styled.div`
  background: rgba(255, 0, 0, 0);
`;

export const OpinionTitle = styled.div``;

export const OpinionName = styled.div`
@media (min-width: 320px) and (max-width: 480px) {
  font-size: 45px;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (min-width: 1025px){ 
  font-size: 65px;
}
`;

export const OpinionDescription = styled.div`
text-align: justify;
margin: 15px 0;
`;

export const OpinionMoreInformation = styled.div`
margin: 15px 0;
`;

export const OpinionRate = styled.div`
font-size: 25px;
font-weight: bold;
`;

export const RateContainer = styled.div`
margin-top: 10px;
height: 60px;
display: flex;
flex-direction: row;
@media (min-width: 1025px){ 
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
`;

export const Like = styled.div`
width: 50%;
background: rgba(66, 168, 161, 0.7);
`;

export const Unlike = styled.div`
width: 50%;
background: rgba(254, 145, 40, 0.7);
`;