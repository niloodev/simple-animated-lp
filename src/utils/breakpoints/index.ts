export interface Breakpoints {
  tablet?: string;
  desktop?: string;
}

export const breakpoints: Breakpoints = {
  tablet: `(min-width: 600px)`,
  desktop: `(min-width: 1200px)`,
};

export const device: Breakpoints = {
  tablet: `@media ${breakpoints.tablet}`,
  desktop: `@media ${breakpoints.desktop}`,
};

export * from "./hooks";
