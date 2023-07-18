import { styled } from 'styled-components';
import img from '../../images/beer_long_24_1_03_1.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: auto;
  @media screen and (max-width: 1199px) {
    background-position: center;
  }
  @media screen and (min-width: 1200px) {
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;

export const Button = styled.button`
  position: fixed;
  left: 80px;
  width: 100px;
  height: 30px;
  margin-top: 10px;
  background-color: #06c238;
  border-radius: 10px;
  border-color: #06c238;
  cursor: pointer;
  &:hover {
    background-color: #038024;
  }
`;

export const Recipe = styled.div`
  display: flex;
  margin-left: 250px;
  margin-right: 200px;
  padding: 10px;
  border-bottom: 1px solid grey;
`;

export const TextBtn = styled.p`
  margin: auto;
  color: #fcf1e3;
`;

export const Img = styled.img`
  width: 150px;
  height: 390px;
  margin-right: 50px;
`;

export const Name = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;
