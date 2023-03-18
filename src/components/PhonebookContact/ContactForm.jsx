import { useState } from 'react';
import { fetchAddContact } from 'redux/contacts/contacts-operations';

import { useDispatch } from 'react-redux';

import inititialState from './inititialState';
import css from './contact-form.module.css';

const ContactForm = () => {
  const [state, setState] = useState({ ...inititialState });

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;
    setState(prevState => {
      return { ...prevState, [name]: newValue };
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(fetchAddContact({ ...state }));
    setState({ ...inititialState });
  };

  const { name, phone, newValue, importantContact } = state;

  return (
    <form className={css.wrapper} onSubmit={handleSubmit}>
      <label className={css.label}>Name</label>
      <input
        className={css.input}
        value={name}
        type="text"
        name="name"
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label className={css.label}>Number</label>
      <input
        className={css.input}
        value={phone}
        type="tel"
        name="phone"
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <label className={css.label}>Important Contact</label>
      <input
        className={css.checkbox}
        name="importantContact"
        value={newValue}
        checked={importantContact}
        type="checkbox"
        onChange={handleChange}
      />

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
