import { BsBank2, BsQrCodeScan } from "react-icons/bs";
import { useAuth } from "../App/Context/Context";
import NotLogin from "../Page/Auth/NotLogin";
import { ConverterMoney } from "../Components/Converter/ConverterMoney";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Copy from "./Tools/Copy";
const InfoBank = () => {
  const { logged } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const API = [
    {
      id: 1,
      bank: "MB",
      imgBank: "https://chanlebank.bet/assets/images/mb.png",
      account: "69373342341",
      name: "NGUYEN",
      min: 20000,
      limit: 3000000,
      qr: "", // đường dẫn link mã QR code
    },
  ];
  return (
    <>
      <div className="w-full bg-[#28282D] text-white rounded-[5px] border-[#28282D] border-[2px]">
        <div className="flex items-center gap-4 p-[20px] ">
          <BsBank2 className="text-[30px] text-[#fa9323]" />
          <h3 className="lg:text-[20px] text-[18px]  activeSpan">
            THÔNG TIN BANK NHẬN
          </h3>
        </div>
        <hr />
        {logged ? (
          <div className="py-[20px] min-h-[100px] overflow-x-auto">
            <table className="table lg:table-auto w-full text-center lg:text-[14px] md:text-[12px] sm:text-[11px] text-[10px]">
              <thead className="lg:text-[16px] text-[14px] ">
                <tr>
                  <th className="px-2 ">NGÂN HÀNG</th>
                  <th className="px-2 ">TÀI KHOẢN</th>
                  <th className="px-2 ">TÊN CTK</th>
                  <th className="px-2 ">CƯỢC TỐI THIỂU</th>
                  <th className="px-2 ">CƯỢC TỐI ĐA</th>
                  <th className="px-2 ">MÃ QR</th>
                </tr>
              </thead>
              <tbody className="border-t-[#2b2b31] border-t-[5px] lg:text-[14px] text-[12px]">
                {API &&
                  API.map((it, i) => (
                    <tr key={i} className="border-b-[#2b2b31] border-b-[5px]">
                      <td>
                        <strong>{it.bank}</strong>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <span>{it.account} </span>
                          <Copy value={it.account} />
                        </div>
                      </td>
                      <td>{it.name}</td>
                      <td>
                        {ConverterMoney({ str: it.min.toString(), unit: "," })}{" "}
                        VND
                      </td>
                      <td>
                        {ConverterMoney({
                          str: it.limit.toString(),
                          unit: ",",
                        })}{" "}
                        VND
                      </td>
                      <td>
                        <div onClick={() => onOpen()}>
                          <BsQrCodeScan className="mx-auto text-[#fa922399] hover:text-[#fa9323] transition duration-300 ease-linear cursor-pointer text-[20px]" />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <NotLogin />
        )}
      </div>
      <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">QR Code</ModalHeader>
              <ModalBody>
                <div>
                  <img />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default InfoBank;
