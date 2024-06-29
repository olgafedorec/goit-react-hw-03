import { useState, useEffect } from 'react';
import initialContacts from '../../contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from "./App.module.css";

export default function App() {
 const [contacts, setContacts] = useState(() => {
  const savedContacts = localStorage.getItem('phonebook');
  return savedContacts ? JSON.parse(savedContacts) : initialContacts;
 });
 const [search, setSearch] = useState("");

  const deleteContact = (contactId) => {
   setContacts(prevContacts => {
    const updatedContacts = prevContacts.filter((contact) => contact.id !== contactId);
    localStorage.setItem('phonebook', JSON.stringify(updatedContacts));
    return updatedContacts;

   })
   
  }
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [newContact, ...prevContacts];
    })
  };

  useEffect(() => {
    localStorage.setItem('phonebook', JSON.stringify(contacts), [contacts]);
  })

  const foundContacts = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()))

 return (
    <div className={css.container}>
  <h1>Phonebook</h1>
  <ContactForm onAdd={addContact}/>
  <SearchBox value={search} onSearch={setSearch}/>
  <ContactList contacts={foundContacts} onDelete={deleteContact}/>
</div>
  )
}