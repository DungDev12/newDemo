import PropTypes from "prop-types";

const NotCode = ({ title }) => {
  return <div>{title ? title : "Xin lỗi hiện đang bảo trì Server!"}</div>;
};

NotCode.propTypes = {
  title: PropTypes.string,
};
export default NotCode;
