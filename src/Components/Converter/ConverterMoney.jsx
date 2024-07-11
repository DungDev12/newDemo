export const ConverterMoney = ({ str, unit }) => {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, unit);
};
