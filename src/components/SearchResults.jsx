import SearchResult from './SearchResult';

function SearchResults({ results }) {
  return (
    <ul>
      { results.map((r) => <SearchResult key={r.id} result={r} />) }
    </ul>
  );
}

export default SearchResults;
