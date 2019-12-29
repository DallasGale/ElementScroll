import {
  FormatToPercent,
  ConvertNumberToPercentage,
  FormattedCurrentValue
} from "./functions";

export const handleScrollEvent = function scrollHandler(
  size: number,
  referenceElement: HTMLElement,
  scroller: HTMLElement,
  percentageScrolled: HTMLElement
) {
  // * State Machine
  const STATUS = {
    id: "Progress",
    states: {
      start: 0,
      snapToStart: 2,
      snapToEnd: 98,
      end: 100
    }
  };
  // let currentState = STATUS.states.start;

  const currentValue = referenceElement.getBoundingClientRect().y;
  const num = FormatToPercent(
    ConvertNumberToPercentage(FormattedCurrentValue(currentValue), size)
  );
  const progress = FormattedCurrentValue(num);
  // console.log(typeof progress);
  if (
    progress > STATUS.states.snapToStart &&
    progress < STATUS.states.snapToEnd
  ) {
    scroller.style.top = progress + "%";
    percentageScrolled.innerText = progress.toString();
    //  CSS
    if (scroller.classList.contains("snap")) {
      scroller.classList.remove("snap");
    }
    return;
  } else if (
    progress > STATUS.states.start &&
    progress < STATUS.states.snapToStart
  ) {
    // Set State
    // currentState = STATUS.states.start;
    scroller.style.top = "0%";
    percentageScrolled.innerText = "0%";
    //  CSS
    scroller.classList.add("snap");
    return;
  } else if (
    progress > STATUS.states.snapToEnd &&
    progress < STATUS.states.end
  ) {
    // Set State
    // currentState = STATUS.states.end;
    scroller.style.top = "100%";
    percentageScrolled.innerText = "100%";

    // CSS
    scroller.classList.add("snap");
    return;
  } else {
    return;
  }

  // if ((currentState = STATUS.states.start)) {
  //   console.log("start");

  // }
  // if ((currentState = STATUS.states.end)) {
  //   console.log("end");
  // }
};
