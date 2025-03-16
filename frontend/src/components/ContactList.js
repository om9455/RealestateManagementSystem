import { useEffect, useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  // Fetch Contacts from Backend
  const fetchContacts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URI}contacts`);
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setContacts(result.data);
        } else {
          alert("Failed to fetch contacts.");
        }
      } else {
        alert("Failed to fetch contacts.");
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  // Delete Contact
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URI}contacts/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Contact deleted successfully!");
        setContacts(contacts.filter((contact) => contact._id !== id));
      } else {
        alert("Failed to delete contact.");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  // Fetch contacts on component mount
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <h3>Contact List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(contact._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No contacts found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
