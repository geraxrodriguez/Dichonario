import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { act } from 'react';
import userEvent from '@testing-library/user-event';

import HomePage from '../pages/HomePage';
import DichosPage from '../pages/DichosPage';
import SingleDichoPage from '../pages/SingleDichoPage';


describe('HomePage tests', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/dichos' element={<DichosPage />} />
                    <Route path="/dichos/:id" element={< SingleDichoPage />} />
                </Routes>
            </MemoryRouter>
        );
    });

    test('main elements render in HomePage', () => {
        const h1 = screen.getByRole('heading', { level: 1 });
        const h2 = screen.getByRole('heading', { level: 2 });
        const link = screen.getByText('Browse Dichos');
        const btn = screen.getByText('Surprise Me');
        expect(h1).toBeInTheDocument();
        expect(h2).toBeInTheDocument();
        expect(link).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
    });

    test('navigates to random dicho page after clicking surprise me button', async () => {
        const button = screen.getByRole('button');
        await act(async () => {
            userEvent.click(button);
        });
        expect(await screen.findByText('Literal Translation:')).toBeInTheDocument();
        expect(await screen.findByText('Example(s)')).toBeInTheDocument();
        expect(await screen.findByRole('button')).toBeInTheDocument();
    });
    
    test('navigates to DichosPage after clicking link', async () => {
        const link = screen.getByRole('link', { name: /dichos/i });
        await act(async () => {
            userEvent.click(link);
        });
        expect(await screen.findByText('Los Dichos')).toBeInTheDocument();
    });

});
