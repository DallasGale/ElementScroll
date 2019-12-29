import {
  FormatToPercent,
  ConvertNumberToPercentage,
  FormattedCurrentValue,
  getScrollerHeight
} from "./functions";

export const setScrollerPositions = function scrollHandler(
  size: number,
  referenceElement: HTMLElement,
  scroller: HTMLElement,
  scrollCase: HTMLElement,
  percentageScrolled: HTMLElement
) {
  const currentValue = referenceElement.getBoundingClientRect().y;
  const scrollerHeight = getScrollerHeight(scroller);
  const scrollCaseHeight = scrollCase.getBoundingClientRect().height;
  const takeScrollerHeightFromCaseHeight = scrollerHeight / scrollCaseHeight;
  // console.log("scrollerFinishPosition", scrollerFinishPosition * 100);
  const scrollerFinishPosition = takeScrollerHeightFromCaseHeight * 100;
  const num = FormatToPercent(
    ConvertNumberToPercentage(FormattedCurrentValue(currentValue), size)
  );
  // State Machine
  const snapToEndPos = 95;
  const endPos = 100 - scrollerFinishPosition;
  console.log("endPos", endPos);
  const STATUS = {
    id: "progress",
    states: {
      start: 0,
      snapToStart: 2,
      snapToEnd: endPos,
      end: endPos
    }
  };

  console.log(STATUS.states.snapToEnd);
  console.log(STATUS.states.end);
  const progress = FormattedCurrentValue(num);
  // if (progress > STATUS.states.start && progress < STATUS.states.end) {
  //   referenceElement.classList.add("fixed");
  // } else {
  //   referenceElement.classList.remove("fixed");
  // }
  // When scroller is inbetween start and end points.
  if (
    progress > STATUS.states.snapToStart &&
    progress < STATUS.states.snapToEnd
  ) {
    scroller.style.top = progress + "%";
    percentageScrolled.innerText = progress.toString();

    if (scroller.classList.contains("snap")) {
      scroller.classList.remove("snap");
    }
    return;
  } else if (
    // When scroller is at the START positions.
    progress > STATUS.states.start &&
    progress < STATUS.states.snapToStart
  ) {
    scroller.style.top = "0%";
    percentageScrolled.innerText = "0%";
    scroller.classList.add("snap");
    return;
  } else if (
    // When scroller is at the END positions.
    progress > STATUS.states.snapToEnd &&
    progress < STATUS.states.end
  ) {
    scroller.style.top = endPos.toString();
    percentageScrolled.innerText = endPos + "%";
    scroller.classList.add("snap");
    return;
  } else {
    return;
  }
  // scroller.style.top = progress + "%";
  // percentageScrolled.innerText = progress.toString();
};

export const setScroll = (
  size: number,
  referenceElement: HTMLElement,
  scroller: HTMLElement,
  scrollCase: HTMLElement,
  percentageScrolled: HTMLElement
) => {
  const negOrPos = Math.sign(referenceElement.getBoundingClientRect().y);
  if (negOrPos === -1) {
    return setScrollerPositions(
      size,
      referenceElement,
      scroller,
      scrollCase,
      percentageScrolled
    );
  } else {
    return;
  }
};
