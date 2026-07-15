import { HashRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import SobreNosotrosPage from "./pages/SobreNosotrosPage"
import HambrePobrezaPage from "./pages/Estudios/HambrePobrezaPage"
import ContactoPage from "./pages/ContactoPage"
import InfanciaPage from "./pages/Estudios/InfanciaPage"
import BibliotecaPage from "./pages/BibliotecaPage"
import DerechosHumanosPage from "./pages/AreasDeTrabajo/DerechosHumanosPage"
import InstitucionalPage from "./pages/AreasDeTrabajo/InstitucionalPage"
import EcologiaPage from "./pages/AreasDeTrabajo/EcologiaPage"
import ComunionPage from "./pages/AreasDeTrabajo/ComunionPage"


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        
        <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />

        <Route path= "/hambre-pobreza" element={<HambrePobrezaPage/>}/>

        <Route path = "/contacto" element={<ContactoPage/>} />

        <Route path = "/infancia" element={<InfanciaPage/>} />

        <Route path = "/biblioteca" element={<BibliotecaPage/>} />

        <Route path = "/derechos-humanos" element={<DerechosHumanosPage/>} />
        
        <Route path = "/institucional" element={<InstitucionalPage/>} />

        <Route path = "/ecologia" element={<EcologiaPage/>} />

        <Route path = "/comunion" element={<ComunionPage/>} />

      </Routes>
    </HashRouter>
        
  )
}

export default App