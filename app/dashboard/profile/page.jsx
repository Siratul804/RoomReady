import ProfilePage from "../../ui/Profile";
import { auth } from "@/app/auth";
import { fetchRoutine } from "@/app/lib/data";
const page = async () => {
  const { user } = await auth();
  const routine = await fetchRoutine();
  console.log(routine);
  return (
    <div className="p-5">
      <ProfilePage userData={user} routineData={routine} />
    </div>
  );
};

export default page;
