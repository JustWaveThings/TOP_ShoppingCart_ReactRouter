import React from 'react';
import {
    render,
    screen,
} from '@testing-library/react';
import Home from '../components/Home';

describe('App Component', () => {
    it('renders the correct heading', () => {
        render(
            <Home />
        );
        expect(
            screen.getByRole(
                'heading'
            )
                .textContent
        ).toMatch(
            /You've got your reasons.../i
        );
    });
});
