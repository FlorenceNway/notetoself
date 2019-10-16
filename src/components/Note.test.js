import React from 'react';
import {mount} from 'enzyme';
import Note from './Note';


const props = {note: {text:'text note'}}
//console.log({...props}); //{note: {text:'text note'}}

describe('Note',()=>{
    let note = mount(<Note {...props}/>);
    it('renders the note text' , () => {
       // console.log(note.debug());
        expect(note.find('p').text()).toEqual(props.note.text);
    });
});




// const triplePrint = (a, b, c) => {
//     console.log(`${a} ${b} ${c}`)
// }
// const message = ['react','is','awesome']
// triplePrint(...message);