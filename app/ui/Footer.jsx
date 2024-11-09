import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-background py-10">
      <div className="container mx-auto px-6 lg:px-4">
        {/* Top Section: Contact Information and Social Links */}
        <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-8 lg:gap-12 px-20 ">
          {/* Contact Information */}
          <div className="text-center lg:text-left">
            <p className="text-lg font-bold">Siratul Islam</p>
            <p className="text-sm text-gray-500">Full-Stack Developer</p>
            <p>
              {" "}
              <a className="text-sm" href="mailto:islamsiratul@gmail.com">
                islamsiratul@gmail.com
              </a>
            </p>
            <p>
              <a className="text-sm" href="tel:01603516074">
                01603516074
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <Link
              href="https://github.com/Siratul804"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className=""
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/siratulislam/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className=""
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://x.com/Siratul074"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className=""
            >
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-10 border-t border-gray-600 pt-4">
          <p className="text-center text-sm ">
            © {new Date().getFullYear()} Siratul Islam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
