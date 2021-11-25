import React from "react";
import Button from "../Button";
import "./styles.scss";
import iconAudio from "../../images/icon-audio-descricao.svg";
import iconBanheiro from "../../images/icon-banheiro-acessivel.svg";
import iconBraille from "../../images/icon-braille.svg";
import iconCaoguia from "../../images/icon-caoguia.svg";
import iconElevador from "../../images/icon-elevador.svg";
import iconEstacionamento from "../../images/icon-estacionamento.svg";
import iconLibras from "../../images/icon-libras.svg";
import iconPiso from "../../images/icon-piso-tatil.svg";
import iconPorta from "../../images/icon-porta-larga.svg";
import iconRampa from "../../images/icon-rampa.svg";

const Card = () => {
  return (
    <div className="card__container">
      <div className="card__image"></div>
      <div className="card__content">
        <h3>Nome do Local</h3>
        <ul className="card__facilities">
          <li className="card__facilities--item">
            <img
              src={iconBraille}
              alt="Sinalização em Braile"
              title="1. Sinalização em Braile"
            />
          </li>
          <li className="card__facilities--item card__facilities--item--unchecked">
            <img
              src={iconAudio}
              alt="Audio descrição"
              title="2. Audio descrição"
            />
          </li>
          <li className="card__facilities--item">
            <img
              src={iconBanheiro}
              alt="Banheiro acessível"
              title="3. Banheiro acessível"
            />
          </li>
          <li className="card__facilities--item">
            <img
              src={iconElevador}
              alt="Elevador para cadeirantes"
              title="4. Elevador para cadeirantes"
            />
          </li>
          <li className="card__facilities--item">
            <img
              src={iconEstacionamento}
              alt="Estacionamento para idosos ou deficientes"
              title="5. Estacionamento para idosos / deficientes "
            />
          </li>
          <li className="card__facilities--item">
            <img
              src={iconCaoguia}
              alt="Permite acesso de cães-guias"
              title="6. Permite acesso de cães-guias"
            />
          </li>
          <li className="card__facilities--item">
            <img
              src={iconPiso}
              alt="Piso tátil de alerta"
              title="7. Piso tátil de alerta"
            />
          </li>
          <li className="card__facilities--item">
            <img
              src={iconPorta}
              alt="Portas de acesso largas"
              title="8. Portas largas"
            />
          </li>
          <li className="card__facilities--item">
            <img
              src={iconRampa}
              alt="Rampas de acesso para cadeirante"
              title="9. Rampas de acesso para cadeirante"
            />
          </li>
          <li className="card__facilities--item">
            <img
              src={iconLibras}
              alt="Atendimento em Libras"
              title="10. Atendimento em Libras"
            />
          </li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Button>Como chegar</Button>
      </div>
    </div>
  );
};

export default Card;
