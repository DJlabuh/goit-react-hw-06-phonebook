import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { Container, SectionComponents, Title, WarningText } from './App.styled';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter =
      filter && filter.query ? filter.query.toLowerCase() : '';

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <SectionComponents>
        <Title>Phonebook</Title>
        <ContactForm />
      </SectionComponents>
      <SectionComponents>
        <Title>Contacts</Title>
        <Filter />
        {visibleContacts.length ? (
          <ContactList visibleContacts={visibleContacts} />
        ) : (
          <WarningText>Contact not found!</WarningText>
        )}
      </SectionComponents>
    </Container>
  );
};
