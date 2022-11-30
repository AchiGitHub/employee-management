import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Operations from "../Operations";

describe("<Operations />", () => {
  const handleDelete = jest.fn();

  it("should delete user", () => {
    const { getByRole } = render(
      <Operations id="1" handleDelete={handleDelete} />
    );
    fireEvent.click(getByRole("button", { name: /delete/i }));
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });
});
