import { RiVipCrownLine } from "react-icons/ri";
import { ConverterMoney } from "../Components/Converter/ConverterMoney";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../App/Context/Context";

const VIP = () => {
  const navigate = useNavigate();
  const { logged } = useAuth();
  const dataVIP = [
    {
      id: 1,
      img: "https://chanlebank.bet/uploads/1713253759_v1.gif",
      level: 10000,
      title: [
        "Nhận giftcode không cần điều kiện",
        "Khuyến mại khi nhận giftcode 10%",
        "Giftcode hàng ngày trị giá từ 1,000 đến 10,000",
        "Miễn phí chuyển tiền",
      ],
    },
  ];
  return (
    <>
      <div className="w-full bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px]">
        <div className="flex items-center justify-center gap-4 p-[20px] ">
          <RiVipCrownLine className="text-[30px] text-[#fa9323]" />
          <h3 className="text-[20px] activeSpan uppercase">đặc quyền vip</h3>
        </div>
        <hr />
        <div className="text-center py-[20px]">
          {logged ? (
            <div className="text-center mb-[20px]">
              <p className="text-[14px] uppercase">
                TỔNG CHƠI TRONG TUẦN: <span className="text-[#FFD612]">0</span>
              </p>
              <p className="text-[13px] py-2">
                BẠN CẦN CHƠI THÊM{" "}
                <span className="text-[#FFD612]"> 10,000,000</span> VNĐ ĐỂ LÊN{" "}
                {""}
                <span className="text-[#FFD612]">VIP1</span>
              </p>
              <p>(lưu ý: hệ thông cập nhật tổng chơi mỗi 5p)</p>
            </div>
          ) : (
            <p className="my-[20px]">
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
          )}
          <div className="mb-[20px] text-[12px]">
            HỆ THỐNG LIÊN TỤC PHÁT CODE NGẪU NHIÊN - MIỄN PHÍ MỖI 10-15P TẠI{" "}
            {""}
            <Link className="text-[#FFD612] hover:text-[#FA9323] transition duration-300 ease-linear cursor-pointer">
              GROUP TELEGRAM
            </Link>
          </div>
          <div className="lg:w-[60%] mx-auto rounded-[5px] overflow-hidden border-[2px] border-[#2B2B31] overflow-x-auto">
            <table className="w-full">
              <thead className="rounded-[5px]">
                <tr className="border-b-[5px] border-[#2B2B31] text-[14px]">
                  <th className="uppercase py-[10px]">cấp vip</th>
                  <th className="uppercase">mốc chơi</th>
                  <th className="uppercase">đặc quyền</th>
                </tr>
              </thead>
              <tbody className="text-[14px]">
                {dataVIP &&
                  dataVIP.map((it, i) => (
                    <tr key={i}>
                      <td className="p-4">
                        <div className="w-[50px] mx-auto">
                          <img src={it.img} className="object-cover" />
                        </div>
                      </td>
                      <td className="p-4">
                        <ConverterMoney
                          str={(it.level * 1000).toString()}
                          unit={","}
                          currency="VND"
                        />
                      </td>
                      <td className="p-4">
                        {it.title.map((item, index) => (
                          <p key={index}>- {item}</p>
                        ))}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default VIP;
