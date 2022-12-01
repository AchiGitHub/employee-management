import React from "react";
import { getByRole, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Form from "../Form";
import { initialValues } from "../../../../common/utils/constants";

describe("<Form/>", () => {
  const handleSubmit = jest.fn();
  const redirect = jest.fn();

  beforeEach(() => {
    render(
      <Form
        initialValues={initialValues}
        submitButtonText="SUBMIT"
        disabled={false}
        handleSubmit={handleSubmit}
        redirect={redirect}
      />
    );
  });

  it("should render the form and submit", async () => {
    const user = userEvent.setup();
    await user.type(
      screen.getByRole("textbox", {
        name: /first name/i,
      }),
      "Shanelle"
    );
    await user.type(
      screen.getByRole("textbox", {
        name: /last name/i,
      }),
      "Watson"
    );
    await user.type(
      screen.getByRole("textbox", {
        name: /email/i,
      }),
      "john@mail.com"
    );
    await user.type(
      screen.getByRole("textbox", {
        name: /phone/i,
      }),
      "0774246349"
    );
    // click the gender dropdown
    const dropdown = getByRole(screen.getByTestId("gender-dropdown"), "button");
    await user.click(dropdown);
    await waitFor(() => user.click(screen.getByText("Male")));

    // Click submit button
    await clickSubmitButton();

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
      expect(handleSubmit).toHaveBeenCalledWith({
        first_name: "Shanelle",
        last_name: "Watson",
        email: "john@mail.com",
        number: "0774246349",
        gender: "M",
        photo: "",
      });
    });
  });

  it("should display validation message on required fields", async () => {
    clickSubmitButton();
    await waitFor(() => {
      expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/gender is required/i)).toBeInTheDocument();
    });
  });

  it("should display error message on invalid number", async () => {
    const user = userEvent.setup();
    await user.type(
      screen.getByRole("textbox", {
        name: /phone/i,
      }),
      "74246349"
    );

    // Click submit button
    await clickSubmitButton();
    await waitFor(() => {
      expect(screen.getByText(/invalid phone number/i)).toBeInTheDocument();
    });
  });
});

const clickSubmitButton = async () => {
  await userEvent.click(screen.getByRole("button", { name: /SUBMIT/i }));
};
