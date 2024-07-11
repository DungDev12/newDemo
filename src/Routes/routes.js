import Home from "../Page/Home.jsx";
import Login from "../Page/Auth/Login.jsx";
import Register from "../Page/Auth/Register.jsx";
import NotFound from "../Page/NotFound.jsx";
import GiftCode from "../Page/Giftcode.jsx";
import MissionDay from "../Page/MissionDay.jsx";
export const routes = [
  {
    path: "/newDemo/",
    page: Home,
    layout: true,
  },
  {
    path: "*",
    page: NotFound,
  },
  {
    path: "/newDemo/dang-nhap",
    page: Login,
  },
  {
    path: "/newDemo/dang-ky",
    page: Register,
  },
  {
    path: "/newDemo/giftcode",
    page: GiftCode,
    layout: true,
  },
  {
    path: "/newDemo/nvngay",
    page: MissionDay,
    layout: true,
  },
];
