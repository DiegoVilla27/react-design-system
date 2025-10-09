import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("Render Heading", () => {
    render(<App />);

    expect(screen.getByText(/Hola Vite \+ React/i)).toBeInTheDocument();
  });
});
