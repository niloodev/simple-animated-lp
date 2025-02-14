import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RevealSection } from "./RevealSection";
import { Button } from "@/components/atoms";

const intersectionObserverMock = () => ({
  observe: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe("Organisms: RevealSection", () => {
  it("should render correctly", () => {
    render(
      <RevealSection
        elements={[
          {
            title: "Lorem ipsum",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus real-time nunc, sed egestas dictum massa id, feugiat euismod.",
          },
          {
            title: "Lorem ipsum dolor sit",
            description:
              "Nulla lorem tincidunt. Pulvinar et sapien sit amet blandit odio lectus euismod quam ut justo. Integer ornare.",
          },
          {
            title: "Lorem ipsum dolor sit",
            description:
              "Nulla lorem tincidunt. Pulvinar et sapien sit amet blandit odio lectus euismod quam ut justo. Integer ornare.",
            isAccordion: true,
          },
        ]}
        footerElement={
          <Button
            as="a"
            $buttonStyle="ButtonA"
            href="https://cheesecakelabs.com/br/"
          >
            LEARN MORE
          </Button>
        }
      />
    );

    const button = screen.queryByRole("link");
    const otherTitles = screen.queryAllByText("Lorem ipsum dolor sit");
    const firstTitle = screen.queryByText("Lorem ipsum");

    expect(button).toHaveTextContent("LEARN MORE");
    expect(otherTitles.length).toEqual(2);
    expect(firstTitle).toBeInTheDocument();
  });
});
