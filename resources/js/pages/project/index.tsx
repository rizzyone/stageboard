import MainLayout from "@/layouts/main-layout";
import { Project } from "@/types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { router } from "@inertiajs/react";

interface IndexProps {
  projects: Project[];
}

export default function Index({ projects }: IndexProps) {
  return (
    <MainLayout>
      <Box component="section">
        <Typography variant="h4" gutterBottom>Projects</Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}
        >
          {projects.map((project) => (
            <Grid key={project.id} size={{ xs: 1 }}>
              <Card sx={{ height: '10rem', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ height: '0.5rem', backgroundColor: project.color_hex }} />
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => {
                        router.get(route('projects.show', project.id))
                      }}
                    >
                      Open
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ position: 'fixed', bottom: '1rem', right: '1rem' }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </MainLayout>
  );
}
