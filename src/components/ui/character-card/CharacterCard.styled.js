import styled from 'styled-components';

export const CharacterCardContainer = styled.div`
background: rgba(0, 0, 0, 0.1);
margin: 20px 0;
position: relative;
display: flex;
align-items: flex-end;
@media (min-width: 320px) and (max-width: 480px) {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

@media (min-width: 481px) and (max-width: 1024px) {
  width: 100%;
  height: 500px;
  overflow: hidden;
}

@media (min-width: 1025px){ 
  width: 490px;
  height: 600px;
  overflow: hidden;
}
`;

export const InformationContainer = styled.div`
position: relative;
color: white;
padding: 0 20px;
@media (min-width: 320px) and (max-width: 480px) {
  bottom: 25%;
}

@media (min-width: 481px) and (max-width: 1024px) {
  bottom: 25%;
}
@media (min-width: 1025px){ 
  bottom: 14%;
}
`;

export const Name = styled.div`
color: white;
font-size: 44px;

`;

export const Description = styled.div``;

export const Rate = styled.div`
  height: 48px;
  display: flex;
  flex-direction: row;
  bottom: 0;
  position: absolute;
  width: 100%;
`;

export const TimeAgo = styled.div``;

export const Image = styled.img`
position: absolute;
z-index: -1;
width: 100%;
@media (min-width: 320px) and (max-width: 480px) {
  width: 100%;
}
`;

export const ThumbsDown = styled.div`
background: rgba(66, 168, 161, 0.7);
width: ${props => props.percentage}%;
align-items: center;
display: flex;
justify-content: flex-end;
padding-right: 10px;
`;

export const ThumbsUp = styled.div`
background: rgba(254, 145, 40, 0.7);
width: ${props => props.percentage}%;
align-items: center;
display: flex;
padding-left: 10px;
`;

export const LeftPercentage = styled.div`
color: white;
`;

export const RightPercentage = styled.div`
color: white;
margin-left: 10px;
`;