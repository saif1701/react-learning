import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Greeting from "./Greetings";

test("shows welcome message when logged in", () => {
  render(<Greeting name="Saif" isLoggedIn={true} />);
  expect(screen.getByText("Hello, Saif")).toBeInTheDocument();
  expect(screen.getByText("Welcome back!")).toBeInTheDocument();
  expect(screen.queryByText("Please login")).not.toBeInTheDocument();
});

test("shows login message when not logged in", () => {
  render(<Greeting name="Saif" isLoggedIn={false} />);
  expect(screen.getByText("Hello, Saif")).toBeInTheDocument();
  expect(screen.getByText("Please login")).toBeInTheDocument();
  expect(screen.queryByText("Welcome back!")).not.toBeInTheDocument();
});
