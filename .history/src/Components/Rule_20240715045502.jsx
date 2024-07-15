import { BsInfoCircle } from "react-icons/bs";

const Rule = () => {
  const rule = {
    rulePlay: [
      "1. HỆ THỐNG CHẴN LẺ BANK TÍNH THEO KẾT QUẢ MÃ GIAO DỊCH CỦA BẠN NẾU CHUYỂN KHOẢN CÙNG NGÂN HÀNG.",
      "2. RIÊNG VCB SẼ TÍNH KẾT QUẢ LÀ SỐ GIAO DỊCH CỘNG VỚI MÃ GIAO DỊCH. CÙNG NGÂN PHẢI CHUYỂN TỪ APP VCB DIGIBANK NẾU KHÔNG SẼ KHÔNG ĐƯỢC HOÀN. NẾU GẶP THÔNG BÁO GIAO DỊCH KHÔNG HỢP LỆ. VUI LÒNG KHÔNG CK THÊM NẾU KHÔNG SẼ KHÔNG ĐƯỢC HOÀN TRẢ.",
      "3. HỆ THÔNG SỬ DỤNG MÃ GIAO DỊCH CỦA BANK NHẬN ĐỂ TÍNH KẾT QUẢ TRÒ CHƠI NẾU BẠN CHUYỂN KHOẢN LIÊN NGÂN HÀNG.",
    ],
    ruleAdmin: [
      "Chẵn lẻ bank là một trò chơi xanh chín, dựa vào mã giao dịch của ngân hàng MB Bank, Vietcombank (VCB), Techcombank (TCB), Vietinbank (VTB), BIDV, VPB Bank, ACB, Agribank, TPBANK (TPB), Sacombank (STB), SHB và nhiều ngân hàng khác. Hiện nay KUBANK.CLUB đang là hệ thống bank chẵn lẻ, chẵn lẻ zalopay, chẵn lẻ momo thanh toán tự động chỉ trong 3 giây và uy tín nhất hiện tại, Hỗ trợ khách hàng 24/7",
      "Chẵn lẻ là một trò chơi phổ biến, thường được chơi trong các dịp tết đầu năm, lễ hội hoặc tụ tập bạn bè. Hiện nay, Chẵn Lẻ Bank đã được phát triển thành một trò chơi trực tuyến trên ứng dụng thanh toán di động Bank.",
      "Chẵn lẻ trên Bank có cách chơi đơn giản và dễ hiểu. Người chơi chỉ cần chọn cược vào chẵn hoặc lẻ, hoặc cược vào một số lẻ nhất định từ 1 đến 9. Kết quả của trò chơi sẽ được xác định dựa trên số cuối của mã giao dịch chuyển tiền qua ứng dụng Bank.",
    ],
  };
  return (
    <div>
      <div className="w-full bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px] mt-[20px]">
        <div className="flex items-center gap-4 p-[20px] ">
          <BsInfoCircle className="text-[30px] text-[#fa9323]" />
          <h3 className="text-[20px] activeSpan">QUY ĐỊNH LUẬT CHƠI</h3>
        </div>
        <hr />
        <div className="py-[10px] px-[20px]">
          {rule.rulePlay.map((item, index) => (
            <p className="mt-[10px]" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px] mt-[20px]">
        <div className="flex items-center gap-4 p-[20px] ">
          <BsInfoCircle className="lg:text-[30px] text-[15px] text-[#fa9323]" />
          <h3 className="text-[20px] activeSpan">CHẴN LẺ BANK LÀ GÌ?</h3>
        </div>
        <hr />
        <div className="py-[10px] px-[20px] lg:text-[14px] text-[12px]">
          {rule.ruleAdmin.map((item, index) => (
            <p className="mt-[10px]" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rule;
