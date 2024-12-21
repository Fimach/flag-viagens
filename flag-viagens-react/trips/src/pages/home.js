import NavHeader from "../components/header";
import NavFooter from "../components/footer";

const Home = () => {
   return (
    <>
        <NavHeader />
        
        <div className="main-content index-page">
            <div className="content-header">
                <div className="text-default">"Quem coleciona lugares, acomula histórias."</div>
                <div className="search-box">
                    <input type="text" name="" id="search-input" placeholder="procurar"/>
                </div>
            </div>
            <div className="content-body">
                <a href="/portugal">
                    <div className="content-section section-portugal">
                        <div className="section-title">PORTUGAL</div>
                        <div className="section-body">
                            <div className="section-item">Lisboa</div>
                            <div className="section-item">Carvoeiro</div>
                            <div className="section-item">Açores</div>
                            <div className="section-item">Madeira</div>
                        </div>
                    </div>
                </a>
                <a href="/trails">
                    <div className="content-section section-trails">
                        <div className="section-title trilhos">TRILHOS</div>
                        <div className="section-body">
                            <div className="section-item">Caminho de Santiago</div>
                            <div className="section-item">Sul de França</div>
                            <div className="section-item">Norte de Espanha</div>
                        </div>
                    </div>
                </a>
                <a href="/europe">
                    <div className="content-section section-europe">
                        <div className="section-title">EUROPA</div>
                        <div className="section-body">
                            <div className="section-item">Itália</div>
                            <div className="section-item">França</div>
                            <div className="section-item">Espanha</div>
                            <div className="section-item">Alemanha</div>
                        </div>
                    </div>
                </a>
                <a href="/africa">
                    <div className="content-section section-africa">
                        <div className="section-title">ÁFRICA</div>
                        <div className="section-body">
                            <div className="section-item">Marrocos</div>
                            <div className="section-item">Nigéria</div>
                            <div className="section-item">Áfirca do Sul</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>


        <NavFooter />
        
    </>
   );
};
 
export default Home;

