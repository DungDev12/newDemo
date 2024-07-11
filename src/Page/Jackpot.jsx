import { HiOutlineTrophy } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Jackpot = () => {
  const number = "1-3-2-1-5-4-1-2";
  const sliceNumber = number.split("-");
  return (
    <>
      <div className="w-full bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px]">
        <div className="flex items-center justify-center gap-4 p-[20px] ">
          <HiOutlineTrophy className="text-[30px] text-[#fa9323]" />
          <h3 className="text-[20px] activeSpan uppercase">jackpot - nổ hũ</h3>
        </div>
        <hr />
        <div className="w-full text-center p-[20px]">
          <p>SỐ TIỀN HIỆN TẠI TRONG HŨ ĐANG CHỜ BẠN!</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            {sliceNumber.map((num, i) => (
              <span
                key={i}
                className="bg-[#3E2D29] py-1 px-2 rounded-[5px] text-[12px]"
              >
                {num}
              </span>
            ))}
          </div>
          <button className="mt-[20px]">
            <Link
              to={"/"}
              className="uppercase text-center w-full text-white font-semibold rounded-[5px] buttonAnimation py-[5px] px-[10px]"
            >
              quay miễn phí ngay
            </Link>
          </button>
          <div className="mt-[20px]">
            <p className="my-2 text-[14px]">
              Jackpot là phần quà dành cho những người chơi may mắn.
            </p>
            <p className="my-2 text-[14px]">
              Bạn hoàn toàn có thể sở hữu MIỄN PHÍ thông qua việc quay Slot trên
              Telegram của KUBANK.CLUB
            </p>
            <p className="my-2 text-[14px]">
              Bạn có thể nhận được lượt quay MIỄN PHÍ khi chơi game trên
              KUBANK.CLUB CHÚC BẠN MAY MẮN!!!!
            </p>
            <div className="mb-[20px] text-[12px]">
              HỆ THỐNG LIÊN TỤC PHÁT CODE NGẪU NHIÊN - MIỄN PHÍ MỖI 10-15P TẠI{" "}
              {""}
              <Link className="text-[#FFD612] hover:text-[#FA9323] transition duration-300 ease-linear cursor-pointer">
                GROUP TELEGRAM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jackpot;
