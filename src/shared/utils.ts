export const intervalMediaQuery = (
  minBreakpoint: number,
  maxBreakPoint: number
) =>
  `@media(min-width: ${minBreakpoint}px) and (max-width: ${
    maxBreakPoint - 1
  }px)`;
