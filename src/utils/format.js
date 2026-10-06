const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹';

export const faNumber = (n) => Number(n).toLocaleString('fa-IR');

export const formatPrice = (n) => `${Number(n).toLocaleString('fa-IR')} تومان`;

export const discountPercent = (price, salePrice) =>
  salePrice && salePrice < price ? Math.round((1 - salePrice / price) * 100) : 0;

export const toFaDigits = (str) => String(str).replace(/\d/g, (d) => FA_DIGITS[d]);
