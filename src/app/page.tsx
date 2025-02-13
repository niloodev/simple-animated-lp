import { Button, Heading, Logo, Paragraph } from "@/components/atoms";
import { Accordion, Article } from "@/components/molecules";
import { Mockup } from "@/components/organisms/Mockup/Mockup";
import { Flex, Wrapper } from "@/components/templates";

export default function Home() {
  return (
    <Wrapper as="main">
      <Heading as="h2">
        Lorem ipsum dolor sit amet: consectetur adipiscing elit' nullam
        convallis nunc lectus posuere et vestibulum integer pharetra.
      </Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        real-time nunc, sed egestas dictum massa id, feugiat euismod.
      </Paragraph>
      <Paragraph fontSize={{ default: "1.5rem", desktop: "2rem" }}>
        teste
      </Paragraph>
      <Flex as="article" flex={{ default: "row wrap" }}>
        <Button buttonStyle="ButtonA">Learn More</Button>
        <Logo />
      </Flex>

      <Accordion
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus real-time nunc, sed egestas dictum massa id, feugiat euismod."
      />
      <Article
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus real-time nunc, sed egestas dictum massa id, feugiat euismod."
      />
      <Mockup />
    </Wrapper>
  );
}
