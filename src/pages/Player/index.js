import Banner from "componentes/Banner";
import styles from "./Player.module.css";
import Titulo from "componentes/Titulo";
import { useParams } from "react-router-dom";
import filmes from "json/db.json";
import NaoEncontrada from "pages/NaoEncontrada";

function Player({ titulo, ano}) {
  const parametros = useParams();

  const filme = filmes.find((filme) => {
    return filme.id === Number(parametros.id);
  });

  if (!filme) {
    return <NaoEncontrada />;
  }
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Trailer</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
        className={styles.player}
          width="90%"
          height="700px"
          src={filme.link}
          title={filme.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}

export default Player;
