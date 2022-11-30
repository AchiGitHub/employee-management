import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import Table from "../Table";
import { EmployeesContext } from "../../../../pages/employee/list";

// Wrap the Table component with the provider to pass context values
const renderCustomComponent = (
  component,
  { providerProps, ...renderOptions }
) => {
  return render(
    <EmployeesContext.Provider value={providerProps}>
      {component}
    </EmployeesContext.Provider>
  );
};

describe("<Table />", () => {
  let providerProps;
  const handleDelete = jest.fn();

  it("should render table", () => {
    providerProps = [
      {
        first_name: "Lindsay",
        last_name: "Herman",
        email: "Ewald.Kunde@gmail.com",
        number: "+94771274218",
        gender: "F",
        _id: "2",
        photo: "https://randomuser.me/api/portraits/men/30.jpg",
      },
      {
        first_name: "Henri",
        last_name: "Rodriguez",
        email: "Darrin_Rippin@gmail.com",
        number: "+94771277218",
        gender: "M",
        _id: "1",
        photo: "https://randomuser.me/api/portraits/men/92.jpg",
      },
    ];
    const { getByText } = renderCustomComponent(
      <Table handleDelete={handleDelete} />,
      { providerProps }
    );
    expect(getByText(/henri/i)).toBeTruthy();
    expect(getByText(/Lindsay/i)).toBeTruthy();
  });

  it("should render table", () => {
    providerProps = [];
    renderCustomComponent(<Table handleDelete={handleDelete} />, {
      providerProps,
    });
    expect(screen.getByText(/no records found/i)).toBeTruthy();
  });
});
