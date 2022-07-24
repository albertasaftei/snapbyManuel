import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  LogoContainer,
  Logo,
  Option,
  OptionsContainer,
} from "./styles";

function Header() {
  return (
    <HeaderContainer
      transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <LogoContainer>
        <Link to="/" style={{ display: "flex", flexDirection: "column" }}>
          <Logo>Manuel</Logo>
          <Logo>Ferrari</Logo>
        </Link>
      </LogoContainer>
      <OptionsContainer>
        <Option>About</Option>
        <Option>
          <Link to="/portfolio">Portfolio</Link>
        </Option>
        <Option>Contact</Option>
      </OptionsContainer>
    </HeaderContainer>
  );
}

export default Header;
