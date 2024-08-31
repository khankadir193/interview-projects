import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import GameComp from './GameComp';

describe('GameComp Component', () => {
    test('renders GameComp component', () => {
        render(<GameComp />);
        expect(screen.getByText(/Welcome to Rock,Paper,Scissor Game./i)).toBeInTheDocument();
    });

    test('clicking Rock button updates user choice', () => {
        render(<GameComp />);
        const rockButton = screen.getByText(/Rock/i);
        console.log('rockButton...??',rockButton);
        console.log('i... for .... ',i);
        fireEvent.click(rockButton);
        expect(screen.getByText(/Your Choice: Rock/i)).toBeInTheDocument();
    });

    test('score updates correctly when user wins', async () => {
        render(<GameComp />);
        const rockButton = screen.getByText(/Rock/i);

        // Mock computer choice to always be Scissors
        jest.spyOn(Math, 'random').mockReturnValue(2 / 3); // Scissors

        fireEvent.click(rockButton);
        expect(screen.getByText(/Your Score: 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Computer Score: 0/i)).toBeInTheDocument();

        // Restore the original random function
        Math.random.mockRestore();
    });

    test('game resets after 5 rounds', async () => {
        render(<GameComp />);
        const rockButton = screen.getByText(/Rock/i);

        // Mock computer choice to always be Scissors
        jest.spyOn(Math, 'random').mockReturnValue(2 / 3); // Scissors

        for (let i = 0; i < 5; i++) {
            fireEvent.click(rockButton);
        }

        expect(screen.getByText(/Your Score: 0/i)).toBeInTheDocument();
        expect(screen.getByText(/Computer Score: 0/i)).toBeInTheDocument();
        expect(screen.getByText(/The winner is :/i)).toBeInTheDocument();

        // Restore the original random function
        Math.random.mockRestore();
    });
});
