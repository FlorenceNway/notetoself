import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import Note from './Note';
import {bake_cookie, read_cookie, delete_cookie} from 'sfcookies';
//bake_cookies - allow to store cookies in browser, take string as first argument
//read_cookies - load cookies, allow to access read the previous cookie
//delete_cookies - delete the cookies from browser
const cookie_key = 'NOTES';

class App extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            notes: []
        }
    }
    submit() {
        const {notes,text} = this.state;
        //const notes = this.state.notes;
        const newNote = {text}; //{text: text} if prop = value
        notes.push(newNote);

        this.setState({notes: notes});

        bake_cookie(cookie_key, this.state.notes);
    }
    componentDidMount() {
        const notes = read_cookie(cookie_key);
        this.setState({notes});
    }
    clear(){
        delete_cookie(cookie_key);
        this.setState({notes: []});
    }

    render() {
        return (
            <div>
                <h2>Note to Self</h2>
                <Form inline>
                    <FormControl onChange={(event)=>{this.setState({text:event.target.value})}}/>
                    {' '}
                    <Button onClick={()=>this.submit()}>Submit</Button>
                </Form>
                {
                    this.state.notes.map((note,index)=>{
                        return(
                            <Note key={index} note={note}/>
                        )
                    })
                }
                <hr/>
                <Button onClick={()=>this.clear()}>Clear notes</Button>
            </div>
        )
    }
}

export const color = 'blue';
export const number = '22';

export default App;

//class we export with default
//variables we use export only