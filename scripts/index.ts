// todo: Add State Machine: for idle / scrollling to be added to event listener
// todo: Add Up and Down arrows
import { fromEvent } from "rxjs";
import { throttleTime, tap } from "rxjs/operators";

import { setScroll } from "./handlers";
import { getWindowHeight } from "./functions";

// * DOM Elements
const referenceElement = document.getElementById("reference-element");
const percentageScrolled = document.getElementById("percentage-scrolled");
const scroller = document.getElementById("scroller");
const scrollCase = document.getElementById("scroll-case");
// * Element Measurements
const documentElement = document.documentElement;
const windowHeight = documentElement.clientHeight;
// const scrollerHeight = ScrollerSize(scroller);

if (window) {
  getWindowHeight(windowHeight);
  const totalHeight = referenceElement.clientHeight - windowHeight;

  // console.log("totalHeight", totalHeight);
  // console.log("scrollerHeight", scrollerHeight);

  const setScroller = _ => {
    return setScroll(
      totalHeight,
      referenceElement,
      scroller,
      scrollCase,
      percentageScrolled
    );
  };

  fromEvent(document, "scroll")
    .pipe(throttleTime(10), tap(setScroller))
    .subscribe();
}
