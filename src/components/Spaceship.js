import React from 'react';

class Spaceship extends React.Component{
  render(){
    return(
      <div>
        <h2>Name: {this.props.name}</h2>
        <ul>
          <li> Speed: {this.props.speed} </li>
          <li> Has Rockets: {this.props.hasRockets} </li>
          <li> colors: {this.props.colors.join(', ')}</li>
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
