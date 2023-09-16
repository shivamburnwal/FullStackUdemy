import Hero from "./Hero";

const SearchView = ({ searchText, searchResults }) => {
  const title = `You are searching for ${searchText}`;
  console.log(searchResults);

  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const accessToken = process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN;

  console.log(apiKey);
  console.log(accessToken)

  return <Hero text={title} />;
};

export default SearchView;