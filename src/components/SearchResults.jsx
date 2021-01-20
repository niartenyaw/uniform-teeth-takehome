import SearchResult from './SearchResult';

function SearchResults({ results }) {
  return (
    <ul>
      { results.map((r) => <SearchResult result={r} />) }
    </ul>
  );
}

export default SearchResults;
