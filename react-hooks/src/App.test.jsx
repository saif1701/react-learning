import { screen, render } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("Renders Hello Test", () => {
  render(<App />);
  expect(screen.getByText("Hello React")).toBeInTheDocument();
});
