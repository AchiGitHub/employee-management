import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";

describe('<Navbar />', () => {
    it('should render Navbar', () => {
        const { getByText } = render(<Navbar />)
        expect(getByText(/Employee Manager/i)).toBeInTheDocument();
    });
})