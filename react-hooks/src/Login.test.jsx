import { screen, render } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

test("shows error when fields are empty", async () => {
  const user = userEvent.setup();
  render(<Login />);
  const loginBtn = screen.getByRole("button", { name: "Login" });
  expect(loginBtn).toBeInTheDocument();
  await user.click(loginBtn);
  expect(
    screen.getByText("Email and password are required"),
  ).toBeInTheDocument();
});

test("logs user in successfully", async () => {
  const user = userEvent.setup();

  render(<Login />);

  const email = screen.getByLabelText("Email");
  const password = screen.getByLabelText("Password");

  await user.type(email, "saif@gmail.com");
  await user.type(password, "123456");

  const loginBtn = screen.getByRole("button", {
    name: "Login",
  });

  await user.click(loginBtn);

  expect(screen.getByText("Login successful")).toBeInTheDocument();
});
