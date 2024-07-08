import { Link } from "react-router-dom";

const NotLogin = () => {
  return (
    <div className="text-center px-[25px] py-[20px] text-[14px]">
      <p>
        ĐỂ LẤY THÔNG TIN BANK CHUYỂN KHOẢN, VUI LÒNG{" "}
        <Link
          to={"dang-nhap"}
          className="text-[#FFD612] hover:text-[#FA9323] transition duration-300 ease-linear cursor-pointer"
        >
          ĐĂNG NHẬP
        </Link>{" "}
        HOẶC{" "}
        <Link
          to={"dang-ky"}
          className="text-[#FFD612] hover:text-[#FA9323] transition duration-300 ease-linear cursor-pointer"
        >
          ĐĂNG KÝ NHANH
        </Link>
      </p>
    </div>
  );
};

export default NotLogin;
