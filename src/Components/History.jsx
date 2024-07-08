import { CiClock2 } from "react-icons/ci";

const History = () => {
  return (
    <div className="mt-[20px] bg-[#28282D]">
      <div className="flex items-center gap-4 p-[20px] ">
        <CiClock2 className="text-[30px] text-[#fa9323]" />
        <h3 className="text-[20px] activeSpan">LỊCH SỬ ĐẶT CƯỢC</h3>
      </div>
      <div className="py-[20px]">
        <table className="table-auto w-full text-center text-white">
          <thead>
            <tr>
              <th>NICKNAME</th>
              <th>TIỀN CƯỢC</th>
              <th>TIỀN NHẬN</th>
              <th>TRÒ CHƠI</th>
              <th>ĐÃ CHỌN</th>
              <th>KẾT QUẢ</th>
              <th>THỜI GIAN</th>
            </tr>
          </thead>
          <tbody className="border-t-[#2b2b31] border-t-[5px]">
            <tr className="border-b-[#2b2b31] border-b-[5px] ">
              <th className="p-[0.5rem]">tuandung</th>
              <th>35,212</th>
              <th>35,212</th>
              <th>CLTX</th>
              <th>C</th>
              <th>WIN</th>
              <th>08/07/2024 07:14:47</th>
            </tr>
            <tr>
              <th>tuandung</th>
              <th>35,212</th>
              <th>35,212</th>
              <th>CLTX</th>
              <th>C</th>
              <th>WIN</th>
              <th>08/07/2024 07:14:47</th>
            </tr>
            <tr>
              <th>tuandung</th>
              <th>35,212</th>
              <th>35,212</th>
              <th>CLTX</th>
              <th>C</th>
              <th>WIN</th>
              <th>08/07/2024 07:14:47</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
