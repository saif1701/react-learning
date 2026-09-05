import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import User from "./User";

test("Checking user component", async () => {
  render(<User />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
  const user = await screen.findByText("User: Saif");
  expect(user).toBeInTheDocument();
});
