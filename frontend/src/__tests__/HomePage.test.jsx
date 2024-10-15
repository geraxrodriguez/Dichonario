import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';

describe('HomePage tests', () => {
    

    test('hero elements render in HomePage', () => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        );
    
        const h1 = screen.getByRole('heading', { level: 1 });
        const h2 = screen.getByRole('heading', { level: 2 });
        const link = screen.getByText('Browse Dichos');
        const btn = screen.getByText('Surprise Me');
    
        expect(h1).toBeInTheDocument();
        expect(h2).toBeInTheDocument();
        expect(link).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
    });

    // test('navigates to /dichos after clicking link', async () => {
    //     render(
    //         <MemoryRouter>
    //             <HomePage />
    //         </MemoryRouter>
    //     );
    //     const user = userEvent.setup();
    //     const link = screen.getByText('Browse Dichos');
    //     await user.click(link);
    //     expect(screen.getByText('Los Dichos')).toBeInTheDocument 
    // });

});