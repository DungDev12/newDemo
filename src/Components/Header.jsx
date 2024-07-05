import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useAuth } from "../App/Context/Context";
import { useMemo } from "react";
const Header = () => {
  const navigate = useNavigate();
  const { openModal, setOpenModal } = useAuth();

  const navMenuClass = useMemo(() => {
    return `bars bg-[#fff] rounded-[5px] after:bg-[#fff] after:rounded-[5px] before:bg-[#fff] before:rounded-[5px] ${
      openModal.navMenu ? "active" : ""
    }`;
  }, [openModal.navMenu]);
  return (
    <div className="block lg:hidden borderAnimation overflow-hidden sticky top-0">
      <div className="flex items-center justify-between px-[10px]">
        <div
          className={`px-[20px] py-[10px] w-[300px] cursor-pointer transition duration-300 ease-linear ${
            openModal.navMenu && "opacity-0"
          }`}
          onClick={() => navigate("/")}
        >
          <img
            src="https://chanlebank.bet/uploads/1713603023_2049.png"
            className="object-cover w-full transition duration-300 ease-linear"
          />
        </div>
        <div className="mr-[10px]">
          <div
            className={navMenuClass}
            onClick={() => {
              setOpenModal((prev) => ({ ...prev, navMenu: !prev.navMenu }));
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
