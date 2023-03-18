import { useSelector, useDispatch } from 'react-redux';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';
import {
  getAllContacts,
  getFilteredContacts,
} from 'redux/contacts/contacts-selectors';

import css from './contact-list.module.css';

const ContactList = () => {
  const filterContacts = useSelector(getFilteredContacts);
  const allContacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const onDeleteContact = payload => {
    const action = fetchDeleteContact(payload);
    dispatch(action);
  };

  const elements = filterContacts.map(
    ({ id, name, phone, importantContact }) => (
      <li style={{ fontWeight: importantContact ? 'bold' : 'normal' }} key={id}>
        <span className={css.contactsText}>
          {name}: {phone}
        </span>
        <button className={css.contactsBtn} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    )
  );
  const isContacts = Boolean(allContacts.length);

  return (
    <>
      <div>
        <ul className={css.contactsList}>{elements}</ul>
      </div>
      {!isContacts && <p>No contacts</p>}
    </>
  );
};

export default ContactList;
