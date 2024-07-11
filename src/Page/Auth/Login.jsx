import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { useAuth } from "../../App/Context/Context";
import { useState } from "react";
const Login = () => {
  const { setLoading, setActiveNavMenu, LoginAPI } = useAuth();
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const err1 = await LoginAPI(formData);
    if (err1) {
      setErr(err1);
    } else {
      navigate("/newDemo/");
      setActiveNavMenu(1);
      setLoading(true);
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
          <form className="mt-[20px]" onSubmit={handleSubmit}>
            <p className="text-center text-red-600 text-[14px] mb-4">{err}</p>
            <div className="mb-[20px] ">
              <input
                className="w-full px-[20px] h-[50px] outline-none rounded-[5px] bg-[#2B2B31] borderInput text-white"
                type="username"
                name="username"
                placeholder="Số điện thoại"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-[20px]">
              <input
                className="w-full px-[20px] h-[50px]  outline-none rounded-[5px] bg-[#2B2B31] borderInput text-white"
                type="password"
                placeholder="Mật khẩu"
                name="password"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button
              type="Submit"
              className="uppercase text-center w-full text-white font-semibold mt-[20px] rounded-[5px] buttonAnimation py-[10px]"
            >
              Đăng nhập
            </button>
          </form>
          <p className="text-center text-white mt-[10px] text-[14px]">
            Chưa có tài khoản?
            <Link to={"/newDemo/dang-ky"} className="activeText font-bold">
              Đăng ký!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
