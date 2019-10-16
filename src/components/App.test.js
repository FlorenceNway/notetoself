import React from 'react';
import {mount} from 'enzyme';
import App from './App';

describe('App', ()=>{
    let app = mount(<App/>);

    it('renders the App title',()=> {
        //console.log(app.debug());
        expect(app.find('h2').text()).toEqual('Note to Self')
    })

    it('renders the clear button',()=>{
        expect(app.find('.btn').at(1).text()).toEqual('Clear notes')
    })

    describe('When rendering the form', ()=>{
        it('creates a Form component',()=>{
            expect(app.find('Form').exists()).toBe(true);
        })

        it('renders a FormControl component',()=>{
            expect(app.find('FormControl').exists()).toBe(true);
        })

        it('renders the submit button',()=>{
            expect(app.find('.btn').at(0).text()).toEqual('Submit')
        })
    });

    describe('When createing a note',()=>{
        let testNote = 'test note';

        beforeEach(()=>{
            app.find('FormControl').simulate('change',{
                target: {value: testNote} //target.value
            })
        })

        it('updates the text in state',()=>{
            console.log(app.state());
            expect(app.state().text).toEqual(testNote); 
        })

        describe('and submitting the new note',()=>{
            beforeEach(()=>{ //before each of it blocks happen
                app.find('.btn').at(0).simulate('click');
            });
    
            it('adds the new to state',()=> {
                console.log(app.state())
                expect(app.state().notes[0].text).toEqual(testNote)
            });
        })

        describe('and remounting the component',()=>{
            let app2;
            beforeEach(()=>{
                app2 = mount(<App/>);
            });

            it('reads the stored note cookies',()=> {
                console.log(app2.state());
            })
        })


        describe('and clicking the clear button',()=> {
            beforeEach(()=>{
                app.find('.btn').at(1).simulate('click');
            })

            it('clear the note states',()=>{
                expect(app.state().notes).toEqual([]);
            })
        })
    })
    
    

});

