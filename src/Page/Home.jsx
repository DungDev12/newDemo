import Collection from "../Components/Collection.jsx";
import HowPlay from "../Components/HowPlay.jsx";
import InfoBank from "../Components/InfoBank.jsx";
import History from "../Components/History.jsx";

const Home = () => {
  console.log("Home");
  return (
    <div>
      <Collection />
      <div className="flex items-start justify-between gap-[2rem]">
        <HowPlay />
        <InfoBank />
      </div>
      <History />
    </div>
  );
};

export default Home;
