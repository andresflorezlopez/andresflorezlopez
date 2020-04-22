import styled from "styled-components";
import {Container} from "../container/Container.styled";

export const HeaderMainContainer = styled.header`
background: linear-gradient(180deg, black 0%, rgba(0,0,0,0.5) 25%, transparent 90%);
position: absolute;
width: 100%;
`;

export const HeaderContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0 10px;
  }
  
  @media (min-width: 481px) and (max-width: 1024px) {
    padding: 0 10px;
  }
`;

export const MenuListContainer = styled.ul`
margin: 0;
padding: 30px 0;
display: flex;
justify-content: space-between;
`;

export const MenuItem = styled.li`
list-style-type: none;
color: white;
font-size: 14px;
margin: 0 20px;
`;

export const Link = styled.div`
color: white;
`

export const Logo = styled.div`
font-size: 20px;
justify-content: center;
align-items: center;
display: flex;
`;