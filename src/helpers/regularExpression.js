const noAllowExeptNumbers = /\D*/g;
const onlyAllowNumbers = '^[0-9]*$';
const onlyAllowNumbersWithDigits = /^\d+(\.\d+)?$/;
const onlyAllowMNumbersWithNDigits = /^\d{1,15}(\.\d{1,2})?$/;
const profitMargin = /^\d{1,9}(\.\d{1,3})?$/;
const negativeHundredToHundred = /^-?([0-9]$|[1-9][0-9]$|(100))$/;
const onlyXChar = /^.{0,13}$/;
const onlyYChar = /^.{0,7}$/;
const onlyAllowXNumbersWithYDigits = /^\d{1,6}(\.\d{1,2})?$/;
const zeroToHundred = /^([0-9]$|[1-9][0-9]$|(100))$/;
const zeroToHundredWithDots =
  /^([0-9](\.\d{1,2})?$|[1-9][0-9](\.\d{1,2})?$|(100)(\.0{1,2}))$/;
const onlyAllowXNumbersInID = /^\d{1,9}$/;
const onlyZNumbers = /^\d{0,3}$/;
const onlyOneChar = /^.{0,1}$/;
const onlyEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

export {
  noAllowExeptNumbers,
  onlyAllowNumbers,
  onlyAllowNumbersWithDigits,
  onlyAllowMNumbersWithNDigits,
  profitMargin,
  negativeHundredToHundred,
  onlyXChar,
  onlyYChar,
  onlyAllowXNumbersWithYDigits,
  zeroToHundred,
  zeroToHundredWithDots,
  onlyAllowXNumbersInID,
  onlyZNumbers,
  onlyOneChar,
  onlyEmail,
};
