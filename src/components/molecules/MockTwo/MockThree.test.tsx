import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MockTwo } from "./MockTwo";

describe("Molecules: MockTwo", () => {
  it("should render correctly without animating", () => {
    const { container } = render(<MockTwo />);

    expect(container).toMatchSnapshot();
  });

  it("should render correctly with animation", () => {
    const { container } = render(<MockTwo animate />);

    expect(container).toMatchSnapshot();
  });
});
