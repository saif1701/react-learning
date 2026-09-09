import { screen, render } from "@testing-library/react";
import { test, expect } from "vitest";
import ApiCall from "./ApiCall";

test("API is working", async () => {
  render(<ApiCall />);

  expect(screen.getByText("Loading users...")).toBeInTheDocument();

  const apiData = await screen.findByText("Failed to fetch users");

  expect(apiData).toBeInTheDocument();
});
