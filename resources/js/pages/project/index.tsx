import AppLayout from "@/layouts/app-layout";
import { Project, User } from "@/types";

interface IndexProps {
  auth: User;
  projects: Project[];
}

export default function Index({ projects }: IndexProps) {
  return (
    <AppLayout>
      <h1>Hello World!</h1>
      <div>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              {project.name}
            </li>
          ))}
        </ul>
      </div>
    </AppLayout>
  );
}