import Footer from "../ui/Footer";
import { Navbar } from "../ui/Navbar";

import { auth } from "@/app/auth";

const Layout = async ({ children }) => {
  const { user } = await auth();
  // console.log(user);

  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
