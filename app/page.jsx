import { fetchRoutine } from "@/app/lib/data";
import SignIn from "../app/ui/SignIn";

export default async function Home() {
  const routine = await fetchRoutine();

  return (
    <>
      <main className="p-1">
        <SignIn />
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </main>
    </>
  );
}
