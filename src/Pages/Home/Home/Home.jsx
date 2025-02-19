import bannerImg from "../../../../src/assets/Banner.webp";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
const Home = () => {
  return (
    <div>
      <div className="">
        <img className="rounded-3xl w-full" src={bannerImg} alt="" />
      </div>
      <FeaturedProducts></FeaturedProducts>
      <TrendingProducts></TrendingProducts>
    </div>
  );
};

export default Home;
