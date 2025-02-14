import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Article } from "./Article";

describe("Molecules: Article", () => {
  it("should render correctly with required props", () => {
    render(<Article title="Title" description="Description" />);

    const title = screen.queryByText("Title");
    const description = screen.queryByText("Description");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
