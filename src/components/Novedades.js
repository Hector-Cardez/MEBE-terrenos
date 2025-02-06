import styled from "styled-components";

const NovedadesStyle = styled.div`
  background-image: url("/assets/bg4.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Novedades = () => {
  return (
    <NovedadesStyle>
      <h1>Novedades</h1>
      Síguenos en nuestras redes sociales y descubre nuestras nuevas
      oportunidades, promociones exclusivas y avances en los proyectos. ¡No te
      pierdas nada! <br />
      Conéctate con nosotros y sé el primero en conocer las oportunidades en
      terrenos de Chiapas, diseñados para cumplir tus sueños."
    </NovedadesStyle>
  );
};

export default Novedades;
