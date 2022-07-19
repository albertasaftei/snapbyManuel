import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  Logo,
  Option,
  OptionsContainer,
} from "./styles";
import logo from "../../icons/logo.png";

function Header() {
  return (
    <HeaderContainer
      transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <OptionsContainer>
        <Option>About</Option>
        <Option>Portfolio</Option>
        <Option>Contact</Option>
      </OptionsContainer>
    </HeaderContainer>
  );
}

export default Header;
