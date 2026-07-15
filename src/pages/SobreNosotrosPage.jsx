
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import EjesCard from "../components/SobreNosotros/EjesCard";
import MisionVision from "../components/SobreNosotros/MisionVision";
import Valores from "../components/SobreNosotros/Valores";
import FadeIn from "../styles/FadeIn";
import "../styles/style.css";

const SobreNosotrosPage = () => {
  return (
    
    <>
    <MainNavbar/>

       <div className="sn-root">

      <section className="sn-hero" 
      style={{"--hero-image": 'url(https://tse1.mm.bing.net/th/id/OIP.eYAFT3a7C3HpXtBj8YVQCwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3)'}}>
        <h1>
          Somos <em>Caritas Costa Rica </em>
        </h1>
        <p className="sn-hero-sub">
          Una organización de la Iglesia Católica comprometida con 
          el servicio a los más necesitados y la promoción de la dignidad humana.
        </p>
      </section>
      </div>

      <section className="sn-section obj-section">
        <div className="obj-inner">
          <FadeIn>
            <div className="obj-tag">Objetivo general 2026–2028</div>
            <blockquote>
              Promover el desarrollo humano integral, solidario, justo, equitativo y sostenible,
              impulsando procesos facilitadores de la vida en plenitud, para contribuir a la construcción
              del bien común en la sociedad costarricense, desde los valores de la Doctrina Social de la Iglesia.
            </blockquote>
          </FadeIn>
        </div>
      </section>
 
      <MisionVision/>
      <Valores/>
      <EjesCard/>
      <Footer/>
    </>
  );
};

export default SobreNosotrosPage;