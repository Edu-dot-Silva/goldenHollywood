import Banner from "componentes/Banner";
import Card from "componentes/Card";
import filmes from '../../json/db.json'
import Titulo from "componentes/Titulo";
import styles from './inicio.module.css'
import { useEffect, useState } from "react";
import Filtro from "componentes/Filtro";

function Inicio() {

  const [ordenacao, setOrdenacao] = useState('asc');
  const [filtroAlfabetico, setFiltroAlfabetico] = useState('');

  const ordenarFilmes = () => {
    return filmes.slice().sort((a, b) => {
      if (ordenacao === 'alfabetico') {
        return a.titulo.localeCompare(b.titulo);
      }

      const dataA = new Date(a.ano);
      const dataB = new Date(b.ano);

      return ordenacao === 'asc' ? dataA - dataB : dataB - dataA;
    });
  };


  return (
    <>
    
      <Banner imagem="home"/>
      <Titulo>
        <h1>Celebrando a Excelência Cinematográfica</h1>
      </Titulo>

      <Filtro setOrdenacao={setOrdenacao} setFiltroAlfabetico={setFiltroAlfabetico} />
    
      <section className={styles.container}>
      {ordenarFilmes().map((filme) => (
          <Card {...filme} key={filme.id} />
        ))}
      </section>
     
    </>
  );
}

export default Inicio;
