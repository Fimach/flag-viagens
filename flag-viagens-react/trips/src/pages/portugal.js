import NavHeader from "../components/header";
import NavFooter from "../components/footer";

const TripPortugal = () => {
    return (
    <>
        <NavHeader />

        <div className="main-content details-page">
            <div className="content-header">
                <div className="trip-name text-default text-big">PORTUGAL</div>
                <div className="page-name text-default">Detalhes de Viagem</div>
            </div>
            <div className="content-body">
                <div className="trip-header">
                    <div className="images-slideshow">
                        <div className="image-item"><img src={require("../images/portugal.jpg")}/></div>
                        <div className="image-item"><img src={require("../images/portugal/1.jpg")}/></div>
                        <div className="image-item"><img src={require("../images/portugal/2.jpg")}/></div>
                        <div className="image-item"><img src={require("../images/portugal/3.jpg")}/></div>
                        <div className="image-item"><img src={require("../images/portugal/4.jpg")}/></div>
                        <div className="image-item"><img src={require("../images/portugal/5.jpg")}/></div>
                    </div>
                    <div className="map-locations">
                        <div className="loader">l o a d i n g m a p</div>
                        <div>
                            <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?hl=en&amp;q=Portugal+()&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=near&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
                <div className="trip-body">
                    <div className="trip-locations">
                        <div className="location-item text-big">Lisboa</div>
                        <div className="location-item text-big">Carvoeiro</div>
                        <div className="location-item text-big">Açores</div>
                        <div className="location-item text-big">Madeira</div>
                    </div>
                    <div className="trip-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
                <div></div>
            </div>
        </div>

        <NavFooter />
    </>
    );
 };
  
 export default TripPortugal;
 
 