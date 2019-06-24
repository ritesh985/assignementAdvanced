import React from 'react';
import PeopleItem from './PeopleItem';
import { Row } from 'antd';


class PeopleList extends React.Component{
    
    
    render(){
        
    const renderedList = this.props.people.map( person =>{
        
        return(
            <PeopleItem
                key={person.id} 
                person = {person}
                removeItem={this.props.removeItem}
                changeName = {this.props.changeName}
            />
            
        );
    });
    
    return(
        <Row>
            {renderedList}
        </Row>
    );

    }
}

export default PeopleList;