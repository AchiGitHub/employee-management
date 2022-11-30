import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ErrorBoundary from "../ErrorBoundary";

describe("<ErrorBoundary />", () => {
  it("should render error boundary", () => {
    const ThrowError = () => {
      throw new Error("Failed to render");
    };
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(screen.getByText(/Something went wrong./i)).toBeVisible();
  });
  it("should render the component", () => {
    render(
      <ErrorBoundary>
        <h1>Test</h1>
      </ErrorBoundary>
    );
    expect(screen.getByText(/test/i)).toBeVisible();
  });
});
