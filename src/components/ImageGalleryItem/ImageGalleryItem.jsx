
import React, { Component } from "react";
import style from "./ImageGalleryItem.module.css";

export class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL, tags, onClick } = this.props;

    return (
      <li className={style.ImageGalleryItem}>
        <img
          className={style.ImageGalleryItem_image}
          src={webformatURL}
          alt={tags}
          onClick={() => onClick(largeImageURL)}
        />
      </li>
    );
  }
}
