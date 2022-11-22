import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";
import { nanoid } from "nanoid";
import ColorButton from "./ColorButton";

function NoteInput() {
  const [text, settext] = useState("");
  const [bgColor, setbgColor] = useState("red");

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const addNewNote = () => {
    if (text === "") {
      alert("Enter something😞");
      return;
    }

    const note = items.filter((item) => item.note === text);
    if (note.length > 0) {
      alert("This Note exists in the store");
      return;
    }
    dispatch(addNote({ id: nanoid(5), note: text, bgColor }));
  };
  return (
    <div className="textarea-box">
      <textarea
        className="textarea-input"
        placeholder="Enter Your Note Here"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <ColorButton setbgColor={setbgColor} bgColor={bgColor} />
      <button className="btn-add" onClick={addNewNote}>
        Add Note
      </button>
    </div>
  );
}

export default NoteInput;
