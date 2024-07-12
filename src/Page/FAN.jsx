import { IoStarOutline } from "react-icons/io5";
import parse, { domToReact } from "html-react-parser";
import { Link } from "react-router-dom";
const FAN = () => {
  const API = ` <p>
            Trở thành <span className="text-[#fa9323]">FAN MD5</span> giúp bạn
            nhận được
            <a
              href="http://localhost:5173/newDemo/giftcode"
              className="text-[#FFD612] hover:text-[#fa9323] transition duration-300 ease-linear"
            >
              GIFTCODE 10K &#8594; 100K
            </a>
            vnđ
          </p>
          <p>ĐỂ TRỞ THÀNH FAN CỦA MD5 VUI LÒNG THỰC HIỆN THEO CÁC BƯỚC SAU:</p>
          <p>
            <span className="activeSpan font-bold">BƯỚC 1: </span> Hãy chắc chắn
            rằng tài khoản của bạn đã
            <a
              href="http://localhost:5173/newDemo/dang-nhap"
              className="text-[#FFD612] hover:text-[#fa9323] transition duration-300 ease-linear"
            >
              LIÊN KẾT TELEGRAM
            </a>
            và tham gia
            <a
              href="https://t.me/CHANLEBANK_BET"
              className="text-[#FFD612] hover:text-[#fa9323] transition duration-300 ease-linear"
            >
              NHÓM CHANLEBANK.BET
            </a>
          </p>
          <p>
            <span className="activeSpan font-bold">BƯỚC 2:</span> Thay ảnh đại
            diện (avatar) tài khoản Telegram của bạn bằng hình ảnh
            <a
              href=
                "https://chanlebank.bet/uploads/1714803086_photo_2024-04-21_02-56-28.jpg"
              }
              className="text-[#FFD612] hover:text-[#fa9323] transition duration-300 ease-linear"
            >
              TẠI ĐÂY
            </a>
          </p>
          <div className="w-[250px] mx-auto my-[1rem] rounded-[5px] overflow-hidden">
            <img
              src="https://chanlebank.bet/uploads/1714803086_photo_2024-04-21_02-56-28.jpg"
              className="object-cover"
            />
          </div>
          <p>
            <span className="activeSpan font-bold">BƯỚC 3:</span> Đổi tên
            Telegram của bạn bằng cách thêm cụm từ
            <span className="text-[#fa9323] font-bold">( FANMD5 100K )</span>
            vào cuối.
          </p>
          <p>
            Ví dụ tên bạn là Blv Thợ Xây thì đổi thành :
            <span className="text-[#fa9323] font-bold">
              
              Thợ xây ( FANMD5 100K )
            </span>
          </p>
          <p>
            <span className="text-[#fa9323] font-bold">BƯỚC 4:</span> Đổi BIO
            (tiểu sử) của bạn như phía dưới
          </p>
          <p className="text-[#fa9323] font-bold">
            Chanlebank.bet - Hôm nay 1 tỷ , ngày mai 10 tỷ
          </p>
          <p>
            Hãy chắc chắn rằng Avatar và Bio - Tiểu sử của bạn được để ở chế độ
            công khai.
          </p>
          <p>
            <span className="text-[#fa9323] font-bold">BƯỚC 5:</span> Click vào
            <span className="text-[#fa9323] font-bold">NHẬN NHIỆM VỤ</span> để
            hoàn tất.
          </p>
          <p>
            <span className="text-[#fa9323] font-bold">LƯU Ý:</span> Bạn sẽ được
            nhận thưởng sau 24h kể từ khi nhận nhiệm vụ.
          </p>
          <p>
            Nếu bạn đổi tên, avatar hoặc không có tương tác trong 24h khi đang
            tiến hành thì nhiệm vụ sẽ bị hủy.
          </p>
          <p>
            Tài khoản Telegram của bạn phải
            <span className="text-[#fa9323] font-bold">
              có tương tác đều đặn
            </span>
            kể từ khi nhận nhiệm vụ.
          </p>
          <p>
            Bạn sẽ nhận được
            <span   className="text-[#FFD612] hover:text-[#fa9323] transition duration-300 ease-linear"><a
              href="http://localhost:5173/newDemo/giftcode"
            
            >
              GIFTCODE
            </a></span>
            giá trị 10k - 100k được BOT gửi
          </p> `;
  const options = {
    replace: ({ name, attribs, children }) => {
      if (name === "a" && attribs && attribs.href) {
        console.log(attribs.href);
        return (
          <Link to={attribs.href} className={attribs.class}>
            {domToReact(children, options)}
          </Link>
        );
      }
    },
  };
  return (
    <>
      <div className="w-full bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px]">
        <div className="flex items-center justify-center gap-4 p-[20px] ">
          <IoStarOutline className="text-[30px] text-[#fa9323]" />
          <h3 className="text-[20px] activeSpan uppercase">fan CHANLEBANK</h3>
        </div>
        <hr />
        <div className="text-center text-[14px] py-[20px]">
          <div>{parse(API, options)}</div>
          {/* <p>
            Trở thành <span className="text-[#fa9323]">FAN MD5</span> giúp bạn
            nhận được
            <Link
              to={"/newDemo/giftcode"}
              className="text-[#FFD612] hover:text-[#fa9323] transition duration-300 ease-linear"
            >
              GIFTCODE 10K &#8594; 100K
            </Link>
            vnđ
          </p>
          <p>ĐỂ TRỞ THÀNH FAN CỦA MD5 VUI LÒNG THỰC HIỆN THEO CÁC BƯỚC SAU:</p>
          <p>
            <span className="activeSpan font-bold">BƯỚC 1: </span> Hãy chắc chắn
            rằng tài khoản của bạn đã
            <Link
              to={"/newDemo/dang-nhap"}
              className="text-[#FFD612] hover:text-[#fa9323] transition duration-300 ease-linear"
            >
              LIÊN KẾT TELEGRAM
            </Link>
            và tham gia
            <Link
              to={"https://t.me/CHANLEBANK_BET"}
              className="text-[#FFD612] hover:text-[#fa9323] transition duration-300 ease-linear"
            >
              NHÓM CHANLEBANK.BET
            </Link>
          </p>
          <p>
            <span className="activeSpan font-bold">BƯỚC 2:</span> Thay ảnh đại
            diện (avatar) tài khoản Telegram của bạn bằng hình ảnh
            <Link
              to={
                "https://chanlebank.bet/uploads/1714803086_photo_2024-04-21_02-56-28.jpg"
              }
              className="text-[#FFD612] hover:text-[#fa9323] transition duration-300 ease-linear"
            >
              TẠI ĐÂY
            </Link>
          </p>
          <div className="w-[250px] mx-auto my-[1rem] rounded-[5px] overflow-hidden">
            <img
              src="https://chanlebank.bet/uploads/1714803086_photo_2024-04-21_02-56-28.jpg"
              className="object-cover"
            />
          </div>
          <p>
            <span className="activeSpan font-bold">BƯỚC 3:</span> Đổi tên
            Telegram của bạn bằng cách thêm cụm từ
            <span className="text-[#fa9323] font-bold">( FANMD5 100K )</span>
            vào cuối.
          </p>
          <p>
            Ví dụ tên bạn là Blv Thợ Xây thì đổi thành :
            <span className="text-[#fa9323] font-bold">
              
              Thợ xây ( FANMD5 100K )
            </span>
          </p>
          <p>
            <span className="text-[#fa9323] font-bold">BƯỚC 4:</span> Đổi BIO
            (tiểu sử) của bạn như phía dưới
          </p>
          <p className="text-[#fa9323] font-bold">
            Chanlebank.bet - Hôm nay 1 tỷ , ngày mai 10 tỷ
          </p>
          <p>
            Hãy chắc chắn rằng Avatar và Bio - Tiểu sử của bạn được để ở chế độ
            công khai.
          </p>
          <p>
            <span className="text-[#fa9323] font-bold">BƯỚC 5:</span> Click vào
            {""}
            <span className="text-[#fa9323] font-bold">NHẬN NHIỆM VỤ</span> để
            hoàn tất.
          </p>
          <p>
            <span className="text-[#fa9323] font-bold">LƯU Ý:</span> Bạn sẽ được
            nhận thưởng sau 24h kể từ khi nhận nhiệm vụ.
          </p>
          <p>
            Nếu bạn đổi tên, avatar hoặc không có tương tác trong 24h khi đang
            tiến hành thì nhiệm vụ sẽ bị hủy.
          </p>
          <p>
            Tài khoản Telegram của bạn phải
            <span className="text-[#fa9323] font-bold">
              có tương tác đều đặn
            </span>
            kể từ khi nhận nhiệm vụ.
          </p>
          <p>
            Bạn sẽ nhận được
            <Link
              to={"/newDemo/giftcode"}
              className="text-[#FFD612] hover:text-[#fa9323] transition duration-300 ease-linear"
            >
              GIFTCODE
            </Link>
            giá trị 10k - 100k được BOT gửi
          </p> */}
        </div>
      </div>
    </>
  );
};

export default FAN;
