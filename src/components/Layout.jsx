'use strict';

import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="Main">{this.props.children}</div>
    );
  }
}