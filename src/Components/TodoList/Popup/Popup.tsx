import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FC, useState } from "react";

interface IPopupProps {
  addingTask: (text: string) => void;
}

const Popup: FC<IPopupProps> = ({ addingTask }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    if (text) {
      addingTask(text);
      setText("");
      setOpen(false);
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add a new task
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Adding a new task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task"
            type="text"
            fullWidth
            maxRows={8}
            variant="outlined"
            multiline
            onChange={(e) => setText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdd} variant="contained">
            Add task
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Popup;
