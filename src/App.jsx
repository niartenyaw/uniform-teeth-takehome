import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { search } from './utils';
import SearchContext from './contexts/SearchContext';

function App() {
  const [results, setResults] = useState({});
  const [term, setTerm] = useState('');
  // Without this state, the existing (old) results will be filtere with the new
  // term before the API responds
  const [resultsTerm, setResultsTerm] = useState('');
  const [selected, setSelected] = useState({});

  useEffect(() => {
    if (term.length === 0) {
      search.cancel();
      setResults([]);
      setResultsTerm('');
      setSelected({});
    } else {
      search(term, (r) => {
        setResults(r);
        setResultsTerm(term);
        setSelected({});
      });
    }
  },
  [term])

  return (
    <SearchContext.Provider value={{
      results,
      term, setTerm,
      resultsTerm,
      selected, setSelected }}
    >
      <SearchBar />
      <SearchResults />
    </SearchContext.Provider>
  );
}

export default App;
