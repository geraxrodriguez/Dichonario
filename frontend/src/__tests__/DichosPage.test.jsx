import { render, screen, act } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import DichosPage from '../pages/DichosPage';

vi.mock('axios');

describe('DichosPage', () => {
    const mockDichos = [
        { _id: '1', dicho: 'Dicho 1', actualMeaning: 'some meaning' },
        { _id: '2', dicho: 'Dicho 2', actualMeaning: 'some other meaing' }
    ];

    beforeEach(async () => {
        axios.get.mockResolvedValueOnce({ data: { dichos: mockDichos } });
        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/dichos']} >
                    <Routes>
                        <Route path='/dichos' element={ <DichosPage />} />
                    </Routes>
                </MemoryRouter>
            );
        });
    });

    test('should render page without crashing', () => {
        expect(screen.getByText('Los Dichos')).toBeInTheDocument();
    });

    test('should display fetched dichos', async () => {
        const dicho1 = await screen.findByText('Dicho 1');
        const dicho2 = await screen.findByText('Dicho 2');
        expect(dicho1).toBeInTheDocument();
        expect(dicho2).toBeInTheDocument();
    });
});
