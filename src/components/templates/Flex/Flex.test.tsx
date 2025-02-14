import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Flex } from "./Flex";

describe("Templates: Flex", () => {
  it("should render semantic html correctly", () => {
    render(<Flex as="main" />);

    const flex = screen.queryByRole("main");

    expect(flex).toBeInTheDocument();
  });
});
