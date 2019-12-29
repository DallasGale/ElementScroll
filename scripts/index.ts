// todo: Add State Machine: for idle / scrollling to be added to event listener
// todo: Add Up and Down arrows

import { handleScrollEvent } from "./handlers";
import { ScrollerSize } from "./functions";

// * DOM Elements
const referenceElement = document.getElementById("reference-element");
const percentageScrolled = document.getElementById("percentage-scrolled");
const scroller = document.getElementById("scroller");

// * Element Measurements
const documentElement = document.documentElement;
let windowHeight = documentElement.clientHeight;
const scrollerHeight = ScrollerSize(scroller);

console.log("scrollerHeight", scrollerHeight);

// * Script
if (window) {
  // * Observer
  if (ResizeObserver) {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        windowHeight = entry.target.clientHeight;
      }
    });
    resizeObserver.observe(document.documentElement);
  }

  let totalHeight = referenceElement.clientHeight - windowHeight;
  let negOrPos = Math.sign(referenceElement.getBoundingClientRect().y);
  // let isScrolling = false;
  window.addEventListener(
    "scroll",
    e => {
      // isScrolling = true;
      negOrPos = Math.sign(referenceElement.getBoundingClientRect().y);

      if (negOrPos === -1) {
        handleScrollEvent(
          totalHeight,
          referenceElement,
          scroller,
          percentageScrolled
        );
      } else {
        return;
      }
    },
    { passive: true }
  );
}
