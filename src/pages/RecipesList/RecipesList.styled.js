import styled from 'styled-components';
import img from '../../images/2208_w018_n002_1176b_p15_1176.jpg';

export const Container = styled.div`
  width: 100%;
  background-image: url(${img});
  background-repeat: repeat;
  background-size: auto;
  @media screen and (max-width: 1199px) {
    background-position: center;
  }
  @media screen and (min-width: 1200px) {
    background-image: url(${img});
    background-repeat: repeat;
    background-size: 100%;
  }
`;

export const RecipesListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 180px 10px;
  align-items: center;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  list-style: none;
  column-gap: 30px;
`;
