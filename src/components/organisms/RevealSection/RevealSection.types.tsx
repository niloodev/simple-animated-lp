import { ReactNode } from "react";

export interface RevealSectionProps {
  elements: Array<{
    title: string;
    description: string;
    isAccordion?: boolean;
  }>;
  footerElement?: ReactNode;
}
