import React, { Component } from 'react';
import World from './features/world'
// import { addTiles } from './config/actions'


class App extends Component {
  render() {
    return (
      <div>
        <audio className='music'  autoPlay controls loop >
          <source
            type="audio/mpeg"
            src="./Never Gonna Give You Up Original.mp3">
          </source>
        </audio>
        <World />
      </div>
    )
  }
}

export default App;


//dispatchTiles
