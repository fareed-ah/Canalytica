import React from 'react';
import './assets/css/App.css';
import DashBoard from './components/Dashboard';
class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      tweets: [],
      isLoaded:  false,
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000/sentiment/rona')
      .then(res => res.json())
      .then(data => {
          this.setState({
            tweets: data,
            isLoaded: true
          })
          console.log(this.state.tweets)
        
      })
  }

  render (){
    
    return(
      <div><DashBoard></DashBoard></div>
      //
      /*
    <div className="App">
      <label>Search</label>
      
      <ul>
        {this.state.tweets.map(tweet=>
          <li key = {tweet.id}>
            {tweet.text}
            <br/>
          </li>
        )}
      </ul>
    </div>
    */
  )
  }
}

export default App