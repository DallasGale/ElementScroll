/**
 *
 * @param {*} currentNumber
 * @param {*} totalNumber
 */
export function ConvertNumberToPercentage(
  currentNumber: number,
  totalNumber: number
) {
  const percent = currentNumber / totalNumber;
  // console.log("Percentage", percent);
  return percent;
}

/**
 *
 * @param {*} value
 */
export function FormatToPercent(value: number) {
  const formatted = value * 100;
  return formatted;
}

/**
 *
 * @param value
 */
export function FormattedCurrentValue(value: number) {
  const output = Math.abs(value).toFixed(3);
  return parseFloat(output);
}

/**
 *
 * @param element
 */
export function ScrollerSize(element: HTMLElement) {
  const output = element.getBoundingClientRect().height;
  return output;
}
