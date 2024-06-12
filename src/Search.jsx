import './Search.css';

function Search({searchQuery , setSearchQuery}) {

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  };

  return (
    <div className='searchbar'>
      <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search" />
    </div>
  );
}

export default Search;