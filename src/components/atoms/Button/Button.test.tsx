import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Atoms: Button", () => {
  it("should render correctly as button", () => {
    render(
      <Button $buttonStyle="ButtonA" as="button">
        Test
      </Button>
    );

    const button = screen.queryByRole("button");

    expect(button).toHaveTextContent("Test");
  });

  it("should render correctly as link", () => {
    render(
      <Button $buttonStyle="ButtonA" as="a" href="/">
        Test
      </Button>
    );

    const link = screen.queryByRole("link");

    expect(link).toHaveTextContent("Test");
  });
});
