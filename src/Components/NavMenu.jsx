import { useNavigate } from "react-router-dom";
import "./style.scss";
import { AiOutlineAppstore } from "react-icons/ai";
import { TbBuildingBank, TbLogin } from "react-icons/tb";
import { ImUserPlus } from "react-icons/im";
import { useAuth } from "../App/Context/Context";
import { CiGift } from "react-icons/ci";
import { BsCalendar2CheckFill, BsCurrencyBitcoin } from "react-icons/bs";
import {
  RiLockPasswordLine,
  RiRefund2Line,
  RiVipCrownLine,
} from "react-icons/ri";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoLogOutOutline, IoStarOutline } from "react-icons/io5";
import { FaTelegramPlane, FaUserCog } from "react-icons/fa";
import { MdOutlineManageHistory } from "react-icons/md";
const NavMenu = () => {
  const navigate = useNavigate();
  const {
    activeNavMenu,
    setActiveNavMenu,
    setLoading,
    logged,
    Logout,
    openModal,
    setActiveTab,
    setOpenModal,
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
    settingBank: TbBuildingBank,
    settingBitcoin: BsCurrencyBitcoin,
    settingHistory: MdOutlineManageHistory,
    settingTelegram: FaTelegramPlane,
    settingPassword: RiLockPasswordLine,
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
  const tagUser = [
    {
      id: 1,
      path: "/caidatbank",
      name: "Cài đặt BANK",
      icon: "settingBank",
    },
    {
      id: 2,
      path: "/coin",
      name: "Số dư coin",
      icon: "settingBitcoin",
    },
    {
      id: 3,
      path: "/ls-choi",
      name: "Lịch sử chơi",
      icon: "settingHistory",
    },
    {
      id: 4,
      path: "/lktelegram",
      name: "liên kết telegram",
      icon: "settingTelegram",
    },
    {
      id: 5,
      path: "/doimk",
      name: "Đổi mật khẩu",
      icon: "settingPassword",
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
              className="py-[10px] cursor-pointer transition duration-300 ease-linear "
              onClick={() => Logout()}
            >
              <span className="flex px-[20px] items-center justify-between gap-[10px] transition duration-300 ease-linear text-[#fff] hover:text-blue-500">
                <div>
                  <img />
                </div>
                <span className={`lg:text-[18px] text-[14px] mb-0.5`}>
                  <div className="text-[10px]">Xin chào</div>
                  <div>Tuấn Dũng</div>
                </span>
                <IoLogOutOutline className={`text-[20px]`} />
              </span>
            </div>
            <hr />
          </div>
        )}
        {logged && (
          <div
            className="py-[10px] cursor-pointer transition duration-300 ease-linear relative"
            onClick={() =>
              setOpenModal((prev) => ({ ...prev, navUser: !prev.navUser }))
            }
          >
            <span className="flex px-[20px] items-center gap-[10px] transition duration-300 ease-linear text-[#fff] hover:text-blue-500">
              <FaUserCog className={`text-[20px]`} />
              <span className={`text-[18px] mb-0.5`}>Tài khoản</span>
            </span>
            <div
              className={`absolute w-full h-[300px] bg-[#2B2B31] top-[40px] right-0 rounded-[5px] transition-all duration-200 ease-linear borderTop overflow-hidden p-[10px] ${
                openModal.navUser
                  ? "top-[20px] opacity-0 pointer-events-none"
                  : "top-[40px] opacity-1 "
              }`}
            >
              {tagUser &&
                tagUser.map((item) => {
                  const Icon = icon[item.icon];
                  if (logged && item.logged) return null;
                  return (
                    <div
                      key={item.id}
                      className="py-[10px] cursor-pointer transition duration-200 ease-linear"
                      onClick={() => {
                        setOpenModal((prev) => ({ ...prev, navMenu: false }));
                        setLoading(true);
                        navigate(`/newDemo${item.path}`);
                      }}
                    >
                      <span className="flex px-[20px] items-center gap-[10px] transition duration-300 ease-linear text-[#fff] hover:text-[#fa9323]">
                        <Icon className={`text-[20px]`} />
                        <span className={`text-[14px] mb-0.5`}>
                          {item.name.toUpperCase()}
                        </span>
                      </span>
                    </div>
                  );
                })}
            </div>
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
                  setOpenModal((prev) => ({ ...prev, navMenu: false }));
                  setLoading(true);
                  navigate(`/newDemo${item.path}`);
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
