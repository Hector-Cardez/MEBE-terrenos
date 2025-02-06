import styled from "styled-components";

const ContactoStyle = styled.div`
  background-image: url("/assets/bg1.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contacto = () => {
  return (
    <ContactoStyle>
      <div className="wrapper">
        <h1>Contacto</h1>
        ¿Tienes preguntas o necesitas más información? Estamos aquí para
        ayudarte. Contáctanos a través de nuestras redes sociales, llámanos, o
        envíanos un mensaje por correo electrónico. Juntos haremos realidad tus
        sueños de inversión en terrenos
        <p>961 607 8444 </p>
        <p>contacto@mebeterrenos.com</p>
      </div>
    </ContactoStyle>
  );
};

export default Contacto;
