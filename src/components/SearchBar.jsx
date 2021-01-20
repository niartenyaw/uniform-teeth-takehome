import { useState } from 'react';
import Api from '../util/api';
import debounce from 'underscore/modules/debounce.js'

const debouncedSearch = debounce((term, setResults) => {
  Api.search(term)
    .then(r => setResults(r))
}, 200);

function SearchBar({ setResults }) {
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    const term = e.target.value;
    setSearch(term);
    debouncedSearch(term, setResults);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={search}
          onChange={onChange} />
      </form>
    </div>
  );
}

export default SearchBar;
