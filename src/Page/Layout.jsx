import PropTypes from "prop-types";
import Header from "../Components/Header";
import NavMenu from "../Components/NavMenu";
import { useAuth } from "../App/Context/Context";
import { useMemo } from "react";
import Loading from "../Components/Loading";
const Layout = ({ children }) => {
  const { openModal, loading } = useAuth();
  const classNavMenu = useMemo(() => {
    return `bg-[#28282D] w-[261px] h-[100vh] fixed top-0 left-0 transform z-[1] lg:translate-x-[0px] transition duration-300 ease-linear shadow-xl ${
      openModal.navMenu ? "translate-x-[0px]" : "-translate-x-[400px]"
    }`;
  }, [openModal.navMenu]);
  console.log("Layout");
  console.log(loading);
  return (
    <div>
      {loading && <Loading />}
      <div className="bg-[#2B2B31]">
        <div className={classNavMenu}>
          <NavMenu />
        </div>
        <div className="pl-[0px] transition-all duration-500 ease-linear lg:pl-[281px] lg:pr-[27px]">
          <div className=" min-h-[100vh] py-[20px]">
            <Header />
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
