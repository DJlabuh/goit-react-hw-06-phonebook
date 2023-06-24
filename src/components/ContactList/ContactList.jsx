import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import {
  ContactsUl,
  ContactsLi,
  ContactsText,
  ContactsButton,
} from './ContactList.styled.jsx';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <ContactsUl>
      {contacts.map(({ name, number, id }) => (
        <ContactsLi key={id}>
          <ContactsText>{name}</ContactsText>
          <ContactsText>{number}</ContactsText>
          <ContactsButton onClick={() => handleDeleteContact(id)}>
            Delete
          </ContactsButton>
        </ContactsLi>
      ))}
    </ContactsUl>
  );
};
