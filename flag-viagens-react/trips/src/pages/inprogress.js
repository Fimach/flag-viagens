import NavHeader from "../components/header";
import NavFooter from "../components/footer";

const TripInProgress = () => {
    return (
    <>
        <NavHeader />

        <div className="main-content details-page">
            <div className="content-header">
                <div className="trip-name text-default text-big">IN PROGRESS</div>
                <div className="page-name text-default">Page under construction</div>
            </div>
            <div className="content-body">

            </div>
        </div>

        <NavFooter />
    </>
    );
 };
  
 export default TripInProgress;
 
 