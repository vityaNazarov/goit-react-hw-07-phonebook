export const getAllContacts = ({ contacts }) => contacts.items;

export const getImportantContacts = ({ contacts }) => {
  const onlyImportantContacts = contacts.items.filter(
    ({ importantContact }) => importantContact
  );
  return onlyImportantContacts;
};

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizedContact = filter.toLowerCase();
  const result = contacts.items.filter(({ name, phone }) => {
    return (
      name.toLowerCase().includes(normalizedContact) ||
      phone.toLowerCase().includes(normalizedContact)
    );
  });
  return result;
};
