import { render, screen, act } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import SingleDichoPage from "../pages/SingleDichoPage";
import axios from "axios";

vi.mock('axios');

describe('SingleDichoPage tests', async () => {
    const mockDicho = {
        _id: 1,
        dicho: 'a dicho',
        literalMeaning: 'literally',
        actualMeaning: 'meaning',
        related: 'another dicho that\'s related',
        examples: ['example 1'],
        history: 'history buff'
    };

    beforeEach(async () => {
        axios.get.mockResolvedValueOnce({ data: mockDicho });
        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/dichos/:id']}>
                    <Routes>
                        <Route path='/dichos/:id' element={<SingleDichoPage />} />
                    </Routes>
                </MemoryRouter>
            );
        });
    });

    test('if DichoDetails renders', () => {
        expect(screen.getByText(/literally/i)).toBeInTheDocument();
        expect(screen.getByText(/meaning/i)).toBeInTheDocument();
        expect(screen.getByText(/history buff/i)).toBeInTheDocument();
    });

    test('if DichoExamples renders', () => {
        expect(screen.getByText(/example 1/i)).toBeInTheDocument();
    });

    test('if SuggestionsForm renders', () => {
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
});