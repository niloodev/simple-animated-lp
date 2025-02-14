import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Wrapper } from "..";

describe("Templates: Wrapper", () => {
  it("should render correctly using semantic html", () => {
    render(<Wrapper as="main" />);

    const wrapper = screen.queryByRole("main");

    expect(wrapper).toBeInTheDocument();
  });
});
