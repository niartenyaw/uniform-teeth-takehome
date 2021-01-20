function SearchResult({ result }) {
  return (
    <div>
      <p>{result.name}</p>
      <p>{result.email}</p>
    </div>
  )
}

export default SearchResult;
