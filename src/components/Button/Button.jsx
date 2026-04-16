import React, { Component } from "react";
import style from "./Button.module.css";
export class Button extends Component {
    render() {
      const {onClick} = this.props
      return (
        <button type="button" className={style.Button} onClick={onClick}>Load More</button>
      );
  }
}
