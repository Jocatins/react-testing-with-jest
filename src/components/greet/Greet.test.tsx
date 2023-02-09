import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greetings", () => {
	test("renders Greet component", () => {
		render(<Greet />);
		const textElement = screen.getByText(/hello/i);
		expect(textElement).toBeInTheDocument();
	});
	describe("Nested block", () => {
		test("renders Greet component with a name", () => {
			render(<Greet name="titan" />);
			const nameElement = screen.getByText("Hello titan");
			expect(nameElement).toBeInTheDocument();
		});
	});
});
