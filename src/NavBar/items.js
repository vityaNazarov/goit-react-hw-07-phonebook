import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Phonebook',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Important Contacts',
    link: '/important-contacts',
  },
];

export default items;
