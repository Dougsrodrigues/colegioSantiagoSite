import React from "react";
import { Link } from "react-router-dom";

import {
  TiHomeOutline,
  TiPhoneOutline,
  TiGroupOutline,
  TiWorldOutline,
  TiMortarBoard
} from "react-icons/ti";
import logo from "../../images/logoSantiago.png";
import { Container, NavBar, Menu } from "./styles";

export default function Header() {
  return (
    <Container>
      <Menu>
        <Link to="/">
          <img src={logo} alt="Colegio Santiago" />
        </Link>
        <NavBar>
          <li>
            <a href="/">
              <TiHomeOutline size={30}></TiHomeOutline>
              <br></br>
              HOME
            </a>
          </li>
          <li>
            <a href="/">
              <TiWorldOutline size={30}></TiWorldOutline>
              <br></br>
              SOBRE NÓS
            </a>
          </li>
          <li>
            <a href="/">
              <TiMortarBoard size={30}></TiMortarBoard>
              <br></br>
              PRÉ-MATRICULA
            </a>
          </li>
          <li>
            <a href="/">
              <TiPhoneOutline size={30}></TiPhoneOutline>
              <br></br>
              CONTATO
            </a>
          </li>
          <li>
            <a href="/">
              <TiGroupOutline size={30}></TiGroupOutline>
              <br></br>
              TRABALHE CONOSCO
            </a>
          </li>
        </NavBar>
      </Menu>
    </Container>
  );
}
