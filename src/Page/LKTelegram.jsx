import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const LKTelegram = () => {
  return (
    <div className="w-full bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px]">
      <div className="flex items-center gap-4 p-[20px] justify-center">
        <FaTelegramPlane className="text-[30px] text-[#fa9323]" />
        <h3 className="lg:text-[20px] text-[18px]  activeSpan uppercase">
          Liên kết telegram
        </h3>
      </div>
      <hr />
      <div className="text-center py-[40px] text-[14px]">
        <p>
          XIN CHÚC MỪNG TÀI KHOẢNG CỦA BẠN ĐÃ ĐƯỢC LIÊN KẾT TELEGRAM. TRUY CẬP{" "}
          {""}
          <Link className="activeSpan">@kuclub_bot</Link> NGAY ĐỂ CHƠI XÚC XẮC
          TELEGRAM.
        </p>
      </div>
    </div>
  );
};

export default LKTelegram;
