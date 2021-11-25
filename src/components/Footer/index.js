import React from "react";
import "./styles.scss";
import iconTop from "../../images/icon-top.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section footer__section--first">
        <div className="footer__container">
          <p>
            <strong>Observação</strong> este site é uma amostra de
            desenvolvimento tecnológico de iniciativa independente, as
            informações aqui apresentadas podem estar eventualmente
            desatualizadas, por isso recomendamos sempre conferir as informações
            diretamente com o estabelecimento. A exibição dos locais, nesta
            página não caracteriza recomendação de uso.
          </p>
        </div>
      </div>
      <div className="footer__section footer__section--second">
        <div className="footer__container">
          <p>
            <strong>
              Projeto Elaborado durante a RDW{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ebaconline.com.br/"
              >
                E.B.A.C
              </a>{" "}
              2021
            </strong>
            <small>
              Projetado por{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/cavalcantemmarcelo"
              >
                Marcelo Cavalcante
              </a>{" "}
              e{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/mja-maia"
              >
                Miguel Maia
              </a>{" "}
              , desenvolvido por{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/RTAcps"
              >
                Rodrigo Teixeira de Andrade
              </a>
              .
            </small>
          </p>
          <a href="#top" className="button">
            <img src={iconTop} alt="Botão para subir para o topo da página" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
