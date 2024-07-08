import { CiClock2 } from "react-icons/ci";
import { useAuth } from "../App/Context/Context";
import NotLogin from "../Page/Auth/NotLogin";

const RecentHistory = () => {
  const { logged } = useAuth();
  return (
    <>
      <div className="w-full bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px] mt-[20px]">
        <div className="flex items-center gap-4 p-[20px] ">
          <CiClock2 className="text-[30px] text-[#fa9323]" />
          <h3 className="text-[20px] activeSpan">LỊCH SỬ CHƠI GẦN ĐÂY</h3>
        </div>
        <hr />
        {logged ? (
          <div className="py-[20px]">
            <table className="table-auto w-full text-center">
              <thead>
                <tr>
                  <th>TRÒ CHƠI</th>
                  <th>ĐÃ CHỌN</th>
                  <th>MÃ GIAO DỊCH</th>
                  <th>SỐ TIỀN</th>
                  <th>KẾT QUẢ</th>
                  <th>TRẢ THƯỞNG</th>
                  <th>THỜI GIAN</th>
                  <th>SAO KÊ</th>
                  <th>GHI CHÚ</th>
                </tr>
              </thead>
              <tbody className="border-t-[#2b2b31] border-t-[5px]">
                <tr className="border-b-[#2b2b31] border-b-[5px]">
                  <td className="py-2">CHANLE2</td>
                  <td className="pb-1">
                    <span className="bg-[#3E2D29] py-1 px-2 rounded-[5px] leading-none text-[13px]">
                      C
                    </span>
                  </td>
                  <td>FT24190530160322</td>
                  <td>10,000</td>
                  <td className="pb-1">
                    <span className="bg-[#478C7A] py-1 px-2 rounded-[5px] text-[13px]">
                      WIN
                    </span>
                  </td>
                  <td className="pb-1">
                    <span className="bg-[#478C7A] py-1 px-2 rounded-[5px] text-[13px]">
                      SENT
                    </span>
                  </td>
                  <td>08/07/2024 07:14:47</td>
                  <td></td>
                  <td></td>
                </tr>

                <tr className="border-b-[#2b2b31] border-b-[5px]">
                  <td className="py-2">CHANLE2</td>
                  <td className="pb-1">
                    <span className="bg-[#3E2D29] py-1 px-2 rounded-[5px] leading-none text-[13px]">
                      C
                    </span>
                  </td>
                  <td>FT24190530160322</td>
                  <td>10,000</td>
                  <td className="pb-1">
                    <span className="bg-[#924241] py-1 px-2 rounded-[5px] text-[13px]">
                      LOSE
                    </span>
                  </td>
                  <td className="pb-1">
                    <span className="bg-[#478C7A] py-1 px-2 rounded-[5px] text-[13px]">
                      SENT
                    </span>
                  </td>
                  <td>08/07/2024 07:14:47</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="border-b-[#2b2b31] border-b-[5px]">
                  <td className="py-2">CHANLE2</td>
                  <td className="pb-1">
                    <span className="bg-[#3E2D29] py-1 px-2 rounded-[5px] leading-none text-[13px]">
                      C
                    </span>
                  </td>
                  <td>FT24190530160322</td>
                  <td>10,000</td>
                  <td className="pb-1">
                    <span className="bg-[#A14D29] py-1 px-2 rounded-[5px] text-[13px]">
                      UNKN
                    </span>
                  </td>
                  <td className="pb-1">
                    <span className="bg-[#478C7A] py-1 px-2 rounded-[5px] text-[13px]">
                      SENT
                    </span>
                  </td>
                  <td>08/07/2024 07:14:47</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <NotLogin />
        )}
      </div>
    </>
  );
};

export default RecentHistory;
