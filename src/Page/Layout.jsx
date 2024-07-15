import PropTypes from "prop-types";
import Header from "../Components/Header";
import NavMenu from "../Components/NavMenu";
import { useAuth } from "../App/Context/Context";
import { useEffect, useMemo, useRef } from "react";
import Loading from "../Components/Loading";
import Collection from "../Components/Collection";
const Layout = ({ children }) => {
  const { openModal, setOpenModal, loading } = useAuth();
  const navMenuRef = useRef(null);

  const classNavMenu = useMemo(() => {
    return `bg-[#28282D] w-[261px] z-[2] h-[100vh] fixed top-0 left-0 transform lg:translate-x-[0px] transition duration-300 ease-linear shadow-xl ${
      openModal.navMenu ? "translate-x-[0px]" : "-translate-x-[400px]"
    }`;
  }, [openModal.navMenu]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
        setOpenModal((prev) => ({ ...prev, navMenu: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navMenuRef, setOpenModal]);

  console.log("Layout");
  return (
    <div>
      {loading && <Loading />}
      <div className="bg-[#2B2B31]">
        <div className={classNavMenu} ref={navMenuRef}>
          <NavMenu />
        </div>
        <div className="pl-[0px] transition-all duration-500 ease-linear lg:pl-[281px] lg:pr-[27px] ">
          <div className=" min-h-[100vh] py-[20px] lg:px-[70px] md:px-[30px] px-[20px]">
            <Header />
            <Collection />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.object,
};
export default Layout;
