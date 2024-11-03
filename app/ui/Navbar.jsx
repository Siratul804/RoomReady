"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { logout_user } from "@/app/lib/actions";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const NavItems = React.useCallback(
    () => (
      <>
        <Button
          variant="ghost"
          asChild
          className={cn(pathname === "/dashboard" && "bg-muted")}
        >
          <Link href="/">Home</Link>
        </Button>
        <Button
          variant="ghost"
          asChild
          className={cn(pathname === "/dashboard/faculty" && "bg-muted")}
        >
          <Link href="/dashboard/faculty">Faculty</Link>
        </Button>
      </>
    ),
    [pathname]
  );

  const { setTheme } = useTheme();

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/dashboard" className="text-xl font-bold">
            RoomReady
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <NavItems />

          <div className="pr-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link href="/dashboard/profile">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="@user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Link>
          <div className="pl-3">
            <form action={logout_user} className="">
              <Button>Log Out</Button>
            </form>
          </div>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col space-y-4 mt-4">
                <NavItems />

                <Button
                  variant="ghost"
                  asChild
                  className={cn(
                    pathname === "/dashboard/profile" && "bg-muted"
                  )}
                >
                  <Link href="/dashboard/profile">Profile</Link>
                </Button>
                <div className="flex justify-center">
                  <form action={logout_user} className="">
                    <Button>Log Out</Button>
                  </form>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
