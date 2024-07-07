import { useNavigate } from "react-router-dom";
import "./style.scss";
import { AiOutlineAppstore } from "react-icons/ai";
import { TbLogin } from "react-icons/tb";
import { ImUserPlus } from "react-icons/im";
import { useAuth } from "../App/Context/Context";
const NavMenu = () => {
  const navigate = useNavigate();
  const { activeNavMenu, setActiveNavMenu } = useAuth();
  const icon = {
    home: AiOutlineAppstore,
    login: TbLogin,
    register: ImUserPlus,
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
    },
    {
      id: 3,
      path: "/dang-ky",
      name: "Đăng ký",
      icon: "register",
    },
  ];
  return (
    <>
      <div className="borderAnimation relative pb-[10px] overflow-hidden">
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
        {tagPage &&
          tagPage.map((item) => {
            const Icon = icon[item.icon];
            return (
              <div
                key={item.id}
                className="py-[10px] cursor-pointer transition duration-300 ease-linear"
                onClick={() => {
                  setActiveNavMenu(item.id);
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
                    {item.name}
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
