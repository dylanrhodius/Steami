'use strict';

import React from 'react';

export default class Game extends React.Component {
  render() {
    return (
      <li className="game">
        <span className="name">{this.props.name}</span>
        <img className="game-image" src={`http://media.steampowered.com/steamcommunity/public/images/apps/${this.props.appid}/${this.props.img_logo_url}.jpg`}></img>
      </li>
    )
  }
}