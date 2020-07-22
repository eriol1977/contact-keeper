import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef(''); // links the variable to the input reference, which is '' by default

  const { filterContacts, clearFilter, filtered } = contactContext;

  // to empty the filter text if there are no filtered values
  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  }, [contactContext, filtered]);

  const onChange = (e) => {
    if (text.current.value !== '') {
      // gets the actual value of the input field
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Contacts...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
