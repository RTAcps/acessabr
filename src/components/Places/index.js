import React, { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import Slider from "../Slider";
import "./styles.scss";

const Places = () => {
  const { filteredPlaces, setFilteredPlaces } = useContext(FilterContext);

  return (
    <section className="places">
      <div className="places__header">
        <h2 className="places__title">
          {filteredPlaces.length ? filteredPlaces + "s " : "Locais "}
          <span>Acessíveis</span>
        </h2>
        <div className="places__select">
          <h5>Ordenar por: </h5>
          <select>
            <option>distância</option>
            <option>nome</option>
          </select>
        </div>
      </div>
      <div className="places__content">
        <Slider />
      </div>
    </section>
  );
};

export default Places;
