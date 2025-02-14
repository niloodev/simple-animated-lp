import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Atoms: Heading", () => {
  it("should render correctly", () => {
    render(<Heading>Heading Text</Heading>);

    const heading = screen.queryByText("Heading Text");

    expect(heading).toBeInTheDocument();
  });
});
