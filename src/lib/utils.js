const hideNumbers = (digits) => {
  const displayNumberString = digits.join("");
  const masked = displayNumberString.substring(
    0,
    displayNumberString.length - 1
  );
  const lastNum = displayNumberString.substr(displayNumberString.length - 1);
  const hiddenNumbers = masked.replace(/./g, "*");
  return hiddenNumbers.concat(lastNum);
};

const buttonDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const checkPin = (pin, digits) =>
  JSON.stringify(pin) === JSON.stringify(digits);

const showCorrectMessage = (pinChecked) => (pinChecked ? "OK!" : "ERROR");

export { hideNumbers, buttonDigits, checkPin, showCorrectMessage };
