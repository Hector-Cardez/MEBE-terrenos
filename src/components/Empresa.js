import styled from "styled-components";
import Carousel from "./Carousel";

const EmpresaStyle = styled.div`
  background-image: linear-gradient(
    rgba(39, 41, 49, 0.8),
    transparent,
    transparent,
    transparent,
    rgba(39, 41, 49, 1)
  );
  background: rgba(39, 41, 49, 1);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Empresa = () => {
  return (
    <EmpresaStyle>
      <div className="text-wrapper">
        <h1>¿Quiénes somos?</h1>
        <div className="info-wrapper">
          <p>
            En estas dos décadas de compromiso inquebrantable, en la venta de
            terrenos en Chiapas, hemos construido una reputación de confianza,
            integridad y conocimiento profundo del mercado. Nuestra pasión por
            la naturaleza y el campo es palpable en la transacción de cada
            terreno que ofrecemos. ¡Bienvenido a nuestra familia de bienes
            raíces, donde los sueños toman forma y la naturaleza se convierte en
            tu hogar!
          </p>
        </div>
      </div>
      <Carousel />
    </EmpresaStyle>
  );
};

export default Empresa;
