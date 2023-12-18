import Cabecalho from "componentes/Cabecalho"
import Container from "componentes/Container"
import Rodape from "componentes/Rodape"
import FavoritosProvider from "contextos/Favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase(){
    return(
<main>
    <Cabecalho/>
    <FavoritosProvider>
        <Container>
            <Outlet/>
        </Container>
    </FavoritosProvider>
    <Rodape/>
</main>
    )
}

export default PaginaBase