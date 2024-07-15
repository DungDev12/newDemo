import { GiRibbonMedal } from "react-icons/gi";

const WeeklyTycoon = () => {
  return (
    <>
      <div className="w-full bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px]">
        <div className="flex items-center gap-4 p-[20px] ">
          <GiRibbonMedal className="text-[30px] text-[#fa9323]" />
          <h3 className="text-[20px] activeSpan">ĐẠI GIA TUẦN</h3>
        </div>
        <hr />
        <div className="py-[20px] overflow-x-auto">
          <table className=" table lg:table-auto w-full text-center lg:text-[14px] md:text-[12px] sm:text-[11px] text-[10px]">
            <thead className="lg:text-[14px] text-[12px]">
              <tr>
                <th className="px-2">HẠNG</th>
                <th className="px-2">NICKNAME</th>
                <th className="px-2">TỔNG CƯỢC</th>
                <th className="px-2">PHẦN THƯỞNG</th>
              </tr>
            </thead>
            <tbody className="border-t-[#2b2b31] border-t-[5px]">
              <tr className="border-b-[#2b2b31] border-b-[5px]">
                <th className="p-1.5">1</th>
                <td>DASDAD****</td>
                <td>45,772,262</td>
                <td>2,000,000</td>
              </tr>
            </tbody>
          </table>
          <p className="text-center pt-[20px] lg:text-[14px] text-[12px]">
            - PHẦN THƯỞNG TOP SẼ ĐƯỢC TRAO VÀO 0:00 THỨ 2 TUẦN TIẾP THEO.
          </p>
        </div>
      </div>
    </>
  );
};

export default WeeklyTycoon;
