import './SearchBar.css';
import { useContext } from 'react';
import SearchContext from '../contexts/SearchContext';

function SearchBar() {
  const { term, setTerm } = useContext(SearchContext);
  const onChange = (e) => setTerm(e.target.value);

  return (
    <form className="search-bar-form">
      <input
        type="text"
        value={term}
        onChange={onChange} />
    </form>
  );
}

export default SearchBar;
