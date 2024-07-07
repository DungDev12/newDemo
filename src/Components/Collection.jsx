import { useAuth } from "../App/Context/Context";
import "./style.scss";
const Collection = () => {
  console.log("Collection");
  const { activeTab, setActiveTab, collection } = useAuth();

  return (
    <>
      <div className="mb-[25px] bg-[#28282D] rounded-[5px] overflow-hidden lg:mt-[0] mt-[25px]">
        <div className={`flex items-center  gap-[20px] p-2 relative`}>
          {collection &&
            collection.map((item) => (
              <div
                key={item.id}
                className={`text-[#fff] p-2 cursor-pointer text-center text-[18px] font-bold tagMenu relative hover:text-[#fa9323] ${
                  activeTab == item.id ? "activeText active" : ""
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Collection;
