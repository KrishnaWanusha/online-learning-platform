export const currencyFormatter = (value: number) => {
  const formattedValue = `$${value.toFixed(2).toString()}`;
  return formattedValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
