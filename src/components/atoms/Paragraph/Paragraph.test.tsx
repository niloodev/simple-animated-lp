import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Paragraph } from "./Paragraph";

describe("Atoms: Paragraph", () => {
  it("should render correctly", () => {
    render(<Paragraph>Paragraph Text</Paragraph>);

    const paragraph = screen.queryByRole("paragraph");

    expect(paragraph).toHaveTextContent("Paragraph Text");
  });
});
