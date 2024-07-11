import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../App/Context/Context";
import { RiRefund2Line } from "react-icons/ri";

const Refund = () => {
  const navigate = useNavigate();
  const { logged } = useAuth();
  return (
    <>
      <div className="w-full bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px]">
        <div className="flex items-center justify-center gap-4 p-[20px] ">
          <RiRefund2Line className="text-[30px] text-[#fa9323]" />
          <h3 className="text-[20px] activeSpan uppercase">
            sự kiện hoàn cược
          </h3>
        </div>
        <hr />
        <div className="text-center px-[50px] py-[20px]">
          <p className="mb-[20px] w-[80%] mx-auto">
            <span className="text-[#FFD612]">SỰ KIỆN HOÀN CƯỢC</span> là chương
            trình đặc biệt mà KUBANK.CLUB dành riêng cho các người chơi mới nhằm
            trải nghiệm dịch vụ của chúng tôi. Khi bạn chơi game trên
            KUBANK.CLUB với tổng cược đạt{" "}
            <span className="text-[#FFD612]">30,000</span> vnđ và{" "}
            <span className="text-[#FFD612]">BẤT KỂ THẮNG THUA</span> bạn sẽ
            nhận lại <span className="text-[#FFD612]">18,000</span> vnđ.
          </p>
          <p>ĐIỀU KIỆN THAM GIA SỰ KIỆN</p>
          {logged ? (
            <p className="my-2">
              Oops!!! Rất tiếc tài khoản của bạn không đủ điều kiện để tham gia
              sự kiện này. Hãy tham gia{" "}
              <Link className="text-[#FFD612] hover:text-[#FA9323] transition duration-300 ease-linear cursor-pointer">
                BOX CHAT
              </Link>{" "}
              của chúng tôi để nhận nhiều ưu đãi cũng như giftcode khủng nhé!
            </p>
          ) : (
            <>
              <p className="mb-[20px]">
                VUI LÒNG{" "}
                <span
                  className="text-[#FFD612] hover:text-[#FA9323] transition duration-300 ease-linear cursor-pointer"
                  onClick={() => navigate("/newDemo/dang-nhap")}
                >
                  ĐĂNG NHẬP
                </span>{" "}
                HOẶC{" "}
                <span
                  className="text-[#FFD612] hover:text-[#FA9323] transition duration-300 ease-linear cursor-pointer"
                  onClick={() => navigate("/newDemo/dang-ky")}
                >
                  ĐĂNG KÝ
                </span>{" "}
                ĐỂ THAM GIA
              </p>
            </>
          )}
          <div className="mb-[20px] text-[12px]">
            HỆ THỐNG LIÊN TỤC PHÁT CODE NGẪU NHIÊN - MIỄN PHÍ MỖI 10-15P TẠI{" "}
            {""}
            <Link className="text-[#FFD612] hover:text-[#FA9323] transition duration-300 ease-linear cursor-pointer">
              GROUP TELEGRAM
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refund;
