import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", { name: "Increment" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("heading renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("reset button renders a count of 0 after clicked", async () => {
    user.setup();
    render(<Counter />);
    const resetButton = screen.getByRole("button", { name: "Reset" });
    await user.click(resetButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("increment button renders a count of 1 after clicking ", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of two, after button has been clicked twice", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const setButton = screen.getByRole("button", { name: "Set" });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const resetButton = screen.getByRole("button", { name: "Reset" });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus();
    await user.tab();
    expect(resetButton).toHaveFocus();
  });
  test("renders the reset button", () => {
    render(<Counter />);
    const resetButton = screen.getByRole("button", { name: "Reset" });
    expect(resetButton).toBeInTheDocument();
  });
});
