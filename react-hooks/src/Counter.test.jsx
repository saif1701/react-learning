import { screen, render } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("button clicked", async () => {
  const user = userEvent.setup();
  render(<Counter />);
  expect(screen.getByText("Count: 0")).toBeInTheDocument();
  //   expect(screen.getByRole("button", { name: "Increment" })).toBeInTheDocument();
  const button = screen.getByRole("button", { name: "Increment" });
  expect(button).toBeInTheDocument();
  await user.click(button);
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
