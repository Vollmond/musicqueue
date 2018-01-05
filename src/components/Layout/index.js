import React, { Component } from 'react'
import logo from './logo.svg'
import './styles.css'
import AlbumList from '../AlbumList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-body"><AlbumList /></div>
      </div>
    )
  }
}

export default App
