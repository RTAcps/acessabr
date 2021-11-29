import React, { useContext, useEffect } from "react";
import "./styles.scss";
import imageDestack from "../../images/imagem-destaque.svg";
import { FilterContext } from "../../contexts/FilterContext";
import Pills from "../../components/Pills";
import { useParams } from "react-router";
import { LocationContext } from "../../contexts/LocationContext";

const PLACES = ["Parque", "Museu", "Zoológico", "Aquário", "Mercado", "Todos"];

const Home = () => {
  const { city, state } = useParams;
  const { setCity, setState } = useContext(LocationContext);
  const { filteredPlaces, setFilteredPlaces } = useContext(FilterContext);

  const handleFilterPlace = (item) => {
    if (item !== filteredPlaces) {
      setFilteredPlaces(item);
    }

    if (item === "Todos") {
      setFilteredPlaces(" ");
    }
  };

  useEffect(() => {
    setCity(city);
    setState(state);
  }, [city, state]);

  return (
    <main id="main-content" className="home__container">
      <div className="home__col">
        <h1 className="home__title">{city} para todos</h1>
        <div className="home__image home__image--destack hide-desktop">
          <img
            src={imageDestack}
            alt="Imagem destaque cadeirante com um globo prateado na cabeça"
          />
        </div>
        <p className="home__text">
          Nossa missão é facilitar o encontro entre lugares inclusivos e pessoas
          que buscam alternativas culturais para sair de casa, com a mobilidade
          que todo cidadão precisa.{" "}
        </p>
        <p className="home__text">
          Checamos 10 itens essenciais de acessibilidade para pessoas com
          deficiência em diversos pontos da cidade.
        </p>
        <div className="home__pills">
          {PLACES.map((item) => (
            <Pills
              local={item}
              selected={filteredPlaces === item}
              onClick={() => handleFilterPlace(item)}
            />
          ))}
        </div>
      </div>
      <div className="home__col">
        <div className="home__image home__image--destack hide-mobile">
          <img
            src={imageDestack}
            alt="Imagem destaque cadeirante com um globo prateado na cabeça"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
