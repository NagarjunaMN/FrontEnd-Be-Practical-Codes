import React ,{Component} from 'react';
import UserCard from './component/UserCard';
import User from './component/User';
import './App.css';
const url = 'https://dummyjson.com'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      users : []
    }
  
  }
  componentDidMount(){
    fetch(`${url}/users`)
    .then(res => res.json())
    .then(res=>{
      
      this.setState({users : res.users})
      // console.log("users", this.state.users)
    })
    .catch(err => console.log(err.message))
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">Props in class component</h3>
          </div>
        </div>
        <User users = {this.state.users} />
      </div>
    )
  }
  
}

export default App;
