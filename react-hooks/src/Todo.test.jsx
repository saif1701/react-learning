import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Todo from "./Todos";
import userEvent from "@testing-library/user-event";

test("Delete button is pressed", async () => {
  const user = userEvent.setup();
  render(<Todo />);
  expect(screen.getByText("Learn React Testing Library")).toBeInTheDocument();
  const button = screen.getByRole("button", { name: "Delete" });
  await user.click(button);
  expect(
    screen.queryByText("Learn React Testing Library"),
  ).not.toBeInTheDocument();
});
