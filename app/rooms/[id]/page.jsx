"use client";

import { data } from "@/src/dummy/data";
import { Key } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const result = data.find((v) => v.id == +params.id);
  return (
    <section className="bg-[#00083046] h-screen p-40">
      <div className="container w-full h-full mx-auto flex gap-20">
        <picture className="relative w-full h-full p-20 flex-1">
          <Image
            className="object-cover"
            src={result.image}
            alt={""}
            fill
            priority
          />
        </picture>

        <div className="flex-1 flex flex-col gap-10">
          <h2 className="text-5xl font-bold text-white">제목:{result.title}</h2>
          <span className="flex gap-1 text-lg text-white">
            난이도:
            {Array(result.keys)
              .fill(0)
              .map((v, i) => (
                <Key key={i} />
              ))}
          </span>
          <p className="text-md text-white">상세 내용: {result.detail}</p>
        </div>
      </div>
    </section>
  );
};

export default Page;
