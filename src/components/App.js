import React, { Component } from 'react';
import style from './App.less';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style['app']}>
      </div>
    )
  }
}