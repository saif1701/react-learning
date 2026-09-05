import { screen, render } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

test("check email entered correctly", async () => {
  const user = userEvent.setup();
  render(<Login />);
  const input = screen.getByLabelText("Email");
  expect(input).toBeInTheDocument();
  await user.type(input, "saif@gmail.com");
  expect(input).toHaveValue("saif@gmail.com");
  expect(screen.getByText("Email: saif@gmail.com")).toBeInTheDocument();
});
