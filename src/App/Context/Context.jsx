import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
const Context = createContext();

export const useAuth = () => {
  return useContext(Context);
};
const AppContext = ({ children }) => {
  const [openModal, setOpenModal] = useState({
    navMenu: false,
  });
  const [activeNavMenu, setActiveNavMenu] = useState(
    sessionStorage.getItem("page")
      ? JSON.parse(sessionStorage.getItem("page"))
      : 1
  );
  const [activeTab, setActiveTab] = useState(1);
  const [logged, setLogged] = useState(false);
  const setPage = (page, type) => {
    sessionStorage.setItem(type, JSON.stringify(page));
  };
  const collection = [
    {
      id: 1,
      name: "Chẵn lẻ - Tài xỉu",
      data: [
        {
          id: 1,
          content: "C",
          number: "2468",
          payGet: "2.5",
        },
        {
          id: 2,
          content: "L",
          number: "1357",
          payGet: "2.5",
        },
        {
          id: 3,
          content: "T",
          number: "5678",
          payGet: "2.5",
        },
        {
          id: 4,
          content: "X",
          number: "1234",
          payGet: "2.5",
        },
      ],
      info: '<p className="text-[14px] text-[#C7C7C7] px-[20px] mb-16px text-center"> KẾT QUẢ TÍNH BẰNG TỔNG 2 SỐ CUỐI CỦA <span  className="text-[#ffd612]" >MÃ GIAO DỊCH BANK</span> KHI CHUYỂN KHOẢN VÀO BANK NHẬN CỦA WEB TỶ LỆ SẼ LÀ <span className="text-[#ffd612]" >x1.95</span> CHO LỆNH WIN ĐẦU TIỀN (&ge; 50K VÀ &le; 100K) TỶ LỆ GIẢM 0.1 ĐỐI VỚI CÁC GIAO DỊCH TỪ 100K TRỞ LÊN </p>',
    },
    {
      id: 2,
      name: "Chẵn lẻ 2 - Tài xỉu 2",
      data: [
        {
          id: 1,
          content: "C2",
          number: "02468",
          payGet: "2.5",
        },
        {
          id: 2,
          content: "L2",
          number: "13579",
          payGet: "2.5",
        },
        {
          id: 3,
          content: "T2",
          number: "56789",
          payGet: "2.5",
        },
        {
          id: 4,
          content: "X2",
          number: "01234",
          payGet: "2.5",
        },
      ],
      info: '<p className="text-[14px] text-[#C7C7C7] px-[20px] mb-16px text-center"> KẾT QUẢ TÍNH BẰNG SỐ CUỐI CỦA <span  className="text-[#ffd612]" >MÃ GIAO DỊCH BANK</span> KHI CHUYỂN KHOẢN VÀO BANK NHẬN CỦA WEB TỶ LỆ SẼ LÀ <span className="text-[#ffd612]" >x2.5</span> CHO LỆNH WIN ĐẦU TIỀN (&ge; 50K VÀ &le; 100K) TỶ LỆ GIẢM 0.1 ĐỐI VỚI CÁC GIAO DỊCH TỪ 100K TRỞ LÊN </p>',
    },
    {
      id: 3,
      name: "1 Phần 3",
      data: [
        {
          id: 1,
          content: "C2",
          number: "02468",
          payGet: "2.5",
        },
        {
          id: 2,
          content: "L2",
          number: "13579",
          payGet: "2.5",
        },
        {
          id: 3,
          content: "T2",
          number: "56789",
          payGet: "2.5",
        },
        {
          id: 4,
          content: "X2",
          number: "01234",
          payGet: "2.5",
        },
      ],
      info: '<p className="text-[14px] text-[#C7C7C7] px-[20px] mb-16px text-center"> KẾT QUẢ TÍNH BẰNG SỐ CUỐI CỦA <span  className="text-[#ffd612]" >MÃ GIAO DỊCH BANK</span> KHI CHUYỂN KHOẢN VÀO BANK NHẬN CỦA WEB TỶ LỆ SẼ LÀ <span className="text-[#ffd612]" >x2.5</span> CHO LỆNH WIN ĐẦU TIỀN (&ge; 50K VÀ &le; 100K) TỶ LỆ GIẢM 0.1 ĐỐI VỚI CÁC GIAO DỊCH TỪ 100K TRỞ LÊN </p>',
    },
    {
      id: 4,
      name: "H3",
      data: [
        {
          id: 1,
          content: "C2",
          number: "02468",
          payGet: "2.5",
        },
        {
          id: 2,
          content: "L2",
          number: "13579",
          payGet: "2.5",
        },
        {
          id: 3,
          content: "T2",
          number: "56789",
          payGet: "2.5",
        },
        {
          id: 4,
          content: "X2",
          number: "01234",
          payGet: "2.5",
        },
      ],
      info: '<p className="text-[14px] text-[#C7C7C7] px-[20px] mb-16px text-center"> KẾT QUẢ TÍNH BẰNG SỐ CUỐI CỦA <span  className="text-[#ffd612]" >MÃ GIAO DỊCH BANK</span> KHI CHUYỂN KHOẢN VÀO BANK NHẬN CỦA WEB TỶ LỆ SẼ LÀ <span className="text-[#ffd612]" >x2.5</span> CHO LỆNH WIN ĐẦU TIỀN (&ge; 50K VÀ &le; 100K) TỶ LỆ GIẢM 0.1 ĐỐI VỚI CÁC GIAO DỊCH TỪ 100K TRỞ LÊN </p>',
    },
    {
      id: 5,
      name: "Đoán số",
      data: [
        {
          id: 1,
          content: "C2",
          number: "02468",
          payGet: "2.5",
        },
        {
          id: 2,
          content: "L2",
          number: "13579",
          payGet: "2.5",
        },
        {
          id: 3,
          content: "T2",
          number: "56789",
          payGet: "2.5",
        },
        {
          id: 4,
          content: "X2",
          number: "01234",
          payGet: "2.5",
        },
      ],
      info: '<p className="text-[14px] text-[#C7C7C7] px-[20px] mb-16px text-center"> KẾT QUẢ TÍNH BẰNG SỐ CUỐI CỦA <span  className="text-[#ffd612]" >MÃ GIAO DỊCH BANK</span> KHI CHUYỂN KHOẢN VÀO BANK NHẬN CỦA WEB TỶ LỆ SẼ LÀ <span className="text-[#ffd612]" >x2.5</span> CHO LỆNH WIN ĐẦU TIỀN (&ge; 50K VÀ &le; 100K) TỶ LỆ GIẢM 0.1 ĐỐI VỚI CÁC GIAO DỊCH TỪ 100K TRỞ LÊN </p>',
    },
    {
      id: 6,
      name: "Xiên",
      data: [
        {
          id: 1,
          content: "C2",
          number: "02468",
          payGet: "2.5",
        },
        {
          id: 2,
          content: "L2",
          number: "13579",
          payGet: "2.5",
        },
        {
          id: 3,
          content: "T2",
          number: "56789",
          payGet: "2.5",
        },
        {
          id: 4,
          content: "X2",
          number: "01234",
          payGet: "2.5",
        },
      ],
      info: '<p className="text-[14px] text-[#C7C7C7] px-[20px] mb-16px text-center"> KẾT QUẢ TÍNH BẰNG SỐ CUỐI CỦA <span  className="text-[#ffd612]" >MÃ GIAO DỊCH BANK</span> KHI CHUYỂN KHOẢN VÀO BANK NHẬN CỦA WEB TỶ LỆ SẼ LÀ <span className="text-[#ffd612]" >x2.5</span> CHO LỆNH WIN ĐẦU TIỀN (&ge; 50K VÀ &le; 100K) TỶ LỆ GIẢM 0.1 ĐỐI VỚI CÁC GIAO DỊCH TỪ 100K TRỞ LÊN </p>',
    },
  ];

  useEffect(() => {
    setPage(activeNavMenu, "page");
  }, [activeNavMenu]);

  const [loading, setLoading] = useState(true);

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
