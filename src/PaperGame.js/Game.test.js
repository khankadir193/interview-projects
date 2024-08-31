import { jest } from '@jest/globals';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { GameComp } from './GameComp';

jest.mock('alert');

describe('handleClick function', () => {
  let container;
  let userScore;
  let computerScore;
  let userChoice;
  let computerChoice;
  let winner;

  beforeEach(() => {
    container = render(<GameComp />).container;
    userScore = 0;
    computerScore = 0;
    userChoice = '';
    computerChoice = '';
    winner = '';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle tie game', async () => {
    const event = { target: { textContent: 'Rock' } };
    await GameComp.handleClick(event);
    expect(userScore).toBe(0);
    expect(computerScore).toBe(0);
  });

  it('should handle user wins with Rock', async () => {
    const event = { target: { textContent: 'Rock' } };
    computerChoice = 'Scissors';
    await GameComp.handleClick(event);
    expect(userScore).toBe(1);
    expect(computerScore).toBe(0);
  });

  it('should handle user wins with Scissors', async () => {
    const event = { target: { textContent: 'Scissors' } };
    computerChoice = 'Paper';
    await GameComp.handleClick(event);
    expect(userScore).toBe(1);
    expect(computerScore).toBe(0);
  });

  it('should handle user wins with Paper', async () => {
    const event = { target: { textContent: 'Paper' } };
    computerChoice = 'Rock';
    await GameComp.handleClick(event);
    expect(userScore).toBe(1);
    expect(computerScore).toBe(0);
  });

  it('should handle computer wins', async () => {
    const event = { target: { textContent: 'Rock' } };
    computerChoice = 'Paper';
    await GameComp.handleClick(event);
    expect(userScore).toBe(0);
    expect(computerScore).toBe(1);
  });

  it('should reset game after 5 rounds', async () => {
    userScore = 3;
    computerScore = 2;
    const event = { target: { textContent: 'Rock' } };
    await GameComp.handleClick(event);
    expect(alert).toHaveBeenCalledTimes(1);
    expect(alert).toHaveBeenCalledWith('You Won');
    expect(userScore).toBe(0);
    expect(computerScore).toBe(0);
  });
});