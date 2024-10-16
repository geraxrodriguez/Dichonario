import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DichosPage from '../pages/DichosPage';

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

    test('navigates to DichosPage after clicking link', async () => {
        render(
            <MemoryRouter initialEntries={[ '/' ]}>
                <Routes>
                    <Route path='/' element={ <HomePage /> } />
                    <Route path='/dichos' element={ <DichosPage /> } />
                </Routes>
            </MemoryRouter>
        );

        const link = screen.getByRole('link', { name: /dichos/i });
        userEvent.click(link);
        const dichosPageHeading = await screen.findByText('Los Dichos');
        expect(dichosPageHeading).toBeInTheDocument();
    });
});