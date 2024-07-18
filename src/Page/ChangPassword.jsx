import { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";

const ChangePassword = () => {
  const [user, setUser] = useState({
    passwordOld: "",
    passwordNew: "",
    passwordConfirm: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({...user , [name]: value})
  };
  return (
    <div className="w-full bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px]">
      <div className="flex items-center gap-4 p-[20px] justify-center">
        <RiLockPasswordLine className="text-[30px] text-[#fa9323]" />
        <h3 className="lg:text-[20px] text-[18px]  activeSpan uppercase">
          Đổi mật khẩu
        </h3>
      </div>
      <hr />
      <form className="max-w-[400px] mx-auto py-[40px]">
        <div className="mb-[20px]">
          <input
            className="w-full px-[20px] h-[50px]  outline-none rounded-[5px] bg-[#2B2B31] borderInput text-white"
            type="password"
            placeholder="Mật khẩu cũ"
            name="passwordOld"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-[20px]">
          <input
            className="w-full px-[20px] h-[50px]  outline-none rounded-[5px] bg-[#2B2B31] borderInput text-white"
            type="password"
            placeholder="Mật khẩu mới"
            name="passwordNew"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-[20px]">
          <input
            className="w-full px-[20px] h-[50px]  outline-none rounded-[5px] bg-[#2B2B31] borderInput text-white"
            type="password"
            placeholder="Nhập lại mật khẩu mới"
            name="passwordConfirm"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button
          type="Submit"
          className="uppercase text-center w-full text-white font-semibold mt-[20px] rounded-[5px] buttonAnimation py-[10px]"
        >
          Đổi mật khẩu
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
