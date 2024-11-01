import HomePage from "@/app/ui/Home";
import { fetchRoutineByStatus } from "@/app/lib/data";
const Dashboard = async () => {
  const AvaRoutine = await fetchRoutineByStatus();
  return (
    <div className="p-5">
      <HomePage Routine={AvaRoutine} />
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
    </div>
  );
};

export default Dashboard;
