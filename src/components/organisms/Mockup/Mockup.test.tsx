import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Mockup } from "./Mockup";

const intersectionObserverMock = () => ({
  observe: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe("Organisms: Mockup", () => {
  it("should render correctly", () => {
    const { container } = render(<Mockup />);

    expect(container).toMatchSnapshot();
  });

  it("should render animated parallax without errors", () => {
    const { container } = render(<Mockup />);

    fireEvent.mouseMove(document);
    fireEvent.mouseLeave(document);

    expect(container).toMatchSnapshot();
  });
});
