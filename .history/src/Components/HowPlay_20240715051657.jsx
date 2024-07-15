import { FaGamepad } from "react-icons/fa";
import "./style.scss";
import { useAuth } from "../App/Context/Context";
import parse from "html-react-parser";
import { useEffect } from "react";
import NotCode from "./NotCode";
const HowPlay = () => {
  const { collection, activeTab, setActiveTab } = useAuth();
  useEffect(() => {
    if (activeTab == null) {
      setActiveTab(0);
    }
  }, []);
  return (
    <div className="w-full bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px] mb-[32px] lg:mb-[0px]">
      {collection.length > 0 && activeTab != null ? (
        <>
          <div className="flex items-center gap-4 p-[20px] ">
            <FaGamepad className="text-[30px] text-[#fa9323]" />
            <h3 className="lg:text-[20px] text-[18px]  activeSpan">
              {collection[activeTab].name}
            </h3>
          </div>
          <hr />
          <div className="py-[20px]">
            <table className="lg:table-auto w-full text-center lg:text-[16px] md:text-[16px] sm:text-[15px] text-[14px]">
              <thead>
                <tr>
                  <th>NỘI DUNG</th>
                  <th>SỐ CUỐI</th>
                  <th>TỶ LỆ</th>
                </tr>
              </thead>
              <tbody className="border-t-[#2b2b31] border-t-[5px]">
                {collection &&
                  collection[activeTab].data.map((item, i) => {
                    const newNumber = item.number.split("-");
                    return (
                      <tr key={i} className="border-b-[#2b2b31] border-b-[5px]">
                        <td className="p-2">{item.content.toUpperCase()}</td>
                        <td className="p-2 flex items-center justify-center gap-2 text-[12px]">
                          {newNumber.map((num, i) => (
                            <span
                              className="bg-[#3C2C29] py-1 px-2 rounded-[5px]"
                              key={i}
                            >
                              {num}
                            </span>
                          ))}
                        </td>
                        <td className="p-2">x{item.payGet}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className="pt-[25px] pb-[20px]">
              {collection && parse(collection[activeTab].info)}
            </div>
          </div>
        </>
      ) : (
        <NotCode title={"Dữ liệu hiện đang bảo trì"} />
      )}
    </div>
  );
};

export default HowPlay;
