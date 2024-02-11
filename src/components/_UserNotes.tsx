import "../scss/base.scss";
import fetchNotes from "./FetchNotes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import incomingNote from "../interfaces/incomingNote";
import editingNote from "../interfaces/editingNote";
import "../scss/components/UserNotes.scss";
import newNote from "../interfaces/newNote";

function UserNotes() {
  //make notes array, useState<newNote> so that array has correct format.
  const [notes, setNotes] = useState<incomingNote[]>([]);
  const navigate = useNavigate();

  //When _UserNotes module gets loaded useEffect runs once(because of[]), gets note data, adds note data to notes array.
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchNotes();
      setNotes(resp);
    };
    fetchData();
  }, []);

  let name = localStorage.getItem("username");
  let a = name?.charAt(0) as string;

  const editButton = (note: editingNote) => {
    navigate("/edit", { state: { note } });
  };

  return (
    <>
      <header className="user-notes-header">
        <a href="/name" className="user-icon">
          {a.toUpperCase()}
        </a>
        <h1 className="page-title">Notes</h1>
        <div></div>
      </header>

      {notes.map((note) => (
        <div className="note" key={note.id}>
          <h1 className="note-title">{note.title}</h1>
          <p className="note-text">{note.note}</p>
          <footer className="note-footer">
            written by: {note.username}{" "}
            <button className="note-edit-button" onClick={() => editButton(note)}>
              EDIT
            </button>
          </footer>
        </div>
      ))}

      <div
        className="create-note"
        onClick={() => {
          window.location.href = "/create";
        }}
      >
        <img src="src/SVG/pen-icon.svg" alt="write note" className="create-button" />
      </div>
    </>
  );
}
export default UserNotes;
