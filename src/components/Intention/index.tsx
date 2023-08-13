import garbage from "../../assets/images/garbage.png";
import funnel from "../../assets/images/funnel.png";
import blueGranol from "../../assets/images/granol-blue.png";
import yellowGranol from "../../assets/images/granol-yellow.png";
import granolHill from "../../assets/images/granols.png";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);
function Intention() {
  const garbageRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    gsap.to(".intention__garbages", {
      y: 300,
      duration: 5,
      scrollTrigger: {
        trigger: ".intention__garbages",
        scrub: true,
      },
    });
    gsap.to(".intention__granols__singles", {
      y: 180,
      duration: 2,
      scrollTrigger: {
        trigger: ".intention__granols__hill",
        scrub: true,
        start: "top +=100 ",
      },
    });
  }, []);
  return (
    <div className="intention">
      <div className="intention__box"></div>
      <div className="intention__garbages" ref={garbageRef}>
        <img src={garbage} alt="garbage" />
      </div>
      <div className="intention__funnel">
        <img src={funnel} alt="" />
        <div className="intention__title">{t("intentions.title")}</div>
        <div className="intention__granols__singles">
          <div className="intention__granols__right">
            <img src={blueGranol} alt="" />
          </div>
          <div className="intention__granols__left">
            <img src={yellowGranol} alt="" />
          </div>
        </div>
      </div>
      <div className="intention__granols">
        <div className="intention__granols__hill">
          <img src={granolHill} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Intention;
