import React from 'react';
import './App.css';
import axios from "axios";
import FollowerCard from "./Components/FollowerCard";
import UserCard from "./Components/userCard"

class App extends React.Component {

state = {
  users: {},
  followers: []
}

componentDidMount(){
  axios
  .get('https://api.github.com/users/sumeyaali')
  .then(response => {
    console.log(response);
    this.setState({users: response.data})
  })

  axios
  .get('https://api.github.com/users/sumeyaali/followers')
  .then(response => {
    console.log(response);
    this.setState({followers: response.data})
  })
}


componentDidUpdate(prevProp, prevState) {
  if (prevState.users !== this.state.users){
  }
}

handleChanges= e => {
  this.setState({
    userText: e.target.value
  })
}

render() {

  return (
    <div className="App">
      
      <UserCard
      user={this.state.users}/>

        {this.state.followers.map(follower => (
            <FollowerCard key={follower.id} img={follower.avatar_url} login={follower.login} url={follower.url}/>
        ))}
      
    </div>
    );
  }
}

export default App;
