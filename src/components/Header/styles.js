import styled from "styled-components";
import { darken } from "polished";
export const Container = styled.header`
  background: #fff;
  position: fixed;
  width: 100%;
  z-index: 99;
`;

export const Menu = styled.div`
  max-width: 960px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 0;
  margin: 0 auto;
  img {
    width: 200px;
    height: 87.64px;
    display: block;
  }
`;
export const NavBar = styled.ul`
  display: flex;
  list-style-type: none;
  justify-items: center;
  align-items: baseline;

  a {
    text-align: center;
    color: #0d174b;
    display: block;
    width: 100px;
    text-decoration: none;

    justify-content: center;
    justify-items: center;

    font-size: 12px;

    transition: color 0.2s;
    &:hover {
      color: ${darken(0.03, "#FCCE29")};
    }
  }
`;
