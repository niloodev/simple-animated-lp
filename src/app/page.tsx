import { Button, Heading, Icon, Logo, Paragraph } from "@/components/atoms";
import { Accordion } from "@/components/molecules";
import { Flex, Wrapper } from "@/components/templates";

export default function Home() {
  return (
    <Wrapper as="main">
      <Heading as="h2">
        Lorem ipsum dolor sit amet: consectetur adipiscing elit' nullam
        convallis nunc lectus posuere et vestibulum integer pharetra.
      </Heading>
      <Icon backgroundColor="#9A7FDD" icon="DoubleArrowIcon" />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        real-time nunc, sed egestas dictum massa id, feugiat euismod.
      </Paragraph>
      <Paragraph fontSize={{ default: "1.5rem", desktop: "2rem" }}>
        teste
      </Paragraph>
      <Flex as="article" flex={{ default: "row wrap" }}>
        <Button buttonStyle="ButtonC">Learn More</Button>
        <Logo />
      </Flex>

      <Accordion
        toggle
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus real-time nunc, sed egestas dictum massa id, feugiat euismod."
      />
    </Wrapper>
  );
}
