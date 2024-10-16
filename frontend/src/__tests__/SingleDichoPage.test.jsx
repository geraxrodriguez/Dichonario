import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { expect, vi } from "vitest";
import SingleDichoPage from "../pages/SingleDichoPage";
import axios from "axios";
import { act } from "react";
import SuccessPage from "../pages/SuccessPage";
import { submitSuggestions } from "../pages/SingleDichoPage";

vi.mock('axios');

describe('SingleDichoPage rendering', () => {
    test('if get request returns a dicho', async () => {
        const mockDicho = {
            _id: 1,
            dicho: 'a dicho',
            literalMeaning: 'literally',
            actualMeaning: 'actually',
            related: 'another dicho that\'s related',
            examples: ['example 1'],
            history: 'history buff'
        };

        axios.get.mockResolvedValueOnce({ data: mockDicho });

        // act() ensures all updates related to data fetching have been applied to DOM, before asserting anything
        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/dichos/:id']}>
                    <Routes>
                        <Route path='/dichos/:id' element={<SingleDichoPage />} />
                    </Routes>
                </MemoryRouter>
            );
        });

        expect(screen.getByText('a dicho')).toBeInTheDocument();
        expect(screen.getByText('history buff')).toBeInTheDocument();
        expect(screen.getByText('actually')).toBeInTheDocument();
    });
});