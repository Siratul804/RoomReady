import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <div>
              <h3 className="text-lg font-semibold ">Siratul Islam</h3>
              <p className="text-sm text-muted-foreground py-2 ">
                Full Stack Developer
              </p>
            </div>

            <div className="flex space-x-2  ">
              <Link
                href="https://github.com/Siratul804"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/siratulislam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Built with passion by Siratul Islam.
            All rights reserved.
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
    </footer>
  );
}
