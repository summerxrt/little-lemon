import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("Adds one", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Navigate to /counter
  window.history.pushState({}, 'Counter Page', '/counter');

  // Save the heading in a variable
  const heading = screen.getByTestId("currentNumber");
  
  // Save the button in a variable
  const btn = screen.getByTestId("addOne");

  // Click the button
  fireEvent.click(btn);

  // Test assumption
  expect(heading).toHaveTextContent("2");
});
