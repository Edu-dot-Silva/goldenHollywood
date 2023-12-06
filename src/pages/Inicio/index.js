import Banner from "componentes/Banner";
import Cabecalho from "componentes/Cabecalho";
import Card from "componentes/Card";
import Rodape from "componentes/Rodape/index";
import Titulo from "componentes/Titulo";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home"/>
      <Titulo>
        <h1>Celebrando a Excelência Cinematográfica</h1>
      </Titulo>
<Card id='1' titulo='coringa' capa='https://img.elo7.com.br/product/zoom/2A1A4BF/big-poster-filme-joker-coringa-joaquin-phoenix-lo02-90x60-cm-poster.jpg'></Card>
      <Rodape />
    </>
  );
}

export default Inicio;
