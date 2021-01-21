import './SearchResult.css';

function SearchResult({ result, selected, toggleSelected }) {
  return (
    <li className={ selected ? "result-item selected" : "result-item" } onClick={toggleSelected}>
      <p className="result-item-name">{result.name}</p>
      <p>{result.email}</p>
    </li>
  )
}

export default SearchResult;
