import styled from "styled-components";

const ContactoStyle = styled.div`
  // background-image: url("/assets/bg1.png");
  // background-size: cover;
  // background-position: center;
  background-color: rgba(39, 41, 49, 1);
  height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3vw;

  .wrapper {
    flex: 1; /* Makes each child div take up equal space */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Contacto = () => {
  return (
    <ContactoStyle>
      <div>
        <div className="wrapper">
          <img
            src="/assets/LOGO_MEBE_blanco.png"
            alt="icono instagram"
            className=" icono-logo"
          />
        </div>

        <a href="https://wa.me/5219616078444" target="_blank">
          <img
            src="/assets/icono-whatsapp.png"
            alt="icono whatsapp"
            className="icono icono-contacto"
          />
        </a>
        <a
          href="https://www.instagram.com/mebeterrenos?igsh=dXV2a3QweXlnYWIx"
          target="_blank"
        >
          <img
            src="/assets/icono-ig.png"
            alt="icono instagram"
            className="icono icono-contacto"
          />
        </a>
        <a href="https://www.facebook.com/mebeterrenos" target="_blank">
          <img
            src="/assets/icono-fb.png"
            alt="icono facebook"
            className="icono icono-contacto"
          />
        </a>
      </div>

      <div className="wrapper">
        ¿Tienes preguntas o necesitas más información? Estamos aquí para
        ayudarte.
      </div>

      <div className="wrapper">
        <h4>Teléfono</h4>
        <br />
        <p>+ 52 1 961 607 8444 </p>
      </div>

      <div className="wrapper">
        <h4>Correo electrónico</h4>
        <br />
        <p>contacto@mebeterrenos.com</p>
      </div>
    </ContactoStyle>
  );
};

export default Contacto;
