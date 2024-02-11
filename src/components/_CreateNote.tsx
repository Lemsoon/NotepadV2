import "../scss/base.scss";
import "../scss/components/CreateNote.scss";
import newNote from "../interfaces/newNote";
import axios from "axios";

function CreateNote() {
  const submitNote = () => {
    console.log("submitting note.");

    let a = document.getElementById("new-note") as HTMLInputElement;
    let b = document.getElementById("title-input") as HTMLInputElement;
    let c = localStorage.getItem("username") as string;

    let note: newNote = {
      note: a.value,
      title: b.value,
      username: c,
    };

    axios({
      method: "post",
      url: `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes`,
      data: {
        username: note.username,
        title: note.title,
        note: note.note,
      },
    }).then(() => (window.location.href = "/"));
  };

  return (
    <>
      <div className="create-body">
        <header className="create-header">
          <img
            src="src/SVG/back-arrow.svg"
            alt="back"
            className="back-arrow"
            onClick={() => {
              window.location.href = "/";
            }}
          />
          <h1 className="page-title">Creating note</h1>
        </header>

        <input
          minLength={5}
          type="text"
          id="title-input"
          placeholder="This is where the title goes..."
          className="create-title"
        />

        <div className="create-confirm" onClick={submitNote}>
          <img src="src/SVG/checkmark.svg" alt="confirm create" className="checkmark" />
        </div>
        <textarea
          minLength={5}
          name=""
          id="new-note"
          className="note-create"
          defaultValue={"What do you need to note?"}
        ></textarea>
      </div>
    </>
  );
}

export default CreateNote;
