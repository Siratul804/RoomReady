import { auth } from "@/app/auth";
const Layout = async ({ children }) => {
  const { user } = await auth();
  return (
    <>
      {user.isAdmin ? (
        <div>{children}</div>
      ) : (
        <div className="text-center p-5 text-lg">
          Sorry you are not allow in this page !
        </div>
      )}
    </>
  );
};

export default Layout;
