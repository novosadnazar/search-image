import React, { Component } from "react";
import style from "./Searchbar.module.css"
export class Searchbar extends Component {
  handleSubmit = (i) => {
    i.preventDefault();
    const query = i.target.elements.searchQuery.value.trim();
    this.props.onSubmit(query);
  };

  render() {
    return (
      <header className={style.searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchForm_button}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span className={style.SearchForm_button_label}>Search</span>
          </button>

          <input
            name="searchQuery"
            className={style.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
