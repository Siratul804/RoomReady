import ProfilePage from "../../ui/Profile";
import { auth } from "@/app/auth";
const page = async () => {
  const { user } = await auth();
  return (
    <div className="p-5">
      <ProfilePage userData={user} />
    </div>
  );
};

export default page;
