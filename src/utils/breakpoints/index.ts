export interface Breakpoints {
  tablet?: string | number;
  desktop?: string | number;
}

export const breakpoints: Breakpoints = {
  tablet: 600,
  desktop: 1200,
};

export const device: Breakpoints = {
  tablet: `@media (min-width: ${breakpoints.tablet}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
};

export * from "./hooks";
