//
import React from 'react';
import Sound from 'react-sound';

class BGM extends React.Component {
  render() {
    return <Sound url={'./Far-Away-Places-Call.mp3'}   playstatus={ Sound.status.PLAYING } />; // Check props in next section
  }
}

export default BGM
