# Room Ready

Room Ready is an innovative software designed to optimize university classroom scheduling. Room Ready empowers students to make informed decisions about their study schedules by providing real-time updates on room availability and class cancellations.


<p align="center">
  <img src="https://room-ready.vercel.app/rr.png" alt="ide" width="1000"/>
</p>

## Key Features
- Real-Time Room Availability
- Class Cancellation Access
- Timely notifications for canceled classes.
- Automatic updates to room availability.
- Smart Scheduling.
- User-Friendly Interface.
- Intuitive design for easy navigation.
- Accessible on various devices (desktop, mobile).

## Technologies
#### Next.js, Rect.js, Node.js, MongoDB, Shadcn/ui, Tailwind CSS.
## Installation
### Prerequisites
- Node.js
- npm or yarn

### Steps

1. Clone the repository
    ```bash
    https://github.com/Siratul804/RoomReady.git
    ```
2. Cd to the folder & Install Packages
    ```bash
    npm install
    ``` 
3. Setup .env file (MongoDB connection string)
5. Run the Application
   ```bash
   npm run dev
   ```

## Code of main layout.js

```bash
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "RoomReady",
  description:
    "It's a base site for checking the classroom availability of university of asia pacific classrooms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster toastOptions={{ duration: 5000 }} position="bottom-right" />
      </body>
    </html>
  );
}
```
    
## authconfiq.js

```bash
export const authConfig = {
  providers: [],
  pages: {
    signIn: "/",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      // console.log(auth?.user);
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      return true;
    },
  },
};
```




<p align="center">
<b>Made with ❤️ by   <a href="https://github.com/Siratul804">  Siratul Islam </a> </b> 
</p>

<p align="center">
  <a href="https://github.com/Siratul804?tab=repositories">View Project</a> •
  <a href="https://github.com/Siratul804">GitHub Profile</a> •
  <a href="https://www.linkedin.com/in/siratulislam/">LinkedIn</a> •
  <a href="https://x.com/Siratul074">Twitter</a>
</p>

<p align="center">
  <small>© 2024 Siratul Islam. All rights reserved.</small>
</p>
