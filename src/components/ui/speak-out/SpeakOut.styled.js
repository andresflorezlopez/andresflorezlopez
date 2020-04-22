import styled from 'styled-components';

export const SpeakOutContainer = styled.div`
background: #ebebeb;
padding: 10px 20px;
margin: 20px 0;

@media (min-width: 320px) and (max-width: 480px) {
}

@media (min-width: 481px) and (max-width: 1024px) {
  display: flex;
  flex-direction: row;
}

@media (min-width: 1025px){ 
  display: flex;
  flex-direction: row;
}
`;

export const SpeakOutHeader = styled.div`
flex: 3;
flex: 3;
align-items: center;
display: flex;
justify-content: center;
flex-direction: column;
@media (max-width: 1024px) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
`;

export const SpeakOutHeaderRegular = styled.div`
font-size: 15px;
`;

export const SpeakOutHeaderBold = styled.div`
font-weight: bold;
font-size: 25px;
`;

export const SpeakOutContent = styled.div`
padding: 10px 0px;
flex: 13;
@media (max-width: 1024px) {
  text-align: justify;
}
`;