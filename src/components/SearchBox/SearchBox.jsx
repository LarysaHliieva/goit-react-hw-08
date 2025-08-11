import { useSelector, useDispatch } from "react-redux";

import { selectFilter } from "../../redux/filters/selectors";

import { changeFilter } from "../../redux/filters/slice";

import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const handleFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={styles.label}>
      <h3>Find contacts by name</h3>
      <input
        value={value}
        className={styles.input}
        onChange={handleFilter}
        type="text"
      />
    </label>
  );
};

export default SearchBox;
