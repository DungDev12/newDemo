import { BsBank2 } from "react-icons/bs";

const InfoBank = () => {
  return (
    <>
      <div className="w-full bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px]">
        <div className="flex items-center gap-4 p-[20px] ">
          <BsBank2 className="text-[30px] text-[#fa9323]" />
          <h3 className="text-[20px] activeSpan">THÔNG TIN BANK NHẬN</h3>
        </div>
        <hr />
        <div className="py-[20px]">
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th>NGÂN HÀNG</th>
                <th>TÀI KHOẢN</th>
                <th>TÊN CTK</th>
                <th>CƯỢC TỐI THIỂU</th>
                <th>CƯỢC TỐI ĐA</th>
                <th>MÃ QR</th>
              </tr>
            </thead>
            <tbody className="border-t-[#2b2b31] border-t-[5px]">
              <tr className="border-b-[#2b2b31] border-b-[5px]">
                <th className="flex items-center justify-center p-[0.5rem]">
                  <div className="w-[80px]">
                    <img
                      className="object-cover"
                      src="https://chanlebank.bet/assets/images/mb.png"
                    />
                  </div>
                  <strong>MB</strong>
                </th>
                <th>693733****</th>
                <th>NGUYEN****</th>
                <th>20,000VND</th>
                <th>3,000,000VND</th>
                <th>
                  <div>
                    <img />
                  </div>
                </th>
              </tr>
              <tr>
                <th className="flex items-center justify-center">
                  <div className="w-[80px]">
                    <img
                      className="object-cover"
                      src="https://chanlebank.bet/assets/images/mb.png"
                    />
                  </div>
                  <strong>MB</strong>
                </th>
                <th>693733****</th>
                <th>NGUYEN****</th>
                <th>20,000VND</th>
                <th>3,000,000VND</th>
              </tr>
              <tr>
                <th className="flex items-center justify-center">
                  <div className="w-[80px]">
                    <img
                      className="object-cover"
                      src="https://chanlebank.bet/assets/images/mb.png"
                    />
                  </div>
                  <strong>MB</strong>
                </th>
                <th>693733****</th>
                <th>NGUYEN****</th>
                <th>20,000VND</th>
                <th>3,000,000VND</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default InfoBank;
