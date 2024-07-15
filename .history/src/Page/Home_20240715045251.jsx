import HowPlay from "../Components/HowPlay.jsx";
import InfoBank from "../Components/InfoBank.jsx";
import History from "../Components/History.jsx";
import RecentHistory from "../Components/ReCentHistory.jsx";
import WeeklyTycoon from "../Components/WeeklyTycoon.jsx";
import Event from "../Components/Event.jsx";
import Rule from "../Components/Rule.jsx";

const Home = () => {
  console.log("Home");
  return (
    <div>
      <div className="lg:flex flex-wa items-start justify-between gap-[2rem]">
        <HowPlay />
        <InfoBank />
      </div>
      <RecentHistory />
      <History />
      <div className="lg:grid grid-cols-2 gap-[2rem] mt-[20px]">
        <WeeklyTycoon />
        <Event />
      </div>
      <Rule />
    </div>
  );
};

export default Home;
