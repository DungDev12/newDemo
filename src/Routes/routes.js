import Home from "../Page/Home.jsx";
import Login from "../Page/Auth/Login.jsx";
import Register from "../Page/Auth/Register.jsx";
import NotFound from "../Page/NotFound.jsx";
import GiftCode from "../Page/Giftcode.jsx";
import MissionDay from "../Page/MissionDay.jsx";
import Refund from "../Page/Refund.jsx";
import Jackpot from "../Page/Jackpot.jsx";
import VIP from "../Page/VIP.jsx";
import FAN from "../Page/FAN.jsx";
export const routes = [
  {
    path: "/newDemo/",
    name: "Trang chủ",
    page: Home,
    layout: true,
  },
  {
    path: "*",
    name: "404",
    page: NotFound,
  },
  {
    path: "/newDemo/dang-nhap",
    name: "Đăng nhập",
    page: Login,
  },
  {
    path: "/newDemo/dang-ky",
    name: "Đăng ký",
    page: Register,
  },
  {
    path: "/newDemo/giftcode",
    name: "Gift Code",
    page: GiftCode,
    layout: true,
  },
  {
    path: "/newDemo/nvngay",
    name: "Nhiệm vụ ngày",
    page: MissionDay,
    layout: true,
  },
  {
    path: "/newDemo/hoancuoc",
    name: "Hoàn cược",
    page: Refund,
    layout: true,
  },
  {
    path: "/newDemo/jackpot",
    name: "Jackpot",
    page: Jackpot,
    layout: true,
  },
  {
    path: "/newDemo/vip",
    name: "Quyền lợi VIP",
    page: VIP,
    layout: true,
  },
  {
    path: "/newDemo/fan",
    name: "FAN",
    page: FAN,
    layout: true,
  },
];
