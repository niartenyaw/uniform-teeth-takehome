import SearchResult from './SearchResult';
import { sort } from '../utils';

function SearchResults({ results, term }) {
  const sortedResults = sort(results, term);
  return (
    <ul>
      { sortedResults.map((r) => <SearchResult key={r.id} result={r} />) }
    </ul>
  );
}

export default SearchResults;
