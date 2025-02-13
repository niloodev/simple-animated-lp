import { Button } from "@/components/atoms";
import { Accordion, Article } from "@/components/molecules";
import { Flex } from "@/components/templates";
import { HTMLMotionProps } from "motion/react";
import { forwardRef } from "react";

export const RevealSection = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  (props, ref) => {
    return (
      <Flex
        as="aside"
        ref={ref}
        {...props}
        gap={{ default: "6.4rem", desktop: "10rem" }}
        flex={{ default: "column" }}
      >
        <Article
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus real-time nunc, sed egestas dictum massa id, feugiat euismod."
        />
        <Article
          title="Lorem ipsum dolor sit"
          description="Nulla lorem tincidunt. Pulvinar et sapien sit amet blandit odio lectus euismod quam ut justo. Integer ornare."
        />
        <Accordion
          title="Lorem ipsum dolor sit"
          description="Nulla lorem tincidunt. Pulvinar et sapien sit amet blandit odio lectus euismod quam ut justo. Integer ornare."
        />
        <Button
          as="a"
          $buttonStyle="ButtonA"
          href="https://cheesecakelabs.com/br/"
        >
          LEARN MORE
        </Button>
      </Flex>
    );
  }
);
