import {PageProps} from "@/types";

export default function Home({ boards }: PageProps<{ boards: any[] }>) {
    console.log(boards);

    return (
        <div>Welcome to the home page of Tasque!</div>
    );
}
