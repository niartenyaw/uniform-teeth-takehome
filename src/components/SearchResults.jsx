import './SearchResults.css';
import { useContext } from 'react';

import { sort } from '../utils';
import SearchContext from '../contexts/SearchContext';
import SearchResult from './SearchResult';


function SearchResults() {
  const {
    results,
    resultsTerm: term,
    selected,
    setSelected
  } = useContext(SearchContext);

  const sortedResults = sort(results, term);

  const toggleSelectedCreator = (id) => () => {
    const newSelected = Object.assign({}, selected, {[id]: !selected[id]});
    setSelected(newSelected);
  }

  const sortedComponents = sortedResults.map((r) => (
          <SearchResult
            key={r.id}
            result={r}
            selected={!!selected[r.id]}
            toggleSelected={toggleSelectedCreator(r.id)} />
  ));
  return (
    <ul>
      <li id="result-heading" className="result-item">
        <p className="result-item-name">Name</p>
        <p>Email</p>
      </li>
      { sortedComponents }
    </ul>
  );
}

export default SearchResults;
