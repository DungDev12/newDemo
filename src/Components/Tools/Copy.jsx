import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const Copy = ({ value }) => {
  const [copy, setCopy] = useState(false);
  const handleCopy = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setCopy(true);
        setTimeout(() => setCopy(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };
  return (
    <>
      <div
        className="cursor-pointer text-[#F0AD4E] hover:text-[#FFD612] transition duration-300 ease-linear"
        onClick={handleCopy}
      >
        {copy ? <FaCheck /> : <IoCopyOutline />}
      </div>
    </>
  );
};
Copy.propTypes = {
  value: PropTypes.string,
};
export default Copy;
