import { CiClock2 } from "react-icons/ci";

const History = () => {
  return (
    <div className="mt-[20px] bg-[#28282D]">
      <div className="flex items-center gap-4 p-[20px] ">
        <CiClock2 className="text-[30px] text-[#fa9323]" />
        <h3 className="text-[20px] activeSpan">LỊCH SỬ ĐẶT CƯỢC</h3>
      </div>
    </div>
  );
};

export default History;
