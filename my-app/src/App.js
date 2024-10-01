import React from 'react';
import './App.css';



class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }

    this.InputClick = this.InputClick.bind(this)
  }

  render () {
    return (
      <div>
        Количество: {this.state.count}
        <button onClick={this.InputClick}>Click</button>
      </div>
    )
  }
  InputClick() {
    this.setState({count: this.state.count+1})
  }
}

export default App;
