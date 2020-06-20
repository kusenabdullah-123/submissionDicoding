import "../component/search-bar";
import "../component/movie-list";
import "../data/data-movie";
import DataMovie from "../data/data-movie";
const main = () => {
  const searchElement = document.querySelector("search-bar");
  const movieElement = document.querySelector("movie-list");
  const SearchButtonClicked = async () => {
    try {
      const { Search: dataMovie } = await DataMovie.getMovie(
        searchElement.value
      );
      Result(dataMovie);
    } catch (error) {
      errorRestlt(error);
    }
  };
  const Result = (results) => {
    movieElement.movies = results;
  };

  const errorRestlt = (message) => {
    movieElement.ErrorRender(message);
  };
  searchElement.clickEvent = SearchButtonClicked;
};
export default main;
