import dotenv from `dotenv`;
dotenv.config();
import { search } from "./api";
import { appendMovies, clearMovies } from "./ui";



(() => {
  const handleSearchButtonClick = () => {
    const searchTerm = document.getElementById(`search-pane-input`).value;
    clearMovies();
    search(searchTerm)
      .then((response) => {
        appendMovies(response.Search);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  window.addEventListener(`load`, () => {
    document
      .getElementById(`search-pane-button`)
      .addEventListener(`click`, handleSearchButtonClick);
  });
}) ();