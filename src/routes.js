import Cabecalho from "componentes/Cabecalho";
import Container from "componentes/Container";
import Rodape from "componentes/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
