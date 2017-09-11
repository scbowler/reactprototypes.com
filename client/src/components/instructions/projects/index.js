import Guess from './guess-game';
import MBoutique from './mboutique';

// const name must be camelCased and the 'to' property must match using hyphens

export const guessingGame = {
    component: Guess,
    title: 'Guessing Game',
    subtitle: '001',
    text: 'Create a simple number guessing game using React',
    to: 'guessing-game'
};

export const mboutiqueHome = {
    component: MBoutique,
    title: 'MBoutique | Part 1',
    subtitle: '002',
    text: 'Build the home page of the MBoutique website using React',
    to: 'mboutique-home',
    badge: ''
};
