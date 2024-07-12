export const ConverterMoney = ({ str, unit, currency }) => {
  if (currency) {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, unit) + " " + currency;
  } else {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, unit);
  }
};
