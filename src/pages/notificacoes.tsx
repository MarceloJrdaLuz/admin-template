import Layout from "../components/template/Layout";
// import { AppConsumer } from "../data/context/AppContext";
import useAppData from "../data/hook/useAppData";


export default function Notificacoes() {
  // const ctx = useAppData()   Abaixo usando o destructor
  // const {tema, alternarTema} = useAppData()
  return (
    <Layout titulo="Notificações"
            subtitulo="Aqui voce Gerencia suas notificações">
           {/* <AppConsumer>
             {dados => <h3>{dados.nome}</h3>}
           </AppConsumer> */}
           <h1>Notificações</h1>
    </Layout>
  )
}
