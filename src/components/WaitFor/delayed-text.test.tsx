import { render, screen, waitFor } from "@testing-library/react";

import DelayedText from "./delayedText";

describe("Delayed Component", () => {
  // test("displays rendered text after one second", async () => {
  //   render(<DelayedText />);
  //   expect(screen.queryByText("Hello Titans")).toBeNull();

  //   await waitFor(() => {
  //     return new Promise((resolve) => setTimeout(resolve, 1000));
  //   });
  //   expect(screen.getByText("Hello Titans")).toBeInTheDocument();
  // });

  test("displays in one second", async () => {
    render(<DelayedText />);
    const delayedElement = await screen.findByRole(
      "button",
      { name: "Hello Titans" },
      {
        timeout: 2000,
      }
    );
    expect(delayedElement).toBeInTheDocument();
  });
});
