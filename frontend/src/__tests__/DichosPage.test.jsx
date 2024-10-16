import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, vi } from 'vitest';
import axios from 'axios';
import DichosPage from '../pages/DichosPage';

vi.mock('axios');

describe('DichosPage', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('should render page without crashing', () => {
        render(<DichosPage />)
        expect(screen.getByText('Los Dichos')).toBeInTheDocument();
    });

    test('should display fetched dichos', async () => {
        const mockDichos = [
            { _id: '1', dicho: 'Dicho 1', actualMeaning: 'some meaning' },
            { _id: '2', dicho: 'Dicho 2', actualMeaning: 'some other meaing' }
        ];
        axios.get.mockResolvedValueOnce({ data: { dichos: mockDichos } });

        act(() => {
            render(
                <MemoryRouter >
                    <DichosPage />
                </MemoryRouter>
            )
        });

        
        const dicho1 = await screen.findByText('Dicho 1');
        const dicho2 = await screen.findByText('Dicho 2');
        
        // screen.debug();
        expect(dicho1).toBeInTheDocument();
        expect(dicho2).toBeInTheDocument();
    });
});
