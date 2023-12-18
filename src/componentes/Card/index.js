import { useFavoritoContext } from "contextos/Favoritos";
import styles from "./Card.module.css";
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'
import { Link } from "react-router-dom";

function Card({ id, titulo, ano, capa }) {

const { favorito,adicionarFavorito } = useFavoritoContext()

const favoritado = favorito.some((favorito) => favorito.id === id)

const icone = !favoritado? iconeFavoritar : iconeDesfavoritar

  return (
    <div className={styles.container}>
    <div className={styles.containerComFilme}>
      <div className={styles.filme}>
      <Link className={styles.link} to={`/${id}`}>
      <img src={capa} alt={titulo} className={styles.capa} />

      <h2>{titulo}</h2>
      <h3>{ano}</h3>
      </Link>
      <img
        src={icone}
        alt="Favoritar Filme"
        className={styles.favoritar}
        onClick={()=>{
          adicionarFavorito({ id, titulo, capa, ano })
        }}
      />
      </div>
    </div>
    </div>

  );
}

export default Card;
