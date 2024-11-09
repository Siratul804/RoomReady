import RoutineRoom from "../../ui/RoutineRoom";
import { auth } from "@/app/auth";
const page = async () => {
  const { user } = await auth();
  return (
    <div>
      <RoutineRoom user={user} />
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
    </div>
  );
};

export default page;
