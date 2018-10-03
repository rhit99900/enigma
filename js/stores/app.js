import React from 'react';
import Layout from './components/Layout.js';


const toggleUrl = 'https://www.toggl.com/api/v8/me';
const toggleAPIToken = '29a0fa026e0a8769c28e4e445e03514f';
// const todoistUrl = endpoint => `https://beta.todoist.com/API/v8/${endpoint}`;
const todoistUrl = 'https://beta.todoist.com/API/v8/projects';
const todoistAPIToken = 'f52f8727b5216dfe43cf7560d2df4d0ce1285d4e';

class APILoad extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      items:[],
      isLoaded:false,
    }
  }

  componentDidMount(){
    fetch (todoistUrl, {
      method: "GET",
      headers:{
        'Content-Type':'application/json',
        // 'Authorization': this.toggleAPIToken+":"+"api_token",
        'Authorization': 'Bearer ' + todoistAPIToken,
      }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:',error))
    // .then(response => console.log('Success:',response))
    .then(response => {
      this.setState({
        isLoaded: true,
        items: response,
      })
    });
  }

  render(){
    var { isLoaded, items } = this.state;
    if(!isLoaded){
      return (
        <div>Loading...</div>
      );
    }
    else{
      return(
        <div className="container">
          <div className="row">
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  {item.name} {item.indent}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }

};

export default APILoad;
