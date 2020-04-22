import styled from 'styled-components';

export const Title = styled.div`
font-size: 30px;
color: rgba(0, 0, 0, 0.8);
@media (min-width: 320px) and (max-width: 480px) {
  margin-left: 20px;
}
@media (min-width: 481px) and (max-width: 1024px) {
  margin-left: 20px;
}
`;

export const CharacterCardContainer = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
@media (min-width: 320px) and (max-width: 480px) {
  margin: 0 20px;
}
@media (min-width: 481px) and (max-width: 1024px) {
  margin: 0 20px;
}
`;