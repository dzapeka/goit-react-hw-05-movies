import {
  StyledForm,
  StyledInput,
  StyledSearchButton,
} from './SearchMoviesForm.styled';

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({
      searchQuery: event.currentTarget.elements.searchQuery.value.trim(),
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        autoComplete="off"
        name="searchQuery"
        placeholder="Search movies..."
        autoFocus
        required
      />
      <StyledSearchButton type="submit">Search</StyledSearchButton>
    </StyledForm>
  );
};

export default SearchForm;
