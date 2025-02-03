import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from '../routes';

describe('Directors Component', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/directors']
  });

  test('renders directors page heading', () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByText(/Directors Page/)).toBeInTheDocument();
  });
});