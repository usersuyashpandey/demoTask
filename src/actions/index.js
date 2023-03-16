export const addContact = (contact) => {
    return {
      type: "ADD_CONTACT",
      payload: contact,
    };
  };
  
  export const editContact = (id, contact) => {
    return {
      type: "EDIT_CONTACT",
      payload: { id, contact },
    };
  };
  
  export const deleteContact = (id) => {
    return {
      type: "DELETE_CONTACT",
      payload: id,
    };
  };
  