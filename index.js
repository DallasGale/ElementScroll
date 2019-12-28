import { FormatToPercent, ConvertNumberToPercentage } from "./functions";

const referenceElement = document.getElementById("reference-element");
const percentageScrolled = document.getElementById("percentage-scrolled");
const scroller = document.getElementById("scroller");

let windowHeight = document.documentElement.clientHeight;
console.log("windowHeight", windowHeight);
console.log("referenceElement", referenceElement.getBoundingClientRect());

if (window) {
  window.addEventListener("resize", () => {
    windowHeight = document.documentElement.clientHeight;
    console.log("windowHeight", windowHeight);
  });
  window.removeEventListener("resize", () => {
    console.log("resize listener removed");
  });

  window.addEventListener("scroll", e => {
    // console.log("e", e.currentTarget);

    // ? Start scrolling when 'referenceElement' hits top of window
    if (referenceElement.getBoundingClientRect().y < 0) {
      window.addEventListener("scroll", () => {
        const currentValue = referenceElement.getBoundingClientRect().y;
        const formattedCurrentValue = Math.abs(currentValue).toFixed(2);
        console.log("formattedCurrentValue", formattedCurrentValue);
        const number = FormatToPercent(
          ConvertNumberToPercentage(formattedCurrentValue, 5000)
        );
        const output = Math.abs(number).toFixed(4);
        scroller.style.top = output + "%";
        percentageScrolled.innerText = output;
      });
    }
  });
  window.removeEventListener("scroll", () => {
    console.log("scroll listener removed");
  });
}
