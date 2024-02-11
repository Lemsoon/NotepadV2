import axios from "axios";
import incomingNote from "../interfaces/incomingNote";

async function fetchNotes() {
  let name = localStorage.getItem("username");
  const resp = await axios({
    method: "GET",
    url: `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${name}`,
  });

  let notes = resp.data.notes as incomingNote[];
  return notes;
}

export default fetchNotes;
