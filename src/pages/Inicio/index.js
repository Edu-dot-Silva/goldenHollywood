import Banner from "componentes/Banner";

import Card from "componentes/Card";

import Titulo from "componentes/Titulo";
import filmes from 'json/db.json'
import styles from './inicio.module.css'

function Inicio() {
  return (
    <>
    
      <Banner imagem="home"/>
      <Titulo>
        <h1>Celebrando a Excelência Cinematográfica</h1>
      </Titulo>
      <section className={styles.container}>
        {filmes.map((filme)=>{
          return <Card {...filme} key={filme.id}/>
        })}
      </section>
     
    </>
  );
}

export default Inicio;
