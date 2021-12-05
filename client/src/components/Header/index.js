import React from "react";
import './index.css'
import { Image } from "react-bootstrap";

function Header() {
  return (
    <header className="header">
      <div>
        <Image className="logo" src="./assets/images/whoisit.png" fluid></Image>
      </div>
      <h5>Search Domain and IP data from WHOIS</h5>
    </header>
  )
}

export default Header;