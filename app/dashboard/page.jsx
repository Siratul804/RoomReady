import HomePage from "@/app/ui/Home";
import { fetchRoutineByStatus } from "@/app/lib/data";
const Dashboard = async () => {
  const AvaRoutine = await fetchRoutineByStatus();
  return (
    <div className="p-5">
      <HomePage Routine={AvaRoutine} />
    </div>
  );
};

export default Dashboard;
