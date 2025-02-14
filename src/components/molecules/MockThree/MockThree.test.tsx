import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MockThree } from "./MockThree";

describe("Molecules: MockThree", () => {
  it("should render correctly without animating", () => {
    const { container } = render(<MockThree />);

    expect(container).toMatchSnapshot();
  });

  it("should render correctly with animation", () => {
    const { container } = render(<MockThree animate />);

    expect(container).toMatchSnapshot();
  });
});
