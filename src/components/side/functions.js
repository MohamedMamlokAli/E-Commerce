export const priceChanger = (number) => {
  let priceArray = [];
  let stringPrice = number.toString();
  for (let i = 0; i < stringPrice.length; i++) {
    priceArray.push(parseInt(stringPrice[i]));
  }
  let formattedPrice = `${priceArray
    .slice(0, priceArray.length - 2)
    .join('')}.${priceArray
    .slice(priceArray.length - 2, priceArray.length)
    .join('')}`;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  return formatter.format(formattedPrice);
};
// 3099;
