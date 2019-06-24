import React, { Component } from 'react';
import axios from 'axios';
import PeopleList from './PeopleList';
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
        return test !== item;
      })
      this.setState({
        data: [...newList]
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
        <PeopleList people = {this.state.data} removeItem={this.removeItem} changeName={this.changeName} />
      </div>
    );
  }
}

export default App;
