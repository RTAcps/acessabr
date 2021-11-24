import React from "react";
import "./styles.scss";
import curatorPhoto from "../../images/rodrigo-andrade.svg";

function CuratorItem() {
  return (
    <div className="curator__container">
      <div className="curator__photo">
        <img
          src={curatorPhoto}
          alt="Foto de perfil do curador Rodrigo Teixeira de Andrade"
        />
      </div>
      <div className="curator__datails">
        <div>
          <h3>Rodrigo Teixeira de Andrade</h3>
          <h6>Curadoria</h6>
        </div>
        <p>
          Desenvolvedor web em formação desde 2020, atualmente professor de
          ensino fundamental em transição de carreira.
        </p>
      </div>
    </div>
  );
}

export default CuratorItem;
