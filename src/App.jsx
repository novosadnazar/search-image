import React, { Component } from "react";
import  searchImage  from "./api/SearchImage";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Loader } from "./components/Loader/Loader";
import { Modal } from "./components/Modal/Modal";
import { Button } from "./components/Button/Button";
import { Searchbar } from "./components/Searchbar/Searchbar";

class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: "",
    tags: "",
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });

    searchImage(query, page)
      .then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data.hits],
        }));
      })
      .catch((error) => console.log("Помилка при завантаженні:", error))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleFormSubmit = (newQuery) => {
    if (newQuery === this.state.query) return;
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
    });
  };


  toggleModal = (largeImageURL = "", tags = "") => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL,
      tags,
    }));
  };

  render() {
    const { images, isLoading, showModal, largeImageURL, tags } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />

        {images.length > 0 && (
          <ImageGallery images={images} onItemClick={this.toggleModal} />
        )}

        {isLoading && <Loader />}

        {images.length > 0 && !isLoading && (
          <Button
            onClick={() => this.setState((p) => ({ page: p.page + 1 }))}
          />
        )}

        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />
        )}
      </div>
    );
  }
}

export default App;
