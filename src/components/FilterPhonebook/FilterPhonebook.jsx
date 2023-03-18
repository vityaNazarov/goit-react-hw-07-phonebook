import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

import css from './filter-phonebook.module.css';

const FilterPhonebook = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <form className={css.wrapperFilter}>
      <label className={css.labelFilter}>Find contacts by name</label>
      <input
        value={filter}
        className={css.inputFilter}
        type="text"
        name="filter"
        onChange={changeFilter}
      />
    </form>
  );
};

export default FilterPhonebook;
