import styled from "styled-components";

const DesarrolloStyle = styled.div`
  background-color: rgba(24, 27, 38, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3vw;
  height: 100vh;

  img {
    height: 400px;
    width: auto;
  }
  .wrapper {
    padding: 30px;
  }
  h1 {
    font-size: 3.2rem;
  }
`;
const Desarrollo = () => {
  return (
    <DesarrolloStyle>
      <div className="wrapper">
        <h1>El Pedregal</h1>
        <br />
        <div>
          <p className="text-wrapper ">
            El Pedregal se encuentra a solo 1.5 km del parque central del Jobo.
            Este espacio ofrece una superficie plana y un clima más fresco en
            comparación con Tuxtla Gutiérrez, lo que lo hace ideal para diversas
            actividades. Además, contamos con opciones de terrenos tanto con
            árboles como sin ellos, brindando flexibilidad a los interesados.{" "}
            <br /> <br /> En el área, es posible observar una gran cantidad de
            aves y disfrutar de la rica flora local de la selva baja
            caducifolia. <br /> <br />
            Los terrenos de El Pedregal son rústicos, lo que les da un carácter
            natural y auténtico. A pesar de esto, el crecimiento poblacional en
            la zona es rápido, y se pueden encontrar casas a solo 100 metros del
            terreno, lo que sugiere un desarrollo vecinal activo y potencial
            para inversión.
          </p>
        </div>
      </div>
      <div>
        <img className="wrapper" src="/assets/bg3.png" alt="El Pedregal" />
      </div>
    </DesarrolloStyle>
  );
};

export default Desarrollo;
