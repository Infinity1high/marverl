import  React from 'react';
import { ListGroup, Image } from 'react-bootstrap';

 const myStyle = {width: '20%', borderColor: 'red'}

function Character(props) {

    const { character: { name, description, thumbnail } } = props;

    return(
        <ListGroup.Item>
            {props.children}
            <Image style={myStyle} roundedCircle src={`${thumbnail.path}.${thumbnail.extension}`}/>
            <div> {name}</div>
            <div> {!description ? 'no description' : description} </div>
            {/*<div> {description ?  description :'no description' } </div>*/}
        </ListGroup.Item>
    )
}

export default Character;

//<div style='width: 50%;'></div>