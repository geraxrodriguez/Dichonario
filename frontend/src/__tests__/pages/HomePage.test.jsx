import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../../pages/HomePage';

test('renders elements in HomePage', () => {
    render(
        <MemoryRouter>
            <HomePage />
        </MemoryRouter>
    );

    const h1 = screen.getByText('Dichonario');
    const h2 = screen.getByRole('heading', { level: 2})

    expect(h1).toBeInTheDocument;
    expect(h2).toBeInTheDocument;
})