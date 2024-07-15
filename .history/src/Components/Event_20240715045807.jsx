import { HiSpeakerphone } from "react-icons/hi";
import parse from "html-react-parser";

const Event = () => {
  const value = [
    '<p>[THÔNG BÁO KHẨN] <span className="activeSpan">KUBANK.CLUB</span> ÁP DỤNG KHUNG GIỜ VÀNG CHƠI MIN 1 BILL LÀ 30K TỪ 19H- 7H SÁNG NGÀY HÔM SAU <a href="/" className="text-[#ffd612] hover:text-blue-600 transition duration-300 ease-linear" >[CHI TIẾT]</a></p>',
    '<p>[THÔNG BÁO KHẨN] <span className="activeSpan">KUBANK.CLUB</span> ÁP DỤNG KHUNG GIỜ VÀNG CHƠI MIN 1 BILL LÀ 30K TỪ 19H- 7H SÁNG NGÀY HÔM SAU <a href="/" className="text-[#ffd612] hover:text-blue-600 transition duration-300 ease-linear" >[CHI TIẾT]</a></p>',
  ];
  return (
    <>
      <div className="w-full bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px]">
        <div className="flex items-center gap-4 p-[20px] ">
          <HiSpeakerphone className="text-[30px] text-[#fa9323]" />
          <h3 className="lg:text-[20px] text-[18px] activeSpan">
            SỰ KIỆN ĐANG DIỄN RA
          </h3>
        </div>
        <hr />
        <div className="p-2 ">
          {value.map((item, index) => (
            <div className="mt-1.5" key={index}>
              {parse(item)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Event;
