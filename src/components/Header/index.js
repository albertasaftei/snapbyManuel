import React from "react";
import { HeaderContainer, LogoContainer, Logo } from "./styles";
import logo from "../../icons/logo.png";

function Header() {
  return (
    <HeaderContainer
      transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
    >
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
    </HeaderContainer>
  );
}

export default Header;
