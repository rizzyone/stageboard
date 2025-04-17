import MainLayout from "@/layouts/main-layout";
import { Project } from "@/types";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { router } from "@inertiajs/react";
import { useState } from "react";
import CreateProjectModal from "./partials/create-project-modal";

interface IndexProps {
  projects: Project[];
}

export default function Index({ projects }: IndexProps) {
  const [isCreateProjectModalOpened, setIsCreateProjectModalOpened] = useState(false);

  const handleOpenCreateProjectModal = () => setIsCreateProjectModalOpened(true);

  const handleCloseCreateProjectModal = () => setIsCreateProjectModalOpened(false);

  return (
    <MainLayout>
      <Stack component="section" spacing={2}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography variant="h5">Projects</Typography>
          <Button
            variant="contained"
            onClick={handleOpenCreateProjectModal}
            sx={{
              display: { xs: 'none', sm: 'none', md: 'inline-flex' }
            }}
          >
            New Project
          </Button>
        </Stack>

        <Grid
          container
          spacing={2}
          columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}
        >
          {projects.map((project) => (
            <Grid key={project.id} size={{ xs: 1 }}>
              <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardActionArea onClick={() => router.get(route('projects.show', project.id))}>
                  <Box sx={{ height: '0.5rem', backgroundColor: project.color_hex }} />
                  {project.picture ? (
                    <CardMedia
                      component="img"
                      image={`/storage/projects/${project.picture}`}
                      alt={project.name}
                      sx={{ height: '8rem' }}
                    />
                  ) : (
                    <Box sx={{ height: '8rem', backgroundColor: project.color_hex }} />
                  )}
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: '1.25rem',
                        minHeight: '1.5rem',
                      }}
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: '1.25rem',
                        minHeight: '2.5rem',
                      }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Box
        sx={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          display: { xs: 'flex', sm: 'flex', md: 'none' }
        }}
      >
        <Fab color="primary" aria-label="add" onClick={handleOpenCreateProjectModal}>
          <AddIcon />
        </Fab>
      </Box>

      <CreateProjectModal
        isOpen={isCreateProjectModalOpened}
        onCloseHandler={handleCloseCreateProjectModal}
      />
    </MainLayout>
  );
}
