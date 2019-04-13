import React from 'react';
import {render} from 'react-dom';
import KanbanBaord from './KanbanBoard';

let cardsList = [
    {
        id: 1,
        title: "Skim the Book",
        description: "I should read the whole book, but I just skimmed it.",
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the git repositories raw code :)",
        status: "todo",
        tasks: [
            {
                id:1,
                name: "ContactList Example",
                done: true 
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    }
];

render(<KanbanBaord cards={cardsList} />, document.getElementById('root'));