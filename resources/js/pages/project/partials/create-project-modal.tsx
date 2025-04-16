import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "@inertiajs/react";

interface CreateProjectModalProps {
  isOpen: boolean;
  onCloseHandler: () => void;
}

export default function CreateProjectModal({ isOpen, onCloseHandler }: CreateProjectModalProps) {
  const { data, setData, post, reset } = useForm({
    name: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    post(route('projects.store'), {
      onSuccess: () => {
        onCloseHandler();
        reset();
      }
    });
  };

  return (
    <Modal
      open={isOpen}
      onClose={onCloseHandler}
      aria-labelledby="create-project-modal"
      aria-describedby="modal-to-create-new-project"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: '32rem' },
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography id="create-project-modal" variant="h6" component="h2">
          Create New Project
        </Typography>
        <TextField
          label="Project Name"
          name="name"
          value={data.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Description"
          name="description"
          value={data.description}
          onChange={handleChange}
          multiline
          rows={3}
          fullWidth
        />
        <Box display="flex" justifyContent="flex-end" gap={1}>
          <Button onClick={onCloseHandler}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>Create</Button>
        </Box>
      </Box>
    </Modal>
  );
}