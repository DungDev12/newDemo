import { BsBank2 } from "react-icons/bs";

const InfoBank = () => {
  return (
    <>
      <div className="w-[50%] bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px]">
        <div className="flex items-center gap-4 p-[20px] ">
          <BsBank2 className="text-[30px] text-[#fa9323]" />
          <h3 className="text-[20px] activeSpan">THÔNG TIN BANK NHẬN</h3>
        </div>
        <div className="py-[20px]">
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th>Ngân hàng</th>
                <th>Số tài khoản</th>
                <th>Chủ tài khoản</th>
                <th>Tối thiểu</th>
                <th>Tối đa</th>
              </tr>
            </thead>
            <tbody className="border-t-[#2b2b31] border-t-[5px]">
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
