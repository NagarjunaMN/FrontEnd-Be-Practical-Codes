import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isActive : false
      }
    }

    //to update counter
    updateCounter(){
      ReactDOM.render(
        <React.StrictMode>
          <Counter num = {this.props.num + 1} />
        </React.StrictMode>
        , document.getElementById('renderHere')
      )
    }

    componentWillMount(){
        console.log("Component will mount(deprecated)")
    }
    
    componentDidMount(){
        console.log("Component did mount called")
    }

    //deprecated
    componentWillReceiveProps(nP,nC){
      console.log("component will receive props");
      console.log("new props = ",nP)
      if(nP.num >= 10){
        this.setState({isActive : true})
      }
    }

    //decision maker
    shouldComponentUpdate(nP,nS){
      console.log("Should component update?")
      console.log("newProps",nP)
      console.log("newState",nS)
      return true;
    }

    //deprecated
    componentWillUpdate(nP,nS){
      console.log("component will update");
      console.log("newProps",nP)
      console.log("newState",nS)
    }
    
  render() {
    console.log("component rendered")
    return (
      <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
            <h3 className="display-3 text-primary ">Counter</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <h1 className='text-center text-success'>Num = {this.props.num}</h1>
                <div className="text-center">
                    {
                        this.state.isActive ? <h1 className="text-success">Welcome to Lifecycle</h1> :
                            <div>
                                <h1 className='text-secondary'>Need More Counts</h1>
                                <button onClick={this.updateCounter.bind(this)} className='btn btn-success'>Add+1</button>
                            </div>
                        
                    }
                </div>
            </div>
        </div>
      </div>
    )
  }

  componentDidUpdate(oP,oS){
    console.log('Component did update')
    console.log("oldProps",oP)
    console.log("oldState",oS)
  }

  componentWillUnmount(){
    console.log("Component successfully unmounted")
  }

}

export default Counter
