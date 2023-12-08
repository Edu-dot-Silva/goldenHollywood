import { useFavoritoContext } from "contextos/Favoritos";
import styles from "./Card.module.css";
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'

function Card({ id, titulo, capa }) {

const { favorito,adicionarFavorito } = useFavoritoContext()

const favoritado = favorito.some((favorito) => favorito.id === id)

const icone = !favoritado? iconeFavoritar : iconeDesfavoritar

  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img
        src={icone}
        alt="Favoritar Filme"
        className={styles.favoritar}
        onClick={()=>{
          adicionarFavorito({ id, titulo, capa })
        }}
      />
    </div>
  );
}

export default Card;
