

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      const newContact = { id: state.contacts.length + 1, ...action.payload };
      const contacts = [...state.contacts, newContact];
      localStorage.setItem("contacts", JSON.stringify(contacts));
      return { ...state, contacts };

    case "EDIT_CONTACT":
      const updatedContacts = state.contacts.map((contact) =>
        contact.id === action.payload.id ? { ...contact, ...action.payload.contact } : contact
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return { ...state, contacts: updatedContacts };

    case "DELETE_CONTACT":
      const filteredContacts = state.contacts.filter((contact) => contact.id !== action.payload);
      localStorage.setItem("contacts", JSON.stringify(filteredContacts));
      return { ...state, contacts: filteredContacts };

    default:
      return state;
  }
};

export default reducer;
