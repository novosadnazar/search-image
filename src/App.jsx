import React, { Component } from "react";
// import searchImage from "./api/images-api";

// import { ImageGallery } from "./components/ImageGallery/ImageGallery";
// import { Loader } from "./components/Loader/Loader";
// import { Modal } from "./components/Modal/Modal";
// import { Button } from "./components/Button/Button";
// import { Searchbar } from "./components/Searchbar/Searchbar";

import "./App.css";

class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: "",
  };


  handleFormSubmit = (newQuery) => {
    if (newQuery === this.state.query) return;
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
   
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });

      searchImage(this.state.query, this.state.page)
        .then((data) => {
          this.setState((prevState) => ({
            images: [...prevState.images, ...data.hits],
          }));
        })
        .catch((error) => console.log("Error:", error))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  render() {
    const { images, isLoading } = this.state;

  
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />

        {images.length > 0 && <ImageGallery images={images} />}

        {isLoading && <Loader />}

        {images.length > 0 && !isLoading && (
          <Button
            onClick={() => this.setState((p) => ({ page: p.page + 1 }))}
          />
        )}
      </div>
    );
  }
}

export default App;
