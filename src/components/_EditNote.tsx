import "../scss/base.scss";
import "../scss/components/EditNote.scss";
import { useLocation } from "react-router-dom";
import axios from "axios";

function EditNote() {
  const location = useLocation();
  const note = location.state.note;

  console.log(note.title);

  const submitEdit = () => {
    console.log("Updated note");
    let a = document.getElementById("new-note") as HTMLInputElement;
    note.note = a.value;
    axios({
      method: "put",
      url: `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${note.id}`,
      data: {
        note: note.note,
      },
    });
  };

  return (
    <>
      <div className="edit-body">
        <header className="edit-header">
          <img
            src="src/SVG/back-arrow.svg"
            alt="back"
            className="back-arrow"
            onClick={() => {
              window.location.href = "/";
            }}
          />
          <h1 className="page-title">Editing note</h1>
          <img
            src="src/SVG/trash-icon.svg"
            alt="delete note"
            onClick={() => {
              axios
                .delete(`https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${note.id}`)
                .then(() => (window.location.href = "/"));
              console.log("deleted note");
            }}
          />
        </header>

        <h1 className="edit-title">{note.title}</h1>
        <div className="edit-confirm" onClick={submitEdit}>
          <img src="src/SVG/checkmark.svg" alt="confirm edit" className="checkmark" />
        </div>
        <textarea name="" id="new-note" className="edit-note" defaultValue={note.note}></textarea>
      </div>
    </>
  );
}

export default EditNote;
