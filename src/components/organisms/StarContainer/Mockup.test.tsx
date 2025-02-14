import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { StarContainer } from "./StarContainer";

describe("Organisms: StarContainer", () => {
  it("should render correctly", () => {
    const { container } = render(<StarContainer />);

    expect(container).toMatchSnapshot();
  });
});
