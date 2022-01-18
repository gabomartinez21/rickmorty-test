import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react';
import Card from './index';

test('render content', ()=>{
    const character = {
        name: 'John',
        status:'Alive',
        gender:'Male',
        image:'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        species:'Human'
    }

    render(<Card character={character} />)

    screen.getByText('John')
    screen.getByText('Male')
    screen.getByText('Alive')
    const image = screen.getByAltText(/John/)
})