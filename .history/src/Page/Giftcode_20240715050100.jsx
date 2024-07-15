import { CiGift } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../App/Context/Context";
import { useState } from "react";
const GiftCode = () => {
  const navigate = useNavigate();
  const { logged, giftCode } = useAuth();
  const [err, setErr] = useState("");
  const [giftcode, setGitfcode] = useState({
    code: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGitfcode({
      ...giftcode,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const err1 = await giftCode(giftcode);
    console.log(err1);
    if (err1) {
      setErr(err1);
    }
  };
  return (
    <>
      <div className="w-full bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px]">
        <div className="flex items-center justify-center gap-4 p-[20px] ">
          <CiGift className="text-[30px] text-[#fa9323]" />
          <h3 className="text-[20px] activeSpan uppercase">sự kiện đặt cược</h3>
        </div>
        <hr />
        <div className="text-center px-[50px] py-[20px]">
          {logged ? (
            <>
              <form
                onSubmit={handleSubmit}
                className="lg:w-[400px] w-[200px] mx-auto"
              >
                {err && <p className="text-center text-red-600">{err}</p>}
                <div className="">
                  <input
                    className="w-full px-[20px] h-[50px] outline-none rounded-[5px] bg-[#2B2B31] borderInput text-white"
                    type="giftcode"
                    name="code"
                    placeholder="Nhập GiftCode"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <button
                  type="Submit"
                  className="uppercase text-center w-full text-white font-semibold mt-[20px] rounded-[5px] buttonAnimation py-[10px]"
                >
                  Nhận thưởng
                </button>
              </form>
              <p className="mt-[10px] text-[14px]">
                LƯU Ý: HỆ THỐNG TỰ ĐỘNG KHÓA/CHẶN CÁC TÀI KHOẢN LẠM DỤNG HOẶC SỬ
                DỤNG CLONE ĐỂ NHẬP CODE.
              </p>
              <p className="mt-[10px] text-[14px] mb-[20px]">
                TRỞ THÀNH{" "}
                <span className="text-[#FFD612] hover:text-[#FA9323] transition duration-300 ease-linear cursor-pointer">
                  FAN CỨNG
                </span>{" "}
                GIÚP BẠN CÓ CƠ HỘI NHẬN THÊM 50% GIÁ TRỊ CODE.
              </p>
            </>
          ) : (
            <>
              <p className="mb-[20px] w-[80%] mx-auto">
                GIFTCODE LÀ MÓN QUÀ MÀ CHÚNG TÔI GỬI TẶNG TỚI NHỮNG NGƯỜI CHƠI
                ĐỂ TRI ÂN. NGƯỜI CHƠI CÓ THỂ NHẬN ĐƯỢC THÔNG QUA VIỆC THAM GIA
                CÁC SỰ KIỆN TRÊN WEB HOẶC{" "}
                <Link className="text-[#FFD612] hover:text-[#FA9323] transition duration-300 ease-linear cursor-pointer">
                  GROUP TELEGRAM
                </Link>{" "}
                DO CHÚNG TÔI TỔ CHỨC TRỞ THÀNH{" "}
                <Link className="text-[#FFD612] hover:text-[#FA9323] transition duration-300 ease-linear cursor-pointer">
                  FAN CỨNG
                </Link>{" "}
                GIÚP BẠN CÓ CƠ HỘI NHẬN THÊM 50% GIÁ TRỊ CODE.
              </p>
              <p>ĐIỀU KIỆN THAM GIA SỰ KIỆN</p>
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

export default GiftCode;
