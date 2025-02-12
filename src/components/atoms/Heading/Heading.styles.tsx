import styled from "styled-components";
import { HeadingProps } from "./Heading.types";
import { forwardRef } from "react";
import { motion } from "motion/react";
import { device } from "@/utils/breakpoints";

const CustomHeadingElement = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ headingType, children, ...props }, ref) => {
    const MotionHeading = motion[headingType];
    return (
      <MotionHeading ref={ref} {...props}>
        {children}
      </MotionHeading>
    );
  }
);

export const HeadingElement = styled(CustomHeadingElement)`
  font-family: var(--font-poppins);
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.6rem;
  color: #fff;

  ${device.desktop} {
    font-size: 4.8rem;
    line-height: 6.4rem;
  }
`;
