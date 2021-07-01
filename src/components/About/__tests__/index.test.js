import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

const { asFragment } = render(<About/>);

describe('About component', () => {
    //First test
    it('renders', () => {
        asFragment();
    });
    //Second test
    it('matches snapshot DOM node structure', () => {
        // render About
        expect(asFragment()).toMatchSnapshot();
    })
});

