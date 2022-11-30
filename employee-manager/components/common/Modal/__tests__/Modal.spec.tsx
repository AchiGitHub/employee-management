import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "../Modal";

describe("<Modal />", () => {
  const handleClose = jest.fn();
  const handleDelete = jest.fn();
  it("should render the modal", () => {
    const { getByText } = render(
      <Modal
        title="Jane Doe"
        loading={false}
        open={true}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    );
    expect(getByText(/Are you sure you want to delete jane doe/i)).toBeTruthy();
  });
  it("should close the modal", () => {
    const { getByText } = render(
      <Modal
        title="Jane Doe"
        loading={false}
        open={true}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    );
    expect(getByText(/Are you sure you want to delete/i)).toBeTruthy();

    fireEvent.click(getByText(/cancel/i));
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
  it("should delete a user", () => {
    const { getByText } = render(
      <Modal
        title="Jane Doe"
        loading={false}
        open={true}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    );
    expect(getByText(/Are you sure you want to delete/i)).toBeTruthy();

    fireEvent.click(getByText('Delete User'));
    
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it("should not display modal", () => {
    render(
      <Modal
        title="Jane Doe"
        loading={false}
        open={false}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    );
    expect(screen.queryByText(/Are you sure you want to delete/i)).not.toBeInTheDocument();
  });

  it("should diplay loader", () => {
    render(
      <Modal
        title="Jane Doe"
        loading={true}
        open={true}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    );
    expect(screen.queryByText(/cancel/i)).not.toBeInTheDocument();
    expect(screen.queryByText('Delete User')).not.toBeInTheDocument();
  });
});
