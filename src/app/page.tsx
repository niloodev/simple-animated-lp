import { Button, Heading } from "@/components/atoms";
import { RevealSection, Mockup } from "@/components/organisms";
import { Flex, Sticky, Wrapper } from "@/components/templates";

export default function Home() {
  return (
    <Wrapper as="main">
      <Flex
        as="div"
        flex={{ default: "column" }}
        gap={{ default: "6.4rem", desktop: "8.8rem" }}
        align={{ default: "stretch" }}
      >
        <Heading as="h1">
          Lorem ipsum dolor sit amet: consectetur adipiscing elit' nullam
          convallis nunc lectus posuere et vestibulum integer pharetra.
        </Heading>
        <Flex
          as="section"
          flex={{ default: "column-reverse", desktop: "row" }}
          gap={{ default: "6.3rem" }}
          justify={{ default: "flex-start", desktop: "space-between" }}
          align={{ default: "center", desktop: "stretch" }}
        >
          <RevealSection />
          <Sticky>
            <Mockup />
          </Sticky>
        </Flex>
      </Flex>
    </Wrapper>
  );
}
