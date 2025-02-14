import styled from "styled-components";

const NovedadesStyle = styled.div`
  background-image: linear-gradient(
      rgba(24, 27, 38),
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      transparent,
      rgba(24, 27, 38)
    ),
    url("/assets/bg4.png");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  h1 {
    color: black;
    font-size: 3.2rem;
    color: black !important;
  }

  .wrapper {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    height: 100%;
  }

  p {
    text-align: center;
    color: black !important;
  }
`;

const Novedades = () => {
  return (
    <NovedadesStyle>
      <div className="wrapper">
        <h1>Novedades</h1>
        <div>
          <p className="text-wrapper">
            Síguenos en nuestras redes sociales y descubre nuestras nuevas
            oportunidades, promociones exclusivas y avances en los proyectos.
            <br /> <br />
            ¡No te pierdas nada! <br /> <br />
            Conéctate con nosotros y sé el primero en conocer las oportunidades
            en terrenos de Chiapas, diseñados para cumplir tus sueños."
          </p>
        </div>
      </div>
    </NovedadesStyle>
  );
};

export default Novedades;
