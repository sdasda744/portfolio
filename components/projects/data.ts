import { StaticImageData } from 'next/image'

import furniture from './images/furniture.jpg'
import guess from './images/guess.jpg'
import todo from './images/todo.jpg'

type ProjectType = {
    link: string
    title: string
    image: StaticImageData
    description?: string
}

export const data: ProjectType[] = [
    {
        image: furniture,
        title: 'Furniture Website',
        link: 'https://harmonious-stardust-3f7dc5.netlify.app/',
        description:
            'A simple website for a furniture store. It shows different types of furniture with pictures, prices and descriptions. Users can browse items and learn more about each product.'
    },
    {
        image: todo,
        title: 'To-Do List App',
        link: 'https://astonishing-beignet-529fbd.netlify.app/',
        description:
            'A small web app where users can add, edit and delete tasks. It helps users keep track of things they need to do.'
    },
    {
        image: guess,
        title: 'Guess the Number Game',
        link: 'https://numbermastergame.netlify.app/',
        description:
            'A fun game where the computer picks a random number and the user tries to guess it. The app gives hints if the guess is too high or too low. The goal is to guess the number in the fewest tries.'
    }
]
