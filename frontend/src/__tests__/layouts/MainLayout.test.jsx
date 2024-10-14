import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import MainLayout from "../../layouts/MainLayout";

test('renders Navbar and Footer components in MainLayout', () => {
    render(
        <MemoryRouter>
            <MainLayout />
        </MemoryRouter>
    );

    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument;

    const footer = screen.getByText(/Website by:/i);
    expect(footer).toBeInTheDocument;
});