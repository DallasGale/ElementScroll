/**
 *
 * @param {*} currentNumber
 * @param {*} totalNumber
 */
export function ConvertNumberToPercentage(currentNumber, totalNumber) {
  const percent = currentNumber / totalNumber;
  // console.log("Percentage", percent);
  return percent;
}

/**
 *
 * @param {*} number
 */
export function FormatToPercent(number) {
  const formatted = number * 100;
  // console.log("FormatToPercent: ", formatted);
  return formatted;
}
