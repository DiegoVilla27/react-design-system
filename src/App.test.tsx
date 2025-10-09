import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  // If you need skip a test use: test.skip()
  test("Render Heading", () => {
    render(<App />);

    expect(screen.getByText(/Hola Vite \+ React/i)).toBeInTheDocument();
  });
});
