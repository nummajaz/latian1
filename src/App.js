import React, { Component } from 'react';
import './App.css';
import List from './List.js';


// class Timer extends Component{
//   constructor(props){
//       super(props)
//       this.state = {
//           time : props.start
//     }
//   }

//   // Lifestyle
//   componentDidMount(){
//     // 1000 adalah interval, setiap 1 detik di increase ditambah 1
//     // this.addInterval = 
//     setInterval( () => this.increase(), 1000);
//   }

//   // componentWillUnmount(){
//   //   clearInterval(this.addInterval)
//   // }

  
//   increase(){
//     this.setState((state, props) => ({
//       // menambah 1 
//       time: parseInt(state.time) + 1
//     }))
//   }

//   render(){
//     return(
//       <div> {this.state.time} Detik </div>
//     )
//   }
// }




// class Toggle extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       toggleStatus: true
//     }

//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(){
//     this.setState( state =>({
//       toggleStatus: !state.toggleStatus
//     }))
//   }

//   render(){
//     return(
//       <button onClick={this.handleClick}>
//         {this.state.toggleStatus ? 'ON' : 'OFF'}
//         <p>Kondisi Sekarang {this.state.toggleStatus ? 'Menyala' : 'Mati'}</p>
//       </button>
//     )
//   }
// }


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      toDoitem: '',
      items: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items : [...this.state.items, this.state.toDoitem],
      toDoitem : ''
    })
  }

  handleChange = (event) => {
    this.setState({
      toDoitem : event.target.value
    })
    console.log(this.state.toDoitem)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.toDoitem} onChange={this.handleChange}/>
          <button>
            Add
          </button>
        </form>
        <List items={this.state.items}/>

      </div>
      // <div className="App">
      //   <Toggle/>
      //   <div>
      //     <img src={logo} className="App-logo" alt="logo" />
      //   </div>
      // </div>
    );
  }
}

export default App;
