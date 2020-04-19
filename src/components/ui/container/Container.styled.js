import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: verdana;
  @media (min-width: 320px) and (max-width: 480px) {
    
  }
  
  @media (min-width: 481px) and (max-width: 1024px) {
    margin: 0 auto;
  }
  
  @media (min-width: 1025px){ 
    width: 1025px;
    margin: 0 auto;
  }
`;