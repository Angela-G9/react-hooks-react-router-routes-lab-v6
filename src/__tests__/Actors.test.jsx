import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from '../routes';

describe('Actors Component', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/actors']
  });

  test('renders actors page heading', () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByText(/Actors Page/)).toBeInTheDocument();
  });
});