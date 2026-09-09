import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import SaveButton from "./SaveButton";

test("Save button clicked", async () => {
  const user = userEvent.setup();
  const onSave = vi.fn();

  render(<SaveButton onSave={onSave} />);

  await user.click(
    screen.getByRole("button", {
      name: "Save",
    }),
  );

  expect(onSave).toHaveBeenCalledTimes(1);
});
