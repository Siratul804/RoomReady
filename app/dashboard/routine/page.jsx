import RoutineRoom from "../../ui/RoutineRoom";
import { auth } from "@/app/auth";
const page = async () => {
  const { user } = await auth();
  return (
    <div>
      <RoutineRoom user={user} />
    </div>
  );
};

export default page;
