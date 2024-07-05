import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const Context = createContext();

export const useAuth = () => {
  return useContext(Context);
};
const AppContext = ({ children }) => {
  const [openModal, setOpenModal] = useState({
    navMenu: false,
  });
  return (
    <Context.Provider value={{ openModal, setOpenModal }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.object,
};
export default AppContext;
