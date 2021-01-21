import { useState } from 'react';

function SearchBar({ term, setTerm }) {
  const onChange = (e) => setTerm(e.target.value);

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
