import { BsCalendar2CheckFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../App/Context/Context";
import { ConverterMoney } from "../Components/Converter/ConverterMoney";

const MissionDay = () => {
  const navigate = useNavigate();
  const { logged } = useAuth();
  const data = [
    {
      id: 1,
      level: 30000,
      reward: 15000,
      path: "/",
      status: false,
      title: "fan + 20%",
    },
    {
      id: 2,
      level: 1000000,
      reward: 11111,
      path: "/",
      status: false,
      title: "fan + 20%",
    },
    {
      id: 3,
      level: 5000000,
      reward: 55555,
      path: "/",
      status: false,
      title: "fan + 20%",
    },
    {
      id: 4,
      level: 10000000,
      reward: 111111,
      path: "/",
      status: false,
      title: "fan + 10%",
    },
    {
      id: 5,
      level: 30000000,
      reward: 333333,
      path: "/",
      status: false,
      title: "fan + 10%",
    },
    {
      id: 6,
      level: 49000000,
      reward: 555555,
      path: "/",
      status: false,
      title: "fan + 10%",
    },
    {
      id: 7,
      level: 100000000,
      reward: 1111111,
      path: "/",
      status: false,
      title: "fan + 10%",
    },
    {
      id: 8,
      level: 200000000,
      reward: 2222222,
      path: "/",
      status: false,
      title: "fan + 10%",
    },
    {
      id: 9,
      level: 500000000,
      reward: 6666666,
      path: "/",
      status: false,
      title: "fan + 10%",
    },
  ];
  return (
    <>
      <div className="w-full bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px]">
        <div className="flex items-center justify-center gap-4 p-[20px] ">
          <BsCalendar2CheckFill className="text-[30px] text-[#fa9323]" />
          <h3 className="text-[20px] activeSpan uppercase">nhiệm vụ ngày</h3>
        </div>
        <hr />
        <div className="text-center py-[20px]">
          {logged ? (
            <div className="text-center mb-[20px]">
              <p className="text-[14px] uppercase">
                TỔNG CHƠI TRONG NGÀY: <span className="text-[#FFD612]">0</span>
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
          <div className="lg:w-[50%] mx-auto rounded-[5px] overflow-hidden border-[2px] border-[#2B2B31] overflow-x-auto">
            <table className="w-full">
              <thead className="rounded-[5px]">
                <tr className="border-b-[5px] border-[#2B2B31]">
                  <th className="uppercase py-[10px]">mốc chơi</th>
                  <th className="uppercase">thưởng</th>
                  <th className="uppercase">trạng thái</th>
                </tr>
              </thead>
              <tbody className="text-[14px]">
                {data &&
                  data.map((it) => (
                    <tr key={it.id} className="border-b-[5px] border-[#2B2B31]">
                      <td className="py-[10px]">
                        {ConverterMoney({
                          str: it.level.toString(),
                          unit: ",",
                        })}
                      </td>
                      <td className="">
                        {ConverterMoney({
                          str: it.reward.toString(),
                          unit: ",",
                        })}{" "}
                        (
                        <Link
                          to={it.path}
                          className="text-[#FFD612] cursor-pointer hover:text-[#FA9323] transition duration-300 ease-linear"
                        >
                          {it.title}
                        </Link>
                        )
                      </td>
                      <td className="uppercase">
                        <span className="bg-[#3E2D29] py-1 px-2 rounded-[5px]">
                          {it.status ? "đạt" : "chưa đạt"}
                        </span>
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

export default MissionDay;
