import React from "react";
import styles from './Filtro.module.css'

function Filtro({ setOrdenacao, setFiltroAlfabetico }) {
  const handleOrdenacaoChange = (e) => {
    setOrdenacao(e.target.value);

    if (e.target.value === 'alfabetico') {
      setFiltroAlfabetico('');
    }
  };

  const handleFiltroAlfabeticoChange = (e) => {
    setFiltroAlfabetico(e.target.value);
  };

  return (
    <div className={styles.filtro}>
      <label className={styles.filtro}>

        <p>Ordenar por:</p>
        <select onChange={handleOrdenacaoChange}>
          <option value="asc">Mais Antigo para Mais Recente</option>
          <option value="desc">Mais Recente para Mais Antigo</option>
          <option value="alfabetico">Ordem Alfabética</option>
        </select>
      </label>
          </div>
  );
}

export default Filtro;
