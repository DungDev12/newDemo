import { CiClock2 } from "react-icons/ci";

const History = () => {
  return (
    <div className="mt-[20px] bg-[#28282D]">
      <div className="flex items-center gap-4 p-[20px] ">
        <CiClock2 className="text-[30px] text-[#fa9323]" />
        <h3 className="lg:text-[20px] text-[18px]  activeSpan">
          LỊCH SỬ ĐẶT CƯỢC
        </h3>
      </div>
      <hr />
      <div className="py-[20px] overflow-x-auto">
        <table className="table lg:table-auto w-full text-center text-white lg:text-[14px] md:text-[12px] sm:text-[11px] text-[10px]">
          <thead className="">
            <tr>
              <th className="px-2">NICKNAME</th>
              <th className="px-2">TIỀN CƯỢC</th>
              <th className="px-2">TIỀN NHẬN</th>
              <th className="px-2">TRÒ CHƠI</th>
              <th className="px-2">ĐÃ CHỌN</th>
              <th className="px-2">KẾT QUẢ</th>
              <th className="px-2">THỜI GIAN</th>
            </tr>
          </thead>
          <tbody className="border-t-[#2b2b31] border-t-[5px] lg:text-[15px] text-[12px]">
            <tr className="border-b-[#2b2b31] border-b-[5px] ">
              <td className="p-[0.5rem]">tuandung</td>
              <td>35,212</td>
              <td>35,212</td>
              <td>CLTX</td>
              <td>C</td>
              <td>
                <span className="bg-green-500 py-1 px-3 rounded-[5px] font-bold">
                  WIN
                </span>
              </td>
              <td>08/07/2024 07:14:47</td>
            </tr>
            <tr>
              <td>tuandung</td>
              <td>35,212</td>
              <td>35,212</td>
              <td>CLTX</td>
              <td>C</td>
              <td>WIN</td>
              <td>08/07/2024 07:14:47</td>
            </tr>
            <tr>
              <td>tuandung</td>
              <td>35,212</td>
              <td>35,212</td>
              <td>CLTX</td>
              <td>C</td>
              <td>WIN</td>
              <td>08/07/2024 07:14:47</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
