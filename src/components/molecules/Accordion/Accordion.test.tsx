import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Accordion } from "./Accordion";

describe("Molecules: Accordion", () => {
  it("should render correctly with required props", () => {
    render(<Accordion title="Title" description="Description" />);

    const title = screen.queryByText("Title");
    const description = screen.queryByText("Description");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("should render expand on click", () => {
    render(<Accordion title="Title" description="Description" />);

    const title = screen.queryByText("Title");
    fireEvent.click(screen.getByRole("button"));

    expect(title).toHaveAttribute("data-active");
  });
});
