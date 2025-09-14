import { Key } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Room = (props) => {
  return (
    <article className="bg-slate-700 p-8 flex flex-col gap-3 items-center rounded-xl">
      <div className="relative w-[400px] h-[600px]">
        <Image
          className="object-cover rounded-md"
          fill
          priority
          src={props.image}
          alt={""}
        />
      </div>
      <span className="text-white text-xl flex gap-1">
        난이도:{" "}
        {Array(props.keys)
          .fill(0)
          .map((v, i) => (
            <Key key={i} />
          ))}
      </span>
      <span className="text-white text-xl">{props.title}</span>
      <Link href={`/rooms/${props.id}`}>
        <button className="bg-orange-300 p-4 rounded-lg">상세보기</button>
      </Link>
    </article>
  );
};

export default Room;
