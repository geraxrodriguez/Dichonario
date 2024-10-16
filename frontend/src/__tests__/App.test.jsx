import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('render HomePage component at root route', async () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    const heading = screen.getByTestId('main-heading');
    expect(heading).toBeInTheDocument();
});