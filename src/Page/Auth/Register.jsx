import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../App/Context/Context";
import { useState } from "react";

const Register = () => {
  const { setLoading, setActiveNavMenu, RegisterAPI } = useAuth();
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordCheck: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password && formData.passwordCheck) {
      if (formData.password !== formData.passwordCheck) {
        setErr("Mật khẩu nhập lại không trùng khớp");
        return;
      } else {
        RegisterAPI(formData);
      }
    }
  };
  return (
    <>
      <div className="bg-[#2B2B31] w-[100vw] h-[100vh] grid place-content-center">
        <div className="w-[440px] overflow-hidden min-h-[431px] borderTop bg-[#28282D] rounded-[5px] shadow-xl px-[80px] py-[40px]">
          <div>
            <img
              src="https://chanlebank.bet/uploads/1713603023_2049.png"
              className="object-cover cursor-pointer"
              onClick={() => {
                navigate("/newDemo/");
                setActiveNavMenu(1);
                setLoading(true);
              }}
            />
          </div>
          <form className="mt-[40px]" onSubmit={handleSubmit}>
            <p className="text-center text-red-600 text-[14px] mb-4">{err}</p>
            <div className="mb-[20px] ">
              <input
                className="w-full px-[20px] h-[50px] outline-none rounded-[5px] bg-[#2B2B31] borderInput text-white"
                type="username"
                name="username"
                onChange={(e) => handleChange(e)}
                placeholder="Số điện thoại"
                required
              />
            </div>
            <div className="mb-[20px]">
              <input
                className="w-full px-[20px] h-[50px]  outline-none rounded-[5px] bg-[#2B2B31] borderInput text-white"
                type="password"
                name="password"
                placeholder="Mật khẩu"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-[20px]">
              <input
                className="w-full px-[20px] h-[50px]  outline-none rounded-[5px] bg-[#2B2B31] borderInput text-white"
                type="password"
                placeholder="Nhập lại mật khẩu"
                name="passwordCheck"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button
              type="Submit"
              className="uppercase text-center w-full text-white font-semibold mt-[20px] rounded-[5px] buttonAnimation py-[10px]"
            >
              Đăng ký
            </button>
          </form>
          <p className="text-center text-white mt-[10px] text-[14px]">
            Đã có tài khoản?
            <Link to={"/newDemo/dang-nhap"} className="activeText font-bold">
              Đăng nhập!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
