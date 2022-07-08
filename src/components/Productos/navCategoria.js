import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
const NavCategoria = () => {
  const submitCategory = (cat) => {
    console.log(cat);
  };

  const navbarSecundarioFijo = () => {
    const navbarr = document.getElementById("navbar-1");
    const navbarText1 = document.getElementById("navbar-text1");
    const navbarText2 = document.getElementById("navbar-text2");
    const navbarText3 = document.getElementById("navbar-text3");
    const navbarText4 = document.getElementById("navbar-text4");

    let positionX = 0;
    window.onscroll = () => {
      positionX = document.documentElement.scrollTop;
      if (positionX > 911) {
        navbarr.classList.add("navbar-secundario");
        navbarText1.classList.add("nav-prod-text-scroll");
        navbarText1.classList.remove("navbar-prod-text");
        navbarText2.classList.add("nav-prod-text-scroll");
        navbarText2.classList.remove("navbar-prod-text");
        navbarText3.classList.add("nav-prod-text-scroll");
        navbarText3.classList.remove("navbar-prod-text");
        navbarText4.classList.add("nav-prod-text-scroll");
        navbarText4.classList.remove("navbar-prod-text");
      } else {
        navbarText1.classList.add("navbar-prod-text");
        navbarText2.classList.add("navbar-prod-text");
        navbarText3.classList.add("navbar-prod-text");
        navbarText4.classList.add("navbar-prod-text");
        navbarr.classList.remove("navbar-secundario");
        navbarText1.classList.remove("nav-prod-text-scroll");
        navbarText2.classList.remove("nav-prod-text-scroll");
        navbarText3.classList.remove("nav-prod-text-scroll");
        navbarText4.classList.remove("nav-prod-text-scroll");
      }
    };
  };

  useEffect(() => {
    navbarSecundarioFijo();
  }, []);

  return (
    <>
      <Nav
        id="navbar-1"
        className="justify-content-center text-size py-navbar-secundario"
        activeKey="/home"
      >
        <Nav.Item>
          <Nav.Link href="#divTallarines">
            <span id="navbar-text1" className="navbar-prod-text">
              Tallarines
            </span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#divTapas" eventKey="link-1">
            <span id="navbar-text2" className="navbar-prod-text">
              Tapas
            </span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#divPastas" eventKey="link-2">
            <span id="navbar-text3" className="navbar-prod-text">
              Pastas Frescas
            </span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#divBombitas" eventKey="link-2">
            <span id="navbar-text4" className="navbar-prod-text">
              Bombitas
            </span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavCategoria;
