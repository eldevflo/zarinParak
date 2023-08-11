import garbage from "../../assets/images/garbage.png";
import funnel from "../../assets/images/funnel.png";
import blueGranol from "../../assets/images/granol-blue.png";
import yellowGranol from "../../assets/images/granol-yellow.png";
import granolHill from "../../assets/images/granols.png";
function Intention() {
  return (
    <div className="intention">
      <div className="intention__box"></div>
      <div className="intention__garbages">
        <img src={garbage} alt="garbage" />
      </div>
      <div className="intention__funnel">
        <img src={funnel} alt="" />
      </div>
      <div className="intention__granols">
        <div className="intention__granols__singles">
          <div className="intention__granols__right">
            <img src={blueGranol} alt="" />
          </div>
          <div className="intention__granols__left">
            <img src={yellowGranol} alt="" />
          </div>
        </div>
        <div className="intention__granols__hill">
          <img src={granolHill} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Intention;
