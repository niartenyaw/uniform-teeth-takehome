import { useState } from 'react';
import { search } from '../utils';

function SearchBar({ setResults }) {
  const [term, setTerm] = useState('');

  // TODO: do something different when it is blank?
  const onChange = (e) => {
    const newTerm = e.target.value;
    setTerm(newTerm);
    search(newTerm, setResults)
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={term}
          onChange={onChange} />
      </form>
    </div>
  );
}

export default SearchBar;
