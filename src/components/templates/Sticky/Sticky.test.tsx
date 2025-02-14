import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Sticky } from "../";

describe("Templates: Sticky", () => {
  it("should render correctly", () => {
    render(<Sticky />);

    const sticky = screen.queryAllByRole("generic");

    expect(sticky.length).toBeGreaterThan(1);
  });
});
