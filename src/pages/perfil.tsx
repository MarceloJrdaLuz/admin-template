import Layout from "../components/template/Layout";
// import { AppConsumer } from "../data/context/AppContext";
import useAppData from "../data/hook/useAppData";


export default function Perfil() {
  // const ctx = useAppData()   Abaixo usando o destructor
  // const {tema, alternarTema} = useAppData()
  return (
    <Layout titulo="Perfil do usuário"
            subtitulo="Administre suas informações">
           {/* <AppConsumer>
             {dados => <h3>{dados.nome}</h3>}
           </AppConsumer> */}
           <h1>Perfil de Usuário</h1>
    </Layout>
  )
}
