import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "../actions/note";
import CreateNote from "./CreateNote";

function NoteCard({ note, index }) {
  const dispatch = useDispatch();
  const [showCreateNote, setShowCreateNote] = useState(false);

  return (
    <>
      {showCreateNote ? (
        <CreateNote
          isUpdate={true}
          defaultValue={note}
          onUpdate={(value) => {
            setShowCreateNote(false);
            dispatch(updateNote({ index: index, data: value }));
          }}
          onClose={() => setShowCreateNote(false)}
        />
      ) : (
        <Card style={{ width: "16rem", margin: 10, height: "auto" }}>
          <Card.Body>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                style={{ padding: 0 }}
                variant="light"
                onClick={() => setShowCreateNote(true)}
              >
                <BsFillPencilFill />
              </Button>
              <Button
                variant="light"
                style={{ marginLeft: 15, padding: 0 }}
                onClick={() => {
                  dispatch(deleteNote(index));
                }}
              >
                <BsFillTrashFill />
              </Button>
            </div>
            <p>{note}</p>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default NoteCard;
