import { useNavigate } from "react-router-dom";
import "./style.scss";
import { AiOutlineAppstore } from "react-icons/ai";
import { TbLogin } from "react-icons/tb";
import { ImUserPlus } from "react-icons/im";
import { useAuth } from "../App/Context/Context";
import { CiGift } from "react-icons/ci";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { RiRefund2Line, RiVipCrownLine } from "react-icons/ri";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoLogOutOutline, IoStarOutline } from "react-icons/io5";
const NavMenu = () => {
  const navigate = useNavigate();
  const {
    activeNavMenu,
    setActiveNavMenu,
    setLoading,
    logged,
    Logout,
    setActiveTab,
  } = useAuth();
  const icon = {
    home: AiOutlineAppstore,
    login: TbLogin,
    register: ImUserPlus,
    giftCode: CiGift,
    mission: BsCalendar2CheckFill,
    refund: RiRefund2Line,
    trophy: HiOutlineTrophy,
    vip: RiVipCrownLine,
    fan: IoStarOutline,
  };
  const tagPage = [
    {
      id: 1,
      path: "/",
      name: "Trang chủ",
      icon: "home",
    },
    {
      id: 2,
      path: "/dang-nhap",
      name: "Đăng nhập",
      icon: "login",
      logged: true,
    },
    {
      id: 3,
      path: "/dang-ky",
      name: "Đăng ký",
      icon: "register",
      logged: true,
    },
    {
      id: 4,
      path: "/giftcode",
      name: "Giftcode",
      icon: "giftCode",
    },
    {
      id: 5,
      path: "/nvngay",
      name: "Nhiệm vụ ngày",
      icon: "mission",
    },
    {
      id: 6,
      path: "/hoancuoc",
      name: "Hoàn cược",
      icon: "refund",
    },
    {
      id: 7,
      path: "/jackpot",
      name: "JACKPOT",
      icon: "trophy",
    },
    {
      id: 8,
      path: "/vip",
      name: "Đặc quyền VIP",
      icon: "vip",
    },
    {
      id: 9,
      path: "/fan",
      name: "Fan miễn phí 25k",
      icon: "fan",
    },
  ];
  return (
    <>
      <div className="borderAnimation relative pb-[10px] overflow-hidden z-[9999]">
        <div
          className="px-[20px] py-[10px] cursor-pointer"
          onClick={() => navigate("/newDemo/")}
        >
          <img
            src="https://chanlebank.bet/uploads/1713603023_2049.png"
            className="object-cover w-full transition duration-300 ease-linear"
          />
        </div>
      </div>
      <div className="px-[15px]">
        {logged && (
          <div>
            <div
              className="py-[10px] cursor-pointer transition duration-300 ease-linear"
              onClick={() => Logout()}
            >
              <span className="flex px-[20px] items-center gap-[10px] transition duration-300 ease-linear text-[#fff] hover:text-blue-500">
                <IoLogOutOutline className={`text-[20px]`} />
                <span className={`text-[18px] mb-0.5`}>
                  <div clas >Xin chào</div>
                  <div></div>
                </span>
              </span>
            </div>
            <hr />
          </div>
        )}
        {tagPage &&
          tagPage.map((item) => {
            const Icon = icon[item.icon];
            if (logged && item.logged) return null;
            return (
              <div
                key={item.id}
                className="py-[10px] cursor-pointer transition duration-300 ease-linear"
                onClick={() => {
                  if (item.id !== 1) {
                    setActiveTab(null);
                  } else {
                    setActiveTab(0);
                  }
                  setActiveNavMenu(item.id);
                  navigate(`/newDemo${item.path}`);
                  setLoading(true);
                }}
              >
                <span className="flex px-[20px] items-center gap-[10px] transition duration-300 ease-linear text-[#fff] hover:text-blue-500">
                  <Icon
                    className={`text-[20px] ${
                      activeNavMenu == item.id ? "text-[#fa9323]" : ""
                    }`}
                  />
                  <span
                    className={`text-[18px] mb-0.5  ${
                      activeNavMenu == item.id ? "activeText" : ""
                    }`}
                  >
                    {item.name.toUpperCase()}
                  </span>
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default NavMenu;
