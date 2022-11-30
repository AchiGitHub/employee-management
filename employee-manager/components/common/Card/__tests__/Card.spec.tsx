import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Card from '../Card';

describe("<Card />", () => {
  it("render the card component", () => {
    render(<Card firstName='Jane' lastName='Doe' email='jane@mail.com' phone='0774246349' photo='not_found' />);
    expect(screen.getByText(/jane doe/i)).toBeInTheDocument()
  });
});
