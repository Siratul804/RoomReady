import HomePage from "@/app/ui/Home";
import { auth } from "@/app/auth";

const Dashboard = async () => {
  return (
    <div className="p-5">
      <HomePage />
    </div>
  );
};

export default Dashboard;
