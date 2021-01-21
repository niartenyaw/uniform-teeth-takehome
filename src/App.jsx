import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { search } from './utils';

function App() {
  const [results, setResults] = useState({});
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      search.cancel();
      setResults([])
    } else {
      search(term, setResults);
    }
  },
  [term])

  return (
    <div>
      <SearchBar term={term} setTerm={setTerm} />
      <SearchResults results={results} term={term} />
    </div>
  );
}

export default App;
