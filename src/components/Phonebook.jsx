import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAllContacts } from 'redux/contacts/contacts-operations';

import ContactForm from 'components/PhonebookContact/ContactForm';
import FilterPhonebook from 'components/FilterPhonebook/FilterPhonebook';
import ContactList from 'components/Contacts/ContactList';

import css from './phonebook.module.css';

const Phonebook = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllContacts())
	  }, [dispatch]);
	
	
  return (
    <main className={css.conteinerPhonebook}>
      <ContactForm />
      <h2 className={css.text}>Contacts</h2>
      <FilterPhonebook />
      <ContactList />
    </main>
  );
};

export default Phonebook;
