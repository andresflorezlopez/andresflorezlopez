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
width: 270px;
`;

export const SpeakOutHeaderRegular = styled.div``;

export const SpeakOutHeaderBold = styled.div`
font-weight: bold;
font-size: 20px;
`;

export const SpeakOutContent = styled.div`
padding: 10px 0px;
`;