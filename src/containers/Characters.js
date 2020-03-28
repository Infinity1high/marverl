import React from 'react';
import { Spinner, Form, Button } from 'react-bootstrap';
import '../App.css';
import { apiKey, hash } from '../config';
import Character from "../components/Character";

const api = 'http://gateway.marvel.com/v1/public/'

class Characters extends React.Component {

    state = {
        characters: [],
        search: '',
    };

    componentDidMount () {
        this.fetchCharacters()
    }

    fetchCharacters =  async (olol) => {
        const query = olol ? `nameStartsWith=${olol}&` : '';
        const data = await fetch(`${api}characters?${query}ts=1&apikey=${apiKey}&hash=${hash}`);
        const json = await data.json();
        this.setState({characters: json.data.results})
    };

    handleInputChange = (e) => {
        this.setState({search: e.target.value.toUpperCase()})
    };

    handleCharacterSearch = () => {
        this.fetchCharacters(this.state.search)
    };

    render() {
        return(
            <div>
                <Form>
                    <Form.Control onChange={this.handleInputChange} value={this.state.search}/>
                    <Button type="button" variant="secondary" onClick={this.handleCharacterSearch}>Search</Button>
                </Form>
                {this.state.characters.length
                    ? this.state.characters.map(item => <Character character={item} key={item.id}/>)
                    : <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                }
            </div>
        )
    }
}

export default Characters;
