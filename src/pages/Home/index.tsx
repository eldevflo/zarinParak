import Intention from "../../components/Intention";
import hero from "../../assets/images/hero.png";
import Products from "../../components/Products";

function Home() {
  return (
    <div className="home">
      <div className="home__hero">
        <img
          src={hero}
          alt="hero"
          className="home__hero__image"
          width={500}
          height={500}
        />
        <div className="home__hero__intro">
          <h1>پیشرو در بازیافت ضایعات پلاستیک</h1>
        </div>
      </div>

      <Intention />
      <Products />
    </div>
  );
}

export default Home;
