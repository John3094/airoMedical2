import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const RecipesItemStyled = styled.li`
  padding: 10px;
  width: 210px;
  height: 400px;
  border: 1px solid grey;

  &:hover {
    background-color: #fce9bb;
  }
  &:active {
    box-shadow: 10px 10px 5px 5px rgb(252, 138, 8);
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  width: 200px;
  height: 300px;
  text-decoration: none;
`;

export const Img = styled.img`
  width: 150px;
  height: 390px;
`;

export const Name = styled.p`
  font-size: 15px;
  font-weight: 500;
`;
