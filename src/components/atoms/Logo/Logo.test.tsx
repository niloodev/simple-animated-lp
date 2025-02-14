import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

describe("Atoms: Logo", () => {
  it("should render correctly", () => {
    render(<Logo />);

    const logo = screen.queryAllByRole("generic");

    expect(logo.length).toBeGreaterThan(1);
  });
});
