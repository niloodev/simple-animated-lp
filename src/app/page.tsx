import { Button, Heading, Icon, Logo, Paragraph } from "@/components/atoms";
import { Wrapper } from "@/components/templates";

export default function Home() {
  return (
    <Wrapper as="main">
      <Heading headingType="h2">
        Lorem ipsum dolor sit amet: consectetur adipiscing elit' nullam
        convallis nunc lectus posuere et vestibulum integer pharetra.
      </Heading>
      <Icon backgroundColor="#9A7FDD" icon="DoubleArrowIcon" />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        real-time nunc, sed egestas dictum massa id, feugiat euismod.
      </Paragraph>
      <Button buttonStyle="ButtonC">Learn More</Button>
      <Logo />
    </Wrapper>
  );
}
