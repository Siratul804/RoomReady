import { fetchRoutine } from "@/app/lib/data";
import SignIn from "../app/ui/SignIn";
export default async function Home() {
  const routine = await fetchRoutine();

  return (
    <>
      <main className="p-1">
        <SignIn />
      </main>
    </>
  );
}
