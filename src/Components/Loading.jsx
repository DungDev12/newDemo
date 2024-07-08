import { useEffect, useState } from "react";
import { useAuth } from "../App/Context/Context";

const Loading = () => {
  const { loading, setLoading } = useAuth();
  const [close, setClose] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setClose(close);
    }, 2000); // Simulating loading delay of 2 seconds for demonstration purposes. In a real-world scenario, this would be replaced with the actual loading logic.
    const timer2 = setTimeout(() => {
      setLoading(false);
      setClose(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);
  return (
    <>
      <div className="fixed top-0 left-0 z-[9999]">
        <div
          className={`grid place-content-center h-screen w-screen loading ${
            loading ? "closeLoading" : ""
          }`}
        >
          <div className="w-[180px]">
            <img
              className="object-cover block"
              src="https://chanlebank.bet/uploads/1713603023_2049.png"
              alt="loading"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
