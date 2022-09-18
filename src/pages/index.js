import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNote } from "../actions/note.js";
import CreateNote from "../components/CreateNote.js";
import NoteCard from "../components/NoteCard.js";

function Home() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note.notes);
  const [showCreateNote, setShowCreateNote] = useState(false);
  const [searchText, setSearchText] = useState("");

  let filteredNotes = searchText
    ? notes.filter((note) =>
        note.toLowerCase().includes(searchText.toLowerCase())
      )
    : notes;

  return (
    <div style={{ padding: "5%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Form.Control
          type="text"
          style={{ height: 40, width: 250 }}
          placeholder="search note"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            setShowCreateNote(true);
          }}
          variant="primary"
          style={{ marginBottom: 10 }}
        >
          + Create Note
        </Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {showCreateNote ? (
          <CreateNote
            onClose={() => {
              setShowCreateNote(false);
            }}
            onCreate={(note) => {
              setShowCreateNote(false);
              dispatch(createNote(note));
            }}
          />
        ) : null}
        {filteredNotes.map((note, index) => (
          <NoteCard key={index} note={note} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
