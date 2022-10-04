import PropTypes from 'prop-types';
import { FilterFormLable, FilterFormInput } from './Filter.styled';

export const Filter = ({ value, onFilterContacts }) => {
  return (
    <FilterFormLable htmlFor="filterName">
      Find contacts by name
      <FilterFormInput
        type="text"
        id="filterName"
        value={value}
        onChange={onFilterContacts}
      />
    </FilterFormLable>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterContacts: PropTypes.func.isRequired,
};
