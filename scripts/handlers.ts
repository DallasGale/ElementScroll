import {
  FormatToPercent,
  ConvertNumberToPercentage,
  FormattedCurrentValue
} from "./functions";

export const setScrollerPositions = function scrollHandler(
  size: number,
  referenceElement: HTMLElement,
  scroller: HTMLElement,
  percentageScrolled: HTMLElement
) {
  // State Machine
  const STATUS = {
    id: "progress",
    states: {
      start: 0,
      snapToStart: 2,
      snapToEnd: 98,
      end: 100
    }
  };

  const currentValue = referenceElement.getBoundingClientRect().y;
  const num = FormatToPercent(
    ConvertNumberToPercentage(FormattedCurrentValue(currentValue), size)
  );
  const progress = FormattedCurrentValue(num);

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
    scroller.style.top = "100%";
    percentageScrolled.innerText = "100%";
    scroller.classList.add("snap");
    return;
  } else {
    return;
  }
};

export const setScroll = (
  size: number,
  referenceElement: HTMLElement,
  scroller: HTMLElement,
  percentageScrolled: HTMLElement
) => {
  const negOrPos = Math.sign(referenceElement.getBoundingClientRect().y);
  if (negOrPos === -1) {
    return setScrollerPositions(
      size,
      referenceElement,
      scroller,
      percentageScrolled
    );
  } else {
    return;
  }
};
