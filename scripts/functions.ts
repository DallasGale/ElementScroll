import ResizeObserver from "resize-observer-polyfill";

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
 * @param output
 */
export function getWindowHeight(output: number) {
  if (ResizeObserver) {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        output = entry.target.clientHeight;
      }
    });
    resizeObserver.observe(document.documentElement);
  } else {
    // If no browser support for ResizeObserver API.
    window.addEventListener("resize", () => {
      output = document.documentElement.clientHeight;
    });
  }
}

/**
 *
 * @param element
 */
export function ScrollerSize(element: HTMLElement) {
  const output = element.getBoundingClientRect().height;
  return output;
}
