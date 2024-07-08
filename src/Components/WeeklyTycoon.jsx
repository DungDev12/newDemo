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
        <div className="py-[20px]">
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th>HẠNG</th>
                <th>NICKNAME</th>
                <th>TỔNG CƯỢC</th>
                <th>PHẦN THƯỞNG</th>
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
        </div>
      </div>
    </>
  );
};

export default WeeklyTycoon;
