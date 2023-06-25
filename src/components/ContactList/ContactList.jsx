import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import {
  ContactsUl,
  ContactsLi,
  ContactsText,
  ContactsButton,
} from './ContactList.styled.jsx';

export const ContactList = ({ visibleContacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <ContactsUl>
      {visibleContacts.map(({ name, number, id }) => (
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
