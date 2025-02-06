import styled from "styled-components";

const DesarrolloStyle = styled.div`
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
const Desarrollo = () => {
  return (
    <DesarrolloStyle>
      <div>
        <h1>El Pedregal</h1>

        <p>
          El Pedregal se encuentra a solo 1.5 km del parque central del Jobo.
          Este espacio ofrece una superficie plana y un clima más fresco en
          comparación con Tuxtla Gutiérrez, lo que lo hace ideal para diversas
          actividades. Además, contamos con opciones de terrenos tanto con
          árboles como sin ellos, brindando flexibilidad a los interesados.{" "}
          <br /> <br /> En el área, es posible observar una gran cantidad de
          aves y disfrutar de la rica flora local de la selva baja caducifolia.{" "}
          <br /> <br />
          Los terrenos de El Pedregal son rústicos, lo que les da un carácter
          natural y auténtico. A pesar de esto, el crecimiento poblacional en la
          zona es rápido, y se pueden encontrar casas a solo 100 metros del
          terreno, lo que sugiere un desarrollo vecinal activo y potencial para
          inversión.
        </p>
        <div>
          {/* <img
            className="img-desarroyo"
            src="/assets/bg3.png"
            alt="El Pedregal"
          /> */}
        </div>
      </div>
    </DesarrolloStyle>
  );
};

export default Desarrollo;
