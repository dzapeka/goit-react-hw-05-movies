const SearchForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({
      searchQuery: event.currentTarget.elements.searchQuery.value.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        name="searchQuery"
        placeholder="Search movies..."
        autoFocus
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
