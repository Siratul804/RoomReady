"use client";
import Image from "next/image";

function page() {
  return (
    <main className="container mx-auto py-5 px-4">
      <div className="p-4 flex justify-center ">
        <Image src="/cse_map.jpeg" width={650} height={100} alt="cse_map" />
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>
    </main>
  );
}

export default page;
