import React, { useContext, Fragment } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  // If there's anything in 'filtered', we use that to display the ContactItems, otherwise we use the full contacts list.
  // The TransitionGroup and CSSTransition elements just add some fade animation: they could be removed (in that case, the 'key' attribute)
  // must be placed in the ContactItem elements.
  // The classNames 'item' must be the same used in the CSS for item-enter, item-enter-active, etc.
  // (see: https://reactcommunity.org/react-transition-group/transition-group)
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
