import styled from 'styled-components';

export const CharacterCardContainer = styled.div`
background: rgba(255, 0, 0, 0.3);
margin: 20px 0;
@media (min-width: 320px) and (max-width: 480px) {
  width: 100%;
}

@media (min-width: 481px) and (max-width: 1024px) {
  
}

@media (min-width: 1025px){ 
  width: 490px;
  height: 600px;
}
`;

export const Name = styled.div``;

export const Description = styled.div``;

export const Rate = styled.div`
  height: 48px;
  background: red;
`;

