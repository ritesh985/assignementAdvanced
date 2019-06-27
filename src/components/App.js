import React, { Component } from 'react';
import axios from 'axios';
import PeopleList from './PeopleList';
import PeopleItem from './PeopleItem';
import Loader from './Loader'
import './App.css';

class App extends Component {
  state = {data:[],loading:true}
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            this.setState({data:response.data, loading:false})
            //console.log(response)
        }
        )
        .catch(error => console.log(error))
        
    }

    removeItem= (item)=>{
      const newList = this.state.data.filter(test =>{
        return test.id !== item;
      })
      this.setState({
        data: [...newList]
      })
    }
    handleDataEdit = (editedItem,editId)=>{
      //console.log(editedItem);
      //console.log(editId);
      const editList = this.state.data.filter(item =>{
        if (item.id === editId){
          item.name = editedItem.name;
          item.email = editedItem.email;
          item.phone = editedItem.phone;
          item.website = editedItem.website;

          
        }
        return item;
      })
      //console.log(editList);
      this.setState({
        data: [...editList]
      })
    }
    

  render() {
    if(this.state.loading){
      return (
          <Loader />
      );

  }
    return (
      <div>
        {/* <PeopleList people = {this.state.data} removeItem={this.removeItem} handleDataEdit = {this.handleDataEdit} /> */}

        {
          this.state.data.map( person =>{
        
            return(
                <PeopleItem
                    key={person.id} 
                    person = {person}
                    removeItem={this.removeItem}
                    handleDataEdit = {this.handleDataEdit}
                />
                
            );
        })
        }
        {
          this.state.data.map(r =>{
          return(
            <div>
            <p key={r.id} >{r.name}</p>
            
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
