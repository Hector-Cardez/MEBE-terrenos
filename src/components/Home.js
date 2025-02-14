import "./styles/styles.css";
import { useEffect } from "react";

import Empresa from "./Empresa";
import Desarrollos from "./Desarrollos";
import Contacto from "./Contacto";
import Novedades from "./Novedades";
const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navBarWrapper = document.querySelector(".nav-bar-wrapper");
      if (window.scrollY > 0) {
        navBarWrapper.classList.add("scrolled");
      } else {
        navBarWrapper.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="website">
      <div className="home-wrapper">
        <div className="nav-bar-wrapper">
          <a className="navLink" href="/home">
            <img
              src="/assets/LOGO_MEBE_blanco.png"
              alt="MEBE Logo"
              className="navLink logo"
            />
          </a>
          <a className="navLink subrayado" href="#empresa">
            Empresa
          </a>
          <a className="navLink subrayado" href="#desarrollos">
            Desarrollos
          </a>
          <a className="navLink subrayado" href="#novedades">
            Novedades
          </a>
          <a className="navLink subrayado" href="#contacto">
            Contacto
          </a>
        </div>

        <div className="eslogan-wrapper">
          <h2 className="eslogan"> Un terreno a la vez </h2>

          <a className=" sobre-nosotros" href="/empresa">
            <div className="button">
              <img
                src="/assets/arrow.gif"
                alt="Sobre nosotros"
                className="btn-img"
              />
              <div className="btn-txt">SOBRE NOSOTROS</div>
            </div>
          </a>
        </div>

        <div className="iconos">
          <img
            src="/assets/linea.png"
            alt="icono linea"
            className="icono linea"
          />
          <a href="https://wa.me/5219616078444" target="_blank">
            <img
              src="/assets/icono-whatsapp.png"
              alt="icono whatsapp"
              className="icono icono-logo"
            />
          </a>
          <a
            href="https://www.instagram.com/mebeterrenos?igsh=dXV2a3QweXlnYWIx"
            target="_blank"
          >
            <img
              src="/assets/icono-ig.png"
              alt="icono instagram"
              className="icono icono-logo"
            />
          </a>

          <a href="https://www.facebook.com/mebeterrenos" target="_blank">
            <img
              src="/assets/icono-fb.png"
              alt="icono facebook"
              className="icono icono-logo"
            />
          </a>

          <img
            src="/assets/linea.png"
            alt="icono linea"
            className="icono linea"
          />
        </div>

        <video autoPlay loop muted>
          <source src="/assets/terreno00007597.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div id="empresa">
        <Empresa />
      </div>
      <div id="desarrollos">
        <Desarrollos />
      </div>
      <div id="novedades">
        <Novedades />
      </div>

      <div id="contacto">
        <Contacto />
      </div>
    </div>
  );
};

export default HomePage;
