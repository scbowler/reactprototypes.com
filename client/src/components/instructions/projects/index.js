import Guess from './guess-game';
import MBoutique from './mboutique';
import MBoutique2 from './mboutique2';

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
    title: 'MBoutique | Part 1 - The home page',
    subtitle: '002',
    text: 'Build the home page of the MBoutique website using React',
    to: 'mboutique-home',
    badge: ''
};

export const mboutiqueRouting = {
    component: MBoutique2,
    title: 'MBoutique | Part 2 - Routing',
    subtitle: '003',
    text: 'Build the remaining 3 pages of the MBoutique website',
    to: 'mboutique-routing',
    badge: ''
}
