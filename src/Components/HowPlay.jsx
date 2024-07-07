import { FaGamepad } from "react-icons/fa";
import "./style.scss";
import { useAuth } from "../App/Context/Context";
const HowPlay = () => {
  const { collection, activeTab } = useAuth();

  return (
    <div className="w-[50%] bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px]">
      <div className="flex items-center gap-4 p-[20px] ">
        <FaGamepad className="text-[30px] text-[#fa9323]" />
        <h3 className="text-[20px] activeSpan">
          {collection[activeTab - 1].name}
        </h3>
      </div>
      <hr />
      <div className="py-[20px]">
        <table className="table-auto w-full text-center">
          <thead>
            <tr>
              <th>Nội dung</th>
              <th>Số</th>
              <th>Tiền nhận</th>
            </tr>
          </thead>
          <tbody className="border-t-[#2b2b31] border-t-[5px]">
            {collection &&
              collection[activeTab - 1].data.map((item) => {
                const newNumber = item.number.split("");
                return (
                  <tr
                    key={item.id}
                    className="border-b-[#2b2b31] border-b-[5px]"
                  >
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
          <p className="text-[14px] text-[#C7C7C7] px-[20px] mb-16px text-center">
            KẾT QUẢ TÍNH BẰNG SỐ CUỐI CỦA MÃ GIAO DỊCH BANK KHI CHUYỂN KHOẢN VÀO
            BANK NHẬN CỦA WEB TỶ LỆ SẼ LÀ x2.5 CHO LỆNH WIN ĐẦU TIỀN (&ge; 50K
            VÀ &le; 100K) TỶ LỆ GIẢM 0.1 ĐỐI VỚI CÁC GIAO DỊCH TỪ 100K TRỞ LÊN
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowPlay;
