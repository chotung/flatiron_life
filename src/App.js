import React, { Component } from 'react';
import World from './features/world'
// import { addTiles } from './config/actions'


class App extends Component {
  render() {
    return (
      <div>
        <div className='music'>
        <audio autoPlay controls loop >
          <source
            type="audio/mpeg"
            src="./Far-Away-Places-Call.mp3">
          </source>
        </audio>
        </div>
        <World />
      </div>
    )
  }
}

export default App;
