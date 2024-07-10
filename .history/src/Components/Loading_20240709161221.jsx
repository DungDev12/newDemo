import { useAuth } from "../App/Context/Context";

const Loading = () => {
  const { close } = useAuth();

  return (
    <>
      <div className="fixed top-0 left-0 z-[9999] ">
        <div
          className={`grid place-content-center h-screen w-screen loading ${
            close && "closeLoading"
          }`}
        >
          <div className="w-[180px]">
            <img
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
