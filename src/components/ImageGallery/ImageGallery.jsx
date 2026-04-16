import React, { Component } from "react";
import style from "./ImageGallery.module.css";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem.jsx";

export class ImageGallery extends Component {
  render() {
    const { images, onItemClick } = this.props;

    return (
      <ul className={style.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            onClick={onItemClick}
          />
        ))}
      </ul>
    );
  }
}



