import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
const Context = createContext();
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export const useAuth = () => {
  return useContext(Context);
};
const AppContext = ({ children }) => {
  const [openModal, setOpenModal] = useState({
    navMenu: false,
    navUser: false,
  });
  useEffect(() => {

  },[])
  const [activeNavMenu, setActiveNavMenu] = useState(
    sessionStorage.getItem("page")
      ? JSON.parse(sessionStorage.getItem("page"))
      : 1
  );
  const [activeTab, setActiveTab] = useState(0);
  const [logged, setLogged] = useState(false);
  const setPage = (page, type) => {
    sessionStorage.setItem(type, JSON.stringify(page));
  };
  const [collection, setCollection] = useState([]);
  // const collection = [
  //   {
  //     id: 1,
  //     name: "Chẵn lẻ - Tài xỉu",
  //     data: [
  //       {
  //         id: 1,
  //         content: "C",
  //         number: "2468",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 2,
  //         content: "L",
  //         number: "1357",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 3,
  //         content: "T",
  //         number: "5678",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 4,
  //         content: "X",
  //         number: "1234",
  //         payGet: "2.5",
  //       },
  //     ],
  //     info: '<p className="text-[14px] text-[#C7C7C7] px-[20px] mb-16px text-center"> KẾT QUẢ TÍNH BẰNG TỔNG 2 SỐ CUỐI CỦA <span  className="text-[#ffd612]" >MÃ GIAO DỊCH BANK</span> KHI CHUYỂN KHOẢN VÀO BANK NHẬN CỦA WEB TỶ LỆ SẼ LÀ <span className="text-[#ffd612]" >x1.95</span> CHO LỆNH WIN ĐẦU TIỀN (&ge; 50K VÀ &le; 100K) TỶ LỆ GIẢM 0.1 ĐỐI VỚI CÁC GIAO DỊCH TỪ 100K TRỞ LÊN </p>',
  //   },
  //   {
  //     id: 2,
  //     name: "Chẵn lẻ 2 - Tài xỉu 2",
  //     data: [
  //       {
  //         id: 1,
  //         content: "C2",
  //         number: "02468",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 2,
  //         content: "L2",
  //         number: "13579",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 3,
  //         content: "T2",
  //         number: "56789",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 4,
  //         content: "X2",
  //         number: "01234",
  //         payGet: "2.5",
  //       },
  //     ],
  //     info: '<p className="text-[14px] text-[#C7C7C7] px-[20px] mb-16px text-center"> KẾT QUẢ TÍNH BẰNG SỐ CUỐI CỦA <span  className="text-[#ffd612]" >MÃ GIAO DỊCH BANK</span> KHI CHUYỂN KHOẢN VÀO BANK NHẬN CỦA WEB TỶ LỆ SẼ LÀ <span className="text-[#ffd612]" >x2.5</span> CHO LỆNH WIN ĐẦU TIỀN (&ge; 50K VÀ &le; 100K) TỶ LỆ GIẢM 0.1 ĐỐI VỚI CÁC GIAO DỊCH TỪ 100K TRỞ LÊN </p>',
  //   },
  //   {
  //     id: 3,
  //     name: "1 Phần 3",
  //     data: [
  //       {
  //         id: 1,
  //         content: "C2",
  //         number: "02468",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 2,
  //         content: "L2",
  //         number: "13579",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 3,
  //         content: "T2",
  //         number: "56789",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 4,
  //         content: "X2",
  //         number: "01234",
  //         payGet: "2.5",
  //       },
  //     ],
  //     info: '<p className="text-[14px] text-[#C7C7C7] px-[20px] mb-16px text-center"> KẾT QUẢ TÍNH BẰNG SỐ CUỐI CỦA <span  className="text-[#ffd612]" >MÃ GIAO DỊCH BANK</span> KHI CHUYỂN KHOẢN VÀO BANK NHẬN CỦA WEB TỶ LỆ SẼ LÀ <span className="text-[#ffd612]" >x2.5</span> CHO LỆNH WIN ĐẦU TIỀN (&ge; 50K VÀ &le; 100K) TỶ LỆ GIẢM 0.1 ĐỐI VỚI CÁC GIAO DỊCH TỪ 100K TRỞ LÊN </p>',
  //   },
  //   {
  //     id: 4,
  //     name: "H3",
  //     data: [
  //       {
  //         id: 1,
  //         content: "C2",
  //         number: "02468",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 2,
  //         content: "L2",
  //         number: "13579",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 3,
  //         content: "T2",
  //         number: "56789",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 4,
  //         content: "X2",
  //         number: "01234",
  //         payGet: "2.5",
  //       },
  //     ],
  //     info: '<p className="text-[14px] text-[#C7C7C7] px-[20px] mb-16px text-center"> KẾT QUẢ TÍNH BẰNG SỐ CUỐI CỦA <span  className="text-[#ffd612]" >MÃ GIAO DỊCH BANK</span> KHI CHUYỂN KHOẢN VÀO BANK NHẬN CỦA WEB TỶ LỆ SẼ LÀ <span className="text-[#ffd612]" >x2.5</span> CHO LỆNH WIN ĐẦU TIỀN (&ge; 50K VÀ &le; 100K) TỶ LỆ GIẢM 0.1 ĐỐI VỚI CÁC GIAO DỊCH TỪ 100K TRỞ LÊN </p>',
  //   },
  //   {
  //     id: 5,
  //     name: "Đoán số",
  //     data: [
  //       {
  //         id: 1,
  //         content: "C2",
  //         number: "02468",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 2,
  //         content: "L2",
  //         number: "13579",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 3,
  //         content: "T2",
  //         number: "56789",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 4,
  //         content: "X2",
  //         number: "01234",
  //         payGet: "2.5",
  //       },
  //     ],
  //     info: '<p className="text-[14px] text-[#C7C7C7] px-[20px] mb-16px text-center"> KẾT QUẢ TÍNH BẰNG SỐ CUỐI CỦA <span  className="text-[#ffd612]" >MÃ GIAO DỊCH BANK</span> KHI CHUYỂN KHOẢN VÀO BANK NHẬN CỦA WEB TỶ LỆ SẼ LÀ <span className="text-[#ffd612]" >x2.5</span> CHO LỆNH WIN ĐẦU TIỀN (&ge; 50K VÀ &le; 100K) TỶ LỆ GIẢM 0.1 ĐỐI VỚI CÁC GIAO DỊCH TỪ 100K TRỞ LÊN </p>',
  //   },
  //   {
  //     id: 6,
  //     name: "Xiên",
  //     data: [
  //       {
  //         id: 1,
  //         content: "C2",
  //         number: "02468",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 2,
  //         content: "L2",
  //         number: "13579",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 3,
  //         content: "T2",
  //         number: "56789",
  //         payGet: "2.5",
  //       },
  //       {
  //         id: 4,
  //         content: "X2",
  //         number: "01234",
  //         payGet: "2.5",
  //       },
  //     ],
  //     info: '<p className="text-[14px] text-[#C7C7C7] px-[20px] mb-16px text-center"> KẾT QUẢ TÍNH BẰNG SỐ CUỐI CỦA <span  className="text-[#ffd612]" >MÃ GIAO DỊCH BANK</span> KHI CHUYỂN KHOẢN VÀO BANK NHẬN CỦA WEB TỶ LỆ SẼ LÀ <span className="text-[#ffd612]" >x2.5</span> CHO LỆNH WIN ĐẦU TIỀN (&ge; 50K VÀ &le; 100K) TỶ LỆ GIẢM 0.1 ĐỐI VỚI CÁC GIAO DỊCH TỪ 100K TRỞ LÊN </p>',
  //   },
  // ];
  useEffect(() => {
    fetchCollection();
  }, []);

  useEffect(() => {
    setPage(activeNavMenu, "page");
  }, [activeNavMenu]);
  const [loading, setLoading] = useState(true);
  const [close, setClose] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setClose(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setClose(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      // Kiểm tra token hợp lệ (có thể gọi API để xác thực token)
      LoggedOut(token);
    }
  }, []);
  const LoggedOut = async (token) => {
    try {
      const response = await axios.post(
        "https://new.chanlebank.bet/api/load-settings",
        {}, // Dữ liệu gửi đi, nếu không có thì để trống
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response);
      if (!response.data.status && response.data.code === 401) {
        return navigate("/newDemo/dang-nhap");
      }
      if (!response.data.status) {
        return navigate("/newDemo/");
      } else {
        return setLogged(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const LoginAPI = async (data) => {
    try {
      const response = await axios.post(
        "https://new.chanlebank.bet/api/auth/login",
        data
      );
      if (response.status === 200) {
        if (!response.data.status) {
          return response.data.message;
        }
        const token = response.data.token;
        Cookies.set("token", token, { expires: 7 });
        setLogged(true);
        setOpenModal({ ...openModal, navMenu: false });
        return;
      }
    } catch (err) {
      console.error(err);
    }
  };
  const RegisterAPI = async (data) => {
    try {
      const response = await axios.post(
        "https://new.chanlebank.bet/api/auth/register",
        data
      );
      console.log(response);
      if (response.status === 200) {
        if (!response.data.status) {
          return response.data.message;
        }
        const token = response.data.token;
        Cookies.set("token", token, { expires: 7 });
        setLogged(true);
        navigate("/newDemo/");
        return;
      }
    } catch (err) {
      console.error(err);
    }
  };
  const Logout = async () => {
    setLogged(false);
    Cookies.remove("token");
    setActiveNavMenu(1);
    navigate(`/newDemo/`);
    setLoading(true);
  };

  const fetchCollection = async () => {
    try {
      const response = await axios.post(
        "https://new.chanlebank.bet/api/load-mini-game"
      );
      if (response.status === 200) {
        if (!response.data.status) {
          return navigate("/newDemo/");
        }
        setCollection(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const giftCode = async (code) => {
    const token = Cookies.get("token");
    try {
      const response = await axios.post(
        "https://new.chanlebank.bet/api/check-giftcode",
        code,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        return response.data.message;
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Context.Provider
      value={{
        openModal,
        setOpenModal,
        activeNavMenu,
        setActiveNavMenu,
        activeTab,
        setActiveTab,
        collection,
        loading,
        setLoading,
        logged,
        setLogged,
        close,
        setClose,
        LoginAPI,
        RegisterAPI,
        Logout,
        giftCode,
      }}
    >
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.object,
};
export default AppContext;
