import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('render HomePage component at root route', async () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );

    const h1 = screen.getByTestId('main-heading');
    expect(h1).toBeInTheDocument();
});