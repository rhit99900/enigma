import React from 'react';
import Layout from '../components/Layout.js';


// const toggleUrl = 'https://www.toggl.com/api/v8/tasks';
const toggleUrl = 'https://www.toggl.com/api/v8/time_entries?start_date=2018-03-10T15%3A42%3A46%2B02%3A00&end_date=2018-08-12T15%3A42%3A46%2B02%3A00';
const toggleAPIToken = '29a0fa026e0a8769c28e4e445e03514f';
// const todoistUrl = endpoint => `https://beta.todoist.com/API/v8/${endpoint}`;

class TogglAPILoad extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      items:[],
      isLoaded:false,
    }
  }

  componentDidMount(){
    fetch (toggleUrl, {
      method: "GET",
      headers:{
        'Content-Type':'application/json',
        'Authorization': 'Basic '+btoa(toggleAPIToken+":"+"api_token"),
      }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:',error))
    // .then(response => console.log('Success:',response));
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
        <div className="container">
          <div className="row">
            <p>Loading...</p>
          </div>
        </div>
      );
    }
    else{
      return(
        <div className="container">
          <div className="row">
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  {item.description} {item.at}
                  {item.tags.map(tags => (
                    <span>{tags}</span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }

};

export default TogglAPILoad;
