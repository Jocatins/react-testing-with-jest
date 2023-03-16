import { render, screen, waitFor } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greetings", () => {
  it("renders Greet component", () => {
    //  Arrange
    // The render method renders a React element into the DOM.
    render(<Greet />);
    // Act --- stimulates action
    const textElement = screen.getByText(/hello/i);
    // Assert
    expect(textElement).toBeInTheDocument();
  });
  describe("Nested block", () => {
    it("renders Greet component with a name", () => {
      render(<Greet name="titan" />);
      const nameElement = screen.getByText("Hello titan");
      expect(nameElement).toBeInTheDocument();

      // -------- textMatch -- Regex // substring match
      const divElement = screen.getByText(/hello/i);
      expect(divElement).toBeInTheDocument();

      // -------- textMatch -- Regex // ignore case
      const h3Element = screen.getByText(/^greetings titan$/i);
      expect(h3Element).toBeInTheDocument();

      // -------- textMatch -- custom Function
      const h2Element = screen.getByText((content) =>
        content.startsWith("More")
      );
      expect(h2Element).toBeInTheDocument();
    });
  });
});
