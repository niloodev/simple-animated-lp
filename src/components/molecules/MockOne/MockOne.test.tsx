import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockOne } from "./MockOne";

describe("Molecules: MockOne", () => {
  it("should render correctly without Logo", () => {
    render(<MockOne />);

    const logo = screen.queryByTestId("logo");

    expect(logo).not.toBeInTheDocument();
  });

  it("should render correctly with Logo", () => {
    render(<MockOne renderLogo />);

    const logo = screen.queryByTestId("logo");

    expect(logo).toBeInTheDocument();
  });
});
