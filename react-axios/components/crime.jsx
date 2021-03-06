
import React from 'react';
import axios from 'axios';

//TODO: Refactor this API request so that it takes in a user's input and fires off on a button click
//You will need to remove the axios request from here and put it in your parent component
//then pass down the state to this component -- feel free to rename components as well!

class Crime extends React.Component{

//this is when the constructor function helps us out by
//giving access to the props or state from the parent
constructor(props){
  super(props)
  this.state = {crime: []};
}

//this function tells react to wait until the component is mounted (rendered)
//before firing off our http request
componentDidMount=()=>{
  //define `this` here because `this` will be different inside our
  //axios request - we want to refer to the react object here
  const self = this;

  axios.get('https://data.sfgov.org/resource/gxxq-x39z.json?pddistrict=MISSION&dayofweek=Friday&$order=date%20DESC&$where=date%3E%272017-01-01T12:00:00%27&category=DRUG/NARCOTIC').then(function(response){
    self.setState({crime: response.data});
  })

}

//don't forget, all components must be wrapped in a div - it's the React way!!!

//we pass in i in the render method (the index) to prevent duplicate keys
//if you are not familiar with map.. LOOK IT UP!!!
render(){
  return(
    <div>
      <p>Render Data Here</p>
        {this.state.crime.map(function(stat, i){
          return(
            <p key={i}>{stat.address} {stat.date}</p>
          )
        })}
    </div>
  )
}

}

export default Crime;
