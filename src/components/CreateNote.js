import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

function CreateNote({
  isUpdate = false,
  defaultValue = "",
  onClose = () => {},
  onCreate = () => {},
  onUpdate = () => {},
}) {
  const [note, setNote] = useState(defaultValue);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{isUpdate ? "Update" : "Create"} Note</Card.Title>
          <Form.Control
            size="sm"
            rows={5}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            value={note}
            type="text"
            as="textarea"
            placeholder="type something...."
          />
          <Button
            variant="light"
            onClick={onClose}
            style={{ marginTop: 10, marginRight: 5 }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              if (note.length > 0) {
                if (isUpdate) {
                  onUpdate(note);
                } else {
                  onCreate(note);
                }
              }
            }}
            style={{ marginTop: 10 }}
          >
            {isUpdate ? "Update" : "Create"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default CreateNote;
