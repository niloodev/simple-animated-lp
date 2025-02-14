import { ReactNode } from "react";

export type RevealElements = Array<{
  title: string;
  description: string;
  isAccordion?: boolean;
}>;

export interface RevealSectionProps {
  elements: RevealElements;
  footerElement?: ReactNode;
}
